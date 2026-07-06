# Handoff: classHuman AI — TACO marketing/product site

## Overview

A single-page marketing + product site for **classHuman AI**, positioning the
**TACO Loop** — a decision-control architecture for unknown-data environments.
TACO is *not another agent*; it is a control layer that wraps agents, humans,
and workflows in decision discipline. The page has two interactive teaching
pieces (the TACO Loop stage selector and the Inverse Speed Rule demo), plus a
product-stack roadmap and a guardrail/risk-routing section.

Tagline: **driven by LAHA (Love All Humans Always).**
Core Product Law (appears in the hero): *"Unknown data must increase decision
discipline — not model confidence."*

## About the design files

The `.dc.html` file in this bundle is a **design reference created in HTML** — a
prototype showing the intended look and behavior. It is **not** production code
to ship directly. The task is to **recreate it in the target codebase's
environment** using that project's patterns.

Per the TACO white paper's implementation stack, the intended environment is:
**React + Vite + TypeScript, Tailwind + shadcn/ui** (web dashboard), with
OpenTelemetry for observability later. Build the marketing site with that stack
unless the repo already dictates otherwise. `taco-controls.ts` in this bundle is
already framework-agnostic TypeScript you can drop straight in.

## Fidelity

**High-fidelity.** Colors, typography, spacing, copy, and the interactive
formulas are final. Recreate pixel-faithfully. Exact hex values, fonts, and the
math are all specified below and in `taco-controls.ts`.

---

## Page structure (single scroll, max-width 1320px, centered, 32px side padding)

Dark theme throughout. Page background:
```
radial-gradient(1200px 600px at 78% -8%, rgba(90,136,190,.14), transparent 60%),
radial-gradient(900px 500px at 8% 4%, rgba(192,73,44,.10), transparent 55%),
#0E1117
```
Body text color `#F4EDE1`. Font: **Hanken Grotesk** (400–800) for everything,
**Space Mono** (400/700) for labels, specs, numbers, eyebrows.

### 1. Nav (sticky)
- `position: sticky; top:0`, `backdrop-filter: blur(12px)`, bg `rgba(14,17,23,.82)`, bottom border `1px solid #1E2530`, padding `14px 32px`.
- Left: cH mark SVG (30px, ember arc `#C0492C` + bone `#F4EDE1` H) + wordmark: `class` in `#8792A3`, `Human` in `#D9603F`, `AI` in Space Mono `#E39A3B`.
- Center links (14px, weight 600, `#8792A3`, active/hover `#F4EDE1`): TACO Loop · Architecture · Benchmark · Roadmap · Docs.
- Right: "Read the white paper" (outline button, border `#2A303D`, text `#DCE6F2`) + "Request access" (solid ember `#C0492C`, white text). Both `border-radius:9px`.

### 2. Hero (`padding:66px 32px 30px`)
- Eyebrow (Space Mono, uppercase, `.18em`, `#6FA6AE`) with a pulsing amber dot (`#E39A3B`, `@keyframes pulseNode` fade .35↔1 over 2.4s): "Decision-control architecture · driven by LAHA".
- H1, 60px/1.02, weight 800, `-0.03em`, max-width 960px, `text-wrap:balance`: "The **TACO Loop** — a control layer for decisions made **in the unknown.**" ("TACO Loop" `#D9603F`, "in the unknown." `#8792A3`, rest `#F4EDE1`).
- Sub, 19px/1.55, `#A9B4C2`, max-width 680px: "TACO is not another agent. It wraps agents, humans, and workflows in a discipline layer that slows premature action, bounds uncertainty, and routes every consequential call to a person."
- **Core Product Law card** (max-width 820px, border `#2A303D`, radius 14px, bg `#12161F`): 6px ember left bar + eyebrow "Core product law" (Space Mono, `#E39A3B`) + statement 21px/700 `#F4EDE1`: "Unknown data must increase decision discipline — not model confidence."
- Stat row (gap 34px): value 22px/800 `#F4EDE1`, label Space Mono 11px uppercase `#6B7686`:
  - "4 stages" / One disciplined loop
  - "SHA-256" / Hash-chained audit trail
  - "Risk > 0.50" / Routes to a human

### 3. The loop — INTERACTIVE (`padding:56px 32px 20px`)
- H2 "The loop" (28px/800) + subtitle "Take In Unknowns → Assess & Align → Choose Correctly → Operate & Observe". Helper line "Click a stage." (`#8792A3`).
- **4 stage buttons** in a `grid-template-columns:repeat(4,1fr); gap:14px`. Each: padding 20px, radius 14px. Top row = letter badge (38px, radius 10px) + step number "0N" (Space Mono `#5B6474`). Below = stage name 16px/700 `#EDE7DC`.
  - Inactive: bg `#12161F`, border `1px solid #232A36`, badge bg `rgba(255,255,255,.06)` / fg `#9AA6B4`.
  - Active: bg `#161C27`, border `1px solid {stage.color}`, badge bg `{stage.color}` (fg white, except "C" → `#1C1813`).
  - Hover: `translateY(-2px)`.
- **Detail panel** below (border `#232A36`, left border `4px solid {activeColor}`, radius 14px, bg `#12161F`, padding `26px 28px`, `grid 1.4fr / 1fr`, gap 32px):
  - Left: eyebrow "{letter} · {name}" in `{color}`; function text 18px/1.55 `#DCE6F2`; "Prevents: {prevents}" (`#8792A3` label, `#E39A3B` value).
  - Right (left divider): eyebrow "Operational test"; the test question italic 15px `#BFC9D6` in quotes.
- Stage data + colors: see `STAGES` in `taco-controls.ts`. T `#5A88BE`, A `#6FA6AE`, C `#E39A3B`, O `#C0492C`. Default active = **T**.

### 4. The Inverse Speed Rule — INTERACTIVE (section has top border `#1E2530`, subtle top gradient)
This is the centerpiece. `padding:60px 32px`.
- H2 "The Inverse Speed Rule" + Space Mono tag "the core control law" (`#6FA6AE`).
- Intro 16px/1.55 `#A9B4C2`, max-width 680px: "As total uncertainty rises, decision speed falls, verification deepens, and action scope shrinks — provably, not as a slogan. Drag the uncertainty."
- Layout `grid-template-columns:340px 1fr; gap:40px; align-items:center`.
- **Control card** (border `#232A36`, radius 16px, bg `#12161F`, padding 26px):
  - "U_total" label (Space Mono uppercase `#8792A3`) + big value `u.toFixed(2)` 34px/800 Space Mono, color ramps: `<0.4 #8FB2DE`, `<0.7 #E39A3B`, else `#D9603F`.
  - `<input type="range" min=0 max=100>` styled: 6px track, thumb 22px circle bone fill + 3px ember border. Track background = `linear-gradient(90deg,#5A88BE 0%,#6FA6AE 40%,#E39A3B 70%,#D9603F 100%)`. Min/max captions "CERTAIN"/"UNKNOWN".
  - Loop-mode row: dot + "LOOP MODE" + label. `u>=0.4` → "SLOW · gather context" `#E39A3B`, else "NORMAL" `#6FA6AE`.
- **Outputs column** — three animated bars (track `#1A1F2A`, radius 8px, height 12px, fill transitions `width .28s cubic-bezier(.4,0,.2,1)`):
  - Decision speed — `v=(1−u)²`, fill `#5A88BE`, right-label percent.
  - Verification depth — `r=1+4u`, fill `#6FA6AE`, label "{passes} passes" (bar width = passes/5).
  - Action scope — `s=s_max(1−u)`, fill `#E39A3B`, label percent.
  - Verdict line below (top border), 15px `#BFC9D6`, text from `inverseSpeed().verdict`.
- All math is in `inverseSpeed()` in `taco-controls.ts`. Default u = 0.34.

### 5. The stack / roadmap (`padding:60px 32px`)
- H2 "The stack" + subtitle "TACO is the root layer. Everything above builds on its discipline." Helper "Shipping in sequence — foundation first."
- Three stacked rows (radius 16px, padding `24px 28px`, gap 14px). Each: name (22px/800) + "Layer N" (Space Mono `#6B7686`, 150px col) · description (15.5px `#B4BFCD`) · status pill (Space Mono 11px uppercase).
  - **TACO** — Layer 0 · root — name `#D9603F`, border `#3A2A24`, bg `linear-gradient(90deg, rgba(192,73,44,.10), #12161F 60%)`, pill "Building · MVP" (ember bg/white). Desc: "The decision-control loop. Take in unknowns, bound uncertainty, gate every action, keep a tamper-evident trace."
  - **Ag3nt24** — Layer 1 — border `#232A36`, bg `#12161F`, opacity .9, pill "Next" (`rgba(90,136,190,.18)`/`#8FB2DE`). Desc: "The agentic layer that operates on top of TACO — agents that inherit its guardrails and audit by default. Details to come."
  - **HADES** — Layer 2 — border `#1E2530`, bg `#10141C`, opacity .72, pill "Horizon" (`rgba(135,146,163,.15)`/`#8792A3`). Desc: "The horizon layer. Scope defined after TACO and Ag3nt24 are proven."
  - ⚠️ Ag3nt24 & HADES copy is placeholder — the white paper scopes TACO only. Replace with real briefs before launch.

### 6. Guardrail gate / human authority (top border, subtle gradient, `grid 1fr/1fr`, gap 48px)
- Left: eyebrow "Guardrail gate · risk routing" (`#6FA6AE`); H2 36px/800 "Above 0.50 risk, a human signs."; paragraph 16px/1.6 `#A9B4C2`: "The guardrail is an AND-gate: if permission, scope, safety, or reversibility hits zero, the action is blocked or escalated. Risk is scored, classed, and routed — the mathematical form of humans holding final authority."
- Four risk-class rows (border `#232A36`, radius 10px, bg `#12161F`, padding `11px 14px`): dot + range (Space Mono, 96px) + label (700, 82px) + action. Data = `RISK_CLASSES` in `taco-controls.ts`.
- Right: **Escalation queue** card (border `#232A36`, radius 18px, bg `#131722`, shadow `0 24px 60px rgba(0,0,0,.4)`). Header "Escalation queue" + amber pill "3 awaiting a human". Rows: dot + title + "Risk {n} · {class}" (Space Mono `#6B7686`) + state (HELD `#E39A3B` / DONE `#6FA6AE`). Sample rows:
  - "Approve $2,400 refund — order #48812" · Risk 0.61 · HIGH · HELD
  - "Send redlined MSA to Acme Corp" · Risk 0.68 · HIGH · HELD
  - "Roll back deploy 7f3a on api-gw" · Risk 0.82 · CRITICAL · HELD (dot `#D9603F`)
  - "Closed ticket #9921 — billing" · Risk 0.14 · LOW · DONE

### 7. Footer (top border `#1E2530`, padding `30px 32px`, space-between)
- cH mark (22px) + "classHuman AI · Love All Humans Always" (Space Mono uppercase `#6B7686`).
- Right: "TACO Loop · White Paper v1.0" (`#4E5766`).

---

## Interactions & behavior

- **Stage selector**: click sets active stage; detail panel + all active styles update. State: one `activeStage: "T"|"A"|"C"|"O"`.
- **Inverse Speed slider**: `onInput` sets `u` (0–100 int → /100). All three bars, the value readout, its color, loop mode, and the verdict derive from `inverseSpeed(u/100)`. Pure, synchronous — no fetch.
- **Bars** animate width over `.28s cubic-bezier(.4,0,.2,1)`.
- **Hovers**: nav links → `#F4EDE1`; stage cards → lift 2px; CTA → `brightness(1.08)`.
- No routing/backend — this is a marketing page. The escalation queue and stats are illustrative static data.

## State management
- `activeStage: StageLetter` (default `"T"`)
- `u: number` 0–100 (default `34`)
- Everything else is derived (see `taco-controls.ts`). No data fetching.

## Design tokens

Brand tokens (incl. the seasonal theming system) live in the sibling brand
handoff — reuse `tokens.css` from `design_handoff_classhuman_brand/`. Site-specific
dark-UI values used here:

| Token | Hex | Use |
|---|---|---|
| bg base | `#0E1117` | page background |
| surface | `#12161F` / `#131722` | cards |
| surface-2 | `#161C27` | active stage card |
| border | `#232A36` / `#1E2530` | card / section borders |
| text | `#F4EDE1` | body |
| text-muted | `#A9B4C2` / `#8792A3` | paragraphs / labels |
| text-dim | `#6B7686` / `#5B6474` | captions |
| ember (primary) | `#C0492C` / `#D9603F` | brand, CTA, stage O, wordmark "Human" |
| amber (accent) | `#E39A3B` | nodes, stage C, HIGH risk, highlights |
| blue | `#5A88BE` / `#8FB2DE` | stage T, speed bar, MEDIUM risk |
| teal | `#6FA6AE` | stage A, verify bar, LOW risk, eyebrows |
| stone | `#8792A3` | wordmark "class", muted labels |

- Radii: 9px (buttons) · 10–14px (cards/rows) · 16–18px (feature cards).
- Fonts: Hanken Grotesk (`@400;500;600;700;800`), Space Mono (`@400;700`) — Google Fonts.
- Shadow (feature card): `0 24px 60px rgba(0,0,0,.4)`.

## Assets
- cH logo — vector, in the sibling brand handoff (`assets/mark-monogram.svg`). Inline the SVG (paths: arc `M54.9 38.7 A26 26 0 1 1 54.9 81.3`, H `M80 36 L80 84 M108 36 L108 84 M80 60 L108 60`).
- No raster images. No icon library required (a couple of inline stroke SVGs only).

## Files in this bundle
- `README.md` — this spec (self-sufficient).
- `taco-controls.ts` — the TACO stage data, Inverse Speed Rule, risk classes & guardrail math as framework-agnostic TypeScript. Import directly.
- `classHuman TACO Site.dc.html` — the full interactive design reference. Open in a browser to see target look + behavior.
- (Reuse `tokens.css` + logo SVGs from `design_handoff_classhuman_brand/`.)
