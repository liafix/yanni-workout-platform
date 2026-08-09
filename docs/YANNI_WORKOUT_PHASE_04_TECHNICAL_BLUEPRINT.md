# YANNI WORKOUT
## PHASE 04 — Technical Blueprint

**Status:** COMPLETED / pripravené na schválenie Phase 04  
**Projekt:** YANNI WORKOUT — prémiová fitness creator platforma  
**Dátum:** 8. august 2026  
**Primárny jazyk:** slovenčina  
**Aktuálny release:** interaktívne demo / concept, nie production  
**Prezentácia:** 9. august 2026, Trenčín  
**Primárne zariadenia na prezentáciu:** iPhone + notebook  
**Nadväzuje na:** Phase 01 Product & Creative Brief, Phase 02 Design Constitution, Phase 03 Business & ROI Blueprint

---

# 0. Executive technical verdict

YANNI WORKOUT sa má technicky postaviť ako **rýchly, art-directed frontend s veľmi malou demo infraštruktúrou a s pripravenými adaptačnými bodmi pre neskorší produkčný backend**.

Najdôležitejšie architektonické rozhodnutie Phase 04:

> **Do zajtrajšieho dema nestaviame databázu, autentifikáciu, vlastné YWC billing ani komunitný backend.**

Demo bude používať:

- Next.js App Router,
- TypeScript,
- React Server Components ako default,
- lokálne typované content dáta,
- `next/image`,
- `next/font`,
- GSAP + ScrollTrigger iba v izolovaných client islands,
- native browser scroll,
- externé linky na Yanniho aktuálne služby,
- Vercel deployment.

Produkčná architektúra už dnes počíta s:

- Supabase Postgres,
- Supabase Auth,
- Row Level Security,
- Stripe Checkout / Billing,
- webhook-based entitlements,
- content repository abstraction,
- analytics adapter,
- event/leaderboard model,
- member dashboard.

Tým vznikne demo, ktoré je možné dokončiť kvalitne, a zároveň sa po Yanniho súhlase nebude musieť celé zahodiť.

---

# 1. Technické princípy projektu

## 1.1 Demo musí byť pravdivé

Demo môže simulovať budúci produktový stav, ale nesmie simuláciu vydávať za realitu.

Každý údaj patrí do jednej z troch kategórií:

```ts
type TruthStatus =
  | "verified"      // overené z verejného zdroja / potvrdené Yannim
  | "user_supplied" // dodané používateľom ako podklad pre súkromné demo
  | "concept";      // hypotetický prvok budúceho produktu
```

### Pravidlo

- `verified` sa môže zobrazovať normálne.
- `user_supplied` sa môže použiť v súkromnom deme.
- `concept` musí byť formulovaný ako koncept alebo vizuálne označený ako demo, ak by mohol pôsobiť ako reálny údaj.

Zakázané:

- fiktívni členovia vydávaní za reálnych,
- fiktívne kilograms / leaderboard výsledky bez označenia,
- fiktívne ceny vydávané za Yanniho ceny,
- fiktívny počet YWC členov,
- vymyslené partnerstvá,
- vymyslené achievements.

---

## 1.2 Server-first, client only where interaction requires it

Public marketing surface má byť prevažne Server Component.

Client Components používame iba pre:

- GSAP animácie,
- copy-to-clipboard,
- mobile navigation state,
- demo dashboard interactions,
- analytics event dispatch,
- malé UI stavy.

Výsledok:

- menší JavaScript bundle,
- rýchlejší first render,
- menšie riziko hydration problémov,
- jednoduchšie SEO,
- stabilnejší mobilný výkon.

---

## 1.3 Native scroll je default

**Lenis sa do demo build-u nedáva ako základná závislosť.**

Dôvod:

- natívny scroll je najspoľahlivejší na iPhone,
- ScrollTrigger nepotrebuje scroll-jacking,
- ďalšia scroll abstraction zvyšuje riziko mobilných bugov tesne pred prezentáciou,
- Awwwards-level dojem musí vzniknúť kompozíciou a choreografiou, nie tým, že používateľ stratí kontrolu nad scrollom.

Lenis / ScrollSmoother je možné skúmať po prvom funkčnom prototype iba vtedy, ak:

1. native scroll nedokáže splniť konkrétny schválený motion koncept,
2. mobile QA ostane bez regresie,
3. reduced-motion verzia zostane čistá.

---

## 1.4 Jeden animation runtime

Nepoužívame naraz GSAP + Framer Motion + ďalšie animation libraries.

### Rozdelenie

- CSS transitions: button hover, underline, opacity, color, focus.
- GSAP: orchestrated hero, Rack Rail, scroll choreography.
- Browser API: IntersectionObserver iba tam, kde je jednoduchší než GSAP.

Tým sa znižuje:

- bundle,
- duplikovaná logika,
- timing konflikty,
- motion chaos.

---

## 1.5 Externé služby sú adapters, nie natvrdo rozhádzané URL

Všetky Yanniho externé destinations budú na jednom mieste.

```ts
type ExternalDestination = {
  id: string;
  label: string;
  href: string | null;
  truthStatus: TruthStatus;
  enabled: boolean;
};
```

UI komponenty nikdy nemajú obsahovať náhodný hard-coded URL.

Výhoda:

- zmena Typeformu = jedna úprava,
- zmena Challenge formulára = jedna úprava,
- neskoršia migrácia Herohero → owned YWC = komponenty zostávajú rovnaké.

---

# 2. Tech stack — DEMO

## Runtime

### Node.js 24 LTS

Phase 04 pinne pre projekt Node 24.x LTS.

Nie Node 26 Current.

Dôvod:

- produkčné aplikácie majú preferovať LTS runtime,
- minimalizujeme riziko závislostí tesne pred demom.

Presný patch sa uzamkne pri bootstrapovaní repozitára cez `.nvmrc` / `.node-version` a lockfile.

---

## Framework

### Next.js — latest stable App Router pri bootstrapovaní, okamžite uzamknutý lockfile

Bootstrap:

```bash
pnpm create next-app@latest yanni-workout
```

Po vytvorení projektu:

- exact dependency versions zostanú v lockfile,
- počas overnight build-u nebudeme robiť priebežné major upgrades.

### Povinné

- TypeScript
- App Router
- ESLint
- `src/` directory
- import alias `@/*`

### React Compiler

Pre demo **nepovažovať za povinnosť**.

Zapnúť iba vtedy, ak ho current stable scaffold používa bez ďalšieho experimentálneho setupu a build prejde bez regresie. Projekt na ňom nesmie architektonicky závisieť.

---

# 3. Styling architecture

## 3.1 Hybrid: design tokens + Tailwind + CSS Modules

Odporúčaná kombinácia:

### Tailwind

Použiť pre:

- layout primitives,
- responsive utility,
- spacing,
- display/flex/grid,
- basic states.

### CSS custom properties

Použiť ako jediný source-of-truth pre Design Constitution tokens.

Príklad:

```css
:root {
  --yw-ink: #0a0b0d;
  --yw-flash: #f4f7f8;
  --yw-steel: #a8b0b6;
  --yw-graphite: #202327;
  --yw-ice: #b9ebfc;

  --yw-max: 1440px;
  --yw-gutter-mobile: 20px;
  --yw-gutter-desktop: 48px;

  --yw-z-base: 0;
  --yw-z-sticky: 20;
  --yw-z-nav: 40;
  --yw-z-modal: 100;
}
```

### CSS Modules

Použiť pre signature / editorial surface:

- Hero,
- Rack Rail,
- Challenge hero,
- image masks,
- irregular typography composition,
- cinematic transitions.

### Dôvod

Nechceme dve zlé krajnosti:

1. celý art-directed web ako 3 000 utility classes,
2. celý web ako nekontrolovaný globálny CSS súbor.

---

# 4. Typography implementation

Phase 02 font roles zostávajú:

- **Big Shoulders Display** — display,
- **Source Sans 3** — body/interface,
- **Azeret Mono** — utility/data.

Použiť `next/font/google`.

Princíp:

```ts
// src/app/fonts.ts
import {
  Big_Shoulders_Display,
  Source_Sans_3,
  Azeret_Mono,
} from "next/font/google";
```

Každý font bude vystavený ako CSS variable.

### Font loading pravidlá

- preload iba reálne kritické family/weights,
- nepoužívať zbytočne 8 weightov,
- body font musí mať fallback,
- utility font sa nesmie stať blokujúcim pre hero,
- nepoužívať externý Google Fonts `<link>` v browseri.

---

# 5. Image architecture

## 5.1 Demo assets

Všetky dodané Yanni fotografie sa skopírujú do lokálneho projektu.

Príklad:

```text
public/
└── media/
    └── yanni/
        ├── hero-gym.webp
        ├── challenge-outdoor.webp
        ├── story-double-biceps.webp
        ├── editorial-back.webp
        ├── editorial-dark.webp
        └── yannicast-cover.webp
```

### Zákaz

- nehotlinkovať Instagram CDN,
- neťahať obrázky z náhodných proxy URL,
- nepoužiť stock fitness modela.

## 5.2 `next/image`

Každá fotografia:

- explicitný aspect ratio,
- správne `sizes`,
- zmysluplný `alt`,
- lazy-load pod foldom.

Hero:

- iba jedna LCP candidate image podľa viewport strategy,
- Next.js 16+ `preload` alebo `fetchPriority="high"` podľa výsledku implementácie,
- nepoužiť deprecated `priority` ako nový štandard.

## 5.3 Art direction

Desktop a mobile môžu používať rozdielny crop.

To je povolené a žiaduce.

### Mobile

- tvár a telo nesmú byť zakryté navigáciou,
- hero nemusí ukázať celú fotografiu,
- crop má podporovať text, nie kopírovať desktop.

## 5.4 Current asset limitation

Aktuálne obrázky postačujú pre:

- wireframe,
- visual concept,
- mobilné demo,
- section imagery.

Pre veľký desktop hero je žiaduci aspoň jeden originál 1080 px+.

Toto **neblokuje Phase 05 ani Phase 06**, ale je to vstup požadovaný pred finálnym Phase 08 polishom.

---

# 6. Video / embeds

Demo nesmie otvoriť homepage so štyrmi živými iframe prehrávačmi.

## YanniCast / video cards

Default:

- local poster,
- title,
- source,
- duration ak je overená,
- external link.

Alternatíva:

- lazy-loaded lightweight embed až po používateľovej interakcii.

### Zakázané

- autoplay video s audio,
- viacero YouTube iframe nad foldom,
- background video iba kvôli „premium feelingu“,
- embed, ktorý zablokuje LCP.

---

# 7. Route architecture — DEMO

```text
src/app/
│
├── layout.tsx
├── page.tsx                         # HOME
├── not-found.tsx
├── error.tsx
│
├── vyzvy/
│   ├── page.tsx                     # challenge hub
│   └── trencin-2026/
│       └── page.tsx                 # event vertical slice
│
├── ywc/
│   └── page.tsx                     # premium membership surface
│
├── trening/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx                 # one flagship concept program
│
├── coaching/
│   └── page.tsx
│
├── obsah/
│   └── page.tsx
│
├── yannicast/
│   └── page.tsx
│
├── vybava/
│   └── page.tsx
│
├── yanni/
│   └── page.tsx
│
├── spolupraca/
│   └── page.tsx
│
└── preview/
    ├── layout.tsx                   # visible DEMO context
    ├── klub/
    │   └── page.tsx                 # concept member dashboard
    └── leaderboard/
        └── page.tsx                 # concept results view
```

### SEO pravidlo

`/preview/*`:

```ts
robots: {
  index: false,
  follow: false,
}
```

Celé verejne nasadené demo pred Yanniho súhlasom má mať `noindex`.

Po súhlase sa robots strategy pre produkčný web zmení.

---

# 8. Homepage section architecture

`page.tsx` nemá byť 1 500 riadkov HTML.

```text
HomePage
│
├── SiteHeader
├── HeroYanni
├── ChallengeSpotlight
├── YwcManifesto
├── TrainingEntry
├── ContentRail
├── GearSpotlight
├── YanniStoryTeaser
├── PartnerCTA
├── SiteFooter
└── RackRail
```

### Server Components default

- `HeroYanni`
- `ChallengeSpotlight`
- `YwcManifesto`
- `TrainingEntry`
- `ContentRail`
- `GearSpotlight`
- `YanniStoryTeaser`
- `PartnerCTA`
- `SiteFooter`

### Client islands

- `HeroMotion`
- `RackRailMotion`
- `MobileNav`
- `CopyCodeButton`
- `OutboundTrackedLink`

---

# 9. Component organization

```text
src/
├── app/
├── components/
│   ├── shell/
│   │   ├── site-header.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── site-footer.tsx
│   │   └── rack-rail.tsx
│   │
│   ├── sections/
│   │   ├── hero-yanni/
│   │   ├── challenge-spotlight/
│   │   ├── ywc-manifesto/
│   │   ├── training-entry/
│   │   ├── content-rail/
│   │   ├── gear-spotlight/
│   │   ├── story-teaser/
│   │   └── partner-cta/
│   │
│   ├── challenge/
│   │   ├── event-hero.tsx
│   │   ├── event-meta.tsx
│   │   ├── leaderboard.tsx
│   │   └── register-cta.tsx
│   │
│   ├── ywc/
│   ├── training/
│   ├── content/
│   ├── gear/
│   ├── motion/
│   │   ├── motion-provider.tsx
│   │   ├── hero-motion.tsx
│   │   └── reveal.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── link-button.tsx
│       ├── section-label.tsx
│       ├── data-label.tsx
│       ├── media-frame.tsx
│       └── demo-badge.tsx
│
├── content/
│   ├── site.ts
│   ├── links.ts
│   ├── events.ts
│   ├── programs.ts
│   ├── gear.ts
│   ├── content.ts
│   └── story.ts
│
├── lib/
│   ├── analytics/
│   ├── external/
│   ├── config/
│   ├── truth/
│   └── utils/
│
└── styles/
    ├── tokens.css
    ├── globals.css
    └── motion.css
```

---

# 10. Content architecture — DEMO

Content nebude uložený priamo v JSX.

## Event type

```ts
type EventRecord = {
  id: string;
  slug: string;
  title: string;
  city: string;
  date: string;
  time?: string;
  venue?: string;
  registrationUrl?: string;
  status: "upcoming" | "live" | "finished";
  truthStatus: TruthStatus;
};
```

### Trenčín

Použiť iba:

- názov challenge,
- Trenčín,
- dátum 9. 8. 2026 podľa zadania používateľa,
- registration URL dodaný používateľom.

**Čas a venue nechávame prázdne, kým ich nemáme overené.**

UI musí zvládnuť missing fields elegantne.

---

## Program type

```ts
type ProgramRecord = {
  slug: string;
  name: string;
  eyebrow?: string;
  summary: string;
  image: string;
  price?: number;
  currency?: "EUR";
  externalUrl?: string;
  isConcept: boolean;
};
```

Ak program v deme nemá Yannim potvrdený názov alebo cenu:

- `isConcept: true`,
- cena sa nezobrazí ako reálna ponuka,
- CTA znie napr. `UKÁŽKA PROGRAMU`.

---

## Gear item type

```ts
type GearItem = {
  id: string;
  name: string;
  category: string;
  image?: string;
  code?: string;
  affiliateUrl?: string;
  truthStatus: TruthStatus;
};
```

### YANNI5

Kód sa môže použiť, pretože bol používateľom dodaný zo screenshotu.

### Affiliate URL

Neinventovať.

Kým nemáme Yanniho reálny trackovaný affiliate link:

- povoliť `Kopírovať YANNI5`,
- outbound nákupný link nepomenovať ako jeho affiliate link.

---

# 11. External destinations registry

Príklad:

```ts
export const externalLinks = {
  challengeTrencin: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe_MSAHzqV_VSkyi9Rxf2vaXoPgUU0fr77EY4IcJjrfdk0KKQ/viewform",
    enabled: true,
  },

  trainingPlan: {
    href: "<USER_SUPPLIED_WETRANSFER_URL>",
    enabled: true,
  },

  yanniLeto: {
    href: "<USER_SUPPLIED_TYPEFORM_URL>",
    enabled: true,
  },

  yanniCastSpotify: {
    href: "https://open.spotify.com/show/4t0i5PKQBLtF2RhacahyOl",
    enabled: true,
  },

  ywcCurrent: {
    href: null,
    enabled: false,
  },

  gymbeamAffiliate: {
    href: null,
    enabled: false,
  },
} as const;
```

### Required before final demo freeze

Pokiaľ sa má CTA používať:

1. aktuálny YWC destination URL,
2. aktuálny GymBeam affiliate URL.

Ak URL nedostaneme:

- CTA sa schová alebo zmení na bezpečnú non-transaction action,
- nikdy `href="#"`.

---

# 12. Link behavior

Externý link:

```html
target="_blank"
rel="noopener noreferrer"
```

Ale:

- na mobile sa nemusí každý link násilne otvárať v novej karte,
- rozhodnutie sa robí podľa kontextu.

### Conversion CTA

Pri CTA, ktoré opúšťa platformu:

1. analytics event,
2. okamžitá navigácia,
3. analytics nesmie blokovať klik.

Žiadne 500 ms fake delay „aby event stihol odísť“.

---

# 13. Motion architecture

## 13.1 GSAP setup

GSAP sa inicializuje iba v client module.

```ts
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

Žiadna inicializácia na serveri.

---

## 13.2 `gsap.matchMedia()`

Motion musí mať explicitné podmienky:

```ts
const mm = gsap.matchMedia();

mm.add(
  {
    desktop: "(min-width: 1024px)",
    mobile: "(max-width: 1023px)",
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    // ...
  }
);
```

### Rule

Nepoužívať deprecated `ScrollTrigger.matchMedia()` pre nový kód.

---

## 13.3 Rack Rail

`RackRail` má dve vrstvy:

### Semantic layer

Section IDs / navigačné anchors.

### Visual layer

Rack holes, progress, active section.

Ak je rail dekoratívny:

```html
aria-hidden="true"
```

Ak je klikateľný:

- každý checkpoint musí mať textový accessible name,
- keyboard focus,
- visible focus state.

### Mobile

Rack Rail sa nesmie iba zmenšiť desktopovo.

Možnosti Phase 05:

- bottom progress strip,
- minimal side indicator,
- úplné vypnutie, ak zavadzia obsahu.

---

## 13.4 Reduced motion

Ak:

```css
@media (prefers-reduced-motion: reduce)
```

potom:

- žiadne scrubovanie fotografie,
- žiadny pinned hero,
- žiadny parallax,
- Rack Rail iba statický active indicator,
- section entrance max. jednoduchý opacity transition alebo okamžité zobrazenie.

Obsah musí zostať identický.

---

# 14. Mobile interaction rules

Primárna acceptance viewport:

### iPhone 15 Pro class
cca 393 × 852 CSS px.

Ďalej testovať:

- 375 px small mobile,
- 430 px large mobile,
- landscape.

### Hard rules

- body minimum 16 px,
- žiadny horizontal scroll,
- hit area min. 44 × 44 px,
- sticky CTA nesmie zakrývať content,
- menu nesmie kolidovať so safe-area,
- hover nie je jediný spôsob objavenia akcie,
- fancy cursor sa na touch zariadeniach vôbec neinicializuje.

---

# 15. Responsive breakpoints

Projekt nemá navrhovať každú sekciu podľa náhodných breakpointov.

Baseline:

```text
mobile       < 640
large mobile 640–767
tablet       768–1023
desktop      1024–1439
wide         1440+
```

CSS môže používať framework breakpoints, ale architektonické zmeny majú zostať limitované.

### Pravidlo

Breakpoint sa pridá iba vtedy, ak obsah alebo kompozícia reálne prestáva fungovať.

---

# 16. Accessibility architecture

Minimum quality floor:

- `lang="sk"`,
- semantický landmark layout,
- jedna H1 na page,
- správna heading hierarchy,
- `alt` pre významové fotografie,
- prázdny alt pre čisto dekoratívny obraz,
- visible focus,
- keyboard nav,
- skip link,
- `aria-expanded` mobile menu,
- accessible labels icon-only controls,
- kontrast min. WCAG AA pre normálny text,
- informácia nesmie byť komunikovaná iba farbou,
- reduced motion,
- forms s viditeľnými labels.

### Leaderboard

Leaderboard nie je vizuálna div-grid.

Použiť:

```html
<table>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

Na mobile sa môže vizuálne restylovať, ale semantic table sa zachová.

---

# 17. Performance budget

Phase 04 prijíma ako production-level cieľ Core Web Vitals:

- **LCP ≤ 2,5 s**
- **INP ≤ 200 ms**
- **CLS ≤ 0,1**

merané primárne na mobile.

## Interné demo budgets

### Above-the-fold

- žiadne autoplay video,
- jedna dominantná hero fotografia,
- minimum third-party JS.

### Images

- mobile hero target približne ≤ 300 KB po optimalizácii, ak zdroj dovolí,
- desktop hero target približne ≤ 500 KB,
- žiadne 4K fotografie na 393 px viewport.

### Fonts

- preload iba kritické font assets,
- nepoužiť všetky possible weights.

### JavaScript

- Server Components pre statické sekcie,
- GSAP import iba tam, kde sa používa,
- heavy feature dynamic import,
- analytics až po základnom UI.

### Rendering

- animovať `transform` / `opacity`,
- nie `top`, `left`, `width`, `height` v scroll loop,
- žiadne DOM read/write thrashing.

---

# 18. Performance implementation rules from Vercel/React practice

## Waterfalls

Independent async operations:

```ts
const [event, content] = await Promise.all([
  getEvent(),
  getContent(),
]);
```

Nie sekvenčné awaits bez závislosti.

## Bundle

- direct imports,
- lazy-load demo-only modules,
- žiadny gigantický barrel import z icon library,
- client boundary čo najnižšie v tree.

## Third-party

- analytics defer,
- YouTube/Spotify iframe lazy,
- žiadne marketing widgets nad foldom.

---

# 19. SEO — DEMO

Pred Yanniho súhlasom:

```ts
export const metadata = {
  title: "YANNI WORKOUT — Concept",
  robots: {
    index: false,
    follow: false,
  },
};
```

### Demo URL

Ideálne:

- Vercel preview URL,
- unlisted,
- nepoužívať Yanniho meno v custom doméne bez jeho súhlasu.

### Open Graph

Pre súkromné demo nepotrebujeme agresívne share previews.

Ak OG asset vznikne:

- iba reálna Yanni fotografia,
- žiadne fake claims,
- concept označenie pri verejne shareable preview.

---

# 20. Deployment architecture — DEMO

```text
Git repository
     │
     ▼
Vercel Preview Deployment
     │
     ├── CDN static assets
     ├── Next.js rendering
     └── optional Analytics / Speed Insights
```

### Demo nepotrebuje

- database,
- Redis,
- queue,
- cron,
- object storage,
- webhook endpoint,
- auth provider.

To je zámer.

Menej infraštruktúry = viac času na craft + QA.

---

# 21. Vercel environment strategy

## Preview

- `NEXT_PUBLIC_DEMO_MODE=true`
- `NEXT_PUBLIC_SITE_URL=<preview-url>`
- `NEXT_PUBLIC_ENABLE_CUSTOM_ANALYTICS=false` default
- external destinations cez config

## Production later

- `NEXT_PUBLIC_DEMO_MODE=false`
- `NEXT_PUBLIC_SITE_URL=https://...`
- Supabase env
- Stripe env
- analytics config
- optional CMS config.

### Secret rule

Žiadny server secret nesmie mať prefix:

```text
NEXT_PUBLIC_
```

---

# 22. Demo feature flags

Použiť jednoduché compile-time flags, nie externú feature-flag platformu.

```ts
export const features = {
  demoMode: true,
  memberPreview: true,
  leaderboardPreview: true,

  ownedMembership: false,
  stripeCheckout: false,
  eventPayments: false,
  accountAuth: false,
  communityFeed: false,
} as const;
```

### Výhoda

Nikto omylom nezapne napoly hotový billing.

---

# 23. Analytics architecture

Phase 03 event taxonomy zostáva source-of-truth.

Technicky:

```ts
type AnalyticsEvent =
  | "view_ywc"
  | "click_join_ywc"
  | "view_coaching"
  | "start_coaching_application"
  | "view_program"
  | "click_program_checkout"
  | "challenge_registration"
  | "affiliate_outbound"
  | "copy_discount_code"
  | "partner_inquiry";
```

## Adapter

```ts
interface AnalyticsSink {
  track(
    event: AnalyticsEvent,
    properties?: Record<string, string | number | boolean>
  ): void | Promise<void>;
}
```

Implementácie:

### Demo
`NoopAnalytics` alebo Vercel Analytics podľa plánu.

### Production
Vercel custom events, first-party sink alebo schválená product analytics služba.

### Important current limitation

Vercel page analytics je dostupný aj na nižších plánoch, ale custom events sú viazané na Pro / Enterprise capabilities.

Preto architektúra nesmie natvrdo predpokladať, že custom events budú vždy dostupné.

---

# 24. Privacy / analytics rules

Nikdy neposielať do analytics event properties:

- email,
- meno,
- telefón,
- Stripe customer ID ako raw identifikátor,
- formulárové odpovede,
- health/fitness citlivé údaje.

Analytics event má hovoriť:

```ts
track("click_join_ywc", {
  placement: "hero",
  campaign: "challenge_trencin",
});
```

Nie:

```ts
track("coaching_application", {
  email: "person@example.com",
});
```

---

# 25. Demo error strategy

## Broken external URL

Ak config URL chýba:

- button sa nemá renderovať ako aktívny,
- development console zobrazí warning,
- production/demo UI môže ukázať bezpečný secondary state.

## Missing image

- zachovať layout box,
- fallback na neutrálne brand surface,
- nie broken image icon.

## Motion runtime error

Content zostáva viditeľný.

Animácia nesmie byť podmienkou renderu textu.

## JavaScript disabled

Marketing obsah má byť stále čitateľný v základnej podobe.

---

# 26. Security — DEMO

Demo má nízky backend attack surface, ale stále:

- noindex,
- žiadne secrets v cliente,
- žiadne vlastné formuláre s osobnými údajmi,
- žiadne raw Stripe keys,
- externé odkazy bezpečne,
- žiadny user-generated HTML,
- žiadne arbitrary remote image domains.

### Headers

Minimálne:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` iba pre potrebné capabilities
- frame policy podľa toho, či demo potrebuje embedding.

CSP sa má zaviesť pred production, nie narýchlo spôsobom, ktorý tesne pred prezentáciou rozbije Next/analytics.

---

# 27. PRODUCTION architecture — overview

Po Yanniho súhlase sa systém môže rozšíriť na:

```text
Browser
  │
  ▼
Next.js App Router / Vercel
  │
  ├───────────────► External content/services
  │
  ├───────────────► Stripe
  │                    │
  │                    ▼
  │               Stripe webhooks
  │                    │
  ▼                    ▼
Supabase Postgres ◄─ Entitlement service
  │
  ├── Auth
  ├── RLS
  ├── member data
  ├── event results
  ├── programs
  └── progress
```

---

# 28. Production backend recommendation

## Supabase

Phase 04 odporúča Supabase pre production V1, ak bude potrebný owned backend.

Dôvody:

- Postgres,
- Auth,
- Storage,
- Row Level Security,
- dobrý Next.js integration path,
- nepotrebujeme skladať päť samostatných služieb.

### Dôležité

Supabase sa **neinštaluje do dema iba preto, že ho možno budeme potrebovať neskôr**.

---

# 29. Production authentication

## Member auth

Odporúčaný UX order:

1. email magic link / OTP,
2. prípadne Google/Apple podľa reálnej audience potreby,
3. password iba ak business UX vyžaduje.

### SSR

Pre Next.js production auth používať current Supabase SSR guidance a cookie-based session.

### Security

- auth ≠ authorization,
- všetky protected data tables majú RLS,
- server role secret iba server-side,
- UI checks nie sú security boundary.

---

# 30. Production data model

## 30.1 profiles

```text
profiles
- id uuid PK -> auth.users.id
- display_name
- avatar_url
- role member/admin
- created_at
```

RLS:

- member read/update own profile,
- public nevidí private profile fields,
- admin operations server-side.

---

## 30.2 products

```text
products
- id uuid
- slug
- type program | membership | event | merch
- name
- status draft | active | archived
- stripe_product_id nullable
- stripe_price_id nullable
- created_at
```

---

## 30.3 entitlements

```text
entitlements
- id uuid
- user_id
- product_id
- source stripe | external | admin
- status active | expired | revoked
- starts_at
- ends_at nullable
```

### Rule

Client nikdy nemôže sám vytvoriť active entitlement.

---

## 30.4 programs

```text
programs
- id
- product_id
- slug
- title
- description
- cover_image
- access public | purchase | membership
- published_at
```

---

## 30.5 program_modules

```text
program_modules
- id
- program_id
- position
- title
- description
```

---

## 30.6 program_items

```text
program_items
- id
- module_id
- position
- type video | exercise | text | download
- title
- payload/json metadata
```

---

## 30.7 member_progress

```text
member_progress
- user_id
- program_item_id
- state not_started | in_progress | completed
- completed_at
```

Composite uniqueness:

```text
(user_id, program_item_id)
```

---

# 31. Challenge data model

## events

```text
events
- id
- slug
- title
- city
- venue
- starts_at
- registration_opens_at
- registration_closes_at
- status
- registration_mode external | owned
- external_registration_url
```

## event_participants

```text
event_participants
- id
- event_id
- user_id nullable
- display_name
- public_opt_in
- registration_status
```

## event_results

```text
event_results
- id
- event_id
- participant_id
- category
- result_value
- result_unit
- rank
- verified_at
- verified_by
```

### Important

`rank` sa nemá slepo dôverovať client input.

Results publish flow:

1. admin/import result,
2. validation,
3. verified state,
4. public leaderboard.

---

# 32. Leaderboard production rules

- public leaderboard číta iba `verified` results,
- sorting server-side / database,
- ties musia mať jasné pravidlo podľa event rules,
- result unit nie je natvrdo `kg` pre všetky budúce challenge types,
- user môže mať privacy opt-out pre full profile,
- participant without account môže existovať.

Tak nespájame offline event s povinnou registráciou do appky.

---

# 33. Stripe production architecture

## One-time program

Použiť:

### Stripe Checkout Sessions
`mode: "payment"`

Flow:

```text
Program page
   ↓
POST /api/checkout
   ↓
Stripe Checkout Session
   ↓
Stripe hosted checkout
   ↓
webhook
   ↓
purchase / entitlement
   ↓
success page
```

### Security rule

Access sa neudelí iba preto, že používateľ otvoril:

```text
/success?session_id=...
```

**Webhook je autoritatívny source of truth.**

---

# 34. YWC owned subscription — later

Ak sa YWC presunie na vlastný billing:

- Stripe Billing APIs,
- Checkout Sessions `mode: "subscription"`,
- Stripe Prices,
- Customer Portal na správu subscription,
- webhooky na entitlement lifecycle.

### Nepoužívať

- ručne programovaný renewal loop,
- raw PaymentIntent ako subscription engine,
- deprecated `plan` object.

---

# 35. Stripe webhook model

Route:

```text
POST /api/stripe/webhook
```

Povinné:

1. verify Stripe signature,
2. raw body handling podľa current SDK guidance,
3. idempotency,
4. store processed event ID,
5. transactionally update entitlement,
6. structured log result,
7. return 2xx iba po spracovaní / bezpečnom idempotent skip.

## stripe_events

```text
stripe_events
- event_id PK
- event_type
- processed_at
- status
- error_code nullable
```

### Rule

Webhook musí zvládnuť:

- duplicate delivery,
- out-of-order events,
- retries.

---

# 36. Stripe API version

Pri produkčnej implementácii:

- current documented API version: `2026-02-25.clover`,
- použiť latest compatible official SDK,
- API version pin + webhook endpoint version musia byť explicitné,
- pred production release skontrolovať Stripe changelog.

Phase 04 nepovoľuje „whatever account default happens to be“ ako zámernú verziovaciu stratégiu.

---

# 37. Payment interface abstraction

UI nesmie vedieť, či produkt používa externý link alebo Stripe.

```ts
interface PurchaseTarget {
  kind: "external" | "stripe" | "demo";
  productId?: string;
  href?: string;
}
```

Príklady:

### Training plan dnes
`external`

### Future flagship program
`stripe`

### Concept card v deme
`demo`

Tak sa budúce backend rozhodnutie neprelieva do všetkých komponentov.

---

# 38. Content repository abstraction

Demo:

```ts
class LocalContentRepository
```

Production later:

```ts
class SupabaseContentRepository
```

Interface:

```ts
interface ContentRepository {
  getFeaturedEvent(): Promise<EventRecord | null>;
  getEvents(): Promise<EventRecord[]>;
  getPrograms(): Promise<ProgramRecord[]>;
  getGear(): Promise<GearItem[]>;
  getFeaturedContent(): Promise<ContentItem[]>;
}
```

Page components nesmú importovať Supabase priamo.

To je dôležité pre:

- testovateľnosť,
- demo → production migration,
- možný future CMS.

---

# 39. Admin / CMS decision

## Demo
Žiadny admin.

## Production V1
Začať s repo-managed alebo Supabase-managed content podľa toho, kto bude obsah reálne editovať.

### Ak Yanni / tím potrebuje samostatné self-service editovanie každý týždeň

Až vtedy vybrať:

- custom admin,
- headless CMS,
- alebo Supabase-based admin.

Phase 04 **nevyberá CMS naslepo pred discovery o workflow**.

---

# 40. Storage

## Demo
local static assets v repo.

## Production
Supabase Storage / approved object storage pre:

- profile avatars,
- program media,
- event media,
- downloads.

### Video

Nevkladať veľké premium video súbory priamo do Postgres ani do Vercel repo.

Pre seriózny premium video library neskôr vybrať dedikovaný video streaming provider podľa:

- DRM/access requirement,
- bandwidth,
- encoding,
- pricing,
- analytics.

Toto nie je Phase 08 requirement.

---

# 41. Caching strategy

## Demo

Obsah je statický.

- maximálne prerendering,
- žiadny runtime fetch, ak nie je potrebný.

## Production

Default:

- public content cacheable,
- authenticated member data dynamic/private,
- entitlements never cached across users,
- event leaderboard revalidate podľa event režimu.

### Avoid

- cacheovanie user-specific response bez user key,
- cache invalidation complexity predtým, než existuje problém.

---

# 42. Server Actions vs Route Handlers

## Server Actions

Vhodné pre:

- jednoduché authenticated mutations z interného UI,
- profile update,
- progress update.

## Route Handlers

Vhodné pre:

- Stripe webhook,
- checkout creation,
- public API integration,
- external callbacks.

### Rule

Webhook nikdy ako Server Action.

---

# 43. Form architecture

## Demo

Registration / coaching zostáva external.

Výhoda:

- žiadne PII storage,
- žiadne validation backend work,
- žiadne spam protection tonight.

## Production own forms

Ak sa presunú:

- server-side validation,
- schema validation,
- rate limiting,
- anti-spam,
- explicit consent text,
- error recovery,
- no sensitive data in analytics.

---

# 44. Partnership inquiry

Demo môže použiť:

```text
mailto:yanni.workout@gmail.com
```

iba ako user-supplied contact zo screenshotu.

Production:

- dedicated inquiry form,
- topic,
- company,
- contact,
- campaign type,
- optional budget range,
- consent.

Nevyžadovať 15 polí na prvý kontakt.

---

# 45. Observability

## Demo

- Vercel build logs,
- browser console clean,
- runtime function logs iba ak máme function,
- Speed Insights ak enabled.

## Production

Structured JSON logs:

```json
{
  "level": "info",
  "event": "stripe_webhook_processed",
  "request_id": "...",
  "stripe_event_type": "...",
  "duration_ms": 84
}
```

### Never log

- card details,
- raw webhook secrets,
- passwords/OTP,
- full form content,
- health notes,
- unnecessary PII.

---

# 46. Error boundaries

Next App Router:

- root `error.tsx`,
- route-specific error boundary pre owned checkout/member routes,
- `not-found.tsx`.

Error UI má byť brand-consistent, ale nie dramatický.

Príklad:

**TÁTO ČASŤ TERAZ NIE JE DOSTUPNÁ.**  
`Skús to znova` / `Späť na YANNI WORKOUT`

Žiadne stack traces v production.

---

# 47. Loading states

Demo väčšinou statické = minimum loading skeletonov.

Ak lazy-loadujeme:

- media placeholder zachová size,
- žiadne layout jumping,
- skeleton iba ak operácia reálne trvá.

Zakázané:

- fake 2-sekundový preloader kvôli „premium“ dojmu.

---

# 48. Rack Rail performance model

Rack Rail nesmie na každý scroll event:

- queryovať DOM 50×,
- meniť layout properties,
- volať React state na každý pixel.

Odporúčanie:

- GSAP ScrollTrigger timeline,
- CSS transforms,
- section positions sa refreshnú pri layout change,
- React state iba pri coarse active section change, ak ho vôbec potrebujeme.

Visual progress môže byť CSS transform bez React render loop.

---

# 49. Client state strategy

Žiadny Redux/Zustand iba preto, že ide o platformu.

## Demo

Local component state.

## Production

Stav rozdelíme:

- URL = navigačný/shareable state,
- server = business data,
- component state = ephemeral UI,
- auth session = auth provider,
- cache/query lib iba ak reálne vznikne client fetching problem.

---

# 50. Testing strategy — DEMO

## Type safety

```bash
pnpm typecheck
```

ak script explicitne pridáme.

## Lint

```bash
pnpm lint
```

## Build

```bash
pnpm build
```

Build failure = blocker.

---

## 50.1 Playwright smoke tests

Minimálne:

### Desktop 1440 × 900
- home loads,
- nav works,
- Challenge CTA exists,
- YWC route works,
- no horizontal overflow.

### Mobile 393 × 852
- menu works,
- main CTA is tappable,
- no clipped hero,
- no horizontal overflow,
- external challenge link has correct href.

### Small mobile 375 × 812
- copy remains readable,
- no overlap Rack Rail / content.

---

## 50.2 Browser QA

Automated:

- Chromium,
- WebKit.

Manual pred prezentáciou:

- reálny iPhone Safari,
- notebook Chrome.

Toto je povinné, pretože Yanni demo sa bude reálne ukazovať na iPhone.

---

# 51. Visual regression gate

Pred finálnym buildom uložiť screenshoty:

```text
qa/
├── home-desktop.png
├── home-mobile.png
├── challenge-mobile.png
├── ywc-mobile.png
└── preview-club-mobile.png
```

Po väčšom CSS change ich znovu porovnať.

Nie pixel-perfect CI pipeline pre overnight demo; áno konzistentná manuálna vizuálna kontrola.

---

# 52. Accessibility QA

Pred Phase 09:

- keyboard-only pass,
- focus visibility,
- reduced motion,
- VoiceOver quick pass na iPhone, ak čas dovolí,
- color contrast,
- 200 % zoom desktop,
- touch targets.

Production:

- automated axe checks do Playwright suite.

---

# 53. Performance QA

Pred prezentáciou:

- production Vercel build, nie localhost,
- iPhone cez mobile data alebo throttled network aspoň jeden test,
- Lighthouse ako diagnostika, nie iba skóre,
- skontrolovať LCP element,
- skontrolovať CLS,
- skontrolovať JS long tasks.

### If performance fails

Poradie opráv:

1. hero asset,
2. third-party embeds,
3. unnecessary client components,
4. animation work,
5. font weights,
6. lower-priority visual extras.

Nie: odstrániť základnú typografiu a brand ako prvý krok.

---

# 54. Build-time truth validation

Odporúčam malý helper:

```ts
assertPublishable({
  truthStatus,
  demoMode,
  label,
});
```

### Production behavior

Ak je:

```text
truthStatus = concept
demoMode = false
```

build môže failnúť pre commercial claim / metric records.

Cieľ:

AI ani developer omylom nepublikuje placeholder ako realitu.

---

# 55. Copy validation

Pred delivery:

- Stop Slop pass na marketing copy,
- active voice,
- žiadne fake urgency,
- žiadny generický AI jargon.

Tech constraint:

copy zostáva v `content/`, nie v animation code.

Tak môžeme text upravovať bez toho, aby sme riskovali GSAP regresiu.

---

# 56. Environment variables — future shape

`.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_DEMO_MODE=true

# Optional analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Supabase — production only
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe — production only
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# External destinations
NEXT_PUBLIC_CHALLENGE_TRENCIN_URL=
NEXT_PUBLIC_YWC_URL=
NEXT_PUBLIC_GYMBEAM_AFFILIATE_URL=
NEXT_PUBLIC_YANNICAST_URL=
NEXT_PUBLIC_COACHING_URL=
```

### Important

Ak URL nepotrebuje meniť deploy bez code change, môže ísť cez env.

Stabilné content URLs môžu zostať v typed config.

Nepoužívať env ako improvizovaný CMS pre 50 polí.

---

# 57. Repo rules

## Main branch

Musí byť deployable.

## Feature work

Krátke branches / commits.

## Before major visual phase

Commit.

Príklady:

```text
chore: bootstrap yanni workout demo
feat: build home content architecture
feat: add rack rail motion system
feat: add trencin challenge page
feat: add ywc preview experience
fix: mobile hero overlap and reduced motion
```

---

# 58. Code quality rules

- `strict: true`,
- žiadne `any` bez dôvodu,
- žiadne giant components,
- žiadne inline 200-line GSAP timeline v page file,
- motion logic oddelená od content data,
- no duplicate magic URLs,
- no duplicate color hex values mimo tokens,
- no random z-index,
- no `setTimeout` ako layout fix,
- no `window.innerWidth` na server render branch.

---

# 59. Dependency rule

Každá nová dependency musí odpovedať:

1. čo konkrétne rieši,
2. prečo to nevie browser / Next / CSS,
3. aký bundle / runtime risk pridáva.

### Approved core candidates

- `next`
- `react`
- `react-dom`
- `gsap`
- `@vercel/analytics` optional
- `@vercel/speed-insights` optional
- icon package iba ak potreba
- testing deps v devDependencies.

### Explicitly not required for demo

- Supabase,
- Stripe,
- Zustand,
- Redux,
- React Query/SWR,
- Lenis,
- Framer Motion,
- CMS SDK.

---

# 60. Demo functional scope — exact

## Home — production-looking

Must:

- YANNI WORKOUT hero,
- real Yanni photography,
- Trenčín Challenge spotlight,
- YWC block,
- training/coaching path,
- YanniCast/content,
- YANNI5 / gear,
- story,
- partner CTA,
- Rack Rail / signature system,
- responsive mobile.

---

## Challenge Trenčín — production-looking

Must:

- event identity,
- Trenčín,
- 9. 8. 2026,
- registration CTA → current Google Form,
- rules section iba ak máme verified rules,
- leaderboard **concept preview** clearly marked if results do not exist.

Must not:

- invent exact venue,
- invent prizes,
- invent categories,
- invent participants.

---

## YWC — production-looking sales surface

Must:

- concept benefits,
- premium art direction,
- current destination only if verified.

Must not:

- fake member count,
- fake testimonials,
- fake price.

---

## Member Preview

Must:

- route under `/preview`,
- `DEMO` badge,
- synthetic/example data clearly identified.

Purpose:

ukázať product vision, nie predstierať existujúcu member platformu.

---

## Coaching

Must:

- clear value architecture,
- current external destination.

Must not:

- invent outcomes,
- invent transformation testimonials.

---

## Training

Must:

- current plan can route to supplied destination,
- one future product may exist as concept preview.

---

## Gear

Must:

- show `YANNI5`,
- copy code interaction,
- no invented affiliate products.

---

# 61. Demo presentation reliability mode

Tesne pred cestou / eventom:

1. deploy production-like preview,
2. otvoriť na iPhone,
3. otvoriť na notebooku,
4. preklikať všetky CTA,
5. nechať obe zariadenia stránku raz načítať,
6. uložiť URL do poznámok / domovskú obrazovku / browser tab,
7. mať screenshoty alebo screen recording ako fallback.

Ak je event Wi-Fi zlý, už načítaná stránka a lokálne assets výrazne znižujú prezentačné riziko.

---

# 62. PWA / offline

Do dema nerobíme plnú PWA.

Dôvod:

- service worker cache invalidation je ďalší failure mode,
- nie je potrebný na pitch.

Fallback reliability riešime:

- optimized local assets,
- prednačítaním na zariadeniach,
- screen recording backupom.

---

# 63. Production privacy / legal gates

Pred verejným production launchom:

- Yanniho súhlas s použitím identity a assetov,
- privacy policy,
- terms podľa platených produktov,
- refund/cancellation pravidlá,
- cookie/analytics assessment podľa použitých nástrojov,
- obchodné údaje,
- GDPR review,
- event registration privacy,
- influencer/affiliate disclosure tam, kde je potrebné.

Phase 04 tieto právne texty nevymýšľa.

---

# 64. Production permissions model

Roles:

```text
anonymous
member
admin
```

Možno neskôr:

```text
coach
event_staff
editor
```

Ale nezačíname so šiestimi rolami bez potreby.

### Admin

Admin endpoint nikdy nie je chránený iba:

```ts
if (user.role === "admin") // client-side
```

Authorization musí byť server/db enforced.

---

# 65. Supabase RLS high-level policies

## profiles
- own select/update.

## entitlements
- own select.
- user insert/update denied.
- server service role manages.

## member_progress
- own read/write podľa entitlement logic.

## event_results
- public read only verified rows.
- admin write.

## program content
- public content public,
- premium data cez server / secured policy podľa modelu access.

---

# 66. Database indexing plan

Pri produkcii indexovať access patterns, nie „všetko“.

Minimálne kandidáti:

```text
entitlements(user_id, status)
program_modules(program_id, position)
program_items(module_id, position)
member_progress(user_id, program_item_id)
events(starts_at, status)
event_results(event_id, category, rank)
```

Foreign-key columns používané v joinoch majú mať vhodné indexy.

---

# 67. Transaction boundaries

### Purchase entitlement

Ideálne jedna database transaction:

1. verify event is new,
2. upsert customer mapping,
3. create/update purchase,
4. create/update entitlement,
5. mark stripe event processed.

Ak zlyhá entitlement, webhook sa má retryovať bezpečne.

---

# 68. Idempotency beyond Stripe

Owned event registration / imports:

- import batch ID,
- unique event participant constraints podľa reálneho identifier modelu,
- safe retry.

Nikdy generovať duplicate participant len preto, že request sa zopakoval.

---

# 69. Rate limiting production

Required pre:

- auth attempts podľa provider capabilities,
- public forms,
- checkout creation,
- partner inquiry,
- admin import endpoints.

Nie je potrebné zavádzať custom rate limiter do static dema.

---

# 70. Content Security Policy — production

CSP sa pripraví až keď poznáme reálne:

- analytics domains,
- video embeds,
- Stripe usage,
- Supabase usage.

Cieľ:

- default self,
- minimálne allowlists,
- žiadne permanentné `*`,
- minimalizovať unsafe inline strategy.

Phase 09/production security audit to uzamkne.

---

# 71. Dependency/update strategy

Po demo prezentácii:

- neupgradovať všetko počas hotfixu,
- Dependabot/Renovate až keď vznikne production repo policy,
- security patches prioritne,
- major upgrades v oddelenej branch s visual regression.

---

# 72. Technical decisions intentionally deferred

Nasledujúce rozhodnutia Phase 04 **zámerne nehalucinuje**:

1. custom production domain,
2. YWC current URL,
3. GymBeam affiliate URL,
4. YWC price,
5. coaching price,
6. event exact venue/time/rules,
7. production CMS,
8. premium video provider,
9. email provider,
10. whether Yanni wants owned YWC billing,
11. exact product prices,
12. merch stack.

Žiadna z týchto vecí neblokuje Phase 05.

---

# 73. Inputs that will be needed later

## Before Phase 06/07 final visual lock
Nice-to-have:
- high-resolution hero photo.

## Before Phase 08 final CTA freeze
Required if those buttons are active:
- verified YWC URL,
- verified GymBeam affiliate URL,
- verified coaching destination if current supplied Typeform is not correct.

## Before public production
Required:
- Yanni approval,
- verified business data,
- legal/privacy inputs.

---

# 74. Phase 05 handoff contract

Phase 05 UX/Wireframes dostáva z Phase 04 tieto constraints:

### Homepage
- server-first,
- one hero LCP image,
- one main choreographed motion moment,
- Rack Rail signature,
- no generic card wall.

### Mobile
- primary 393px,
- content-first,
- touch-safe,
- Rack Rail may transform or disappear.

### Challenge
- registration CTA external,
- missing time/venue supported.

### YWC
- persuasion surface,
- no fake metrics,
- member screen is separate demo route.

### Training
- external current plan + concept future program.

### Gear
- code copy works even without affiliate URL.

---

# 75. Phase 08 build order implied by architecture

Keď sa neskôr dostaneme k build-u:

### Build 1 — foundation
- Next bootstrap,
- fonts,
- tokens,
- content registry,
- shell,
- noindex,
- responsive basics.

### Build 2 — home static composition
- all sections,
- real images,
- zero fancy motion first.

### Build 3 — mobile correction
- 393,
- 375,
- 430.

### Build 4 — signature motion
- Hero,
- Rack Rail,
- section transition.

### Build 5 — vertical slice routes
- Trenčín,
- YWC,
- Coaching,
- Training,
- Gear.

### Build 6 — preview tools
- member preview,
- leaderboard preview.

### Build 7 — external links + QA
- verify every URL,
- copy code,
- no broken CTA.

### Build 8 — audit
- performance,
- accessibility,
- real-device.

Toto poradie chráni projekt pred situáciou, kde máme krásny hero animation, ale rozbitý mobil a chýbajúce core routes.

---

# 76. Architecture decision record (ADR)

## ADR-001 — Next.js App Router
**Status:** Accepted  
**Why:** Server-first rendering, route architecture, metadata, image/font optimization, Vercel deployment.  
**Rejected:** single huge SPA.

## ADR-002 — No database in demo
**Status:** Accepted  
**Why:** no demo feature requires persistence; time ide do design/craft.  
**Rejected:** Supabase setup iba „pre istotu“.

## ADR-003 — Native scroll
**Status:** Accepted  
**Why:** iPhone reliability and accessibility.  
**Rejected for demo:** Lenis as mandatory baseline.

## ADR-004 — GSAP only for advanced motion
**Status:** Accepted  
**Why:** one controlled motion runtime.  
**Rejected:** GSAP + Framer Motion + random scroll libs.

## ADR-005 — Local typed content
**Status:** Accepted  
**Why:** truthful, fast, stable, testable.  
**Rejected:** CMS before content workflow exists.

## ADR-006 — External current services
**Status:** Accepted  
**Why:** Phase 01 promise: orchestration first, migration later.  
**Rejected:** fake rebuild of Typeform/Herohero/payment backend overnight.

## ADR-007 — Supabase production candidate
**Status:** Accepted conditionally  
**Why:** Postgres + Auth + Storage + RLS fit future member/event data.  
**Activation:** only after Yanni approves owned functions.

## ADR-008 — Stripe Checkout over custom card form
**Status:** Accepted for production  
**Why:** simpler, safer, current recommended Stripe integration.

## ADR-009 — TruthStatus
**Status:** Accepted  
**Why:** prevent demo concepts from becoming false public claims.

---

# 77. Phase 04 acceptance checklist

## Architecture
- [x] Demo vs production boundaries are explicit.
- [x] Framework and runtime strategy defined.
- [x] Server/client component rule defined.
- [x] Route tree defined.
- [x] Component tree defined.
- [x] content architecture defined.
- [x] external links isolated.
- [x] motion architecture defined.
- [x] responsive strategy defined.

## Quality
- [x] mobile-first acceptance viewport defined.
- [x] accessibility floor defined.
- [x] performance budget defined.
- [x] reduced motion defined.
- [x] image/font strategy defined.
- [x] QA/test plan defined.

## Business integration
- [x] current external services preserved.
- [x] analytics taxonomy mapped.
- [x] future Stripe architecture defined.
- [x] future membership architecture defined.
- [x] challenge/leaderboard data model defined.

## Security / truth
- [x] demo stores no PII.
- [x] no fake production billing.
- [x] future RLS model defined.
- [x] webhook authority defined.
- [x] unverified content handling defined.
- [x] secrets rule defined.

---

# 78. Phase 04 verdict

# **GO → PHASE 05**

Phase 04 nenachádza technickú blokáciu pre UX/wireframing ani následný visual concept.

Máme jasný technický kontrakt:

> **Zajtrajšie demo bude vizuálne ambiciózne, ale technicky úmyselne jednoduché.**

Jeho premium pocit nebude stáť na množstve backend služieb. Bude stáť na:

- art direction,
- skutočných Yanni assetoch,
- typografii,
- mobile execution,
- Rack Rail signature,
- choreografii,
- pravdivom product story,
- bezchybných CTA.

Backend complexity pridáme až vtedy, keď začne vytvárať business value.

---

# 79. Source / implementation reference notes

Technické pravidlá boli kalibrované podľa aktuálnych oficiálnych zdrojov k 8. augustu 2026:

## Next.js
- App Router / Getting Started: https://nextjs.org/docs/app/getting-started
- Installation: https://nextjs.org/docs/app/getting-started/installation
- Image Component: https://nextjs.org/docs/app/api-reference/components/image
- Font optimization: https://nextjs.org/docs/app/getting-started/fonts
- Route Handlers: https://nextjs.org/docs/app/api-reference/file-conventions/route

## Node
- Release/LTS policy: https://nodejs.org/en/about/previous-releases

## GSAP
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- `gsap.matchMedia()`: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/

## Vercel
- Next.js on Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- Web Analytics: https://vercel.com/docs/analytics
- Custom events: https://vercel.com/docs/analytics/custom-events
- Speed Insights: https://vercel.com/docs/speed-insights
- Function logs: https://vercel.com/docs/functions/logs

## Supabase
- Next.js quickstart: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- Auth: https://supabase.com/docs/guides/auth
- SSR: https://supabase.com/docs/guides/auth/server-side
- RLS guidance: https://supabase.com/docs/guides/database/postgres/row-level-security

## Stripe
- API versioning: https://docs.stripe.com/api/versioning
- Checkout Sessions: https://docs.stripe.com/payments/checkout
- Billing/subscriptions: https://docs.stripe.com/billing/subscriptions
- Customer Portal: https://docs.stripe.com/customer-management
- webhook guidance: https://docs.stripe.com/webhooks

## Web performance
- Core Web Vitals: https://web.dev/articles/vitals

**Version rule:** pred Phase 08 bootstrapom sa current package versions overia ešte raz a potom sa zamknú lockfile. Phase 04 zámerne nepoužíva voľné floating verzie v production deploymente.
