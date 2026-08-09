# AGENTS.md — YANNI WORKOUT V2

## Mission
Polish and expand the existing Phase 09 multi-page HTML/CSS/JavaScript demo into a premium Slovak YANNI WORKOUT fitness creator platform.

This iteration is a visual/product-depth redesign, NOT a framework migration.

## Architecture lock for this iteration
- Keep the existing multi-page HTML/CSS/JavaScript architecture.
- Do NOT migrate to React, Next.js, Vue, Svelte, PHP framework, or another frontend framework unless the user explicitly changes this decision later.
- PHP may be considered later for production backend needs, but it is out of scope for the current visual redesign.
- Preserve all working routes and current functional interactions.
- Do not add a dependency unless there is a concrete, documented reason.

## Source priority
When sources conflict, follow this order:
1. Verified/user-supplied facts and destinations.
2. Phase 01–07 product/UX/design documents.
3. `redesign/` section references for the NEW visual target.
4. `backgrounds/` as atmospheric visual plates for matching sections.
5. `docs/references/variant-a.png` as the broader visual North Star.
6. Existing Phase 09 browser implementation as the strongest working browser baseline.
7. Existing code implementation details.

## Existing Phase 09 rule
The existing Phase 09 implementation is NOT disposable.
Preserve successful browser qualities unless a new redesign reference intentionally improves them:
- strong hero composition,
- Yanni photography dominance,
- headline hierarchy,
- CTA hierarchy,
- Rack Rail concept,
- responsive route structure,
- current working links/interactions.

Rebuild only what the approved redesign requires.

## Redesign/background rules
- Every section reference in `redesign/` is a visual target.
- Its matching image in `backgrounds/` is an atmospheric/background asset only.
- Never flatten the complete section into one screenshot background.
- Text, buttons, nav, Rack Rail, metadata, cards, links, states, and interactive elements must remain real HTML/CSS/JS.
- Background plates may provide expensive 3D scenery, lighting, texture, depth, and environmental composition.
- If a redesign reference contains AI-generated facts, logos, prices, partner names, participant counts, testimonials, or metrics, DO NOT copy them unless separately verified.

## Visual direction
Quality bar: bespoke €10k+ Awwwards-level fitness/creator platform.

Preserve:
- RACK / FLASH PERFORMANCE
- dark ink / steel / cold white
- controlled icy electric blue
- cinematic gym lighting
- selective premium 3D depth
- real Yanni imagery
- condensed editorial typography
- restrained mono metadata
- strong asymmetric compositions
- deliberate spacing
- THE RACK RAIL as a recurring signature system

Avoid:
- generic SaaS design
- card walls
- Bootstrap/shadcn look
- purple-blue startup gradients
- excessive glassmorphism
- random glow
- stock fitness models
- excessive rounded corners
- effects that reduce readability or performance

## Truth constraints
Never invent or present as real:
- prices
- YWC member counts
- coaching prices
- challenge participant counts
- challenge results
- categories/prizes/venue/time
- sponsors/partners
- testimonials
- achievements
- revenue numbers

Synthetic member/leaderboard content must be visibly marked DEMO/CONCEPT.

## Current redesign workflow
Implement in controlled batches:
1. Header + Hero + Challenge
2. YWC + Coaching/Training
3. Content/YanniCast + YANNI5
4. Story + Collaboration + Footer
5. Full-page visual QA/polish

Do not modify future batches unless needed to prevent regressions.

## Motion
- Motion must be restrained and orchestrated.
- Use existing vanilla JS/CSS unless a small justified library is approved.
- Prefer transform/opacity.
- Respect `prefers-reduced-motion`.
- No constant decorative animation.
- Microinteractions should support hierarchy and feedback.

## Responsive
Required review widths:
- 1440×900 desktop reference
- 393×852 primary mobile
- 375×812 small mobile
- 430×932 large mobile
- one tablet width

Mobile is a designed composition, not scaled desktop.

## Completion requirements for each implementation batch
- Serve the actual site locally.
- Compare browser screenshots with the exact redesign references.
- Perform at least one correction pass after screenshot comparison.
- No horizontal overflow.
- No broken local assets.
- No relevant console errors.
- Existing internal routes remain functional.
- External destinations remain truthful.
- Keyboard/focus behavior remains usable.
- Reduced-motion behavior remains usable.
- Report intentional deviations from reference images.

## Coding rules
- Reuse centralized design tokens in CSS.
- Avoid unnecessary inline styles.
- Keep reusable interactive behavior in `assets/app.js`.
- Keep CSS organized by system/component/section instead of piling random overrides at the end.
- Do not duplicate URLs or truth-sensitive values across many files.
- Preserve semantic HTML.
