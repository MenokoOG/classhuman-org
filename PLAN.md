# PLAN.md — classHuman.org

> **Rune Onyx:** replace this template with your real implementation plan **before coding.**
> Read `CLAUDE.md`, `docs/PRD-website.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT.md` first.

## Current focus
Site complete — all six steps shipped. Next: deploy to Netlify + Lighthouse audit on the
live URL.

## Steps
- [x] 1. Scaffold Vite + React + Tailwind + React Router; add color/font tokens
- [x] 2. Header + Footer + wordmark (class/Human split) + light/dark toggle
- [x] 3. Home page (Hero, LAHA, TACO teaser, Roadmap, CTA)
- [x] 4. Product page — TACO four-stage loop visual + credentials
- [x] 5. About + Contact pages
- [ ] 6. Netlify config, `_redirects`, SEO/meta, favicon, Lighthouse pass

## Decisions / open questions
- Contact email: **lawrencejefferson@classhuman.org** (confirmed by Handler, 2026-07-05).
- UI mode: **forced default + toggle** (no system-pref auto). Default = **light (Bone)**
  per Handler, 2026-07-05. `data-mode` on `<html>`, persisted in localStorage.
- Season: auto-by-date via `applySeason()`; `data-season="autumn"` is the no-JS fallback.

## Log
- 2026-07-05 · Step 1 shipped. Vite + React + Tailwind v4 + Router scaffold; tokens.css
  imported globally with live `@theme inline` mapping; five placeholder routes; favicon
  from trace monogram; `npm run build` passes clean.
- 2026-07-05 · Step 2 shipped. Layout with sticky Header (wordmark, nav, mode toggle) and
  Footer (tagline + status line). Default flipped to light (Bone); mode persisted in
  localStorage, restored pre-paint. Dark mode shifts "Human" to Amber per brand rule.
  Contact email corrected in CONTENT.md. Build passes.
- 2026-07-05 · Step 3 shipped. Home page: Hero, LAHA (links to /story), TACO teaser with
  core law, Roadmap (4 items, TACO marked ACTIVE), closing CTA. All copy from CONTENT.md.
  Build passes.
- Pending: Handler has photos of Lawrence, Nicale, and Tonya — add to About (team) and
  Story pages when delivered. Drop into `public/images/`.
- 2026-07-05 · Steps 4–5 shipped. Product page: definition, core law, steppable four-stage
  TACO loop (each stage with its test), credentials, later layers. Story page: founders'
  story verbatim with Tonya's photo. About: team cards with photos + Lawrence's public
  links (portfolio, LinkedIn, GitHub), how-we-work, Scrimba credential. Contact: mailto,
  no trackers. Photos delivered to `public/images/`. Build passes.
- 2026-07-05 · Step 6 shipped. Per-page titles + meta descriptions (route map in Layout),
  Open Graph + canonical in index.html, sitemap.xml, robots.txt (search allowed,
  AI-training scrapers disallowed), RFC 9116 security.txt, proprietary LICENSE.
  Footer GitHub org link. Static files verified in dist. Lighthouse audit pending on
  the live Netlify URL.

---
*LAHA — Love All Humans Always.*
