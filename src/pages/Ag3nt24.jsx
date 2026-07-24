import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";
import { productBySlug } from "../lib/products.js";

const P = productBySlug("ag3nt24");

const steps = [
  ["1 · Act", "An agent proposes an action inside a workflow.", "The agent inherits TACO's guardrails — nothing bypasses the loop."],
  ["2 · Gate", "The action passes through a proof gate.", "Permission, scope, safety, and reversibility are checked before anything runs."],
  ["3 · Receipt", "A signed, append-only receipt is written.", "What the agent did becomes provable — not just logged. Tamper-evident by construction."],
  ["4 · Route", "A failed gate routes the agent to HADES.", "Misbehavior isn't dropped or hidden; it's contained and diagnosed."],
];

export default function Ag3nt24() {
  return (
    <main>
      <ProductHero
        eyebrow="PRODUCT · AG3NT24 · LAYER 1"
        color={P.color}
        title={
          <>
            The <GradientText>proof layer</GradientText> for agent actions.
          </>
        }
        lead="Ag3nt24 answers one hard question: how do you prove what an AI agent said it did is what it actually did? Agent actions pass through gates that produce signed, append-only receipts — so behavior is provable, not just logged."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={P.color}>{P.status}</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            Renamed from Aurora&nbsp;24 / A-24 · white paper in drafting
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/product" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
            Built on TACO Loop
          </Link>
          <Link to="/hades" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
            Where failed gates go — HADES
          </Link>
        </div>
      </ProductHero>

      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>THE PROBLEM</Eyebrow>
            <blockquote className="mt-4 max-w-3xl border-l-4 border-accent pl-6 text-2xl font-bold leading-snug sm:text-3xl">
              &ldquo;How do you prove what an agent said it did is what it{" "}
              <GradientText>actually did?</GradientText>&rdquo;
            </blockquote>
            <p className="mt-6 max-w-2xl leading-relaxed text-on-surface/85">
              Logs can be edited. Claims can drift from reality. Ag3nt24 replaces trust-me
              logging with cryptographic proof: every consequential action produces a signed,
              append-only receipt that can be verified after the fact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>HOW A GATED ACTION FLOWS</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Act → Gate → Receipt → Route.</h2>
        </Reveal>
        <ol className="mt-8 space-y-3.5">
          {steps.map(([title, what, why], i) => (
            <Reveal key={title} delay={i * 60} as="li">
              <div
                className="ch-card rounded-lg border border-border-brand bg-card p-6 sm:flex sm:items-center sm:gap-6"
                style={{ "--stage": P.color }}
              >
                <p className="font-mono text-sm font-extrabold tracking-widest sm:w-28 sm:shrink-0" style={{ color: P.color }}>
                  {title}
                </p>
                <p className="mt-2 flex-1 leading-relaxed text-on-surface/90 sm:mt-0">
                  <span className="font-semibold text-on-surface">{what}</span>{" "}
                  <span className="text-on-surface/75">{why}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHERE IT SITS</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              Layer 1, on the discipline TACO already enforces.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Agents inherit TACO&apos;s guardrails; Ag3nt24 makes their actions provable; a
              failed gate routes the agent down to HADES for diagnosis. One system, in layers.
            </p>
            <p className="mt-8 flex flex-wrap gap-4">
              <Link to="/product" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
                Explore TACO Loop
              </Link>
              <Link to="/contact" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
                Talk to classHuman AI
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
