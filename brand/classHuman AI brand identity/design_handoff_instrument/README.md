# Handoff: classHuman AI — "The Instrument"

The classHuman AI marketing site. **Read this whole file before writing code** —
the central idea is behavioral, not visual, and it is easy to build the layout
correctly and miss the point entirely.

## The one idea

Every AI site sells acceleration. classHuman's Core Product Law is the opposite:
*"Unknown data must increase decision discipline, not model confidence."*

**So the site enforces its own product law on itself.** One uncertainty slider
governs the whole page. Push it past θ = 0.50 and the live decision list stops
showing you its contents — rows blur out, a `HELD` stamp appears, and the only
way to reveal one is to click **Release**. The visitor performs the product: they
become the human authority the system is waiting on.

If you implement one thing perfectly, implement that. Everything else is support.

## About the design files

`classHuman Instrument.dc.html` is a **design reference written in HTML** — open
it in a browser to see target look and behavior. It is not production code; do
not port its markup. Recreate it in the repo's own stack and conventions.
`instrument.ts` **is** production-ready — import it directly for all formulas,
data, and geometry. Do not reimplement the math.

If the repo has no frontend yet, use React + Vite + TypeScript (the TACO white
paper's recommended stack).

## Fidelity

**High-fidelity.** Colors, type, spacing, and the interaction model are final.

---

## Visual system

This is an **engineering plate**, not a SaaS landing page. Hairline rules,
figure numbers, registration marks, plotted curves, a colophon.

### Explicitly forbidden
No gradients. No glows or box-shadows. No glassmorphism or backdrop-blur (except
the sticky masthead). No gradient text. No orbs, particle fields, or neural
imagery. No purple/cyan. No rounded corners above 0px — **every corner in this
design is square.** No emoji. If it would look at home on a generic AI startup
page, it does not belong here.

### Color — five values, one accent

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#0B0B0D` | page ground |
| `--paper-2` | `#09090B` | alternating section ground (Fig. 01, Fig. 03) |
| `--rule` | `#1C1C20` | every hairline border — used constantly |
| `--rule-2` | `#16161A` | fainter internal rules, plot grid |
| `--ink` | `#EDE8E0` | primary type, the mark, speed curve |
| `--ink-2` | `#9A968E` | body copy, verify curve |
| `--ink-3` | `#5E5B56` | mono labels, captions, scope curve |
| `--ink-4` | `#3F3D3A` | colophon, disabled |
| `--ember` | `#C0492C` | **semantic, not decorative** |

**`--ember` means "a human is required here."** The θ line on the plot, HELD
stamps, Release buttons, the active stage letter, the SLOW state, the
strikethrough on "confidence." Never use it for ordinary emphasis. A screen
where nothing is held should have almost no ember on it.

### Type
- **Hanken Grotesk** — 300 for large statements (this is the signature: big type
  at *light* weight), 600 for emphasis inside them, 400–600 for UI.
- **Space Mono** — every label, number, figure marker, and axis. Uppercase with
  `letter-spacing: .14em–.20em` at 9–11px.
- Display sizes: h1 64px/1.08, closing h2 46px, section h2 34px, all
  `letter-spacing: -0.025em`.

### Layout
- Max width **1240px**, sections padded `0 56px`, borders run edge to edge.
- Sections separated by `1px solid var(--rule)` — never by whitespace alone.
- Fixed registration crosses (14px, `#33333A`) top-left and top-right of the
  viewport, `pointer-events: none`.
- Every section opens with `Fig. NN` in mono + a `<h2>` in mono uppercase.

### Motion
- One easing: `--silk: cubic-bezier(0.16, 1, 0.3, 1)`.
- Scroll reveals: `opacity 0 → 1`, `translateY(22px) → 0`, **900ms**, via
  IntersectionObserver (`rootMargin: "0px 0px -12% 0px"`, threshold 0.08),
  unobserve after firing.
- Slow easing is thematic. Nothing snaps.

---

## Sections

### Ticker (above everything)
34px strip, ground `--paper-2`, bottom hairline. Fixed label "LIVE LOOP" on the
left with a right border. Marquee: render the `TICKER` array **twice**, animate
`translateX(0 → -50%)` over 46s linear infinite, `animation-play-state: paused`
on hover. Each item: ref (`--ink-4`), label (`--ink-2`), risk, state — risk and
state in `--ember` when `HELD`, else `--ink-3`. Mono 10.5px, `nowrap`, hairline
right border between items.

### Masthead
Sticky, `top: 0`, height 56px, `rgba(11,11,13,.94)` + `blur(14px)`. Vertical
hairlines *between* items, not gaps — it should read as a drawing rule. Left: cH
mark (20px) + "classHuman AI" in mono. Center: Instrument / Loop / Gate /
Boundaries. Right: "WP v1.0", "Request access".

### Fig. 00 — Statement
Two columns: `1fr / 340px`, divided by a vertical hairline.
- Diagonal grid background: two `repeating-linear-gradient`s at ±60°, `#16161A`
  1px lines every 120px, masked by
  `radial-gradient(70% 80% at 92% 8%, #000, transparent 72%)`.
- Header row: `Fig. 00` — hairline — `Core product law`.
- **H1, 64px weight 300:** "Unknown data must increase decision **discipline**,
  not model ~~confidence~~." — "discipline" at weight 600, "confidence" in
  `--ink-3` with `line-through` at 1px. The strikethrough is the joke; keep it.
- Right column: four fact rows (`Architecture 12 layers`, `Uncertainty classes
  6`, `Audit SHA-256 chain`, `Human review at Risk > 0.50`), then the LAHA
  colophon pinned to the bottom.

### Fig. 01 — The Inverse Speed Rule ★
The control surface. Ground `--paper-2`.

**Control bar** — one bordered box, `1fr / 300px`:
- Left: `U_total — drag` and `θ = 0.50`; a range input styled to look like a
  measuring instrument — 2px `#33333A` track, and a **2px × 34px bar** as the
  thumb (not a circle, no radius). Below it, 11 tick marks at 0.0–1.0; majors
  (0, 0.5, 1.0) 8px tall and labelled, minors 4px; **the 0.5 tick is `--ember`.**
- Right: the live readout — `u.toFixed(2)` at 26px mono, and the loop state
  ("Nominal" / "SLOW — gather context"). Past θ the whole panel takes an ember
  tint (`rgba(192,73,44,.05)`).

**The plot** — a real graph, `viewBox="0 0 900 300"`:
- Grid `#17171B`, axes `#3A3A42`, mono axis labels (`1.0`, `0`, `U_total`).
- Vertical dashed `--ember` line at u = 0.50, labelled `θ HUMAN REVIEW`.
- Three curves from `CURVES` via `curvePath()` — **differentiated by line style,
  not color**: solid 2px ink, dashed 1.5px ink-2, dotted 1.5px ink-3. This is
  deliberate: the brief requires colorblind-safe encoding.
- A readout marker at the current u: vertical line + a dot on each curve (filled,
  hollow, small).
- Legend beneath: line sample, formula, name, live readout.

Verdict paragraph below, from `inverseSpeed().verdict`.

### Fig. 02 — The guardrail gate ★★ (the point of the site)
Table, five columns: `64px / 1fr / 128px / 108px / 118px` — Ref, Action, Risk,
Class, State.

Each row comes from `evaluateDecision(seed, u, released)`. **Risk rises with the
global slider**, so raising uncertainty pushes rows over θ one at a time.

When `withheld`:
- action text → `filter: blur(3.6px)`, color `--ink-3`, `transition: filter .3s`
- a `HELD` chip appears — 1px ember border, ember text, mono 9px
- row background `rgba(192,73,44,.045)`
- the button reads **Release**, ember border and text, and on hover **inverts**
  (ember background, `--paper` text)

Clicking Release reveals that row permanently (state keyed by `ref`) and the
button becomes a dead "Released". Rows below θ show a disabled "Auto".

Below: a count line, and a note that swaps at θ — under it, *"Raise the
uncertainty above 0.50 and watch what this page does to itself."*; over it, *"This
is the product. Not a warning banner — the action does not proceed until a named
human releases it, and that release is what the audit chain records."*

### Fig. 03 — One loop, four stages
Scroll-driven sticky stack. `1fr / 420px`, gap 56px.

Left: four `min-height: 340px` blocks, one per stage, `data-stage="01".."04"`.
The active block is `opacity: 1` with its letter in `--ember`; inactive blocks
are `opacity: .34` with ink letters. Letters are **74px at weight 300**.

Right: a bordered panel, `position: sticky; top: 96px`, showing the active
stage's evidence rows, its "Prevents" line in ember, and a 4-segment progress
bar at the bottom (active segment ember).

Drive `active` with a second IntersectionObserver at
`rootMargin: "-42% 0px -42% 0px"` — whichever block is crossing the viewport
midline wins.

Below the stack: `Take in. / Assess. / Choose. / Operate.` in mono, tracked
`.34em`, followed by a hairline that fills the remaining width.

### Fig. 04 — What we do not claim
`330px / 1fr` split by a vertical hairline. Left: heading + rationale. Right:
the `NON_CLAIMS` rows — the claim struck through (`text-decoration-color:
#3A2620`), the correction beside it in `--ink-2`. Keep this above the fold of the
footer; it is a credibility asset, not fine print.

### Close
H2 46px weight 300: "Your agents will keep getting faster. / Someone still has to
be **accountable** for what they do." Two square buttons in a single bordered
group divided by a hairline — no radius, no fill until hover, then ember invert.

### Colophon
Mono 10px, `--ink-4`, three items spread across: entity · LAHA · domain.

---

## One more behavior

As `u` rises, stage-name `letter-spacing` interpolates to `u * 0.09em`
(transition 500ms). The page's own reading pace slows as it knows less. Almost
subliminal — keep it.

## State

```ts
{ u: number;                        // 0–100 int, default 22
  released: Record<string, boolean>; // decision ref → released
  active: "01" | "02" | "03" | "04" } // default "01"
```
No routing, no data fetching. Everything derives from `instrument.ts`.

## Logo

Inline SVG, `viewBox="0 0 120 120"`, `fill="none"`, `stroke-linecap="round"`:
- reverse-C arc: `M54.9 38.7 A26 26 0 1 1 54.9 81.3` — `--ember`
- gated H: `M80 36 L80 84 M108 36 L108 84 M80 60 L108 60` — `--ink`

Stroke-width 13–14 at small sizes, 11–12 at large. No nodes, no dots.

## Accessibility
- Body pairs are AAA on `--paper`; all text pairs clear AA.
- The three plot curves are distinguished by dash pattern, not hue.
- Ember is never the sole carrier of meaning — HELD state also has the stamp,
  the blur, and the button label.
- The range input must stay keyboard-operable; add `aria-label="Total
  uncertainty"` and an `aria-live="polite"` region for the readout.
- Respect `prefers-reduced-motion`: disable the ticker marquee and the reveals.

## Done when
- The slider governs the plot, the gate, the tint, and the tracking.
- Rows blur, stamp, and hold past θ; Release reveals them individually.
- The sticky panel swaps as you scroll Fig. 03.
- Zero rounded corners, zero gradients, zero glow anywhere.
- No console errors; typecheck and lint pass.

## Files
- `README.md` — this spec.
- `instrument.ts` — formulas, plot geometry, stages, decisions, ticker, non-claims.
- `classHuman Instrument.dc.html` — visual/behavioral reference; open in a browser.
