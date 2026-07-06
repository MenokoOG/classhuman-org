/**
 * taco-controls.ts
 * -----------------------------------------------------------------------------
 * Pure functions behind the classHuman AI marketing site's two interactive
 * pieces: the TACO Loop stage selector and the Inverse Speed Rule demo.
 *
 * These mirror the formulas in "TACO Loop — Formal Mathematical Models v1.0"
 * (§4 Inverse Speed Rule, §7 Risk classes). They are framework-agnostic — wire
 * them to React state, Vue refs, signals, whatever the codebase uses.
 * -----------------------------------------------------------------------------
 */

// ---- TACO Loop stages (§3 of the white paper) -------------------------------

export type StageLetter = "T" | "A" | "C" | "O";

export interface Stage {
  letter: StageLetter;
  num: number;
  name: string;
  color: string;      // accent used for badge + detail rail
  fn: string;         // what the stage does
  prevents: string;   // the failure it prevents
  test: string;       // operational test question
}

export const STAGES: Stage[] = [
  {
    letter: "T", num: 1, name: "Take In Unknowns", color: "#5A88BE",
    fn: "Capture unknown data, weak signals, anomalies, environmental inputs, and declared goals — and state plainly what is known and what is not.",
    prevents: "False certainty & hidden assumptions",
    test: "Did the system state what it knows and does not know?",
  },
  {
    letter: "A", num: 2, name: "Assess & Align", color: "#6FA6AE",
    fn: "Fuse unknowns with decision memory, rules, environmental factors, and the six uncertainty classes to judge whether it knows enough to act.",
    prevents: "Context loss & environment-blind decisions",
    test: "Did the system slow down when evidence was weak?",
  },
  {
    letter: "C", num: 3, name: "Choose Correctly", color: "#E39A3B",
    fn: "Score candidate actions by utility, risk, uncertainty, reversibility, and rule compliance — only guardrail-passing actions are feasible.",
    prevents: "Premature or high-blast-radius action",
    test: "Was the decision bounded, reversible, and traceable?",
  },
  {
    letter: "O", num: 4, name: "Operate & Observe", color: "#C0492C",
    fn: "Execute or recommend a bounded action, observe the outcome, write a hash-chained audit record, and consolidate the lesson into memory.",
    prevents: "Unlearned failure & untraceable decisions",
    test: "Did outcome evidence feed the next loop?",
  },
];

// ---- Inverse Speed Rule (§4) ------------------------------------------------
// u = U_total in [0,1]. p = convexity (default 2, punishes high uncertainty).

export interface InverseSpeedOutputs {
  u: number;            // normalized uncertainty [0,1]
  speed: number;        // v(u) = (1-u)^p            in [0,1]
  verifyPasses: number; // r(u) = round(1 + 4u)      in [1,5]
  scope: number;        // s(u) = (1-u)              in [0,1]
  slowMode: boolean;    // true once u >= θ (context-gather / restrict scope)
  verdict: string;      // human-readable summary
}

export function inverseSpeed(u: number, p = 2, slowThreshold = 0.4): InverseSpeedOutputs {
  const uu = Math.min(1, Math.max(0, u));
  const speed = Math.pow(1 - uu, p);
  const verifyPasses = Math.round(1 + 4 * uu);
  const scope = 1 - uu;

  let verdict: string;
  if (uu < 0.25) {
    verdict = "Low uncertainty — the loop moves fast, one verification pass, near-full scope. Reversible, well-understood action.";
  } else if (uu < 0.6) {
    verdict = "Rising uncertainty — the loop throttles speed and adds verification passes before committing.";
  } else {
    verdict = "High uncertainty — speed collapses, scope is clamped to a small blast radius, and consequential actions route to a human.";
  }

  return { u: uu, speed, verifyPasses, scope, slowMode: uu >= slowThreshold, verdict };
}

// ---- Risk classes (§7.3) ----------------------------------------------------

export interface RiskClass {
  min: number; max: number;
  label: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  color: string;
  action: string;
  routesToHuman: boolean;
}

export const RISK_CLASSES: RiskClass[] = [
  { min: 0.00, max: 0.25, label: "LOW",      color: "#6FA6AE", action: "Proceed, audit.",                       routesToHuman: false },
  { min: 0.25, max: 0.50, label: "MEDIUM",   color: "#8FB2DE", action: "Proceed, validate + trace.",           routesToHuman: false },
  { min: 0.50, max: 0.75, label: "HIGH",     color: "#E39A3B", action: "Human review required.",               routesToHuman: true  },
  { min: 0.75, max: 1.01, label: "CRITICAL", color: "#D9603F", action: "Stop unless explicitly authorized.",   routesToHuman: true  },
];

export function classifyRisk(risk: number): RiskClass {
  return RISK_CLASSES.find((c) => risk >= c.min && risk < c.max) ?? RISK_CLASSES[0];
}

// Risk score (§7.1): all factors in [0,1]; U_total is a multiplier.
export function riskScore(f: {
  impact: number; pFailure: number; exposure: number; irreversibility: number; uTotal: number;
}): number {
  return f.impact * f.pFailure * f.exposure * f.irreversibility * f.uTotal;
}

// Guardrail AND-gate (§7.2): any zero → blocked/escalated.
export function guardrail(f: {
  pRule: number; pPermission: 0 | 1; pScope: number; pSafety: 0 | 1; pReversibility: number;
}): { value: number; blocked: boolean } {
  const value = f.pRule * f.pPermission * f.pScope * f.pSafety * f.pReversibility;
  return { value, blocked: value === 0 };
}
