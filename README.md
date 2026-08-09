# YANNI WORKOUT — Phase 09 Polished Demo

Private interactive concept based on approved Variant A and Phase 01–07 documentation, with Phase 09 audit/polish applied.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Important

This is a private/noindex concept demo. It intentionally contains no production billing/auth, fake prices, fake member counts, fake challenge categories, or fake results.

Verified/user-supplied destinations are preserved where available. The YWC external destination and a GymBeam affiliate URL remain unset until verified; the YANNI5 copy interaction is active.

## Core routes

- `/`
- `/vyzvy/trencin-2026/`
- `/ywc/`
- `/coaching/`
- `/trening/`
- `/obsah/`
- `/yannicast/`
- `/vybava/`
- `/yanni/`
- `/spolupraca/`
- `/preview/klub/`
- `/preview/leaderboard/`

## Phase 09 polish

- client-facing copy cleanup
- YWC mobile row visibility fix
- mobile menu accessibility/focus hardening
- accordion ARIA/state polish
- first-viewport mobile Rack Rail correction
- leaderboard mobile overflow fix
- image payload optimization
- reduced-motion/focus QA
- 12-route mobile render audit
