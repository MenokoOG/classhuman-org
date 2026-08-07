# Claude Code prompt — classHuman AI site ("The Instrument")

Paste everything under **## PROMPT** into Claude Code from your repo root, with
`design_handoff_instrument/` present in the repo.

---

## PROMPT

Build the classHuman AI marketing site.

Read `design_handoff_instrument/README.md` in full before writing any code — it
is the authoritative spec, and the central idea is behavioral rather than
visual, so skimming it will produce the wrong thing. Import
`design_handoff_instrument/instrument.ts` as-is for every formula, dataset, and
plot-geometry helper; do not reimplement the math.
`design_handoff_instrument/classHuman Instrument.dc.html` is a design reference
you can open in a browser to check look and behavior — do not port its markup.

**The core idea.** Every AI site sells acceleration. classHuman's Core Product
Law is the opposite: *unknown data must increase decision discipline, not model
confidence.* So this site enforces its own law on itself. A single uncertainty
slider governs the whole page; past θ = 0.50 the live decision list withholds its
own contents — rows blur, a HELD stamp appears, and only a human clicking
**Release** reveals one. The visitor performs the product. Build that interaction
first and make it exact; everything else supports it.

**Non-negotiable visual rules.** This is an engineering plate, not a SaaS
landing page:
- Zero rounded corners — every corner square.
- No gradients, no glow, no box-shadow, no glassmorphism (one exception: the
  sticky masthead's blur).
- No orbs, particle fields, neural imagery, or gradient text.
- No purple or cyan.
- Hairline `1px solid #1C1C20` rules everywhere — sections, columns, and table
  rows are divided by rules, never by whitespace alone.
- Fonts: Hanken Grotesk (300 for large statements, 600 for emphasis) and Space
  Mono (all labels, numbers, axes — uppercase, letter-spacing .14–.20em).

**`#C0492C` (ember) is semantic, not decorative.** It means *a human is required
here*: the θ line, HELD stamps, Release buttons, the active stage letter, the
SLOW state. Never use it for ordinary emphasis. A screen with nothing held should
be almost entirely monochrome.

**Three interactions:**
1. Uncertainty slider → drives the plotted curves, every decision's risk score,
   the loop-state readout, the panel tint, and stage-name letter-spacing.
2. The gate → rows past θ blur + stamp; Release reveals individually, keyed by
   ref.
3. Fig. 03 sticky stack → scroll swaps the pinned evidence panel via
   IntersectionObserver at `rootMargin: "-42% 0px -42% 0px"`.

**The plot must be a real graph** — labelled axes, tick marks, a dashed θ line,
three curves sampled from `curvePath()`. The curves are differentiated by **dash
pattern, not color** — that is a colorblind-safety requirement, not a style
choice.

**Motion:** one easing, `cubic-bezier(0.16, 1, 0.3, 1)`. Scroll reveals at 900ms
via IntersectionObserver. Nothing snaps — slow easing is thematically load-bearing
for a company whose law is *slow down*. Honor `prefers-reduced-motion`.

Match the repo's existing framework, file layout, styling approach, and lint
rules. If there is no frontend yet, use React + Vite + TypeScript per the TACO
white paper's recommended stack.

Start by proposing the file structure and how you'll wire the shared uncertainty
state, then build.

**Done when:** the slider governs plot + gate + tint + tracking; rows hold and
release correctly; the sticky panel swaps on scroll; there are zero rounded
corners, gradients, or glows anywhere in the output; typecheck and lint pass with
no console errors.
