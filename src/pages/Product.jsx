import { Link } from "react-router-dom";
import TacoLoop from "../components/TacoLoop.jsx";
import InverseSpeed from "../components/InverseSpeed.jsx";
import GuardrailGate from "../components/GuardrailGate.jsx";
import StackRows from "../components/Stack.jsx";
import { TraceLine } from "../components/marks.jsx";

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage-safe">{children}</p>
  );
}

const stats = [
  { value: "4 stages", label: "ONE DISCIPLINED LOOP" },
  { value: "SHA-256", label: "HASH-CHAINED AUDIT TRAIL" },
  { value: "Risk > 0.50", label: "ROUTES TO A HUMAN" },
];

export default function Product() {
  return (
    <main>
      {/* Definition */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24">
        <Eyebrow>PRODUCT · TACO LOOP</Eyebrow>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Take In → Assess → Choose → Operate.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface/85">
          TACO Loop is a decision-control architecture for unknown-data environments — a
          control layer for agents, humans, and workflows.{" "}
          <strong>Not another agent.</strong> It wraps them in a discipline layer that
          slows premature action, bounds uncertainty, and routes every consequential
          call to a person.
        </p>
        <div className="mt-8 max-w-3xl rounded-lg border border-border-brand bg-card p-6" style={{ borderLeft: "6px solid var(--ch-primary)" }}>
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-accent-safe">
            CORE PRODUCT LAW
          </p>
          <p className="mt-2 text-xl font-bold">
            Unknown data must increase decision discipline — not model confidence.
          </p>
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-on-surface/85">
          A decision is proper only when made from bounded uncertainty, environmental
          awareness, rule compliance, and observable outcome.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-9 gap-y-5">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-extrabold">{value}</p>
              <p className="font-mono text-[10px] font-bold tracking-widest text-muted-safe">
                {label}
              </p>
            </div>
          ))}
        </div>
        <TraceLine className="mt-14 h-8 w-full" />
      </section>

      {/* The four stages */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>THE FOUR STAGES</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            One loop. Four gates. Each with a test.
          </h2>
          <p className="mb-8 mt-2 text-sm text-muted-safe">Click a stage.</p>
          <TacoLoop />
          <figure className="mt-12">
            <img
              src="/whitepaper-models/The_TACO_Decision_Loop_Diagram.png"
              alt="The TACO Decision Loop diagram: Take In Unknowns, Assess and Align, Choose Correctly, Operate and Observe Outcome — outcome evidence feeding the next loop"
              loading="lazy"
              className="mx-auto w-full max-w-2xl rounded-lg border border-border-brand"
            />
            <figcaption className="mt-3 text-center font-mono text-xs text-muted-safe">
              The TACO Decision Loop — from White Paper v1.0.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Inverse Speed Rule */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>THE CORE CONTROL LAW</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
          The Inverse Speed Rule
        </h2>
        <p className="mb-10 mt-4 max-w-2xl leading-relaxed text-on-surface/85">
          As total uncertainty rises, decision speed falls, verification deepens, and
          action scope shrinks — provably, not as a slogan. Drag the uncertainty.
        </p>
        <InverseSpeed />
      </section>

      {/* Guardrail gate */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <GuardrailGate />
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>CREDENTIALS</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">On the record</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">
              WHITE PAPER v1.0
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              Published July 2026, LinkedIn + Facebook.
            </p>
            <p className="mt-4">
              <a
                href="/whitepaper-models/TACO_Loop_Whitepaper_v1_classHuman.pdf"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs font-bold tracking-widest text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                READ THE PDF →
              </a>
            </p>
          </div>
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">
              MATHEMATICAL MODEL v0.1
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              State model, guardrail function G(a), QRF escalation, drift model, audit
              hash-chain, nested loops, master equation.
            </p>
            <p className="mt-4">
              <a
                href="/whitepaper-models/TACO_Math_Models_v1.md"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs font-bold tracking-widest text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                READ THE MODEL →
              </a>
            </p>
          </div>
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">
              TACO-UDD
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              The Unknown-Data Decision Benchmark.
            </p>
          </div>
        </div>
      </section>

      {/* The stack */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>THE STACK</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            TACO is the root layer.
          </h2>
          <p className="mt-2 text-sm text-muted-safe">
            Everything above builds on its discipline. Shipping in sequence — foundation
            first.
          </p>
          <StackRows />
          <p className="mt-10">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              Talk to classHuman AI
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
