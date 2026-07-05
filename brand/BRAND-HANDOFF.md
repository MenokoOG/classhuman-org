# classHuman AI — Brand Identity Handoff

Driven by **LAHA** (Love All Humans Always). This package is everything a
developer (or Claude Code) needs to apply the classHuman AI brand — including the
seasonal color-theming system — in a real codebase.

## About the design files

The `.dc.html` file in this bundle is a **design reference created in HTML** — a
living brand board showing the intended logo, palette, type, and seasonal themes.
It is **not** production code to copy directly. The task is to recreate these
tokens and marks in the target codebase's existing environment (React, Vue,
SwiftUI, native, plain CSS, etc.) using its established patterns — or, if none
exists yet, to pick the most appropriate framework and implement them there.

## Fidelity

**High-fidelity.** All colors, type, radii, and the logo geometry are final.
Recreate them exactly (the hex values and SVG paths are canonical).

---

## Core palette (season-independent)

These four neutrals + support colors are constant across every season. All text
pairs below are WCAG-checked.

- **Ink** `#1C1813` — darkest neutral. Body text on light; primary dark surface. 15.2:1 on Bone (AAA).
- **Bone** `#F4EDE1` — lightest neutral. Light surface; text/marks reversed onto Ink. 15.2:1 on Ink (AAA).
- **Stone** `#8B7F6E` — muted. The "class" half of the wordmark, borders, captions. Use for large text / UI only (~4.4:1 on Ink).
- **Sage** `#6F8A78` — secondary, machine-discipline accents & agent traces. 4.6:1 on Ink (AA). Colorblind-safe against Ember.

## Seasonal palettes

One system, four temperatures. **Each pairs a warm primary with a cool blue** so
the brand never reads as a cold tech company — even in Winter. `--ch-cool` is the
seasonal blue (links / secondary actions); `--ch-primary` is the warm brand color
(the "Human" half, primary buttons); `--ch-accent` is the amber/warm highlight
(nodes, badges).

**Spring** (Mar–May) — coral + sky blue, fresh & optimistic
- primary `#D0654A` · accent `#E8A54B` · cool `#7FB0D8` · paper `#F3EFE6` · ink `#1B1A17` · bg `#20211C`

**Summer** (Jun–Aug) — terracotta + azure, full heat
- primary `#C64A2E` · accent `#F0B23C` · cool `#5FA3D6` · paper `#F6F0E2` · ink `#17140F` · bg `#1E1B14`

**Autumn** (Sep–Nov) — **default** — ember clay + teal-blue, the core warm system
- primary `#C0492C` · accent `#E39A3B` · cool `#6FA6AE` · paper `#F4EDE1` · ink `#1C1813` · bg `#1C1813`

**Winter** (Dec–Feb) — cool-forward: slate blue leads, ember keeps the LAHA heart
- primary `#5A88BE` · accent `#DE8A3C` · cool `#8FAAC9` · paper `#EEF1F4` · ink `#14171C` · bg `#141821`

### How the theming works

`tokens.css` exposes every value as a CSS custom property scoped by a
`data-season` attribute on `<html>`. Set it once and all `var(--ch-*)`
references update live — no rebuild:

```html
<html data-season="autumn">   <!-- spring | summer | autumn | winter -->
```

`season-switch.js` maps the current date → season and sets the attribute:

```js
import { applySeason } from "./season-switch.js";
applySeason();               // auto = today's season
// applySeason("winter");    // or force one
```

For non-CSS platforms (SwiftUI, native, Tailwind config, design-tool variables),
read the hex values above into your own token store keyed by season.

---

## Logo

Every mark resolves a human gesture into engineered traces that gate through one
point — humans holding final authority over their agents.

- **`assets/mark-monogram.svg`** — the primary mark. Trace **cH** monogram: an
  open "c" arc + a gated "H", clean single-color traces (no nodes). Use for
  favicon, app icon, and anywhere the mark stands alone. Recolor via the SVG
  `stroke` attribute (default Ember `#C0492C`; use `--ch-primary` for the active
  season, `--ch-accent` on dark, or Ink/Bone for a single-color stamp).
- **`assets/mark-control-node.svg`** — alternate mark. Agent traces converge on a
  gated core; one path breaks the ring at top = human authority. Amber core/top
  node (`#E39A3B`), sage traces (`#6F8A78`), ember ring (`#C0492C`).

### App icon

Squircle: `border-radius: 26px` on a 112px tile filled with `--ch-primary`, mark
reversed in Bone `#F4EDE1`, shadow `0 10px 26px rgba(0,0,0,0.35)`.

### Wordmark

`classHuman AI` set in **Hanken Grotesk 800**, `letter-spacing: -0.03em`. The name
carries a built-in color story:

- **class** → Stone `#8B7F6E` (`--ch-muted`) — the structure, the machine, the system doing the work.
- **Human** → Ember `#C0492C` (`--ch-primary`) — the warm authority the brand defends.
- **AI** → set in Space Mono, tracked out, in `--ch-accent` (or Bone on dark).

On dark UI, "Human" shifts to Amber `#E39A3B` for contrast; "class" stays Stone.

---

## Typography

- **Hanken Grotesk** (400/500/600/700/800) — wordmark, headings, UI. Humanist, warm.
  Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800`
- **Space Mono** (400/700) — labels, specs, the "AI" tag, technical captions.
  Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700`

## Design tokens (radii / elevation)

- Radius: `sm 6px` · `md 11px` (buttons) · `lg 16px` (cards) · `icon 26px` (app squircle)
- Icon shadow: `0 10px 26px rgba(0,0,0,0.35)`

## Accessibility rules

- Body text pairs target AAA (Ink/Bone = 15.2:1).
- Ember & Stone on light are for **large text / UI elements**, not small body copy.
- Never use red/green as the only differentiator — Sage vs Ember are colorblink-safe;
  seasonal cool vs warm always carries a lightness difference too.
- Verify any new season pairing hits ≥4.5:1 for text before shipping.

---

## Files in this bundle

- `tokens.css` — all brand + seasonal CSS custom properties, plus example component bindings.
- `season-switch.js` — date → season helper (`seasonForDate`, `applySeason`).
- `assets/mark-monogram.svg` — primary cH trace mark.
- `assets/mark-control-node.svg` — alternate control-node mark.
- `classHuman AI Brand Board.dc.html` — the full visual brand board (reference only; open in a browser).

The other logo directions (hand→traces, rune stroke) live in the brand board if
you want to export them too — ask and they can be added as standalone SVGs.
