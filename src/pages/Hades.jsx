import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";
import { productBySlug } from "../lib/products.js";

const P = productBySlug("hades");

const rehab = [
  ["Containment", "A failing agent is isolated in a sandbox — no authority, no side effects."],
  ["Diagnosis", "Its behavior is examined against the guardrails it broke."],
  ["Validate & return", "If it passes, it's validated and returned to service."],
];

const deactivate = [
  ["Harvest", "If it can't be repaired, its experience and lessons are harvested first — nothing learned is wasted."],
  ["Authorize", "A human authorizes deactivation — the Human Authorized Deactivation Evidence Sequence."],
  ["Ledger", "Every step, either path, is documented to the on-chain ledger."],
];

export default function Hades() {
  return (
    <main>
      <ProductHero
        eyebrow="PRODUCT · HADES · LAYER 2"
        color={P.color}
        title={
          <>
            It doesn&apos;t punish. It gates authority and{" "}
            <GradientText>preserves truth.</GradientText>
          </>
        }
        lead="HADES — the Human Assisted Diagnostic Evaluation System. When an agent fails its gates, HADES contains it, diagnoses it, and either returns it to service or authorizes its deactivation — with a human in the loop and a permanent record either way."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={P.color}>{P.status}</StatusPill>
          <span className="font-mono text-xs text-muted-safe">white paper in drafting</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/ag3nt24" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
            Fed by Ag3nt24&apos;s gates
          </Link>
          <Link to="/product" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
            The root discipline — TACO
          </Link>
        </div>
      </ProductHero>

      {/* Two paths */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>TWO PATHS, ONE LEDGER</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Rehabilitation first. Deactivation only when it must.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="ch-card h-full rounded-lg border border-border-brand bg-surface p-6" style={{ "--stage": "#6F8A78" }}>
                <p className="font-mono text-xs font-bold tracking-widest text-sage-safe">
                  REHABILITATION PATH
                </p>
                <ol className="mt-5 space-y-4">
                  {rehab.map(([t, d], i) => (
                    <li key={t} className="flex gap-3">
                      <span className="font-mono text-sm font-bold text-sage-safe">{i + 1}</span>
                      <span>
                        <span className="block font-bold">{t}</span>
                        <span className="text-sm leading-relaxed text-on-surface/80">{d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="ch-card h-full rounded-lg border border-border-brand bg-surface p-6" style={{ "--stage": P.color }}>
                <p className="font-mono text-xs font-bold tracking-widest text-muted-safe">
                  DEACTIVATION PATH
                </p>
                <ol className="mt-5 space-y-4">
                  {deactivate.map(([t, d], i) => (
                    <li key={t} className="flex gap-3">
                      <span className="font-mono text-sm font-bold text-muted-safe">{i + 1}</span>
                      <span>
                        <span className="block font-bold">{t}</span>
                        <span className="text-sm leading-relaxed text-on-surface/80">{d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Naming */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>WHAT THE NAME CARRIES</Eyebrow>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border-brand bg-card p-6">
              <p className="font-mono text-xs font-bold tracking-widest text-sage-safe">REHABILITATION</p>
              <p className="mt-2 text-lg font-bold">Human Assisted Diagnostic Evaluation System</p>
              <p className="mt-2 text-sm leading-relaxed text-on-surface/80">
                The default. Contain, diagnose, validate, return.
              </p>
            </div>
            <div className="rounded-lg border border-border-brand bg-card p-6">
              <p className="font-mono text-xs font-bold tracking-widest text-muted-safe">LAST RESORT</p>
              <p className="mt-2 text-lg font-bold">Human Authorized Deactivation Evidence Sequence</p>
              <p className="mt-2 text-sm leading-relaxed text-on-surface/80">
                Only when repair fails — authorized by a person, evidenced on-chain.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-on-surface/85">
            Either way, a human holds final authority and the truth is preserved. That&apos;s the
            LAHA line running straight through the deepest layer of the stack.
          </p>
          <p className="mt-8">
            <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
              Talk to classHuman AI
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
