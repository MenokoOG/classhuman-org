# classHuman.org Website — Use Case

**One-liner:** The production marketing and product website for classHuman AI, live at https://classhuman.org.
**Status:** Production (v1.2.2, deployed on Netlify)
**Stack:** React 18, Vite 6, Tailwind CSS 4, React Router 6, Netlify (build + `_redirects` + sitemap/robots)

## Problem
classHuman AI needed a credible public home that explains decision-control for human-agentic collaboration to visitors, partners, and hiring managers — and it had to be maintainable by both a human founder and AI agents working from the same source of truth. The site also carries the company's story and brand, so consistency and care mattered as much as code.

## What I Built
I built a Vite + React single-page application with React Router pages, styled with Tailwind 4 on top of a canonical brand token system (`brand/tokens.css` plus a `season-switch.js` seasonal theming script) so the visual identity lives in tokens, not scattered hex codes. The repo is docs-first: a PRD, design system spec, approved content doc, and architecture decision records all live in `docs/`, and an agent build brief (`CLAUDE.md`) plus agent personas in `soul/` let AI collaborators work inside explicit guardrails. Production ops are real — Netlify config, redirects, sitemap, robots.txt, a SECURITY.md covering secret handling, and accessibility-first design throughout. Versioned releases are tracked in CHANGELOG.md and VERSION.

## Skills Demonstrated
React, Vite, Tailwind CSS 4, React Router, design-token/brand systems, Netlify deployment and DNS/redirect config, docs-driven development (PRD, ADRs, design system), AI-assisted engineering workflows, accessibility-first design, security hygiene for frontend secrets

## Outcome / Evidence
Shipped and live in production at https://classhuman.org, deployed via Netlify with a built `dist/` output, sitemap, robots.txt, and redirects. Versioned to v1.2.2 with a maintained changelog. This is the company's real public site, not a demo.

## Interview Talking Points
- The repo is docs-first: PRD, design system, and content docs were written before code, and ADRs record why decisions were made — the same discipline I'd bring to a team codebase.
- Brand lives in a token system (`brand/tokens.css` + seasonal theme switcher), so restyling the site is a token change, not a hunt through components.
- It demonstrates human-plus-AI process engineering: explicit agent briefs, personas, and guardrails let AI collaborators contribute safely to a production property.

---
LAHA — Love All Humans Always.
