/* Research & Development — the honest home for TACO Loop, Ag3nt24 and HADES.

   Ruled 2026-08-07 (CLASSHUMAN.md v1.6): these three move OFF the products
   page onto their own R&D page. They are PAUSED, not scrapped. The company
   build comes first. Nothing here is an offering and nothing here goes into
   a client system.

   Layer direction is load-bearing: HADES is Layer 2 ABOVE Ag3nt24. Older copy
   described it as a rehabilitation destination that a failed gate routes DOWN
   into. That topology is stale — do not reintroduce it.

   Asymptote is deliberately absent: it shipped, it is standalone tooling, and
   it belongs with the tools, not the paused research. See docs/CONTENT.md. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";
import { RND_PAUSED } from "../lib/products.js";

const ACCENT = "var(--ch-sage)";

/* Why each layer exists, in one line — the through-line the cards alone don't
   carry. Keyed by slug so it stays in step with products.js. */
const PREMISE = {
  product: "The decision layer. What must be true before an agent is allowed to act.",
  ag3nt24: "The proof layer. Evidence that what an agent said it did is what it did.",
  hades: "The platform layer the first two were built to make possible.",
};

const PAPERS = [
  {
    title: "TACO Loop — White Paper v1.0",
    state: "PUBLISHED · JULY 2026",
    note: "Plus a Mathematical Model v0.1: state model, guardrail function G(a), QRF escalation, drift model, audit hash-chain, nested loops. Benchmark concept: TACO-UDD, the Unknown-Data Decision Benchmark.",
  },
  {
    title: "Ag3nt24 — White Paper v1.0",
    state: "IN REVIEW",
    note: "Drafted August 2026. Not final — the copy on this site may change as the review lands.",
  },
];

export default function Research() {
  return (
    <main>
      <ProductHero
        eyebrow="RESEARCH & DEVELOPMENT"
        color={ACCENT}
        title={
          <>
            What we&apos;re researching. <GradientText>Paused, and honest about it.</GradientText>
          </>
        }
        lead="These are our own research projects. They are not products, they are not for sale, and they are not part of any client engagement. We build client systems with what the field has already proven — our own work has to earn its way in on merit first."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>R&amp;D · PAUSED</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            phase 2 · restarts after the company build
          </span>
        </div>
      </ProductHero>

      {/* The banner. CONTENT.md requires this to appear on the page. */}
      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="rounded-lg border border-border-brand border-l-4 bg-card p-6"
            style={{ borderLeftColor: "var(--ch-accent)" }}
          >
            <p className="font-mono text-[11px] font-bold tracking-widest text-accent-safe">
              READ THIS FIRST
            </p>
            <p className="mt-3 leading-relaxed text-on-surface/90">
              These are research projects, not products. They are paused while we build the
              company. <strong>We do not put unproven work of our own into client systems.</strong>
            </p>
          </div>
        </Reveal>
      </section>

      {/* The stack, L0 -> L1 -> L2 */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE STACK</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Three layers, built bottom-up.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            Each layer assumes the one beneath it. TACO Loop decides, Ag3nt24 proves, and HADES
            is the platform those two were meant to make possible — Layer 2, above the other
            two, not a basement a failed gate falls into.
          </p>
        </Reveal>

        <ol className="mt-10 space-y-4">
          {RND_PAUSED.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} as="li">
              <article
                className="ch-card rounded-lg border border-border-brand bg-card p-6"
                style={{ "--stage": p.color }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] font-bold tracking-widest text-muted-safe">
                      {p.layer.toUpperCase()}
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold" style={{ color: p.color }}>
                      {p.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] tracking-widest text-muted-safe">
                      {p.tag}
                    </p>
                  </div>
                  <StatusPill color={p.color}>{p.status}</StatusPill>
                </div>

                <p className="mt-5 font-semibold leading-relaxed">{PREMISE[p.slug]}</p>
                <p className="mt-3 leading-relaxed text-on-surface/85">{p.blurb}</p>

                <p className="mt-5 border-t border-border-brand pt-4">
                  {p.hasPage ? (
                    <Link
                      to={`/${p.slug}`}
                      className="font-mono text-xs font-bold tracking-widest text-cool-safe hover:text-accent-safe"
                    >
                      READ THE {p.name.toUpperCase()} DETAIL &rarr;
                    </Link>
                  ) : (
                    /* No detail route exists for this entry, so no link is rendered.
                       See lib/products.js — `hasPage` is the guard, not a comment. */
                    <span className="font-mono text-xs font-bold tracking-widest text-muted-safe">
                      NO DETAIL PAGE — SCOPE IS STILL AN OPEN DECISION
                    </span>
                  )}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Where HADES actually stands */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>STATUS · HADES</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Archived, revived, and <GradientText>not being built.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              HADES — the Human Assisted Diagnostic Evaluation System — was archived in July
              2026 and revived on 2026-08-05. Its scope is still an open decision and nothing is
              being built yet. We are saying that plainly rather than leaving a name on a page
              with nothing behind it.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              It sits at Layer 2, <strong>above</strong> Ag3nt24. If you have seen an older
              description of it as somewhere failed agents get routed down into, that topology
              is out of date.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Papers */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>WHAT&apos;S WRITTEN DOWN</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">The papers.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            Paused does not mean deleted. What has been published stays published.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PAPERS.map((paper, i) => (
            <Reveal key={paper.title} delay={i * 70}>
              <article className="h-full rounded-lg border border-border-brand bg-surface p-6">
                <p className="font-mono text-[11px] font-bold tracking-widest text-accent-safe">
                  {paper.state}
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug">{paper.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface/80">{paper.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Route back to the commercial front door */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHAT WE ACTUALLY BUILD WITH</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              Client work runs on proven tools — not on this page.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Everything above is research. The working set we actually ship with is published
              separately, and Asymptote — our one shipped tool — stands on its own.
            </p>
            <p className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
              >
                Work with us
              </Link>
              <Link
                to="/asymptote"
                className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
              >
                Asymptote — shipped v0.1 &rarr;
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
