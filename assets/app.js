(() => {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-btn');
  const panel = document.querySelector('.mobile-panel');
  const closeBtn = document.querySelector('.mobile-close');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let previousFocus = null;

  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setPageInert = (state) => {
    document.querySelectorAll('main, footer, .site-header').forEach((el) => {
      if (state) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });
  };

  function openMenu() {
    if (!panel || !menuBtn) return;
    previousFocus = document.activeElement;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    setPageInert(true);
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeBtn?.focus({ preventScroll: true }), 30);
  }

  function closeMenu() {
    if (!panel || !menuBtn) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    setPageInert(false);
    document.body.style.overflow = '';
    (previousFocus instanceof HTMLElement ? previousFocus : menuBtn).focus();
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  panel?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (!panel?.classList.contains('open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('a[href], button:not([disabled])')]
      .filter((el) => el.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const reveals = [...document.querySelectorAll('.reveal')];
  if (reduce) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    reveals.forEach((el) => io.observe(el));
  }

  const sections = [...document.querySelectorAll('[data-rail]')];
  const railItems = [...document.querySelectorAll('.rail-item')];
  const mobileRailItems = [...document.querySelectorAll('.mobile-rail span')];
  if (sections.length && railItems.length) {
    const ids = sections.map((section) => section.getAttribute('data-rail'));
    const rio = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.getAttribute('data-rail');
      railItems.forEach((item) => item.classList.toggle('active', item.dataset.railItem === id));
      const index = ids.indexOf(id);
      mobileRailItems.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === index));
    }, { threshold: [0.25, 0.45, 0.65] });
    sections.forEach((section) => rio.observe(section));
  }

  document.querySelectorAll('[data-copy-code]').forEach((btn) => {
    const label = btn.querySelector('span:first-child');
    const originalLabel = label?.textContent || 'Kopírovať YANNI5';
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copyCode || 'YANNI5');
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = btn.dataset.copyCode || 'YANNI5';
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }
      const toast = btn.parentElement?.querySelector('.copy-toast') || document.querySelector('.copy-toast');
      if (label) label.textContent = 'Skopírované';
      if (toast) toast.classList.add('show');
      window.setTimeout(() => {
        if (label) label.textContent = originalLabel;
        toast?.classList.remove('show');
      }, 1800);
    });
  });

  document.querySelectorAll('.accordion-item').forEach((item, index) => {
    const btn = item.querySelector('button');
    const panelEl = item.querySelector('.accordion-panel');
    if (!btn || !panelEl) return;
    const id = panelEl.id || `accordion-panel-${index + 1}`;
    panelEl.id = id;
    btn.setAttribute('aria-controls', id);
    const icon = btn.querySelector('span:last-child');
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      if (icon) icon.textContent = open ? '−' : '+';
    });
  });

  // Lightweight parallax. Disabled on touch and when reduced motion is requested.
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      parallaxItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const progress = (innerHeight - rect.top) / (innerHeight + rect.height) - 0.5;
        el.style.transform = `translate3d(0,${progress * 18}px,0) scale(1.02)`;
      });
    };
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateParallax);
    }, { passive: true });
    updateParallax();
  }
})();
