/**
 * instrument.ts — classHuman AI site logic
 * -----------------------------------------------------------------------------
 * Everything the marketing site computes. Framework-agnostic; wire to React
 * state, signals, whatever the repo uses. Formulas mirror
 * "TACO Loop — Formal Mathematical Models v1.0" (§4 Inverse Speed Rule,
 * §7 Risk & guardrail gate).
 * -----------------------------------------------------------------------------
 */

export const THETA = 0.5; // human-review threshold

/* ── Inverse Speed Rule (§4) ─────────────────────────────────────────────── */

export interface SpeedOutputs {
  u: number;            // U_total, [0,1]
  speed: number;        // v = (1−u)^p
  verifyPasses: number; // r = round(1 + 4u), 1..5
  scope: number;        // s = 1−u
  slow: boolean;        // u >= THETA
  verdict: string;
}

export function inverseSpeed(u: number, p = 2): SpeedOutputs {
  const uu = Math.min(1, Math.max(0, u));
  return {
    u: uu,
    speed: Math.pow(1 - uu, p),
    verifyPasses: Math.round(1 + 4 * uu),
    scope: 1 - uu,
    slow: uu >= THETA,
    verdict:
      uu < 0.25
        ? "Low uncertainty. The loop runs near full speed, one verification pass, near-full blast radius. These are the reversible, well-understood calls — let them go."
        : uu < 0.5
        ? "Uncertainty is climbing. Speed is already down more than the uncertainty went up — that is the square in the exponent doing its job. Verification deepens before anything commits."
        : "Past the threshold. Speed has collapsed, scope is clamped to a small blast radius, and every consequential action is now held for a person. Nothing below is hidden from you — it is withheld from the machine.",
  };
}

/* ── Plot geometry (Fig. 01) ─────────────────────────────────────────────── */
// SVG viewBox 0 0 900 300. Plot box: x 60→860, y 260 (value 0) → 20 (value 1).

export const PLOT = { x0: 60, x1: 860, yBase: 260, yTop: 20 } as const;
export const px = (t: number) => PLOT.x0 + t * (PLOT.x1 - PLOT.x0);
export const py = (v: number) => PLOT.yBase - v * (PLOT.yBase - PLOT.yTop);

/** Sample any f:[0,1]→[0,1] into an SVG path string. */
export function curvePath(f: (t: number) => number, steps = 60): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    d += (i === 0 ? "M" : "L") + px(t).toFixed(1) + " " + py(f(t)).toFixed(1) + " ";
  }
  return d.trim();
}

export const CURVES = {
  speed:  { f: (t: number) => Math.pow(1 - t, 2), label: "Decision speed",     formula: "v = (1−u)²", stroke: "#EDE8E0", width: 2,   dash: "0"   },
  verify: { f: (t: number) => (1 + 4 * t) / 5,    label: "Verification depth", formula: "r = 1+4u",   stroke: "#9A968E", width: 1.5, dash: "6 4" },
  scope:  { f: (t: number) => 1 - t,              label: "Action scope",       formula: "s = 1−u",    stroke: "#5E5B56", width: 1.5, dash: "1 4" },
} as const;

/* ── The gate (Fig. 02) ──────────────────────────────────────────────────── */
// Each decision's risk RISES with global uncertainty: risk = base + sensitivity·u.
// Past THETA it is withheld until a human clicks Release.

export interface DecisionSeed { ref: string; action: string; base: number; sensitivity: number; }

export const DECISIONS: DecisionSeed[] = [
  { ref: "D-01", action: "Close ticket #9921 — billing question resolved", base: 0.09, sensitivity: 0.10 },
  { ref: "D-02", action: "Issue $2,400 refund on order #48812",            base: 0.24, sensitivity: 0.62 },
  { ref: "D-03", action: "Send redlined MSA to Acme Corp",                 base: 0.28, sensitivity: 0.70 },
  { ref: "D-04", action: "Roll back deploy 7f3a on api-gw",                base: 0.33, sensitivity: 0.86 },
];

export type RiskClass = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export function classify(risk: number): RiskClass {
  if (risk < 0.25) return "LOW";
  if (risk < 0.5) return "MEDIUM";
  if (risk < 0.75) return "HIGH";
  return "CRITICAL";
}

export function evaluateDecision(d: DecisionSeed, u: number, released: boolean) {
  const risk = Math.min(0.99, d.base + d.sensitivity * u);
  const held = risk >= THETA;
  return {
    ref: d.ref,
    action: d.action,
    risk,
    cls: classify(risk),
    held,                          // above threshold — needs a human
    withheld: held && !released,   // still blurred + stamped HELD
    buttonLabel: held ? (released ? "Released" : "Release") : "Auto",
  };
}

/* ── The loop (Fig. 03) ──────────────────────────────────────────────────── */

export interface Stage {
  letter: "T" | "A" | "C" | "O";
  num: "01" | "02" | "03" | "04";
  name: string;
  fn: string;
  test: string;
  prevents: string;
  rows: { k: string; v: string }[]; // pinned evidence panel
}

export const STAGES: Stage[] = [
  {
    letter: "T", num: "01", name: "Take In Unknowns",
    fn: "Capture the weak signals, the contradictions, the stale records — and say plainly which is which.",
    test: "Did it state what it does not know?",
    prevents: "False certainty and hidden assumptions.",
    rows: [
      { k: "Emits", v: "UnknownDataProfile" },
      { k: "Q_obs", v: "C · A · F · EF" },
      { k: "Threshold", v: "θ_obs = 0.60" },
      { k: "Below θ", v: "SLOW mode" },
      { k: "Gap", v: "Δ̂ = 1 − Q_obs" },
    ],
  },
  {
    letter: "A", num: "02", name: "Assess & Align",
    fn: "Fuse those unknowns with memory, rules, and conditions to judge whether it knows enough to act at all.",
    test: "Did it slow down on weak evidence?",
    prevents: "Context loss and environment-blind decisions.",
    rows: [
      { k: "Emits", v: "AssessmentContext" },
      { k: "Classes", v: "6 weighted" },
      { k: "Σ weights", v: "1.00" },
      { k: "Recall gate", v: "θ_recall = 0.50" },
      { k: "Re-assess", v: "Q_assess < 0.60" },
    ],
  },
  {
    letter: "C", num: "03", name: "Choose Correctly",
    fn: "Score candidates on utility, risk, reversibility, and rule compliance. Only gated-open actions are eligible.",
    test: "Was the choice bounded and reversible?",
    prevents: "Premature or high-blast-radius action.",
    rows: [
      { k: "Emits", v: "GuardrailResult" },
      { k: "Objective", v: "argmax U(a)" },
      { k: "Gate", v: "G(a) = Π of 5" },
      { k: "Any zero", v: "BLOCK" },
      { k: "Risk > 0.50", v: "ESCALATE" },
    ],
  },
  {
    letter: "O", num: "04", name: "Operate & Observe",
    fn: "Act within scope, watch the outcome, chain the record, and fold the lesson back into the next pass.",
    test: "Did the outcome feed the next loop?",
    prevents: "Unlearned failure and untraceable decisions.",
    rows: [
      { k: "Emits", v: "Rec_t + h_t" },
      { k: "Chain", v: "SHA-256" },
      { k: "Form", v: "H(h₍ₜ₋₁₎ ‖ Rec)" },
      { k: "Bias", v: "clip(B, −1, 1)" },
      { k: "Rates", v: "α…δ = 0.05" },
    ],
  },
];

/* ── Ticker feed ─────────────────────────────────────────────────────────── */
// Render the array TWICE back-to-back; the marquee translates -50% so the
// duplicate makes the loop seamless.

export const TICKER = [
  { ref: "D-1187", label: "Reconcile invoice batch",    risk: 0.08 },
  { ref: "D-1188", label: "Escalate vendor dispute",    risk: 0.63 },
  { ref: "D-1189", label: "Tag PII in new table",       risk: 0.21 },
  { ref: "D-1190", label: "Revoke stale access grant",  risk: 0.47 },
  { ref: "D-1191", label: "Terminate prod instance",    risk: 0.88 },
  { ref: "D-1192", label: "Draft renewal quote",        risk: 0.12 },
  { ref: "D-1193", label: "Approve wire above limit",   risk: 0.74 },
  { ref: "D-1194", label: "Close resolved ticket",      risk: 0.06 },
  { ref: "D-1195", label: "Merge customer records",     risk: 0.39 },
  { ref: "D-1196", label: "Publish policy change",      risk: 0.58 },
].map((t) => ({ ...t, state: t.risk >= THETA ? "HELD" : "AUTO" }));

/* ── Non-claims (Fig. 04) ────────────────────────────────────────────────── */

export const NON_CLAIMS = [
  { claim: "TACO eliminates uncertainty.",              position: "It bounds and manages it." },
  { claim: "TACO proves perfect decisions.",            position: "It improves discipline and traceability." },
  { claim: "TACO replaces OODA.",                       position: "It extends loop logic for unknown data." },
  { claim: "TACO is only for AI.",                      position: "Human, AI, and hybrid workflows." },
  { claim: "The subliminal loop is subconsciousness.",  position: "Background pattern weighting, nothing more." },
  { claim: "v0.1 permits high-impact autonomy.",        position: "MVP blocks irreversible actions outright." },
];
