(() => {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-btn');
  const panel = document.querySelector('.mobile-panel');
  const closeBtn = document.querySelector('.mobile-close');
  const hero = document.querySelector('.hero');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let previousFocus = null;

  let headerTicking = false;
  const updateHeader = () => {
    headerTicking = false;
    if (!header) return;
    const scrolled = window.scrollY > 24;
    const pastHero = hero ? window.scrollY > hero.offsetHeight - header.offsetHeight : true;
    header.classList.toggle('is-scrolled', scrolled);
    header.classList.toggle('is-past-hero', pastHero);
    header.classList.toggle('is-solid', !hero);
  };
  const onHeaderScroll = () => {
    if (headerTicking) return;
    headerTicking = true;
    requestAnimationFrame(updateHeader);
  };
  updateHeader();
  window.addEventListener('scroll', onHeaderScroll, { passive: true });
  window.addEventListener('resize', onHeaderScroll, { passive: true });

  if (hero) requestAnimationFrame(() => hero.classList.add('hero-ready'));

  // Keep decorative scenes below the fold out of the initial Hero request budget.
  const deferredScenes = [...document.querySelectorAll('[data-deferred-src]')];
  if (deferredScenes.length) {
    const loadDeferredScenes = () => {
      deferredScenes.forEach((scene) => {
        if (!scene.hasAttribute('src')) scene.src = scene.dataset.deferredSrc;
        scene.removeAttribute('data-deferred-src');
      });
    };
    if (window.scrollY > 0 || window.location.hash) loadDeferredScenes();
    else window.addEventListener('scroll', loadDeferredScenes, { once: true, passive: true });
  }

  // Load the heavier Run 2 scenes independently as their sections approach.
  const proximityScenes = [...document.querySelectorAll('[data-proximity-src]')];
  if (proximityScenes.length) {
    const loadProximityScene = (scene) => {
      if (!scene.hasAttribute('src')) scene.src = scene.dataset.proximitySrc;
      scene.removeAttribute('data-proximity-src');
    };
    if ('IntersectionObserver' in window) {
      const sceneLoader = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadProximityScene(entry.target);
        sceneLoader.unobserve(entry.target);
      }), { rootMargin: '0px 0px 50% 0px', threshold: 0.01 });
      proximityScenes.forEach((scene) => sceneLoader.observe(scene));
    } else {
      const loadFallbackScenes = () => proximityScenes.forEach(loadProximityScene);
      window.addEventListener('load', () => {
        if ('requestIdleCallback' in window) requestIdleCallback(loadFallbackScenes, { timeout: 1200 });
        else window.setTimeout(loadFallbackScenes, 200);
      }, { once: true });
    }
  }

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
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000 && panel?.classList.contains('open')) closeMenu();
  }, { passive: true });

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
      const index = ids.indexOf(id);
      railItems.forEach((item, itemIndex) => {
        item.classList.toggle('active', itemIndex === index);
        item.classList.toggle('passed', itemIndex < index);
      });
      const rail = document.querySelector('.rack-rail');
      rail?.style.setProperty('--rail-progress', String(index / Math.max(ids.length - 1, 1)));
      mobileRailItems.forEach((item, itemIndex) => {
        item.classList.toggle('active', itemIndex === index);
        item.classList.toggle('passed', itemIndex < index);
      });
    }, { threshold: [0.25, 0.45, 0.65] });
    sections.forEach((section) => rio.observe(section));
  }

  document.querySelectorAll('[data-copy-code]').forEach((btn) => {
    const label = btn.querySelector('[data-copy-label]') || btn.querySelector('span:first-child');
    const status = btn.parentElement?.querySelector('[role="status"]') || document.querySelector('.copy-toast');
    const originalLabel = label?.textContent || 'Kopírovať kód';
    let resetTimer = 0;
    let copyAttempt = 0;

    if (status) status.textContent = '';

    const announce = (message, attempt) => {
      if (!status) return;
      status.textContent = '';
      window.requestAnimationFrame(() => {
        if (attempt === copyAttempt) status.textContent = message;
      });
    };

    const copyWithFallback = (value) => {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.inset = '0 auto auto -9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      textarea.remove();
      btn.focus({ preventScroll: true });
      if (!copied) throw new Error('Clipboard fallback failed');
    };

    btn.addEventListener('click', async () => {
      const attempt = ++copyAttempt;
      const value = btn.dataset.copyCode || 'YANNI5';
      window.clearTimeout(resetTimer);
      btn.removeAttribute('data-copy-state');
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
        else copyWithFallback(value);
        if (attempt !== copyAttempt) return;
        btn.dataset.copyState = 'success';
        if (label) label.textContent = 'Skopírované';
        status?.classList.add('show');
        announce('Promo kód YANNI5 bol skopírovaný.', attempt);
      } catch {
        if (attempt !== copyAttempt) return;
        btn.dataset.copyState = 'error';
        if (label) label.textContent = 'Kopírovanie sa nepodarilo';
        status?.classList.add('show');
        announce('Kopírovanie promo kódu YANNI5 sa nepodarilo.', attempt);
      }

      resetTimer = window.setTimeout(() => {
        if (attempt !== copyAttempt) return;
        if (label) label.textContent = originalLabel;
        btn.removeAttribute('data-copy-state');
        status?.classList.remove('show');
        if (status) status.textContent = '';
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

  // Restrained scene depth. Disabled on touch, smaller viewports and reduced motion.
  if (!reduce && window.matchMedia('(pointer:fine)').matches && window.innerWidth > 1000) {
    const sceneItems = [...document.querySelectorAll('[data-scene-depth]')];
    let sceneTicking = false;
    const updateSceneDepth = () => {
      sceneTicking = false;
      sceneItems.forEach((el) => {
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect || rect.bottom < 0 || rect.top > innerHeight) return;
        const depth = Number(el.dataset.sceneDepth || 6);
        const progress = ((innerHeight * 0.5) - (rect.top + rect.height * 0.5)) / (innerHeight + rect.height);
        const offset = Math.max(-depth, Math.min(depth, progress * depth * 2));
        el.style.setProperty('--scene-y', `${offset.toFixed(2)}px`);
      });
    };
    window.addEventListener('scroll', () => {
      if (sceneTicking) return;
      sceneTicking = true;
      requestAnimationFrame(updateSceneDepth);
    }, { passive: true });
    updateSceneDepth();

    const challengePanel = document.querySelector('[data-challenge-depth]');
    if (challengePanel) {
      let panelFrame = 0;
      const resetPanelDepth = () => {
        challengePanel.style.setProperty('--panel-x', '0px');
        challengePanel.style.setProperty('--panel-y', '0px');
        challengePanel.style.setProperty('--panel-rx', '0deg');
        challengePanel.style.setProperty('--panel-ry', '0deg');
      };
      challengePanel.addEventListener('pointermove', (event) => {
        const rect = challengePanel.getBoundingClientRect();
        const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        cancelAnimationFrame(panelFrame);
        panelFrame = requestAnimationFrame(() => {
          challengePanel.style.setProperty('--panel-x', `${(nx * 4).toFixed(2)}px`);
          challengePanel.style.setProperty('--panel-y', `${(ny * 3).toFixed(2)}px`);
          challengePanel.style.setProperty('--panel-rx', `${(-ny * 0.5).toFixed(3)}deg`);
          challengePanel.style.setProperty('--panel-ry', `${(nx * 0.5).toFixed(3)}deg`);
        });
      });
      challengePanel.addEventListener('pointerleave', resetPanelDepth);
      challengePanel.addEventListener('blur', resetPanelDepth, true);
    }
  }

  // Existing editorial parallax for legacy scoped imagery.
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
