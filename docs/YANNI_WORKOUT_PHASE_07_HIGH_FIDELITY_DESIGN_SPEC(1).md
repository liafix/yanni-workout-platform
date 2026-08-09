# YANNI WORKOUT
## PHASE 07 — High-Fidelity Design Specification

**Status:** COMPLETED / design reference pre-build  
**Projekt:** YANNI WORKOUT — premium fitness creator platform  
**Dátum:** 8. august 2026  
**Jazyk:** slovenčina  
**Nadväzuje na:** Phase 01–06  
**Úloha Phase 07:** premeniť schválený Phase 06 visual concept na konkrétny high-fidelity UI kontrakt pre Phase 08 build.

---

# 1. Design verdict

Schválený vizuálny svet zostáva:

## RACK / FLASH PERFORMANCE

Základné piliere:

- tmavý ink/steel svet,
- Yanni ako dominantný vizuálny asset,
- editorial condensed typography,
- kontrolovaný icy-blue accent,
- Rack Rail ako signature systém,
- tvrdé geometrické rozhranie,
- minimum dekorácie bez významu,
- žiadny SaaS gradient / generický glassmorphism,
- žiadne stock fitness prvky.

Cieľ: stránka musí pôsobiť ako custom campaign + creator platform, nie ako šablóna fitness agentúry.

---

# 2. Final palette

```css
--yw-ink: #090A0C;
--yw-ink-soft: #0F1114;
--yw-graphite: #1B1F24;
--yw-steel: #A7AFB7;
--yw-flash: #F4F7F8;
--yw-muted: #737B84;
--yw-ice: #78BFFF;
--yw-ice-soft: #B9EBFC;
--yw-line: rgba(244,247,248,.16);
--yw-line-strong: rgba(244,247,248,.28);
```

## Color ratio

- 70–80 % dark ink/graphite,
- 15–20 % flash white,
- 3–7 % icy blue accent,
- steel only as utility / metadata.

Blue must never become a gradient wallpaper.

---

# 3. Typography contract

## Display
**Big Shoulders Display / equivalent condensed athletic display**

Use:
- H1,
- event titles,
- hero statement,
- section statements.

Characteristics:
- uppercase,
- tight leading,
- controlled negative tracking,
- strong vertical rhythm.

## Body
**Source Sans 3 / equivalent neutral grotesk**

Use:
- paragraphs,
- CTA helper copy,
- secondary nav.

## Utility
**Azeret Mono / equivalent compact mono**

Use:
- date,
- city,
- progress,
- Rack Rail labels,
- stat metadata,
- concept/demo labels.

---

# 4. Desktop homepage — exact composition

Target reference viewport:

```text
1440 × 900
```

## Header

Height:
```text
88px
```

Horizontal padding:
```text
48px
```

Structure:
```text
Brand | nav | primary CTA
```

Brand stays left.
Nav stays visually centered.
Primary CTA is right aligned.

No pill navigation container.

## Hero

Minimum height:
```text
calc(100svh - 0px)
```

Grid:
```text
12 columns
```

Recommended:
- copy: cols 2–6,
- photo: cols 7–12,
- Rack Rail: fixed / absolute near left safe area.

Hero content vertical alignment:
approx. 48–52 % viewport height.

### H1

Text:
**TRÉNUJ. SÚŤAŽ.  
POSÚVAJ SA.**

Target:
```text
clamp(78px, 8vw, 132px)
line-height: .82–.88
```

Do not shrink headline merely to avoid overlap.
Photography crop must adapt around type.

### Supporting copy

Max width:
```text
420px
```

One short sentence:
**Výzvy, tréningy a komunita, ktorá ťa posúva každý deň.**

### CTA stack

Primary:
**ZAPOJ SA DO VÝZVY**

Secondary:
**VSTÚP DO YWC**

Buttons rectangular / performance-inspired.
Radius low:
```text
0–4px
```

No rounded SaaS pills.

---

# 5. Hero photography

Preferred:
front gym Yanni image from supplied assets.

Treatment:

- full-height portrait crop,
- bottom edge naturally bleeds into hero,
- image occupies right 42–48 %,
- no glowing outline,
- optional directional shadow into copy side,
- subtle local contrast only,
- skin tone stays natural.

Yanni cannot be covered by decorative copy except optional tiny utility labels.

---

# 6. Rack Rail final behavior

Desktop location:
left side, between ~72–94 px from viewport edge depending on header alignment.

Visual structure:

```text
01 ● ÚVOD
   │
02 ○ VÝZVA
   │
03 ○ YWC
   │
04 ○ TRÉNING
   │
05 ○ OBSAH
```

Active node:
- ice blue core,
- flash ring,
- tiny radial glow allowed only here.

Passed:
- flash/steel.

Future:
- muted.

Animation:
- active line scales vertically with scroll,
- node state transition 180–240 ms,
- label fades/offsets 6–8 px,
- no heavy blur.

Mobile:
simplified horizontal or edge progress indicator.
Not a miniature desktop rail.

---

# 7. Microinteractions

## Primary CTA

Default:
ice background / ink text.

Hover desktop:
- text slides 2–4 px,
- arrow advances ~6 px,
- subtle left-to-right surface wipe,
- duration 180–220 ms.

Pressed:
- scale 0.985,
- no layout shift.

## Secondary CTA

Dark / outline.

Hover:
- border becomes flash,
- small ice indicator appears,
- arrow shifts.

## Nav links

No pill hover.

Use:
- animated underline,
- 160–200 ms,
- underline grows from left / current cursor side depending implementation.

## Cards

No generic lift + shadow.

Instead:
- border contrast changes,
- image crop moves 1–2 %,
- metadata accent shifts.

---

# 8. Section transition language

Only one strong transition per major content jump.

Examples:

## Hero → Challenge
Hero copy compresses upward while event image enters from below/right.
Rack Rail advances from 01 to 02.

## Challenge → YWC
Dark event photo fades into near-black club surface.
Blue accent becomes more visible.

## YWC → Training
Typography shifts from manifesto scale to task/product scale.

Avoid every section flying in independently.

---

# 9. Challenge page final UI

Mobile-first.

Order:

1. compact back/header,
2. FITNESS CHALLENGE TRENČÍN,
3. 09.08.2026,
4. event/Yanni photo,
5. short verified intro,
6. **PRIHLÁSIŤ SA**,
7. `Ako to funguje`,
8. `Výsledky`,
9. concept leaderboard link,
10. YWC CTA.

Accordion:
thin structural rules, no rounded cards.

Unknown venue/time:
not rendered.

---

# 10. YWC sales page final UI

Opening:
- YANNI WORKOUT CLUB,
- Yanni image,
- strong benefit statement,
- primary CTA.

Benefits:
not cards.

Use vertical utility list:

```text
01  EXCLUSIVE OBSAH
02  EARLY ACCESS
03  PROGRAMY
04  ZÁKULISIE
```

Each row may reveal short copy on hover/tap.

No fake pricing.
No fake member count.
No fake testimonials.

---

# 11. Member preview final UI

Must feel like a product surface, not a marketing section.

Header:
```text
DEMO KONCEPT
```

Dashboard modules:

- Ukážkový program
- Demo progres
- Dnešná úloha
- Ďalšia výzva

Density:
higher than homepage.

Visual grammar:
- squared panels,
- thin steel outlines,
- mono metadata,
- small icy progress charts,
- fewer large photos.

---

# 12. Mobile homepage final composition

Target:
```text
393 × 852
```

First viewport priority:

1. brand/menu,
2. Yanni photo,
3. date/city metadata,
4. H1,
5. primary CTA,
6. YWC secondary action,
7. progress indicator.

CTA needs minimum 48px visual height.

Hero photo may occupy 52–60 % of viewport height.

Avoid a 300px text block before image.

---

# 13. Mobile menu

Full-screen / near-full-screen overlay.

Structure:

```text
VÝZVY
TRÉNING
YWC
COACHING
OBSAH
YANNI

VYBAVENIE
SPOLUPRÁCA
```

Bottom:
primary CTA.

Menu animation:
- panel opacity + transform,
- nav stagger 25–40 ms,
- total < 400 ms.

Reduced motion:
immediate / simple fade.

---

# 14. Image treatment system

Three image modes only:

## HERO
large cinematic crop.

## EDITORIAL
full-bleed or edge-aligned section image.

## UTILITY
small program/content thumbnail.

No random corner radii per image.

Global:
```text
radius 0–6px
```

---

# 15. Iconography

Use one vector family, preferably Lucide where possible.

However:
- arrows may be custom CSS/SVG to fit brand,
- Rack Rail uses custom primitive circles/lines,
- no emoji structural icons.

Stroke:
consistent 1.5–2px.

---

# 16. Borders / separators

Use hairline structural rules:
```text
1px rgba(244,247,248,.16)
```

No cards floating on shadows unless necessary for overlay separation.

---

# 17. Shadow system

Minimal.

Photo overlay shadow:
allowed.

Modal/menu:
strong dark scrim.

Cards:
prefer border/contrast over drop shadow.

---

# 18. Motion constraints

Micro:
150–260 ms.

Page section transitions:
300–700 ms depending scroll choreography.

Scroll scrub:
only signature elements.

One pinned moment maximum per main page unless Phase 09 proves no performance issue.

Animations:
transform + opacity.

---

# 19. Desktop interaction annotations

## Hover YWC CTA
ice line expands under `YWC`.

## Rack node
active node pulses once on section entry, not continuously.

## Challenge CTA
arrow moves horizontally on hover.

## Content thumbnails
image crop shifts subtly; title underline reveals.

## YANNI5
copy action changes label to:
**SKOPÍROVANÉ**

for 1.5–2.0s.

---

# 20. Mobile interaction annotations

- button press feedback,
- menu slide/fade,
- accordion expansion,
- copy code state,
- swipe is never required,
- no hover-dependent content.

---

# 21. Accessibility high-fidelity requirements

- focus states visible in ice/flash,
- button contrast AA,
- normal body ≥ 16px mobile,
- reduced motion equivalent,
- active states not communicated by blue alone,
- icon-only controls include labels,
- no text baked into functional images.

---

# 22. Content rules

Approved visible copy examples:

- TRÉNUJ. SÚŤAŽ. POSÚVAJ SA.
- ZAPOJ SA DO VÝZVY
- VSTÚP DO YWC
- FITNESS CHALLENGE TRENČÍN
- PRIHLÁSIŤ SA
- YANNI WORKOUT CLUB
- EXCLUSIVE OBSAH
- EARLY ACCESS
- PROGRAMY
- ZÁKULISIE
- UKÁŽKOVÝ ČLEN
- UKÁŽKOVÝ PROGRAM
- DEMO PROGRES
- KOPÍROVAŤ YANNI5

Do Phase 08 nepridávať claims bez zdroja.

---

# 23. Visual anti-pattern checklist

Reject implementation if:

- hero resembles SaaS landing page,
- blue turns into large generic gradient glow,
- every section is a rounded card,
- buttons look like Bootstrap/shadcn defaults,
- Yanni image looks secondary,
- Rack Rail is decorative clutter,
- page uses >2 independent animation systems,
- mobile looks like scaled desktop,
- there is fake social proof,
- layout relies on hover for functionality,
- visual richness kills LCP.

---

# 24. Phase 08 build reference order

The final build should use Phase 07 references in this order:

1. desktop homepage high-fidelity reference,
2. mobile homepage high-fidelity reference,
3. mobile Challenge reference,
4. YWC / member preview reference,
5. this specification,
6. Phase 05 UX document,
7. Phase 04 Technical Blueprint.

If generated reference image conflicts with truth/UX/technical constraints, the documents win.

---

# 25. Phase 07 acceptance criteria

- [x] visual world is locked,
- [x] palette is locked,
- [x] typography roles are locked,
- [x] desktop hero hierarchy is locked,
- [x] mobile hero hierarchy is locked,
- [x] Rack Rail behavior is locked,
- [x] CTA states are defined,
- [x] microinteraction language is defined,
- [x] Challenge design contract is defined,
- [x] YWC design contract is defined,
- [x] member preview design contract is defined,
- [x] mobile menu contract is defined,
- [x] image treatment system is defined,
- [x] animation limits are defined,
- [x] build anti-patterns are defined.

---

# 26. Phase 07 verdict

# GO → PHASE 08 BUILD

Phase 07 finalizuje dizajn na úroveň, z ktorej už Phase 08 nemá „vymýšľať web“.

Phase 08 má **implementovať schválený produkt, UX a vizuálny systém v kóde**, potom ho reálne testovať na notebooku a iPhone.
