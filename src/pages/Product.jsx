import { Link } from "react-router-dom";
import TacoLoop from "../components/TacoLoop.jsx";

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage">{children}</p>
  );
}

const laterLayers = [
  { name: "Ag3nt24", note: "Agent infrastructure. Later build layer." },
  { name: "HADES", note: "Agent diagnosis, correction, accountability. Later build layer." },
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
          <strong>Not another agent.</strong>
        </p>
        <blockquote className="mt-6 max-w-2xl border-l-4 border-accent pl-5 text-lg font-semibold italic">
          Unknown data must increase decision discipline, not model confidence.
        </blockquote>
        <p className="mt-6 max-w-2xl leading-relaxed text-on-surface/85">
          A decision is proper only when made from bounded uncertainty, environmental
          awareness, rule compliance, and observable outcome.
        </p>
      </section>

      {/* The four stages */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>THE FOUR STAGES</Eyebrow>
          <h2 className="mb-8 mt-3 text-3xl font-extrabold tracking-tight">
            One loop. Four gates. Each with a test.
          </h2>
          <TacoLoop />
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>CREDENTIALS</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">On the record</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent">
              WHITE PAPER v1.0
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              Published July 2026, LinkedIn + Facebook.
            </p>
          </div>
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent">
              MATHEMATICAL MODEL v0.1
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              State model, guardrail function G(a), QRF escalation, drift model, audit
              hash-chain, nested loops, master equation.
            </p>
          </div>
          <div className="rounded-lg border border-border-brand p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-accent">
              TACO-UDD
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface/85">
              The Unknown-Data Decision Benchmark.
            </p>
          </div>
        </div>
      </section>

      {/* Later layers */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>LATER LAYERS</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Built on the loop
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {laterLayers.map(({ name, note }) => (
              <li key={name} className="rounded-lg border border-border-brand p-5">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-2 text-sm text-on-surface/80">{note}</p>
              </li>
            ))}
          </ol>
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
