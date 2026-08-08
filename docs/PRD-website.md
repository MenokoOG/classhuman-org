# PRD — classHuman.org

**Owner:** Lawrence Jefferson II (Handler) · **Lead:** Rune Onyx · **Status:** ready to build

## Goal
Ship a warm, tactical, accessible marketing site that explains **what classHuman AI builds
for clients and what it builds with**, and lets people reach out. Reflect LAHA. Humans hold
final authority.

> **Revised 2026-08-07 (CLASSHUMAN.md v1.6).** The site previously led with TACO Loop as the
> product. It no longer does. The front door is client services plus the Tools We Use page.
> Our own research — TACO Loop, Ag3nt24, HADES — is **paused** and lives on `/research`,
> marked honestly. It never appears as an offering and never appears in client-facing copy.

## Stack (decided)
- **Vite + React + Tailwind CSS**
- **React Router** for multi-page routing
- Deploy: **Netlify** (build `npm run build`, publish `dist`, SPA redirect required)
- Google Fonts: Hanken Grotesk + Space Mono
- No backend for v1. If AI features are added later, use a serverless function — never
  expose keys in the bundle.

## Pages & sections
1. **Home (`/`)** — Hero (services-led) → LAHA → what we build for you → tools teaser →
   CTA to Services/Contact. **No TACO Loop teaser in the hero.**
2. **Services (`/services`)** — the commercial front door. Four offerings.
3. **Tools We Use (`/tools`)** — **NEW.** The frameworks, methods, algorithms, harnesses and
   patterns we actually use, grouped by purpose. This is the credibility page. Nothing
   aspirational, nothing of ours that is unproven.
4. **Legacy (`/legacy`)** — modernization. **Several patterns listed, not one.** Strangler
   fig is one entry in the list, never the headline method.
5. **Research & Development (`/research`)** — **NEW.** TACO Loop (L0) → Ag3nt24 (L1) →
   **HADES (L2)**, all marked paused, with a banner saying so. HADES is restored here, at
   Layer 2 above Ag3nt24 — not as a rehab destination below it. No detail route for HADES
   yet (`hasPage: false` in `src/lib/products.js`); surface it on this page only.
6. **Product (`/product`)** — TACO Loop detail. Route kept for SEO and existing links, but
   it is now a research page: definition, core law, four stages, credentials (White Paper
   v1.0, Model v0.1, TACO-UDD), status **R&D · paused**.
7. **Asymptote (`/asymptote`)** — shipped tooling. Not part of the paused research.
8. **Skills (`/skills`)** — free agent skills. Free tier ships before any paid bundle.
9. **Story (`/story`)** — the founders' story, in memory of Tonya, from
   `docs/FOUNDERS-STORY.md` **verbatim**. Quiet, dignified, generous spacing. Linked from
   Home and About. This anchors the whole site. **No photograph of Tonya.**
10. **About (`/about`)** — Team (Lawrence, Nicale), how-we-work, **Education section**
    (BS in AI at AMU + coursework), Scrimba credential. Nicale is **not** listed as CFO.
11. **Contact (`/contact`)** — mailto or simple form (no trackers).
12. **Shared** — Header (wordmark + nav), Footer (tagline, status line, LAHA). Nav leads
    with Services and Tools; Research sits after them, not in the primary position.

All copy comes from `docs/CONTENT.md`. All visual tokens from `docs/DESIGN-SYSTEM.md`.

## Requirements
- **Responsive** mobile-first. Works 320px → wide desktop.
- **Light + dark UI modes** (Ink↔Bone). Respect system preference; allow toggle.
- **Accessibility:** WCAG AA minimum (many tokens hit AAA). Keyboard nav, visible Amber
  focus, semantic HTML, `prefers-reduced-motion` respected. Public copy: "accessibility-first design."
- **Performance:** Lighthouse ≥ 90 across the board. Lazy-load heavy visuals. Preload fonts.
- **SEO:** per-page `<title>`/meta, Open Graph tags, sitemap, favicon = Trace monogram (Mark A).
- **Brand fidelity:** consume `brand/tokens.css` via `var(--ch-*)`; two fonts only; canonical
  SVG marks from `brand/assets/`. Recreate hex/geometry exactly. Trace grammar used sparingly.
- **Seasonal themes:** four seasons (Autumn default) via `data-season` on `<html>`, wired with
  `brand/season-switch.js` (auto by date + manual override). Every season ≥4.5:1 for text.
- **No invented content.** Credentials cited exactly as in CONTENT.md.

## Non-goals (v1)
- No CMS, no blog, no auth, no e-commerce, no live TACO demo backend.
- No COIL / OKO Forge references anywhere.

## Acceptance criteria
- [ ] `npm run build` passes clean; `dist` deploys to Netlify with working routes (no 404 on refresh).
- [ ] All four pages present, responsive, both UI modes.
- [ ] Wordmark uses the class/Human color split.
- [ ] TACO four-stage loop is visual and matches CONTENT.md tests.
- [ ] Contrast verified against DESIGN-SYSTEM.md ratios.
- [ ] No secrets in the bundle; `env.txt` git-ignored.
- [ ] CHANGELOG updated; VERSION set; README quickstart works.

## Suggested build order (small steps)
1. Scaffold Vite + React + Tailwind + Router; wire tokens + fonts.
2. Header/Footer + wordmark + light/dark toggle.
3. Home page sections.
4. Product page (TACO loop visual).
5. About + Contact.
6. Netlify config, SEO/meta, favicon, Lighthouse pass.

---
*LAHA — Love All Humans Always.*
