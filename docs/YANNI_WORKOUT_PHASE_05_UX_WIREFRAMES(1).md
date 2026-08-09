# YANNI WORKOUT
## PHASE 05 — UX Composition & Wireframes

**Status:** COMPLETED / pripravené na schválenie Phase 05  
**Projekt:** YANNI WORKOUT — prémiová fitness creator platforma  
**Dátum:** 8. august 2026  
**Jazyk:** slovenčina  
**Fáza:** low-fidelity UX / informačná hierarchia / obrazovkové kompozície  
**Nadväzuje na:** Phase 01 Product & Creative Brief, Phase 02 Design Constitution, Phase 03 Business & ROI, Phase 04 Technical Blueprint

---

# 0. Čo Phase 05 JE a čo NIE JE

Phase 05 rieši **ako používateľ prechádza produktom a v akom poradí vidí informácie**.

Rieši:

- informačnú hierarchiu,
- poradie sekcií,
- primárne a sekundárne CTA,
- desktop/mobile kompozíciu,
- navigáciu,
- user journeys,
- placement Rack Rail,
- čo sa zobrazí nad foldom,
- čo sa presunie na samostatnú route,
- kde je product proof,
- kde je conversion moment,
- stavy bez dát,
- concept/demo označenia,
- čo je klikateľné a čo nie.

Phase 05 **nerieši finálne farby, efekty, fotografie grading, presnú typografickú kresbu ani finálnu motion choreografiu**.

To patrí do Phase 06 a Phase 07.

Ak by sme teraz išli rovno do finálneho vizuálu, riskovali by sme, že krásne navrhneme zlú hierarchiu.

---

# 1. Hlavná UX téza

YANNI WORKOUT nesmie pôsobiť ako katalóg všetkého, čo Yanni robí.

Homepage musí používateľa dostať k jednému z troch výsledkov:

1. **zapojí sa teraz** — Challenge,
2. **zostane bližšie pri Yanniho značke** — YWC,
3. **urobí komerčný krok** — Coaching / Program / Gear.

Obsah, story a YanniCast zvyšujú dôveru a engagement, ale nesmú zabiť conversion flow.

---

# 2. Primary visitor modes

## 2.1 Fanúšik z Instagramu

Stav mysle:

- pozná Yanniho,
- nechce čítať „o nás“,
- chce rýchlo vidieť, čo je nové / čo môže spraviť.

Primárna cesta:

```text
Instagram
   ↓
HOME
   ↓
NEXT CHALLENGE / YWC
```

Sekundárna cesta:

```text
HOME
  ↓
OBSAH / YANNICAST
  ↓
YWC / PROGRAM
```

---

## 2.2 Človek, ktorý chce trénovať

Primárna cesta:

```text
HOME
  ↓
TRÉNUJ SO MNOU
  ↓
PROGRAM / COACHING
```

Ak nie je pripravený na coaching:

```text
COACHING
   ↓
PROGRAM
   ↓
YWC
```

---

## 2.3 Challenge účastník

Primárna cesta:

```text
Story / QR / IG
      ↓
/vyzvy/trencin-2026
      ↓
REGISTRÁCIA
```

Po evente:

```text
Challenge page
      ↓
RESULTS / HIGHLIGHTS
      ↓
NEXT CHALLENGE / YWC
```

---

## 2.4 Brand / sponsor

Primárna cesta:

```text
HOME / SOCIAL
      ↓
SPOLUPRÁCA
      ↓
FORMÁT PARTNERSTVA
      ↓
KONTAKT
```

Partner surface nesmie byť schovaný v user member flow.

---

# 3. Global navigation architecture

## Desktop

Maximálne 6 primary items.

```text
YANNI WORKOUT     VÝZVY   TRÉNING   YWC   OBSAH   YANNI   [VSTÚP DO YWC]
```

### Secondary / footer

- Coaching
- Vybavenie
- YanniCast
- Spolupráca
- Instagram / YouTube / Spotify

### Prečo Coaching nie je v desktop primary nav

Coaching je high-intent product a dostane výrazné CTA vo flow.

Primary nav má zostať scanovateľný.

Ak sa v Phase 06 ukáže, že desktop nav unesie Coaching bez preťaženia, môžeme ho povýšiť.

---

## Mobile

Header:

```text
[YANNI]                         [MENU]
```

Mobile menu:

```text
VÝZVY
TRÉNING
YWC
COACHING
OBSAH
YANNI
VYBAVENIE
SPOLUPRÁCA

[VSTÚP DO YWC]
```

### Rule

Žiadny desktop navbar stlačený na malú šírku.

---

# 4. Global CTA hierarchy

## CTA Level 1 — campaign primary

Homepage v deň eventu:

**ZAPOJ SA DO VÝZVY**

Po evente:

**POZRI VÝSLEDKY** alebo ďalšia aktuálna kampaň.

---

## CTA Level 2 — evergreen brand primary

**VSTÚP DO YWC**

---

## CTA Level 3 — high intent

**CHCEM COACHING**

---

## CTA Level 4 — commerce / utility

- Pozri tréningový plán
- Kopírovať YANNI5
- Pozri YanniCast

### Rule

V jednej viewport oblasti nesmú byť tri rovnocenné primary buttons.

---

# 5. Homepage — desktop wireframe

Target viewport:

```text
1440 × 900
```

## 5.1 Above the fold

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ YANNI WORKOUT      VÝZVY  TRÉNING  YWC  OBSAH  YANNI       [VSTÚP DO YWC] │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  YANNI                                                                        │
│  WORKOUT                      ┌────────────────────────────────────────────┐  │
│                               │                                            │  │
│  Trénuj. Súťaž. Posúvaj sa.   │               YANNI PHOTO                  │  │
│                               │                                            │  │
│  [ZAPOJ SA DO VÝZVY]          │                                            │  │
│  Vstúp do YWC →               └────────────────────────────────────────────┘  │
│                                                                               │
│  TRENČÍN • 09.08.2026                                      RACK RAIL  ●    │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Hierarchy

1. Brand.
2. Yanni image.
3. Immediate current action.
4. YWC secondary.
5. Event metadata.

### Prohibited above fold

- follower count ako hlavná metriku,
- 5 cards,
- testimonial,
- pricing table,
- dlhý paragraph,
- YanniCast player.

---

# 6. Homepage section 2 — Challenge Spotlight

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ [FULL-BLEED / CROPPED EVENT PHOTO]                                           │
│                                                                               │
│                        NAJBLIŽŠIA VÝZVA                                       │
│                        TRENČÍN                                                │
│                        09.08.2026                                             │
│                                                                               │
│                        krátky verified popis                                  │
│                        [REGISTRÁCIA]                                          │
│                                                                               │
│                                                       RACK RAIL ●             │
└───────────────────────────────────────────────────────────────────────────────┘
```

### CTA

Current Google Form.

### Unknown content behavior

Ak nepoznáme:

- čas,
- venue,
- kategórie,
- prizes,

UI ich vôbec nevytvorí ako placeholders.

Whitespace je profesionálnejší než vymyslený detail.

---

# 7. Homepage section 3 — YWC

Cieľ:

Používateľ po Challenge pochopí, že YWC je dlhodobý vzťah, nie ďalší link.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ YWC / YANNI WORKOUT CLUB                                                     │
│                                                                               │
│  ČLENSTVO, KTORÉ POKRAČUJE                                                   │
│  AJ KEĎ REEL SKONČÍ.                                                         │
│                                                                               │
│  Exclusive obsah         Early access           Programy / zákulisie         │
│                                                                               │
│  [VSTÚP DO YWC]                                                              │
│                                                                               │
│                                   [editorial Yanni image]      RACK RAIL ●    │
└───────────────────────────────────────────────────────────────────────────────┘
```

### No fake proof

Namiesto:

`2 842 členov`

použijeme:

- konkrétne benefit categories,
- reálny Yanni asset,
- jasný product promise.

---

# 8. Homepage section 4 — Train / Coaching split

Nie tri rovnaké cards.

Použiť asymetrický split.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ TRÉNUJ SO MNOU                                                               │
│                                                                               │
│ ┌───────────────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ COACHING                          │ │ TRÉNINGOVÝ PLÁN                     │ │
│ │                                   │ │                                     │ │
│ │ Pre človeka, ktorý chce           │ │ Aktuálny plán / product entry       │ │
│ │ individuálny prístup.             │ │                                     │ │
│ │                                   │ │                                     │ │
│ │ [CHCEM COACHING]                  │ │ [POZRI PLÁN]                        │ │
│ │                                   │ │                                     │ │
│ │          60–65 % width            │ │       35–40 % width                 │ │
│ └───────────────────────────────────┘ └─────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────────┘
```

Coaching dostáva väčší priestor, pretože má vyššiu hodnotu na konverziu.

---

# 9. Homepage section 5 — Content / YanniCast

Obsah nie je Netflix grid.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ POZERAJ / POČÚVAJ                                                            │
│                                                                               │
│  [FEATURED CONTENT LARGE]      [YANNICAST]     [LATEST]                      │
│                                                                               │
│  veľký obraz                    cover            cover                         │
│  title                          title            title                         │
│  [POZRIEŤ]                      [SPOTIFY]        [POZRIEŤ]                    │
└───────────────────────────────────────────────────────────────────────────────┘
```

Max. 3 featured pieces above fold sekcie.

`/obsah` nesie celý archív.

---

# 10. Homepage section 6 — Gear / YANNI5

Cieľ:

Z promo kódu urobiť reálnu utility sekciu.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ ČO POUŽÍVAM                                                                  │
│                                                                               │
│      YANNI5                                                                   │
│      Ulož si kód.                                                             │
│                                                                               │
│      [KOPÍROVAŤ YANNI5]                                                       │
│                                                                               │
│      Affiliate produkty sa zobrazia iba keď sú overené.                      │
└───────────────────────────────────────────────────────────────────────────────┘
```

V deme nemusíme inventovať product grid.

---

# 11. Homepage section 7 — Yanni Story teaser

Namiesto štandardného `O mne`.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│                                  [YANNI IMAGE]                                │
│                                                                               │
│         POSTAVENÉ REP PO REPE.                                                │
│                                                                               │
│         krátky story excerpt                                                  │
│                                                                               │
│         [POZNAJ YANNIHO PRÍBEH]                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

# 12. Homepage section 8 — Partner CTA

Posledná conversion branch.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ PRE ZNAČKY, KTORÉ CHCÚ BYŤ PRI TOM.                                          │
│                                                                               │
│ Challenge • Content • YanniCast • Ambassador                                  │
│                                                                               │
│ [SPOLUPRÁCA]                                                                  │
└───────────────────────────────────────────────────────────────────────────────┘
```

Footer potom už iba naviguje.

---

# 13. Homepage mobile wireframe

Target:

```text
393 × 852
```

## First screen

```text
┌─────────────────────────────┐
│ YANNI                   MENU│
│                             │
│ YANNI                       │
│ WORKOUT                     │
│                             │
│ [     YANNI PHOTO       ]   │
│ [                       ]   │
│                             │
│ Trénuj. Súťaž.              │
│ Posúvaj sa.                 │
│                             │
│ [ZAPOJ SA DO VÝZVY]         │
│ Vstúp do YWC →              │
│                             │
│ TRENČÍN • 09.08.2026        │
└─────────────────────────────┘
```

### Mobile rule

Image a headline môžu byť vizuálne prepojené, ale CTA musí zostať v thumb-accessible zóne.

---

# 14. Mobile section rhythm

```text
HERO
↓
CHALLENGE
↓
YWC
↓
COACHING
↓
TRAINING
↓
CONTENT
↓
YANNI5
↓
STORY
↓
PARTNERS
```

### Dôležitá zmena oproti desktopu

Desktop môže mať coaching + training v jednom split bloku.

Mobile ich rozdelí:

1. Coaching ako väčší dominantný blok.
2. Training až pod ním.

Tým sa nestratí hierarchia pri stacknutí.

---

# 15. Mobile Rack Rail

Phase 05 vyberá **minimal side progress**, nie full desktop rail.

Concept:

```text
●
│
○
│
○
```

Placement:

- pravý okraj,
- veľmi úzky,
- `pointer-events: none` ak nie je interaktívny,
- nesmie zmenšiť usable content width.

### Alternative fallback

Ak Phase 06 ukáže, že rail na 393 px vizuálne škodí:

- zmení sa na top/bottom section tick,
- signature zostane v desktop + Challenge views.

Nie je povinné obetovať mobile UX kvôli signature.

---

# 16. Challenge Trenčín — mobile-first wireframe

Challenge page je najdôležitejší vertical slice pre zajtrajšiu prezentáciu.

```text
┌─────────────────────────────┐
│ ← YANNI WORKOUT             │
│                             │
│ FITNESS                     │
│ CHALLENGE                   │
│ TRENČÍN                     │
│                             │
│ 09.08.2026                  │
│                             │
│ [   EVENT / YANNI PHOTO  ]  │
│                             │
│ krátky verified text        │
│                             │
│ [PRIHLÁSIŤ SA]              │
│                             │
│ ─────────────────────────── │
│ AKO TO FUNGUJE              │
│ iba verified rules          │
│                             │
│ ─────────────────────────── │
│ VÝSLEDKY                    │
│ DEMO PREVIEW / po evente    │
│                             │
│ [POZRI KONCEPT LEADERBOARDU]│
│                             │
│ ─────────────────────────── │
│ ĎALŠÍ KROK                  │
│ [VSTÚP DO YWC]              │
└─────────────────────────────┘
```

---

# 17. Challenge desktop

Desktop nemá byť iba zväčšený mobile.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ ← YANNI WORKOUT                                                              │
├───────────────────────────────┬───────────────────────────────────────────────┤
│ FITNESS                       │                                               │
│ CHALLENGE                     │               EVENT PHOTO                     │
│ TRENČÍN                       │                                               │
│                               │                                               │
│ 09.08.2026                    │                                               │
│                               │                                               │
│ [PRIHLÁSIŤ SA]                │                                               │
├───────────────────────────────┴───────────────────────────────────────────────┤
│ VERIFIED INFO / RULES                                                        │
├───────────────────────────────────────────────────────────────────────────────┤
│ RESULTS PREVIEW                                                              │
│ [CONCEPT LEADERBOARD]                                                        │
├───────────────────────────────────────────────────────────────────────────────┤
│ JOIN YWC / NEXT CHALLENGE                                                    │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

# 18. YWC sales surface — mobile wireframe

```text
┌─────────────────────────────┐
│ ← YANNI WORKOUT             │
│                             │
│ YANNI                       │
│ WORKOUT CLUB                │
│                             │
│ [     YANNI IMAGE       ]   │
│                             │
│ BLIŽŠIE K TRÉNINGU.         │
│ BLIŽŠIE K OBSAHU.           │
│ BLIŽŠIE KU KOMUNITE.        │
│                             │
│ [VSTÚP DO YWC]              │
│                             │
│ ČO ZÍSKAŠ                    │
│ • exclusive                 │
│ • early access              │
│ • programy                  │
│ • zákulisie                 │
│                             │
│ AKO TO FUNGUJE              │
│ current external platform   │
│                             │
│ [OTVORIŤ YWC]               │
│                             │
│ ─────────                   │
│ POZRI DEMO ČLENSKEJ ZÓNY    │
│ [UKÁŽKA]                    │
└─────────────────────────────┘
```

### Pricing

Ak nemáme verified cenu:

**pricing blok neexistuje.**

Nie `€6 / month` placeholder.

---

# 19. Member Preview — demo wireframe

Route:

```text
/preview/klub
```

Visible header:

```text
DEMO KONCEPT
```

Wireframe:

```text
┌─────────────────────────────┐
│ DEMO KONCEPT                │
│                             │
│ AHOJ                        │
│ ČLEN YWC                    │
│                             │
│ TVOJ PROGRAM                │
│ [PROGRAM CARD]              │
│ progress                    │
│                             │
│ TENTO TÝŽDEŇ                │
│ [WORKOUT ITEM]              │
│ [WORKOUT ITEM]              │
│                             │
│ TVOJ PROGRES                │
│ Rack-style progress         │
│                             │
│ ĎALŠÍ EVENT                 │
│ Challenge CTA               │
└─────────────────────────────┘
```

### Data

Použiť generic demo language:

- `Ukážkový člen`
- `Ukážkový program`
- `Demo progres`

Nie fiktívne meno skutočnej osoby.

---

# 20. Leaderboard Preview

```text
┌─────────────────────────────┐
│ DEMO KONCEPT                │
│                             │
│ TRENČÍN                     │
│ LEADERBOARD                 │
│                             │
│ 1  UKÁŽKOVÝ ÚČASTNÍK        │
│ 2  UKÁŽKOVÝ ÚČASTNÍK        │
│ 3  UKÁŽKOVÝ ÚČASTNÍK        │
│                             │
│ Výsledky sú iba návrh       │
│ budúceho systému.           │
└─────────────────────────────┘
```

V reálnom UI budú čísla/ranking vizuálne výrazné, ale Phase 05 ich nepovažuje za content proof.

---

# 21. Coaching route

Goal:

qualified application, nie iba click.

```text
┌──────────────────────────────────────────┐
│ COACHED BY YANNI                        │
│                                          │
│ Pre koho je coaching                    │
│ Pre koho nie je                         │
│                                          │
│ [YANNI COACHING PHOTO]                  │
│                                          │
│ ČO DOSTANEŠ                             │
│ 3–4 jasné oblasti                       │
│                                          │
│ AKO TO PREBIEHA                         │
│ 1. prihláška                            │
│ 2. posúdenie                            │
│ 3. ďalší krok                           │
│                                          │
│ [VYPLNIŤ PRIHLÁŠKU]                     │
└──────────────────────────────────────────┘
```

### No fake scarcity

Žiadne:

`len 2 miesta ostávajú`

ak to Yanni nepotvrdí.

---

# 22. Training hub

```text
┌──────────────────────────────────────────┐
│ TRÉNING                                  │
│                                          │
│ [CURRENT TRAINING PLAN]                  │
│ Aktuálny external plan                   │
│ [OTVORIŤ PLÁN]                           │
│                                          │
│ BUDÚCE PROGRAMY                          │
│ [CONCEPT PROGRAM]                        │
│ [CONCEPT PROGRAM]                        │
└──────────────────────────────────────────┘
```

Concept programs označiť ako:

`KONCEPT`

Nie fake commerce.

---

# 23. Content hub

Filters only if dataset needs them.

Pre demo:

```text
VŠETKO
TRÉNING
YANNICAST
CHALLENGE
```

Ak máme iba 5 content items, filters sú zbytočné.

### Phase 05 rule

Neimplementovať feature len preto, že sa hodí do „platform“ pitchu.

---

# 24. Yanni Story route

Scroll story môže byť výrazná, ale jej UX musí fungovať aj bez motion.

```text
INTRO
↓
TRAINING / BEGINNING
↓
CONTENT
↓
YANNICAST
↓
CHALLENGES
↓
COMMUNITY / NEXT
```

### Content truth

Chronológiu nebudeme inventovať.

Phase 06 môže navrhnúť timeline formu, ale Phase 08 ju naplní iba potvrdenými bodmi.

---

# 25. Gear route

Kým nemáme products:

```text
YANNI5
↓
COPY CODE
↓
"Moje odporúčané produkty sem pridáme,
keď budú overené."
```

Na demo homepage nemusíme túto vetu ukázať.

Route môže byť minimalistická.

---

# 26. Partner route

```text
┌──────────────────────────────────────────┐
│ SPOLUPRÁCA S YANNIM                     │
│                                          │
│ CONTENT                                  │
│ CHALLENGE                                │
│ YANNICAST                                │
│ AMBASSADOR                              │
│                                          │
│ [NAPÍSAŤ EMAIL]                          │
└──────────────────────────────────────────┘
```

V production po získaní reálnych analytics môže pribudnúť media kit.

---

# 27. Footer information architecture

Footer:

```text
YANNI WORKOUT

VÝZVY
TRÉNING
YWC
COACHING

OBSAH
YANNICAST
YANNI

VYBAVENIE
SPOLUPRÁCA

Instagram
YouTube
Spotify

© YANNI WORKOUT
CONCEPT DEMO
```

Demo označenie môže byť subtle, ale existuje.

---

# 28. Homepage scroll length

Desktop target:

**7–9 meaningful viewports**

Nie 18.

Mobile:

**dlhšie prirodzene**, ale každá sekcia musí priniesť nový dôvod pokračovať.

### Kill rule

Ak sekcia:

- nepridáva proof,
- nepridáva action,
- nepridáva product understanding,

vymaže sa.

---

# 29. UX rhythm

Homepage nemá mať rovnaké tempo.

Odporúčaný rytmus:

```text
HERO               high impact
CHALLENGE          high impact
YWC                medium / product explanation
COACHING/TRAINING  actionable
CONTENT            lighter
GEAR               utility / short
STORY              emotional
PARTNERS           decisive close
```

Tak homepage nedrží návštevníka v permanentnom „WOW“ stave, ktorý sa po 20 sekundách stane únavou.

---

# 30. Information density

## Hero
Low.

## Challenge
Low-medium.

## YWC
Medium.

## Coaching
Medium.

## Member preview
Medium-high.

### Rule

Marketing a dashboard nemajú používať rovnakú density.

---

# 31. Rack Rail UX states

```text
inactive
active
passed
```

No fake data.

Desktop:

- active section label môže krátko vyjsť z railu.

Mobile:

- bez labelov, ak by znižovali čitateľnosť.

### Accessibility

Ak rail nie je navigácia:

- decorative.

Ak sa stane clickable:

- explicit anchors,
- keyboard,
- focus.

Phase 05 preferuje **dekoratívny progress rail na homepage**.

---

# 32. Sticky behavior

## Header

Desktop:

- transparent / integrated first viewport,
- after hero môže prejsť do compact state.

Mobile:

- compact sticky header je povolený,
- nesmie zaberať > ~64 px bez dôvodu.

## CTA

Žiadny permanentný giant bottom CTA na homepage.

Challenge page môže mať mobile sticky registration CTA, ak Phase 06 ukáže, že neprekrýva content.

---

# 33. Scroll-jump navigation

Primary nav anchor vs route:

- VÝZVY → route,
- TRÉNING → route,
- YWC → route,
- OBSAH → route,
- YANNI → route.

Homepage section nav nie je základný model.

Dôvod:

deep-linking + produkt pôsobí ako platforma, nie one-page brochure.

---

# 34. States

## Missing verified data

Don't show empty label.

Bad:

```text
MIESTO:
—
```

Good:

element does not render.

---

## Disabled external destination

Bad:

`href="#"`

Good:

button is hidden or converted to non-interactive `PRIPRAVUJEME` only if truthful.

---

## Loading

Public pages mostly static.

No full-screen spinner.

---

## Error

User always gets:

- retry,
- back to YANNI WORKOUT.

---

# 35. Mobile thumb zones

Primary actions should land approximately:

- lower half of first screen,
- below copy rather than tiny link in upper corner.

Top-right menu remains large enough.

`Kopírovať YANNI5` uses full button hit area.

---

# 36. Desktop composition rules for Phase 06

Phase 06 may make layout visually much bolder, but must preserve:

- CTA order,
- section order,
- content roles,
- no fake data,
- mobile priority,
- route architecture.

Visual design may:

- overlap type and image,
- crop photography aggressively,
- use asymmetry,
- pin / reveal,
- change whitespace.

Visual design may NOT:

- hide the current Challenge CTA,
- move YWC below 10 sections,
- turn coaching into equal card among six services,
- obscure Yanni photography with UI clutter.

---

# 37. Wireframe comparison: why not classic card grid

Rejected homepage:

```text
[card] [card] [card]
[card] [card] [card]
```

Reasons:

- reads like generic SaaS,
- every feature looks equally important,
- weak storytelling,
- weak Yanni identity,
- contradicts Phase 02 Design Constitution.

Accepted:

**large editorial moments + asymmetric product entries.**

---

# 38. First 15-second presentation path

When you show Yanni the demo:

```text
0–4 s
HERO

4–8 s
scroll → TRENČÍN CHALLENGE

8–12 s
scroll → YWC

12–15 s
open /preview/klub or leaderboard
```

Only then, if he engages:

- coaching,
- gear,
- story,
- ROI.

This presentation path directly influenced homepage hierarchy.

---

# 39. Laptop presentation path

Laptop showcases:

- typography scale,
- full composition,
- Rack Rail,
- hover,
- scroll choreography.

Phone showcases:

- product is real,
- mobile-first,
- CTA works,
- Challenge registration works.

### Rule

Do not start with member dashboard on laptop.

Start with brand impact.

---

# 40. Mobile presentation path

Recommended:

```text
HOME
↓
CHALLENGE CTA
↓
back
↓
YWC
↓
DEMO MEMBER PREVIEW
```

This shows:

1. campaign,
2. current business,
3. future platform vision.

---

# 41. Phase 06 visual concept handoff

Phase 06 must visualize **one master board** first:

### Screen A
Desktop homepage above fold + beginning of Challenge transition.

### Screen B
Mobile homepage first screen.

### Screen C
Mobile Challenge.

### Screen D
Mobile YWC / Member Preview.

This is enough to validate the visual world across:

- Persuade,
- campaign,
- premium membership,
- operate/dashboard.

We do **not** need final screenshots of every route before choosing the visual direction.

---

# 42. Why Phase 05 does not need 15 generated images

Phase 05 is UX structure.

Generating many polished images now would prematurely lock:

- palette execution,
- font rendering,
- image treatment,
- effects,
- motion implications.

Therefore Phase 05 artifact set is:

1. this exact UX specification,
2. one visual low-fidelity master wireframe board,
3. ASCII wireframes for all critical routes.

Phase 06 will generate the first proper aesthetic design frame.

---

# 43. Open items intentionally deferred

No blocker.

Deferred to later:

- verified YWC URL,
- GymBeam affiliate URL,
- exact event venue/time,
- actual YWC pricing,
- high-res hero asset,
- verified story timeline,
- actual member data.

UX already handles their absence.

---

# 44. Phase 05 acceptance criteria

## Global
- [x] Primary user types defined.
- [x] Primary journeys defined.
- [x] Navigation hierarchy defined.
- [x] CTA hierarchy defined.
- [x] desktop/mobile behavior separated.

## Homepage
- [x] exact section order defined.
- [x] hero hierarchy defined.
- [x] Challenge gets campaign priority.
- [x] YWC gets evergreen priority.
- [x] Coaching priority preserved.
- [x] content/gear/story do not overwhelm funnel.
- [x] partner CTA separated.

## Routes
- [x] Challenge wireframe.
- [x] YWC wireframe.
- [x] Member Preview wireframe.
- [x] Leaderboard Preview wireframe.
- [x] Coaching wireframe.
- [x] Training/content/story/gear/partner structure.

## Safety / truth
- [x] missing data states defined.
- [x] no fake pricing.
- [x] no fake members/results.
- [x] concept pages visibly marked.

## Presentation
- [x] 15-second pitch path defined.
- [x] phone/laptop roles defined.

---

# 45. Phase 05 verdict

# **GO → PHASE 06**

UX architecture je dostatočne presná na začatie vizuálneho konceptu.

Najdôležitejší výsledok:

> **Phase 06 nebude generovať náhodnú krásnu homepage. Bude vizualizovať už potvrdenú UX štruktúru.**

Phase 06 má teraz odpovedať na inú otázku:

> **Ako presne má tento wireframe vyzerať, aby YANNI WORKOUT pôsobil ako vlastná prémiová fitness značka a nie ako AI-generated fitness template?**
