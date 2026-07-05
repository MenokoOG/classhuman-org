# PRD — classHuman.org

**Owner:** Lawrence Jefferson II (Handler) · **Lead:** Rune Onyx · **Status:** ready to build

## Goal
Ship a warm, tactical, accessible marketing + product site that explains classHuman AI and
TACO Loop, and lets people reach out. Reflect LAHA. Humans hold final authority.

## Stack (decided)
- **Vite + React + Tailwind CSS**
- **React Router** for multi-page routing
- Deploy: **Netlify** (build `npm run build`, publish `dist`, SPA redirect required)
- Google Fonts: Hanken Grotesk + Space Mono
- No backend for v1. If AI features are added later, use a serverless function — never
  expose keys in the bundle.

## Pages & sections
1. **Home (`/`)** — Hero → LAHA → TACO Loop teaser → Roadmap → CTA to Product/Contact.
2. **Product (`/product`)** — TACO Loop full: definition, core law, four stages (with tests,
   as an animated/steppable trace loop), credentials (White Paper v1.0, Model v0.1,
   TACO-UDD). Roadmap of Ag3nt24 / HADES as "later layers" (software only — no Art
   line on the public site).
3. **Story (`/story`)** — the founders' story, in memory of Tonya, from
   `docs/FOUNDERS-STORY.md` **verbatim**. Quiet, dignified, generous spacing. Linked from
   Home and About. This anchors the whole site.
4. **About (`/about`)** — Team (Lawrence, Nicale), how-we-work, Scrimba credential.
5. **Contact (`/contact`)** — mailto or simple form (no trackers).
6. **Shared** — Header (wordmark + nav), Footer (tagline, status line, LAHA).

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
