# AGENTS.md — YANNI WORKOUT

## Project goal
Build a premium Slovak YANNI WORKOUT creator fitness platform demo based on the Phase documents and approved Variant A reference.

## Source priority
1. Phase product/UX/design/technical documents.
2. Approved Variant A for visual fidelity.
3. Supplied Yanni assets.
4. Existing code.

## Non-negotiables
- Never invent prices, metrics, testimonials, results, partner counts, sponsor logos, challenge details, or achievements.
- Use real supplied Yanni imagery; avoid remote/hotlinked article imagery as the primary brand visuals.
- Public copy must be polished Slovak, not internal implementation commentary.
- Mobile is a first-class design, not a compressed desktop.
- Preserve RACK / FLASH PERFORMANCE and THE RACK RAIL.
- No generic SaaS aesthetics, card walls, random gradients, glassmorphism, or stock fitness imagery.
- Current live one-page pitch mode is not the target; rebuild it as a multi-route platform.

## Required checks before completion
- build
- lint
- typecheck
- desktop screenshot 1440×900
- mobile screenshot 393×852
- route smoke tests
- interaction checks
- no horizontal overflow
- no relevant console errors
- reduced-motion check
- truth/hallucination scan

## Coding style
- TypeScript strict if using Next.js/React.
- Server-first architecture where appropriate.
- Keep client components small.
- Keep motion logic separate from content data.
- Centralize external destinations.
- Centralize design tokens.
- Avoid giant components and magic values.
- Do not add dependencies without a concrete reason.
