# Changelog

All notable changes to classHuman.org are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

**Every PR includes a CHANGELOG entry. Non-negotiable.**

## [Unreleased]
### Added
- **"How we build" section on `/services`.** Publishes the build stack: Strands Agents
  (strandsagents.com) named as the primary framework for custom and production agent builds —
  open-source, model-driven, provider-portable — alongside big-tech agent tooling. States
  fluency across foundation and frontier models and their pipelines, with a platform grid:
  AWS (Amazon Bedrock, SageMaker, Kiro), Google (AI Studio), IBM (watsonx, IBM Bob), and
  Microsoft (Agent Framework). Existing tokens and UI kit; no new dependencies.
- **`/credentials` — Education, Training & Certifications.** A data-driven page listing
  Lawrence's education (AMU associate's degree, 24 years U.S. Army), intensive engineering
  programs (V School / UVU full-stack JavaScript, Syracuse University boot camp), 2026
  AI-agent professional certificates and specializations (AWS Generative AI & AI Agents with
  Amazon Bedrock; Vanderbilt Generative AI Software Engineering and AI Agents with Model
  Context Protocol; Google AI Professional Certificate; Google Cybersecurity Certificate),
  Python Institute PCAP/PCEP, ITIL 4 Foundation, Udemy AI-engineering courses, and IBM
  SkillsBuild badges. Linked from an "Education & Certifications" button on Lawrence's card
  on `/about`; route, page metadata, and sitemap entry added. Names, issuers, and dates
  only — no transcripts or personal documents. Styled with the existing UI kit; no new
  dependencies.
- **`/services` — "Work With Us."** The commercial headline of the site: four kinds of
  engagement (agents and agentic systems on modern platforms and open-source frameworks; legacy
  modernization; custom work — our own harness and security-agent software; enabling client
  teams), plus the five-gate control layer — registration, validation, revocation, escalation,
  human-in-the-loop — written out with the failure each gate prevents. Fail-closed throughout.
  Linked from the header, both Home CTA groups, and the Ag3nt24 page.
- **`/skills` — free, installable agent skills.** Publishes the skills classHuman uses on real
  engagements: `legacy-modernization-scout` and `agent-gate-review`. Each is downloadable as a
  `.skill` package and as a plain `SKILL.md`, served from `public/skills/`. No signup, no email
  gate, no tracker.
- **Banshee knowledge entry for `/skills`**, and a rewritten `services` entry covering the four
  engagement types and the five gates.
- **Proof section on the Legacy Modernization page** (`/legacy`): a "PROOF · IN PRODUCTION"
  block with two production case-study cards — GunKustom.com (full platform rebuild; NestJS +
  Python vendor-feed normalization, modular-monolith gateway, two-tier idempotent product model)
  and PowAlert.com (MERN real-time snowfall alerts; cron fetch cycles, 24h duplicate suppression,
  phone validation, batched DB I/O). Each card carries the "OKO Forge LLC, now classHuman AI LLC"
  attribution and an external link. Styled with existing brand tokens and the shared UI kit; no
  new dependencies.
- **Founder digital-twin entry points.** A "Chat with Lawrence's digital twin" link in the Home
  hero (`ljefferson-menoko-site.netlify.app`), and Banshee can route visitors there
  conversationally. Banshee sources now support external links (optional `href` on knowledge
  entries; rendered as a new-tab chip in the widget).

### Fixed
- **Tonya photo not rendering on mobile** (`/story`). `public/images/tonya.jpg` was a
  progressive JPEG carrying an embedded ICC color profile — it rendered on desktop but blank on
  iOS Safari. Re-encoded to a clean baseline sRGB JPEG (profile stripped, colors preserved, same
  945×945). No markup change.

### Removed
- **HADES (`/hades`) removed from the site.** Founder ruling 2026-07-31: HADES is scrapped and
  archived. Deleted `src/pages/Hades.jsx`, its route and page metadata in `App.jsx`, its entry in
  `src/lib/products.js`, its Layer 2 row in `src/components/Stack.jsx`, and its Banshee knowledge
  entry. `/hades` now 301s to `/services` in `public/_redirects`, and the sitemap drops it.
  The escalation and human-in-the-loop capabilities HADES carried are **not** scrapped — they are
  re-homed as part of the client security-agent offering on `/services`. See
  `docs/adr/0004-scrap-hades-lead-with-client-engineering.md`.

### Changed
- **Ag3nt24's fourth step is now Deny, not Route.** With HADES gone, a failed gate no longer
  routes anywhere: it denies the action, writes the refusal to the chain, and escalates to a
  named human. Updated on `/ag3nt24` (flow heading, step 4, hero CTA, "where it sits"), in
  `products.js`, in `Stack.jsx`, and in the Banshee knowledge pack.
- **Positioning copy leads with client engineering.** TACO Loop and Ag3nt24 are presented as R&D —
  the discipline underneath the work — rather than as the thing being sold. Adjusted on `/story`,
  `/demos`, the Ag3nt24 eyebrow, and `QUICK_FACTS` in the Banshee knowledge pack.
- **Header navigation** gains "Work With Us" and "Skills".
- **Banshee upgraded to a proactive classHuman expert.** Rewrote the serverless system prompt to
  give the agent latitude — synthesize across topics, proactively offer the best next step, and
  ask one clarifying question when needed (up to ~140 words) — while keeping the hard guardrails
  (grounded-only facts, no commitments, no private/health details, no actions). Generation budget
  raised (temp 0.4, 420 tokens).
- **Deeper Banshee knowledge pack** (`src/banshee/knowledge.js`): new entries for the founder's
  digital twin, how to work with classHuman, why classHuman (the discipline layer), and
  credentials/track record; corrected two stale facts (LLC now registered; Nicale's role).

### Security
- **React Router advisories assessed and documented** (`docs/adr/0003-react-router-advisories.md`).
  The Dependabot alerts (open-redirect; SSR `deserializeErrors`) are not exploitable in this
  client-only SPA (no SSR/RSC, hardcoded internal routes); the v7 upgrade is deferred because
  7.18.x introduces an unpatched RSC-CSRF high with no clean version available. Pinned at
  `react-router-dom@6.30.4`; alerts to be dismissed as "not affected."

## [1.6.0] — 2026-07-29
### Added
- **Legacy Modernization page** (`/legacy`): strangler-fig migration + protocol-droid
  interfaces, the Map → Wrap → Route → Replace → Hand off flow, senior/CTO-level + COBOL-lineage
  credibility, and a "you keep the keys" option. Wired into the nav, sitemap, and PAGE_META.
- **Services grounding for Banshee** (`src/banshee/knowledge.js`): new "services" and "legacy"
  knowledge entries; the company entry reworded to lead with client work.

### Changed
- **Positioning refactor (split model).** Home now leads with client services — "Work with us:
  what we build for you" (custom AI agents, agentic systems & workflows, legacy modernization,
  agent skills & tools) — with the in-house products/research moved to a distinct secondary area
  ("We build for ourselves too"). Hero, stat row, and CTAs reframed toward attracting customers.
- Canonical context updated to match: `CLASSHUMAN.md` "What we are" + a client Services section;
  `docs/CONTENT.md` gains approved Services + Legacy copy.

## [1.5.0] — 2026-07-29
### Added
- **Three dark "cosmic" themes** — Nebula, Aurora, Event Horizon — alongside the existing
  Classic light/dark + seasonal system. Selectable from a new Theme control in the nav
  (glowing dot per theme + Classic light/dark). Choice persisted in localStorage and
  restored pre-paint. Each theme is a `[data-theme]` block overriding the `--ch-*` tokens,
  so every page + Banshee recolors from one swap. New `src/components/ThemeSwitcher.jsx`.
- Tokens `--ch-cool-alt`, `--ch-cool-bright`, `--ch-primary-bright` (classic-derived; cosmic
  themes set them directly) + Tailwind mappings.

### Changed
- **Full color sweep to theme vars** — removed the last hardcoded brand hexes from
  taco-controls (stages + risk classes), InverseSpeed (readout + bars), GuardrailGate
  (queue dots), products.js, Stack.jsx, the TacoLoop badge, and the index.css slider.
  Semantic mapping: T→cool, A→cool-alt, C→accent, O→primary; risk LOW/MED/HIGH/CRIT →
  cool-alt/cool/accent/primary-bright. One theme swap now recolors 100% of the page.
- The nav's light/dark toggle moved under "Classic" inside the new Theme menu.

## [1.4.1] — 2026-07-28
### Changed
- **Story page rewrite.** Tougher, clearer, less sentimental. Removed the vending-machine
  scene and the black-belt passage; kept Tonya as the dedication. Added two sections: "The
  future we're building for" (humans + agents coexistence, humans keep final authority) and
  "Why telemetry — as a team" (honest continuous signal as the LAHA discipline, human or
  agent). Reframed around toughness / never-quit.

## [1.4.0] — 2026-07-24
### Added
- **Banshee** — the classHuman.org site agent (frontier model, server-side).
  - `netlify/functions/banshee.mjs`: serverless chat function holding `OPENAI_API_KEY`
    server-side (never in the browser bundle). Guardrailed system prompt grounded in a
    curated knowledge pack; graceful degradation to a deterministic offline answer on
    no-key/timeout/upstream-error. Model via `BANSHEE_MODEL` (default `gpt-4o-mini`).
  - `src/banshee/knowledge.js`: public-only knowledge pack (single source of ground truth).
  - `src/banshee/offline.js`: isomorphic keyword retriever + deterministic offline engine
    (no vector DB, no new deps). Powers server fallback and the in-browser fallback.
  - `src/banshee/BansheeWidget.jsx`: accessible launcher + chat panel (dialog semantics,
    focus management, ESC to close, polite live region, suggested questions, source links).
    Mounted site-wide; falls back to the browser offline engine if the function is unreachable.
  - `docs/adr/0002-banshee-site-agent.md`: grounded + offline-fallback agent decision.
  - `netlify.toml`: functions dir + esbuild bundler. `.env.example`: documents the
    server-only `OPENAI_API_KEY` / `BANSHEE_MODEL` (never committed).
- Guardrails: guide only — takes no actions, makes no commitments (price/timeline/legal
  route to a human); never discloses private founder details ("accessibility-first design").

## [1.3.0] — 2026-07-24
### Added
- **Positioning refactor.** Public identity is now "a Generative AI Software Engineering,
  Development & Research LLC" — applied to the hero, `index.html` meta/OG, and the footer.
- **Asymptote product page** (`/asymptote`): static Big-O estimator for Python, built for
  agents. Covers the undecidability/"unknowns" rationale, sample report, the Cost algebra,
  CLI/agent-tool/MCP usage, and known limits. Links to github.com/MenokoOG/asymptote.
- **Ag3nt24 product page** (`/ag3nt24`): the proof layer — Act → Gate → Receipt → Route.
- **HADES product page** (`/hades`): rehabilitation and deactivation paths, both to ledger.
- **Demos page** (`/demos`): Willow Bend Family Clinic — human-approved appointments, an AI
  assistant safe by construction, graceful offline degradation. Links to the live demo.
- **Products menu** in the header + a products/company footer, driven by a single catalog
  (`src/lib/products.js`).
- **LAHA "wild mode" visual system**: animated trace-field hero backdrop, aurora + circuit
  grid, gradient headlines, scroll-reveal, and card authority-glow — all on brand tokens.
- Shared UI kit (`src/components/ui.jsx`): Eyebrow, GradientText, Reveal, TraceField,
  StatusPill, ProductHero.
- Nicale Jefferson's About card now links to her LuxGirl OG page (luxgirlog.netlify.app)
  and names her governance-framework authorship.
- `docs/BANSHEE-SPEC.md`: product + technical spec for the Banshee site agent (spec only).
- Sitemap updated with the new routes.

### Changed
- Home page rebuilt around the four-product stack and the LLC positioning.
- All new motion respects `prefers-reduced-motion`; reveals never stay hidden.

## [1.2.2] — 2026-07-06
### Added
- Visitor hook lines on the stack rows: Ag3nt24 (“How do you prove what an AI agent said
  it did is what it actually did?”) and HADES (“It doesn't punish. It gates authority and
  preserves truth.”).

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
