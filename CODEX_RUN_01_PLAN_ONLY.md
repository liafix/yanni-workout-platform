# YANNI WORKOUT — CODEX RUN 1 / PLAN ONLY

Work on repository: `liafix/yanni-workout-platform`

This is a PLANNING/AUDIT task only.
DO NOT edit application HTML/CSS/JS in this run.
DO NOT implement the redesign yet.
DO NOT migrate frameworks.

## Scope
Plan ONLY the first redesign batch:
1. Global header/navigation
2. Homepage hero
3. Homepage Fitness Challenge Trenčín section

Everything after Challenge is out of implementation scope for this run.

## First read
1. Read `AGENTS.md` completely.
2. Inspect the current Phase 09 homepage and shared CSS/JS:
   - `index.html`
   - `assets/styles.css`
   - `assets/app.js`
3. Inspect relevant Phase docs, especially:
   - `docs/phase-02-design-constitution.md`
   - `docs/phase-05-ux-wireframes.md`
   - `docs/phase-07-high-fidelity.md`
4. Inspect:
   - `docs/references/variant-a.png`
5. Inspect the exact Run 1 visual references and their paired background plates in:
   - `redesign/`
   - `backgrounds/`

Before planning, determine the exact filenames that correspond to:
- header
- hero
- challenge

If pairing is ambiguous, STOP and ask rather than guessing.

## Important interpretation
`redesign/` images = visual target.
`backgrounds/` images = atmospheric/3D plates to use as real section background assets.

Do NOT implement an entire section as a screenshot.
All text, buttons, nav, metadata, Rack Rail, links, cards/panels and interactive states must remain real HTML/CSS/JS.

The current Phase 09 implementation is the strongest working browser baseline.
Preserve what already works and improve it toward the new redesign references.

## Truth check
Identify any elements visible in AI redesign references that must NOT be copied because they are not verified, such as:
- participant counts
- sponsor/partner logos
- prices
- fake stats
- challenge results
- additional event details

Verified Challenge facts for this scope:
- Fitness Challenge Trenčín
- Trenčín
- 09.08.2026
- use the current working registration destination already in the repository

## Deliverables
Return a detailed implementation plan containing:

### A. Current-state audit
For Header, Hero and Challenge:
- what currently works
- what visually misses the new reference
- what functionality must be preserved
- what should be removed/rebuilt

### B. Reference-to-code mapping
For every relevant redesign/background image:
- exact filename
- target section
- how it should be used
- which elements must remain native HTML/CSS/JS

### C. DOM change plan
List exact changes expected in `index.html`.
Do not write the changes yet.

### D. CSS change plan
Specify:
- layout/grid
- typography
- spacing
- backgrounds
- overlays
- Rack Rail
- header states
- CTA states
- responsive behavior
- desktop/mobile differences

### E. JS/microinteraction plan
Specify:
- sticky header behavior
- Rack Rail scroll state
- CTA microinteractions
- subtle background/parallax behavior if justified
- mobile menu
- reduced motion

### F. Responsive plan
Explicitly describe expected composition at:
- 1440×900
- 393×852
- 375×812
- 430×932
- tablet

### G. Visual QA plan
Describe a screenshot loop:
1. implement
2. render 1440×900
3. compare with redesign reference
4. list mismatches
5. correct
6. render again
7. mobile pass

### H. Risk list
Call out:
- image/text legibility risks
- background crop risks
- responsive issues
- performance risks from large background assets
- truth/hallucination risks

### I. Implementation checklist
Produce a concise checklist that can be handed directly to ACT mode.

## Critical constraints
- Do not modify files in this run.
- Do not propose React/Next migration.
- Do not redesign sections after Challenge.
- Do not invent facts.
- Do not simplify the visual target into a generic dark fitness site.
- Target bespoke Awwwards-level fidelity while remaining implementable.

Finish by saying either:
`READY FOR RUN 1 ACT`
or
`BLOCKED: <specific missing/ambiguous input>`
