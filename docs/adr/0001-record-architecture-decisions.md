# 1. Record architecture decisions

Date: 2026-07-04 · Status: Accepted

## Context
We need a lightweight, durable record of significant technical decisions on classHuman.org
so future contributors (human and AI) understand *why*, not just *what*.

## Decision
We will use Architecture Decision Records (ADRs), one Markdown file per decision in
`docs/adr/`, numbered sequentially. Each records context, the decision, and consequences.
This file is both the first ADR and the template.

Decided for v1: **Vite + React + Tailwind + React Router**, deployed to **Netlify** as a
static SPA with a redirect fallback. Rationale: matches the team's existing Netlify/React
workflow, fast to ship, easy to extend. Trade-off: client-side routing needs a redirect
rule and has weaker default SEO than SSG — accepted for a small marketing site, revisit if
content/SEO needs grow (Astro or Next as future options).

## Consequences
- Every significant decision after this gets its own ADR (`0002`, `0003`, …).
- ADRs are immutable once Accepted; supersede rather than edit (mark old as Superseded).
- Keeps `CLAUDE.md` lean — decisions live here.

---
*LAHA — Love All Humans Always.*
