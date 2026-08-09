# CODEX MASTER REBUILD PROMPT — YANNI WORKOUT

## Mission
Rebuild the current YANNI WORKOUT repository from a simplified pitch-mode landing page into a premium, multi-route, high-fidelity fitness creator platform demo. Treat the existing live/static page as a disposable prototype, not as the design target.

The required quality bar is a bespoke €10k+ Awwwards-level sports/creator platform: visually distinctive, mobile-first, technically clean, fast, accessible, and coherent as a product — not merely a hero landing page.

## Plan-first requirement
Do NOT start editing immediately.

First:
1. Read every Phase 01–09 document in the repository.
2. Identify the approved Variant A high-fidelity reference and all supplied Yanni assets.
3. Inspect the existing codebase and current live behavior.
4. Create `REBUILD_PLAN.md` with architecture, route map, component map, interaction plan, migration plan, and QA plan.
5. Create `MISMATCH_LEDGER.md` comparing the current implementation against Variant A + Phase 05/07 specifications.
6. Only after those two files are complete, begin implementation.

If any critical reference file is missing, stop and report the missing input. Do not invent it.

## Source-of-truth precedence
When sources conflict, follow this order:
1. Phase 01–07 product/UX/design/technical documents for truth and behavior.
2. Approved Variant A for visual composition, art direction, density, layout language, photo treatment, and perceived quality.
3. Supplied real Yanni photos/assets.
4. Current code only as an implementation starting point.

The current deployed one-page pitch mode is NOT the target.

## Critical problems in the current implementation that must be corrected
- The current live artifact is a single-page pitch/anchor site rather than the intended multi-route platform.
- The hero does not match Variant A closely enough.
- The live site uses remote/hotlinked imagery instead of consistently using the supplied Yanni assets.
- Typography falls back to generic system/Impact/Arial-like fonts and loses the intended editorial identity.
- The Rack Rail is visually underdeveloped and not used as a coherent platform-wide signature system.
- Member/YWC/dashboard concepts are reduced to marketing sections instead of believable product surfaces.
- Challenge, coaching, training, content, story, partners, member preview, and leaderboard need proper routes and distinct UX surfaces.
- Motion is mostly simple CSS/IntersectionObserver reveal; it does not achieve the planned orchestrated premium motion language.
- Some user-facing copy reads like internal developer notes or disclaimers rather than polished consumer-facing Slovak product copy.
- The platform currently feels like a premium landing page, not a complete creator ecosystem.

## Non-negotiable visual direction
Use the approved design world: `RACK / FLASH PERFORMANCE`.

Core visual language:
- INK / GRAPHITE near-black surfaces.
- FLASH cold white.
- STEEL metadata/dividers.
- restrained YANNI ICE accent.
- real Yanni photography dominates the interface.
- condensed athletic/editorial display typography.
- utility mono labels for dates, state, metadata, ranking, progress.
- squared or very-low-radius geometry.
- thin structural lines rather than generic cards and shadows.
- one coherent signature device: THE RACK RAIL.

Reject:
- SaaS gradient blobs.
- glassmorphism everywhere.
- rounded shadcn-looking card walls.
- generic fitness template aesthetics.
- random parallax/effects with no product meaning.
- purple/blue startup gradients.
- stock fitness models.
- fake chrome/Y2K supplement styling.

## Required architecture
Build the app as a real modern frontend project using the repository's best viable production stack.

Preferred target if dependencies are available:
- Next.js App Router
- TypeScript strict
- React Server Components by default
- Tailwind for structural utilities
- CSS Modules/custom CSS for editorial/special sections
- next/image
- next/font
- GSAP + ScrollTrigger for signature motion
- native browser scroll by default
- Vercel-ready deployment

Do NOT silently fall back to a low-quality dependency-free static page if package installation fails. If the intended stack cannot be installed, report the blocker and preserve the existing branch rather than degrading the result.

## Required route/product surfaces
Implement these as real routes/surfaces, not only anchors on one page:

- `/` — premium homepage
- `/vyzvy` — challenges hub
- `/vyzvy/trencin-2026` — current Trenčín challenge
- `/ywc` — YANNI WORKOUT CLUB sales/product surface
- `/coaching` — coaching conversion page
- `/trening` — training hub
- `/obsah` — curated content hub
- `/yannicast` — podcast surface
- `/vybava` — YANNI5 / gear surface
- `/yanni` — story/achievement surface using only verified content
- `/spolupraca` — brands/partners surface
- `/preview/klub` — clearly labeled concept member dashboard
- `/preview/leaderboard` — clearly labeled concept leaderboard

## Homepage hierarchy
Preserve the Phase 05/07 conversion hierarchy:

HERO
→ CURRENT CHALLENGE
→ YWC
→ COACHING / TRAINING
→ CONTENT / YANNICAST
→ YANNI5 / GEAR
→ STORY
→ PARTNERS

The homepage must not become a grid of equal cards.

## Hero fidelity target
The hero must visually feel much closer to approved Variant A than the current live page.

Requirements:
- use a supplied Yanni hero photo as the dominant image, not a random remote article image.
- large condensed display statement: `TRÉNUJ. SÚŤAŽ. POSÚVAJ SA.`
- current event metadata: `TRENČÍN • 09.08.2026`.
- primary CTA: Challenge.
- secondary CTA: YWC.
- Rack Rail integrated as a structural/signature element, not a generic mini progress list.
- preserve Yanni's body/face composition; UI must not hide the subject.
- photography and type must feel intentionally art-directed at 1440×900 and 393×852.

## Rack Rail
Build a reusable Rack Rail system that changes role across the product:
- homepage: section progress/context.
- challenge: result/attempt/ranking grammar.
- member preview: training/progress grammar.

Desktop: vertical rail.
Mobile: transform into compact edge/horizontal progress — do not shrink desktop rail blindly.

## Motion quality
Use one animation system for orchestrated motion.

Expected motion:
- premium hero entrance/reveal.
- hero → challenge transition.
- Rack Rail section-state transitions.
- image mask/crop reveal where useful.
- button arrow/wipe microinteractions.
- nav underline/state.
- subtle media crop motion.
- mobile menu choreography.

Do not animate every element.
Respect `prefers-reduced-motion`.
Use transforms/opacity rather than layout-thrashing properties.

## Functional demo requirements
Implement real interactions for the demo:
- current Challenge registration opens the supplied Google Form.
- YanniCast opens the supplied Spotify destination.
- current training plan opens the supplied destination if still valid.
- `YANNI5` copy interaction works.
- mobile navigation works and is keyboard accessible.
- challenge accordions/states work if present.
- internal route navigation works.
- member preview and leaderboard are visibly marked as DEMO/CONCEPT when using synthetic data.

Do not invent a GymBeam affiliate link.
Do not invent a YWC external URL.
If a destination is unknown, use an internal product surface or hide/disable the external action cleanly.
Never use `href="#"`.

## Truth rules
Never present as real unless verified/user-supplied:
- YWC member count.
- YWC price.
- coaching price.
- challenge participants/results/categories/prizes/venue/time.
- partner count.
- sponsor logos.
- testimonials.
- revenue numbers.
- transformations/achievements.

Concept data must be explicitly marked `DEMO KONCEPT`, `UKÁŽKOVÝ`, or equivalent.

Remove internal/developer copy from public screens. The fact that we are avoiding hallucinations belongs in implementation discipline, not in consumer-facing marketing copy.

## Content tone
Slovak-first.
Short, direct, athlete-led.
No AI marketing sludge.
No phrases that sound like generic agency copy.
No excessive explanation.

## Product-value requirement
The final demo must communicate that YANNI WORKOUT can be more than a website.
It should visibly demonstrate:
- event/challenge infrastructure,
- premium club positioning,
- training/coaching funnel,
- content hub,
- affiliate/promo utility,
- future member dashboard,
- future leaderboard,
- partner/sponsor surface.

A visitor should understand the ecosystem within 15 seconds and believe the deeper platform exists within 60 seconds.

## Responsive acceptance viewports
Must pass visual QA at minimum:
- 1440×900
- 393×852
- 375×812
- 430×932

Also inspect an intermediate tablet width.

No horizontal overflow.
No clipped hero text.
No navigation collisions.
No sticky UI covering content.
No hover-only functionality.

## Performance/accessibility targets
- sensible LCP behavior with a single dominant hero image.
- lazy load below-fold media.
- optimize images.
- minimal client JS outside interactions/motion.
- no unnecessary third-party embeds above the fold.
- visible focus styles.
- semantic landmarks/headings.
- accessible mobile menu.
- accessible buttons/links.
- reduced motion path.

## QA loop — mandatory
Do not declare completion after the first successful build.

Run a render-review-fix loop:
1. build/lint/typecheck.
2. run the app.
3. capture desktop 1440×900 screenshot.
4. capture mobile 393×852 screenshot.
5. compare with Variant A and `MISMATCH_LEDGER.md`.
6. fix the largest fidelity/UX gaps.
7. repeat.
8. test all required routes.
9. test primary interactions.
10. confirm no relevant console errors.

Use Playwright or the available browser tooling.

## Definition of done
Do not call this task complete until:
- the app is clearly a multi-route platform, not a landing page;
- homepage is materially closer to Variant A;
- supplied Yanni assets are used consistently;
- core routes feel purpose-built rather than copied templates;
- Rack Rail is coherent across at least homepage + challenge/member preview;
- mobile design is independently composed;
- Challenge / YWC / training / content / YANNI5 / preview surfaces are navigable;
- build/lint/typecheck pass;
- QA screenshots exist for desktop and mobile;
- mismatch ledger has no unresolved high-severity items;
- no unverified claims are published as facts.

## Final response expected from Codex
Report:
- architecture changes,
- files/surfaces created or rebuilt,
- highest-impact visual improvements,
- implemented interactions,
- routes delivered,
- commands/tests run and results,
- screenshot paths/evidence,
- remaining limitations or missing verified data,
- exact Vercel/Git deployment status if deployment is part of the task.

Do not claim success without evidence.
