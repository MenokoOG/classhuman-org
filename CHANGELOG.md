# Changelog

All notable changes to classHuman.org are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

**Every PR includes a CHANGELOG entry. Non-negotiable.**

## [Unreleased]
### Security
- Moved internal draft docs (Ag3nt24 / HADES / CIPSE, `upcoming-layers/`) out of `public/`
  into `docs/` so they are no longer web-served or downloadable from the live site.

## [1.2.1] — 2026-07-06
### Changed
- Stack copy now reflects true design intent (from `public/upcoming-layers/` drafts):
  Ag3nt24 = the proof layer (gated actions, signed append-only receipts, failed gates
  route to HADES); HADES = Human Assisted Diagnostic Evaluation System (containment →
  diagnosis → validate & return to service) or, if irreparable, harvest lessons →
  Human Authorized Deactivation Evidence Sequence — all documented to the on-chain
  ledger. Flagged "white papers in active drafting" on-site; CONTENT.md and
  CLASSHUMAN.md updated to match.

## [1.2.0] — 2026-07-06
### Added
- Visuals upgrade from `docs/design_handoff_visuals_upgrade/` (Claude design handoff):
  - `src/lib/taco-controls.ts` — canonical stage data, Inverse Speed Rule math, risk
    classes, guardrail AND-gate (framework-agnostic, from Math Models v1.0).
  - Upgraded TACO stage selector: per-stage colors, letter badges, function +
    “Prevents” + operational test detail panel.
  - Inverse Speed Rule interactive demo (uncertainty slider → speed/verification/scope
    bars + verdict) on Product.
  - Guardrail gate section: risk-class routing table + illustrative escalation queue.
  - Core Product Law card + stat row (4 stages · SHA-256 · Risk > 0.50) on Product.
  - Product stack rows (TACO Building·MVP / Ag3nt24 Next / HADES Horizon) shared by
    Home + Product. Ag3nt24/HADES copy is placeholder per Handler until real briefs land.

### Fixed
- Contrast: stronger safe-text mixes, `--ch-primary-text` for nav active state (Amber on
  dark, deepened Ember on light), dark-mode stage-text guard. Product page a11y 100.
- Replaced invalid ARIA tablist pattern on stage selector with `aria-pressed` buttons +
  `aria-live` detail panel.

## [1.1.0] — 2026-07-06
### Added
- Brand graphics (canonical geometry, colors via `var(--ch-*)` so they re-theme with
  season/mode): cH monogram in Header + Footer, control-node mark as Home hero graphic,
  decorative trace-line accents (Home hero/CTA, Product definition). Slow amber-node
  pulse animation, disabled under `prefers-reduced-motion`.

## [1.0.2] — 2026-07-06
### Added
- TACO Decision Loop diagram (infographic, lazy-loaded) on the Product page’s four-stages
  section, from `public/whitepaper-models/`.
- Credential links on Product page: White Paper v1.0 PDF (“READ THE PDF”) and
  Mathematical Model v0.1 (“READ THE MODEL”).

## [1.0.1] — 2026-07-05
### Fixed
- WCAG AA contrast: added mode-aware text-safe tokens (`--ch-*-text`, derived from brand
  tokens via `color-mix` — no hardcoded hex) for Stone/Sage/Cool/Amber small text on both
  light and dark surfaces, including the wordmark's "class" half. Lighthouse on the
  production build: performance 99, accessibility 100, best-practices 100, SEO 100.

## [1.0.0] — 2026-07-05
### Added
- SEO: per-page `<title>` + meta description, Open Graph + canonical tags,
  `public/sitemap.xml`.
- `public/robots.txt` — search engines allowed; AI-training scrapers (GPTBot, CCBot,
  Google-Extended, ClaudeBot, PerplexityBot, Bytespider, etc.) disallowed.
- `public/.well-known/security.txt` (RFC 9116) and proprietary `LICENSE`.
- Footer link to the classHuman GitHub org.
- Product page: TACO definition + core law + thesis, steppable four-stage loop visual
  (each stage with its test), credentials (White Paper v1.0, Model v0.1, TACO-UDD),
  later layers (Ag3nt24, HADES, Art line).
- Story page: founders' story from `docs/FOUNDERS-STORY.md` verbatim, with Tonya's photo.
- About page: team cards with photos (Lawrence ×2 incl. Army, Nicale), Lawrence's public
  links (portfolio, LinkedIn, GitHub), how-we-work, Scrimba credential. Contact page:
  mailto only, no trackers.
- Team/story photos in `public/images/`.
- Home page: Hero, LAHA section (linked to /story), TACO Loop teaser with core law,
  Roadmap (TACO · Ag3nt24 · HADES · Art line, in order), closing CTA. Copy from CONTENT.md.
- Shared layout: sticky Header (wordmark with class/Human split, nav, Ink↔Bone mode
  toggle with localStorage persistence + pre-paint restore) and Footer (tagline, status
  line). Scroll-to-top on route change. Dark mode shifts "Human" to Amber per brand rule.
- Vite + React + Tailwind CSS v4 + React Router scaffold: `package.json`, `vite.config.js`,
  `index.html`, `src/` with five route placeholders (Home, Product, Story, About, Contact).
- Brand tokens wired: `brand/tokens.css` imported globally, `applySeason()` on load,
  Tailwind `@theme inline` mapping of all `--ch-*` vars, Ink↔Bone mode via `data-mode`
  (light default, toggle in Header), Amber `:focus-visible`, `prefers-reduced-motion` respected.
- Favicon from canonical trace monogram (`public/favicon.svg`).
- Agent build scaffolding: `CLAUDE.md` brief, `docs/` (PRD, design system, content),
  `PLAN.md`, `.claude/` subagents + settings + `/plan` command.
- Engineering standards: `.gitignore` (protects `env.txt`), `.env.example`, `VERSION`,
  `VERSIONING.md`, `DOCUMENTATION.md`, `SECURITY.md`, ADR-0001.
- Netlify config (`netlify.toml`, `public/_redirects`).
- Canonical brand bundle in `brand/` (tokens.css, season-switch.js, SVG marks, handoff,
  brand board) with four-season theming (Autumn default).
- Founders' story `docs/FOUNDERS-STORY.md` (in memory of Tonya); Story page added to PRD.

### Changed
- Corrected name spelling site-wide and in all docs: **Tonya** (was "Tanya").
- Removed the Art line from the public roadmap — site copy keeps to software
  (Handler decision, 2026-07-05). It remains on the internal company roadmap.
- Default UI mode set to **light (Bone)** with toggle (Handler decision, 2026-07-05).
- Contact email confirmed → lawrencejefferson@classhuman.org (CONTENT.md updated).

## [0.1.0] — 2026-07-04
### Added
- Repo initialized with brand board, company context, and soul personas.

---
*LAHA — Love All Humans Always.*
