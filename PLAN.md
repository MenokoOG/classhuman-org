# PLAN.md — classHuman.org

> **Rune Onyx:** replace this template with your real implementation plan **before coding.**
> Read `CLAUDE.md`, `docs/PRD-website.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT.md` first.

## Current focus
**Repositioning pass — CLASSHUMAN.md v1.6 (2026-08-07).** The v1 build shipped, but the site
tells the old story: TACO Loop as the active product, HADES scrapped, strangler fig as *the*
method. The context layer has been rewritten; the pages have not.

**Context files updated (branch `claude/v1.6-context-realign`):** `CLASSHUMAN.md` (v1.6),
`docs/CONTENT.md`, `docs/PRD-website.md`, `src/lib/products.js`, `src/banshee/knowledge.js`,
`docs/adr/0005-company-before-research.md` (0004 marked superseded).

## Steps — v1 build (done)
- [x] 1. Scaffold Vite + React + Tailwind + React Router; add color/font tokens
- [x] 2. Header + Footer + wordmark (class/Human split) + light/dark toggle
- [x] 3. Home page (Hero, LAHA, TACO teaser, Roadmap, CTA)
- [x] 4. Product page — TACO four-stage loop visual + credentials
- [x] 5. About + Contact pages
- [x] 6. Netlify config, `_redirects`, SEO/meta, favicon (Lighthouse pass still pending live)

## Steps — v1.6 repositioning (next)
- [x] 0. Rewrite the context layer so nothing contradicts (see Current focus)
- [ ] 1. **Home** — services-led hero; drop the TACO teaser; tools teaser instead
- [ ] 2. **`/tools`** — NEW Tools We Use page. **Blocked: needs the actual tool list from Lawrence.**
- [ ] 3. **`/research`** — NEW R&D page; move TACO / Ag3nt24 / HADES here, paused banner
- [ ] 4. **`/legacy`** — several patterns, not one; strangler fig demoted to a list entry
- [ ] 5. **`/about`** — Education section (BS in AI, AMU + coursework); drop Nicale's "CFO"
- [ ] 6. **`/product`** — reframe as research detail, status R&D · paused (route kept for SEO)
- [ ] 7. Nav + Footer — lead with Services and Tools; Research after
- [ ] 8. Sweep `src/pages/*` and `index.html` for surviving old-framing copy; rebuild; deploy

## Decisions / open questions
- `docs/upcoming-layers/` holds Ag3nt24 / HADES / CIPSE draft docs — **internal**, moved
  out of `public/` (2026-07-06) so they are not web-served. When papers are FINAL and
  Handler approves, move chosen files to `public/` and link from the stack rows.
- Handler is preparing design work in Claude design — deliverables incoming.
- Contact email: **lawrencejefferson@classhuman.org** (confirmed by Handler, 2026-07-05).
- UI mode: **forced default + toggle** (no system-pref auto). Default = **light (Bone)**
  per Handler, 2026-07-05. `data-mode` on `<html>`, persisted in localStorage.
- Season: auto-by-date via `applySeason()`; `data-season="autumn"` is the no-JS fallback.

## Log
- 2026-07-05 · Step 1 shipped. Vite + React + Tailwind v4 + Router scaffold; tokens.css
  imported globally with live `@theme inline` mapping; five placeholder routes; favicon
  from trace monogram; `npm run build` passes clean.
- 2026-07-06 · v1.0.2 shipped. Product page: TACO Decision Loop diagram (lazy-loaded
  infographic) + links to White Paper v1.0 PDF and Math Models v1 from the credential
  cards (`public/whitepaper-models/`). Agent deferred (cost control) — key already in
  Netlify env, spec preserved in session plan.
- 2026-07-05 · Step 2 shipped. Layout with sticky Header (wordmark, nav, mode toggle) and
  Footer (tagline + status line). Default flipped to light (Bone); mode persisted in
  localStorage, restored pre-paint. Dark mode shifts "Human" to Amber per brand rule.
  Contact email corrected in CONTENT.md. Build passes.
- 2026-07-05 · Step 3 shipped. Home page: Hero, LAHA (links to /story), TACO teaser with
  core law, Roadmap (4 items, TACO marked ACTIVE), closing CTA. All copy from CONTENT.md.
  Build passes.
- **Photos: Lawrence and Nicale only.** Tonya's photograph was removed 2026-08-07 by
  Handler's ruling — the story stays, the picture does not. Do not re-add
  `public/images/tonya.jpg` or any portrait of her. (The log entries below predate this.)
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
