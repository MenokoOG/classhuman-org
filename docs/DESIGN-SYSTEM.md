# Design System — classHuman.org

**Canonical source:** `brand/BRAND-HANDOFF.md` + `brand/tokens.css` (high-fidelity, final —
recreate hex/SVG exactly). This doc summarizes; when in doubt, the bundle wins.

Human warmth meets machine discipline. Circuit-trace geometry, precise never cold.
Accessible AA–AAA in light and dark. **Consume tokens via CSS variables (`var(--ch-*)`),
not hardcoded hex** — that's what makes the seasonal system work.

---

## 1. How the palette works

Two layers: **constant neutrals** + a **seasonal warm/cool set** swapped by `data-season`.

### Core (season-independent)
| Token | Var | Hex | Role |
|---|---|---|---|
| **Ink** | `--ch-ink` | `#1C1813` | Body text on light; dark surface. 15.2:1 on Bone · AAA |
| **Bone** | `--ch-bone` | `#F4EDE1` | Light surface; reversed text/marks. 15.2:1 on Ink · AAA |
| **Stone** | `--ch-stone` / `--ch-muted` | `#8B7F6E` | The "class" half, borders, captions. Large text/UI only |
| **Sage** | `--ch-sage` | `#6F8A78` | Machine-discipline accents, agent traces. AA · colorblind-safe vs primary |

### Seasonal (change per season — never hardcode these)
| Var | Role |
|---|---|
| `--ch-primary` | Warm brand color — the "Human" half, primary buttons |
| `--ch-accent` | Amber/warm highlight — nodes, badges, agentic signal |
| `--ch-cool` | Seasonal blue/teal — links, secondary actions (keeps the brand from ever reading cold) |
| `--ch-bg` `--ch-card` `--ch-border` `--ch-paper` `--ch-text` | Surfaces per season |

**Autumn is the default** and equals the original Ember system (`primary #C0492C`,
`accent #E39A3B`, `cool #6FA6AE`).

---

## 2. Seasonal theming (built-in, four temperatures)

The site ships **four seasonal versions on one system** — one warm primary + one cool blue
each, so it's never a cold tech brand, even in Winter.

| Season | Months | primary | accent | cool |
|---|---|---|---|---|
| Spring | Mar–May | `#D0654A` | `#E8A54B` | `#7FB0D8` |
| Summer | Jun–Aug | `#C64A2E` | `#F0B23C` | `#5FA3D6` |
| **Autumn (default)** | Sep–Nov | `#C0492C` | `#E39A3B` | `#6FA6AE` |
| Winter | Dec–Feb | `#5A88BE` | `#DE8A3C` | `#8FAAC9` |

Implementation is done for you in the bundle:
- `brand/tokens.css` — every value as `--ch-*`, scoped by `[data-season="…"]` on `<html>`.
- `brand/season-switch.js` — `seasonForDate()` + `applySeason()` (auto by date, or force one).

Wire it: import `tokens.css` globally, call `applySeason()` on app mount, allow a manual
override toggle. Every season must still hit ≥4.5:1 for text.

---

## 3. Typography

- **Hanken Grotesk** (400–800) — wordmark, headings, UI. Google Fonts:
  `family=Hanken+Grotesk:wght@400;500;600;700;800`
- **Space Mono** (400/700) — labels, specs, the "AI" tag, captions.
  `family=Space+Mono:wght@400;700`
- Wordmark: Hanken **800**, `letter-spacing: -0.03em`.

### Wordmark color story (always)
- **class** → Stone `--ch-muted` (structure/machine)
- **Human** → `--ch-primary` (warm authority); on **dark UI** shifts to `--ch-accent`/Amber
- **AI** → Space Mono, tracked out, `--ch-accent` (or Bone on dark)

---

## 4. Logo / marks (canonical SVGs in `brand/assets/`)
- **`mark-monogram.svg`** — primary. Trace **cH** (open "c" arc + gated "H"). Favicon/app
  icon/standalone. Recolor via `stroke` (default Ember; use `--ch-primary`, or `--ch-accent`
  on dark, or Ink/Bone for single-color stamp).
- **`mark-control-node.svg`** — alternate. Agent traces converge on a gated core; one path
  breaks the ring at top = human authority.
- **App icon:** squircle `border-radius: 26px`, 112px tile, `--ch-primary` fill, mark in Bone,
  shadow `0 10px 26px rgba(0,0,0,.35)`.

## 5. Trace grammar
Every mark resolves a human gesture into engineered traces that **gate through one point** —
humans holding final authority over their agents. Nodes = Amber dots; traces = Sage strokes
at engineered angles (45°/90°), never organic curves; the gate = one converging point.
Use sparingly: dividers, hero backdrop, hover accents.

## 6. Tokens: radius / elevation
`sm 6px` · `md 11px` (buttons) · `lg 16px` (cards) · `icon 26px` (app squircle) ·
shadow `0 10px 26px rgba(0,0,0,.35)`.

## 7. Accessibility (LAHA in practice)
- Body text pairs target AAA (Ink/Bone 15.2:1). Ember/Stone on light = large text/UI only.
- Never rely on red/green alone; cool vs warm always carries a lightness difference too.
- Visible Amber focus, full keyboard nav, semantic HTML, honor `prefers-reduced-motion`.
- Public accessibility wording: **"accessibility-first design."** Nothing more.

## 8. Tailwind note
Prefer mapping Tailwind colors to the CSS vars so seasons flow through, e.g.:
```js
colors: {
  ink:'#1C1813', bone:'#F4EDE1', stone:'#8B7F6E', sage:'#6F8A78',
  primary:'var(--ch-primary)', accent:'var(--ch-accent)', cool:'var(--ch-cool)',
}
```
Import `brand/tokens.css` once globally so the seasonal vars resolve.

---
*LAHA — Love All Humans Always.*
