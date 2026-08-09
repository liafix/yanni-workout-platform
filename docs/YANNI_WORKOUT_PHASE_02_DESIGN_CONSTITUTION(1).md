# YANNI WORKOUT
## PHASE 02 — Design Constitution / Visual World System

**Status:** PROPOSED FOR APPROVAL  
**Depends on:** Phase 01 — Master Product & Creative Brief  
**Project mode:** Public surfaces = PERSUADE + EXPERIENCE; product surfaces = OPERATE  
**Primary language:** Slovak  
**Primary devices for demo:** mobile + notebook  
**Design objective:** create a high-ticket, athlete-led digital identity that feels specific to Yanni, makes offers legible, supports future product expansion and avoids generic AI-generated fitness aesthetics.

---

# 0. Why this document exists

This document is the visual source of truth for the YANNI WORKOUT demo. It defines the world before high-fidelity design and before frontend implementation.

The design must not be assembled from disconnected effects. Every later decision — color, type, imagery, motion, components and responsive behavior — must be explainable from the same visual thesis.

If a later idea looks impressive but violates this constitution, the idea is rejected unless the constitution is deliberately revised first.

---

# 1. Design thesis

## Selected visual world

# **RACK / FLASH PERFORMANCE**

YANNI WORKOUT will combine the physical precision of gym hardware and competition equipment with the visual confidence of modern athlete editorial photography.

The system takes its cues from:

- the numbered uprights, holes, bars and measurement logic of a power rack,
- plates, load, repetition and progression,
- competition scoreboards and athlete result systems,
- hard flash / high-contrast sports photography,
- editorial campaign layouts where the athlete is larger than the interface,
- utilitarian performance data instead of decorative tech UI.

The result should feel like a **performance brand with a digital operating layer**, not like a template for a gym, a supplement store or a SaaS startup.

### One-sentence visual promise

> **Yanni je hlavný vizuálny objekt; rozhranie okolo neho pôsobí ako presný výkonnostný systém postavený z ocele, svetla, dát a pohybu.**

---

# 2. What we intentionally reject

The following directions are rejected for this project unless later evidence forces a change:

1. **Near-black + neon glow tech aesthetic** — too easy to mistake for gaming, crypto or generic AI UI.
2. **Cream editorial / luxury serif aesthetic** — too detached from Yanni's physical training world and too close to a common AI-design default.
3. **Generic bodybuilding shop** — black/red, chrome bevels, supplement-store aggression, flames, fake 3D product renders.
4. **Generic fitness app** — rounded gradient cards, progress rings everywhere, pastel dashboards, oversized app-store illustrations.
5. **Pure brutalism** — harshness without refinement would undermine sponsor credibility and conversion clarity.
6. **Luxury fashion parody** — Yanni should look premium because the system is disciplined, not because the site imitates a fragrance campaign.
7. **Effects-first Awwwards page** — no animation, WebGL, distortion or hover trick earns a place unless it reinforces product meaning.

---

# 3. Candidate worlds considered

Phase 02 explored multiple systems before selecting the final world.

## A. Arena Broadcast

**Source world:** live sports graphics, match-day lower thirds, scoring, result boards.  
**Strength:** immediately supports Challenges, rankings and sponsor inventory.  
**Risk:** could make the entire brand feel like a sports channel rather than Yanni's personal platform.  
**Verdict:** keep its data discipline, but do not make broadcast graphics the primary identity.

## B. Training Log / Athlete Dossier

**Source world:** handwritten programs, workout logs, body measurements, athlete records.  
**Strength:** authentic to training and useful for future dashboard/product screens.  
**Risk:** too documentary and low-energy for the public homepage.  
**Verdict:** use inside member/program surfaces, not as the public visual world.

## C. Chrome Campaign

**Source world:** polished metal, weights, gym hardware, reflective material.  
**Strength:** premium and physically grounded.  
**Risk:** easy to slide into fake 3D chrome, Y2K or supplement branding.  
**Verdict:** retain steel/material cues, reject decorative chrome rendering.

## D. Flash Athlete Editorial

**Source world:** athlete campaigns, flash photography, hard crops, oversized type.  
**Strength:** makes Yanni himself dominant and creates high-ticket visual impact.  
**Risk:** can become fashion-like and weak on product usability.  
**Verdict:** retain photography, scale and composition.

## E. Rack Precision

**Source world:** rack uprights, load markings, equipment tolerances, repeated holes/slots, physical progression.  
**Strength:** highly specific to Yanni's world, scalable across homepage, event and member UI.  
**Risk:** literal rack graphics could become gimmicky.  
**Verdict:** selected as the structural system, interpreted abstractly rather than skeuomorphically.

## Final fusion

**Rack Precision + Flash Athlete Editorial**, with selective Arena Broadcast behavior for Challenges.

This gives the project both a memorable brand world and a usable product grammar.

---

# 4. Signature system — THE RACK RAIL

The project must have one memorable system that belongs to YANNI WORKOUT.

## Selected signature device

# **THE RACK RAIL**

A thin structural rail derived from the vertical uprights visible in gym racks. It uses repeated ticks / holes, compact data labels and an active marker.

It is not a decorative scrollbar.

### Homepage role

- establishes a visual reference to physical training hardware,
- communicates page progress without generic progress bars,
- marks the active content zone,
- can surface short context such as `VÝZVA`, `YWC`, `TRÉNING`, `GEAR`,
- visually connects otherwise different sections.

### Challenge role

The rail can expand into a result / attempt / ranking spine, making the event page feel related to the main brand rather than like a separate microsite.

### Member/dashboard role

The same grammar can become progress markers for a program, completed sessions or challenge history.

### Desktop behavior

A narrow 28–40 px vertical system can live near the right edge or inside the outer grid. It must not overlap browser controls or important content.

### Mobile behavior

Do not keep a full-height fixed rail. Collapse it into a compact horizontal or top-edge progress treatment, or display the rail only inside relevant sections.

### Critical rule

Never display invented kilograms, repetitions or scores merely for decoration. If the data is not real, use neutral sequence/state labels rather than fake performance numbers.

---

# 5. Visual hierarchy principles

The order of authority is fixed:

1. **Yanni / real photography**
2. **Current action or offer**
3. **Large editorial typography**
4. **Performance data / metadata**
5. **Navigation / system controls**
6. **Decorative material detail**

A section that reverses this hierarchy should be redesigned.

### Consequence

A giant decorative UI panel must never compete with Yanni's image. Data can frame the athlete, cut through negative space or anchor a composition, but not cover the subject without purpose.

---

# 6. Color constitution

## Strategy

Use **large color fields**, not scattered gradients.

The page should alternate between light and dark physical scenes in a controlled way. The accent is icy and technical, not neon.

## Core palette

### `INK`
**#0A0B0D**  
Primary near-black. Used for dark sections, text on light surfaces and high-contrast controls.

### `FLASH`
**#F4F7F8**  
Cold flash-white. Primary light field. Avoid warm cream.

### `STEEL`
**#A8B0B6**  
Neutral equipment/metadata tone. Use for dividers, quiet text and system lines where contrast remains sufficient.

### `GRAPHITE`
**#202327**  
Secondary dark surface. Used sparingly for layered controls, drawers and data modules.

### `YANNI ICE` — provisional sampled direction
**#B9EBFC**  
A pale cold blue derived from the supplied YanniCast artwork. This is a provisional design token, not a claim that it is Yanni's official brand hex.

Use as:

- primary action field on dark backgrounds,
- active Rack Rail marker,
- selected states,
- event/action highlight,
- small controlled typography accents.

Do **not** use it as a glow around every element.

### `ALERT / LIVE` — semantic only
Use a high-contrast warm signal color only when a real semantic state needs it: live event, warning, destructive action, record state. Do not introduce a permanent second brand accent during the demo unless necessary.

## Gradient rule

Default: **no brand gradient**.

Allowed:

- subtle photographic scrims for legibility,
- natural light falloff,
- a restrained tonal transition inside a large background field.

Forbidden:

- purple-blue SaaS mesh,
- glowing radial blobs,
- neon borders around cards,
- gradient text as a default headline treatment.

---

# 7. Typography constitution

Typography must feel like sport equipment labeling crossed with a modern editorial campaign.

## Display face

### Preferred: **Big Shoulders Display**

Role:

- hero wordmark treatment,
- section statements,
- challenge names,
- large editorial numerals.

Why:

- condensed vertical energy,
- mechanical / signage character without falling into the standard Bebas/Anton fitness cliché,
- supports very large typography without consuming the full viewport width.

### Rules

- mostly uppercase for display statements,
- use large optical sizes and tight but readable tracking,
- do not use it for body copy or forms,
- avoid outlining every headline; outline treatment is a special case, not a system.

## Body / interface face

### Preferred: **Source Sans 3**

Role:

- body copy,
- navigation,
- descriptions,
- buttons,
- form labels.

Reason:

Neutral enough to let the athlete and display typography lead, while staying highly readable on mobile.

## Data / utility face

### Preferred: **Azeret Mono**

Role:

- rankings,
- timers,
- event metadata,
- dates,
- program counters,
- Rack Rail labels,
- codes such as `YANNI5`.

Use tabular numerals where available.

## Fallback rule

If implementation availability or licensing creates a blocker, Phase 04 may replace a font with a metrically compatible open alternative, but the role must remain:

- condensed expressive display,
- neutral high-legibility body,
- technical tabular utility.

## Type scale intent

### Desktop

- Hero display: intentionally oversized, potentially 12–20vw depending on composition.
- Section statement: 64–112 px range.
- H2/H3 functional titles: 28–48 px.
- Body: 17–20 px.
- Utility / metadata: 11–13 px but never used as essential body reading.

### Mobile

- Hero display: approximately 64–104 px depending on viewport and word break.
- Section statement: 42–64 px.
- Functional title: 26–36 px.
- Body: minimum 16 px.
- Utility: minimum 11–12 px with strong contrast and limited responsibility.

Exact CSS values are Phase 05/07 work. These ranges define hierarchy, not implementation constants.

---

# 8. Photography constitution

## Core rule

**Real Yanni photography is the brand asset.**

No stock athlete should appear in the demo. No AI-generated replacement of Yanni should be used.

## Supplied asset map

### Asset A — `/mnt/data/1f61eb74-f91e-4fca-962e-c082c757eff9.png`
447×447. Gym portrait with chain / rack environment.

**Best role:** hero exploration, brand statement, rack visual link.

### Asset B — `/mnt/data/359fee8b-efbc-4e2f-9462-e43a7ebbf654.png`
399×501. Outdoor athlete portrait with sunglasses.

**Best role:** challenge / event / lifestyle transition.

### Asset C — `/mnt/data/da55308b-0115-4f02-b5a3-27a6a5856d93.png`
300×300. YanniCast artwork.

**Best role:** podcast content module; do not stretch into a full-width hero.

### Asset D — `/mnt/data/2804e1db-e53f-446e-8054-69bff36af0d5.png`
399×501. Bright double-biceps physique image.

**Best role:** story / achievement / training campaign panel.

### Asset E — `/mnt/data/bad1017a-f325-456a-b04d-235e0ff8f27d.png`
335×597. Dark back/triceps portrait.

**Best role:** dramatic editorial panel, transition into dark YWC or story section.

### Asset F — `/mnt/data/4d2dca1e-cd09-4cad-b7d9-8e770fcbb633.png`
335×597. Dark gym side portrait.

**Best role:** program/coaching/YWC panel; strong vertical crop.

## Resolution rule

These assets are sufficient for concept design and mobile demo exploration. Before final large desktop hero implementation, obtain at least one high-resolution source image if possible.

Do not fake detail with aggressive AI upscaling and then present it as an original professional image. Upscaling may be used only as a technical demo aid if clearly treated as such internally.

## Grading direction

- preserve realistic skin tone,
- slightly cooler neutral environments are acceptable,
- deepen blacks without crushing muscle detail,
- avoid orange bodybuilding skin treatment,
- avoid cyan shadows on skin,
- avoid extreme HDR clarity,
- use hard contrast selectively, not on every photo.

## Crop direction

Use deliberate body geometry:

- shoulders / arms can break grid lines,
- leave negative space for large typography,
- keep face and major anatomy free from CTA overlays,
- mobile gets independent crop decisions; never rely only on `object-position:center`.

## Cutout rule

Background removal is optional, not mandatory. Use it only when source resolution and edges support a clean result. A strong full-bleed real gym background is preferable to a poor synthetic cutout.

---

# 9. Layout constitution

## Structural idea

The layout should feel as if it has been **mounted to equipment rails**, not placed into floating SaaS cards.

### Desktop grid

- 12-column base grid,
- generous outer margins,
- intentional asymmetry,
- one consistent outer alignment system for text, imagery and Rack Rail,
- full-bleed sections may break the content container but must preserve the alignment anchors.

### Mobile grid

- 4-column grid,
- 18–24 px base gutters depending on viewport,
- content priority over symmetry,
- large typography allowed to crop only when the word remains unmistakably readable.

## Section geometry

Prefer:

- hard vertical splits,
- full-width bands,
- image/text overlap with meaningful depth,
- rules / rails / measurement marks,
- asymmetric 5/7 or 4/8 proportions,
- large whitespace followed by dense data moments.

Avoid:

- equal three-card rows used as the default section,
- repeated rounded rectangles,
- every section centered,
- arbitrary bento grids,
- random overlap with no alignment logic.

## Corner-radius rule

Public/editorial surfaces:

- default radius: 0–6 px,
- large image masks: usually square or near-square corners,
- pill shapes reserved for small status filters or compact controls when functionally useful.

Member/product surfaces may use slightly softer 8–12 px radii where usability benefits, but should still feel connected to the hardware world.

---

# 10. First viewport constitution

The first viewport must prove three things immediately:

1. this is Yanni,
2. this is a serious brand world,
3. there is a real action available now.

## Desktop composition target

**Split editorial hero:**

- one large photographic field occupying roughly 55–65% of the viewport,
- one flash-white or ink field carrying identity + action,
- oversized `YANNI WORKOUT` typography crossing the main composition without covering the face,
- compact current-event strip or challenge CTA in the lower composition,
- Rack Rail visible as a structural edge element,
- navigation remains visually quiet.

Suggested hero content hierarchy:

`YANNI WORKOUT`

Short human statement, maximum 1–2 lines.

Primary action: `Pozri najbližšiu výzvu` or a verified current equivalent.

Secondary action: `Vstúp do YWC`.

No fake audience stats are required to make the hero feel premium.

## Mobile composition target

- prioritize Yanni image + brand first,
- one primary CTA above or near the first fold,
- current challenge visible without scrolling through a full marketing paragraph,
- no fixed side rail,
- typography can overlap photography, but controls must remain clean and tappable.

---

# 11. Motion constitution

Motion is a performance cue, not decoration.

## Motion hierarchy

### Level 1 — Functional micro-interaction

Used for:

- buttons,
- navigation,
- filters,
- accordions,
- active states.

Target feel: fast and mechanical.  
Typical duration: ~160–260 ms.

### Level 2 — Section transition

Used for:

- image reveal,
- typography entrance,
- Rack Rail active-state change,
- content module transition.

Target feel: controlled momentum.  
Primarily transform + opacity.  
Avoid simultaneous animation of every child.

### Level 3 — Signature choreography

Use at most one dominant orchestrated moment per major page.

Homepage candidate:

- first-load typography + image + Rack Rail lock into the composition,
- or one scroll sequence where the Rail visibly hands off into the Challenge system.

Challenge page candidate:

- leaderboard/result strip becomes active as the visitor enters results.

## Scroll rule

Scroll effects must be interruptible and must not fight native scrolling.

Use pinning only where the content relationship justifies it. A page where every section pins is rejected.

## Parallax rule

Maximum subtle depth. No large counter-scrolling layers on mobile.

## Text animation rule

Prefer:

- grouped word/line reveal,
- clip/mask movement,
- width/weight modulation when supported without layout instability.

Avoid:

- every heading splitting into individual letters,
- random character scrambling,
- long typewriter animations,
- looping headline motion.

## Reduced-motion mode

When `prefers-reduced-motion` is enabled:

- remove scroll-linked translation/parallax,
- disable large mask choreography,
- keep only short opacity/state transitions,
- never hide content waiting for animation.

---

# 12. Component language

## Buttons

### Primary

- rectangular / near-square corners,
- strong filled field (`YANNI ICE` on dark or `INK` on light),
- dark text on pale-blue primary fields,
- explicit verb label,
- arrow icon optional but never a substitute for text.

Examples:

- `Pridaj sa k výzve`
- `Vstúp do YWC`
- `Požiadaj o coaching`
- `Použi kód YANNI5`

### Secondary

- transparent or surface-colored,
- 1 px controlled border/rule,
- no fake glass blur.

### Sizing

Mobile interactive area minimum 44×44 px; primary CTAs should generally be taller.

## Cards / modules

Default public pattern is **panel / strip / field**, not floating card.

Use a card only when content is genuinely a discrete object:

- program,
- episode,
- product,
- member item.

No universal `rounded-xl + shadow + border` component.

## Dividers

Thin steel/graphite rules can carry structure. They should align to the grid and Rack Rail system.

## Icons

- one SVG icon family for interface controls,
- consistent stroke width,
- official Spotify / Instagram / YouTube / brand marks where applicable,
- no emoji as structural icons.

## Tags / statuses

Compact rectangular labels; utility font allowed.

Examples:

- `NAJBLIŽŠIA VÝZVA`
- `NOVÉ`
- `PRE ČLENOV YWC`
- `REGISTRÁCIA`

Do not use pill badges everywhere.

## Tables / leaderboard

- tabular numerals,
- strong row alignment,
- rank number gets visual priority,
- horizontal rules instead of card-per-row,
- mobile can collapse secondary columns, but rank + participant + result remain understandable.

---

# 13. Navigation constitution

## Desktop

Quiet top navigation. The hero must remain dominant.

Recommended information labels:

- `Trénuj`
- `Výzvy`
- `YWC`
- `Obsah`
- `Výbava`
- `Yanni`

Primary action can remain separate on the right.

Do not expose every future product route in the first-level navigation.

## Mobile

Use a compact header with one menu control and one meaningful primary action only if space allows.

Menu opens as an intentional full-screen / sheet surface using the same flash/ink world.

No tiny six-item horizontal nav.

---

# 14. Public vs member visual behavior

## Public / Persuade + Experience

Allowed:

- oversized display typography,
- full-bleed imagery,
- strong section color shifts,
- scroll-linked narrative,
- Rack Rail choreography.

## Member / Operate

Reduce expression approximately one level:

- calmer typography scale,
- stable navigation,
- predictable layout,
- denser information,
- no content hidden behind scroll effects,
- clear states and controls,
- Rack Rail becomes progress/navigation grammar rather than spectacle.

Brand connection should come from typography, rules, color and data treatment — not from repeating the homepage animation inside every screen.

---

# 15. Copy constitution

The interface is Slovak-first.

## Voice

- direct,
- human,
- energetic without hype,
- concrete,
- short where the UI requires action,
- longer only when real context adds trust.

## Preferred pattern

**Verb + object/result**

Examples:

- `Pozri výsledky`
- `Otvor tréningový plán`
- `Pridaj sa k YWC`
- `Požiadaj o coaching`
- `Prehraj YanniCast`
- `Zobraziť ďalšiu výzvu`

## Banned copy habits

- fake urgency,
- three-adjective marketing strings,
- abstract claims without proof,
- generic inspirational filler,
- English interface phrases where a natural Slovak equivalent exists,
- invented performance claims,
- corporate terms such as „komplexný ekosystém“, „revolučná platforma“, „posuň potenciál“.

## Headline principle

A headline should say one thing the next section can prove.

---

# 16. Challenge-specific design rules

The Trenčín Biceps Challenge is the demo's strongest proof that YANNI WORKOUT can become more than a personal website.

## Event page should feel like

**competition documentation + participation surface**, not a generic event landing page.

Use:

- prominent place/date only after verification,
- registration CTA linked to the real form,
- rules only if verified,
- event state label such as `REGISTRÁCIA` / `VÝSLEDKY` only when factually correct,
- leaderboard as a visual concept if results do not yet exist.

## Demo leaderboard rule

If real participant/result data is unavailable, do not invent real-looking names and weights as if they happened.

Use one of these approaches:

1. clearly label rows `DEMO ÚDAJ`, or
2. show an empty-state / post-event concept, or
3. use anonymized placeholders visibly marked as illustrative.

---

# 17. YWC-specific design rules

YWC should feel more exclusive than the public platform but remain part of the same brand.

## Visual shift

- mostly darker environment,
- quieter motion,
- denser content,
- pale-blue active states,
- program progress and member content use the Rack Rail grammar.

## Do not imitate Patreon/HeroHero UI

The demo should present YWC as Yanni's premium layer, while the actual CTA can route to the current service.

---

# 18. Gear / affiliate design rules

The Gear area should look curated, not like an e-commerce category grid.

## Principle

**Yanni-selected objects, with context.**

A product module should answer:

- what is it,
- why is it relevant,
- what action can the fan take,
- what code/link is available.

Do not invent claims about products Yanni has not publicly recommended.

`YANNI5` may receive strong utility-type treatment because codes are functional data.

---

# 19. Accessibility constitution

Visual ambition cannot remove basic accessibility.

Required:

- normal text target contrast at least 4.5:1,
- large text minimum 3:1,
- visible keyboard focus,
- sequential heading structure,
- semantic buttons/links,
- descriptive alt text for meaningful Yanni images,
- no color-only state communication,
- mobile touch targets at least 44×44 px,
- no hover-only critical interactions,
- reduced-motion support,
- zoom must remain enabled.

The pale-blue accent must be paired with dark text when the contrast requires it; white text on pale blue is not assumed to be accessible.

---

# 20. Performance constitution

The demo must feel premium because it reacts immediately.

## Design-level performance rules

- no full-site WebGL requirement,
- no background video unless it earns its cost and a still fallback exists,
- hero gets one optimized priority image,
- below-fold media lazy-loads,
- reserve image aspect ratios to prevent layout shift,
- animate transforms/opacity rather than layout properties,
- do not preload every font weight,
- avoid multiple animation libraries doing the same job,
- no continuous heavy cursor effects on mobile,
- no scroll-jacking.

## Target quality gates for implementation

These are targets, not claims about the unfinished build:

- CLS target: < 0.1,
- LCP target: < 2.5 s under a reasonable test profile,
- INP target: < 200 ms,
- smooth 60 fps feel for primary scroll/motion where the device permits it.

If an effect harms these targets, simplify the effect before sacrificing usability.

---

# 21. Responsive constitution

## Required review widths

At minimum:

- 375 px small phone,
- 390–393 px primary modern phone,
- 768 px tablet / intermediate,
- 1024 px compact notebook/tablet landscape,
- 1366 px notebook,
- 1440 px desktop review.

## Mobile-first rules

- no horizontal overflow,
- min 16 px body text,
- primary content appears before decorative layers,
- full-height sections use `dvh` logic in implementation,
- safe areas respected for fixed controls,
- desktop hover treatments have tap/press equivalents,
- image focal point is chosen per breakpoint,
- no long desktop sentence merely scaled down.

---

# 22. Motion + interaction implementation candidates

These are authorized tools/patterns, not commitments that all must be used.

### GSAP / ScrollTrigger

Use for:

- one signature scroll sequence,
- Rack Rail section-state transitions,
- image masks/reveals that require timeline control.

### Native CSS transitions

Use for:

- buttons,
- simple hover/press states,
- menus,
- minor panel state changes.

### Smooth scrolling

Only use a Lenis-style layer if testing proves it improves the experience without interfering with native mobile behavior, accessibility or anchor links.

### Three.js / WebGL

Not part of the baseline Phase 02 world. It can be added later only for one meaningful product-specific moment with a strong fallback.

---

# 23. Anti-AI-slop checklist

Before accepting a design, reject it if three or more of these are true:

- hero could belong to any male fitness influencer after changing the name,
- primary identity is black + random neon glow,
- gradient text is doing the work of typography,
- every section is a centered title above three cards,
- generic bento grid appears without information need,
- large meaningless metrics are used as decoration,
- every object has a shadow + border + blur,
- buttons use vague labels such as `Zisti viac` when a specific action exists,
- copied English marketing language appears inside otherwise Slovak UI,
- page has more than one competing signature animation,
- stock fitness imagery appears,
- typography feels like a tech startup,
- photo crops hide Yanni to make room for UI,
- motion delays access to actual content.

---

# 24. Design tokens — conceptual set

Implementation names may change in Phase 04, but meaning stays stable.

```text
COLOR
--ink
--flash
--graphite
--steel
--yanni-ice
--danger
--success

TYPE
--font-display
--font-body
--font-data

SPACE
--space-1   4
--space-2   8
--space-3   12
--space-4   16
--space-6   24
--space-8   32
--space-12  48
--space-16  64
--space-24  96

RADIUS
--radius-none
--radius-sm
--radius-md   // product surfaces only

MOTION
--motion-fast
--motion-ui
--motion-section
--ease-enter
--ease-exit

LAYER
--base
--media
--content
--rail
--nav
--overlay
--modal
```

Spacing is intentionally based on a 4/8 rhythm.

---

# 25. Proposed homepage visual sequence

This is a visual sequence, not the final Phase 04 information architecture.

## HERO — Athlete + current action

Flash / ink split composition, oversized brand, Yanni photo, Rack Rail, nearest challenge CTA.

## CHALLENGE — Competition layer

Layout tightens. Data/scoreboard grammar enters. Registration action becomes primary.

## YWC — Premium inner layer

Shift to darker, denser space. Show what the club unlocks without pretending the full backend exists.

## TRAIN — Performance product

One strong program / coaching offer rather than a wall of cards.

## CONTENT / YANNICAST — Creator proof

Editorial media module, real artwork, controlled grid.

## GEAR — Curated recommendations

Sparse product/affiliate treatment with clear code/action.

## STORY — Athlete image statement

Full-width image + verified milestones only.

## PARTNERS / FINAL CTA

Sponsor-ready closing with a simple collaboration path and a final fan action.

---

# 26. Phase 06 concept-image brief

When Phase 06 starts, generate/reference a visual concept using this constitution rather than inventing a new style.

## Desktop frame

**Aspect:** 16:10 or 16:9 first viewport.  
**Goal:** show the chosen visual world, not the entire page.

Must show:

- real Yanni hero photograph,
- `YANNI WORKOUT` as the only dominant brand text,
- Slovak action copy,
- one current Challenge teaser,
- pale-blue technical accent,
- hard flash-white / ink field relationship,
- Rack Rail on the outer edge,
- no generic glass cards,
- no fake metrics,
- no decorative neon glow.

## Mobile frame

**Aspect:** portrait modern phone.

Must prove:

- photo crop remains powerful,
- brand stays legible,
- one CTA is immediately tappable,
- Challenge is discoverable,
- signature system adapts instead of being squeezed.

## Concept image quality target

The image should look like an art-directed product concept, not like an exact screenshot of functionality that does not exist yet.

---

# 27. Design review scorecard

Every high-fidelity direction later gets scored 1–5 on:

1. **Yanni specificity** — could this belong to anyone else?
2. **Offer clarity** — is the next action obvious?
3. **Athletic credibility** — does it feel physically grounded?
4. **Premium craft** — typography, spacing, crop, detail.
5. **Mobile integrity** — intentional or compressed?
6. **Sponsor credibility** — serious enough for B2B?
7. **Motion purpose** — does motion explain/energize rather than distract?
8. **Performance realism** — can we actually ship it smoothly?
9. **Truthfulness** — no invented facts presented as real.
10. **System scalability** — can Challenges/YWC/Programs inherit the language?

Any direction scoring below 4 in **Yanni specificity**, **offer clarity**, **mobile integrity** or **truthfulness** fails regardless of its total score.

---

# 28. Phase 02 decision log

| Decision | Status |
|---|---|
| Visual world: RACK / FLASH PERFORMANCE | PROPOSED LOCK |
| Signature system: RACK RAIL | PROPOSED LOCK |
| Primary palette: Ink / Flash / Steel / Graphite / Yanni Ice | PROPOSED LOCK |
| Brand gradients | REJECTED by default |
| Display type: Big Shoulders Display | PROPOSED LOCK |
| Body type: Source Sans 3 | PROPOSED LOCK |
| Data type: Azeret Mono | PROPOSED LOCK |
| Photography: real Yanni-first | LOCKED from Phase 01 |
| Public layout: asymmetrical editorial + hard grid | PROPOSED LOCK |
| Rounded SaaS card language | REJECTED |
| Motion: one orchestrated signature moment + restrained support | PROPOSED LOCK |
| Full-site WebGL | REJECTED baseline |
| Mobile rail: adaptive, not fixed desktop copy | PROPOSED LOCK |
| Accessibility / reduced motion | REQUIRED |
| Copy: Slovak, direct, action-led | LOCKED |

---

# 29. What remains intentionally open

Phase 02 does **not** decide:

- exact final homepage section order,
- exact CSS dimensions,
- exact final crop of the hero,
- final high-resolution hero source,
- exact event facts not yet verified,
- backend behavior,
- Stripe implementation,
- CMS choice,
- production analytics stack,
- exact final GSAP timelines,
- final logo asset beyond the typographic concept.

Those belong to later phases.

---

# 30. Gate to Phase 03

Phase 02 can be approved if the user accepts the following five core choices:

1. **RACK / FLASH PERFORMANCE** as the visual world.
2. **RACK RAIL** as the signature system.
3. Flash-white + ink + steel + pale YanniCast-derived blue as the core palette.
4. Condensed editorial display + neutral body + technical data typography.
5. Real Yanni photography dominates the design; UI behaves as equipment/data framing around him.

If any of these five feels wrong, revise Phase 02 before building the ROI, wireframes or visual concept.

---

# PHASE 02 VERDICT

**READY FOR HUMAN APPROVAL.**

No additional factual information is required to define this design constitution. The unresolved items are implementation or verification details and should remain open rather than be guessed.
