# Changelog

All notable changes to classHuman.org are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

**Every PR includes a CHANGELOG entry. Non-negotiable.**

## [Unreleased]

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
