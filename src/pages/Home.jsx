import { Link } from "react-router-dom";
import StackRows from "../components/Stack.jsx";
import { Eyebrow, GradientText, Reveal, TraceField, StatusPill } from "../components/ui.jsx";
import { PRODUCTS } from "../lib/products.js";

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="ch-aurora pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
        <div className="ch-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <TraceField className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
          <div className="ch-identity inline-flex items-center gap-2 rounded-full border border-border-brand bg-surface/70 px-4 py-1.5 backdrop-blur">
            <span aria-hidden="true" className="ch-pulse inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-on-surface/80">
              GENERATIVE AI SOFTWARE ENGINEERING · DEVELOPMENT · RESEARCH — LLC
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            We build the <GradientText>control layer</GradientText> where humans keep final
            authority over their agents.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-surface/85 sm:text-xl">
            classHuman AI is a Generative AI Software Engineering, Development &amp; Research firm.
            We write our own software for the agentic systems we create — human warmth, machine
            discipline, and a spine of accountability under every decision.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/product"
              className="rounded-md bg-primary px-6 py-3 font-bold text-on-primary shadow-lg shadow-primary/20 hover:opacity-90"
            >
              Explore TACO Loop
            </Link>
            <Link
              to="/demos"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              See it working — Demos
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              ["4", "products in the stack"],
              ["v0.1", "Asymptote shipped"],
              ["> 0.50", "risk routes to a human"],
              ["SHA-256", "hash-chained audit"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-extrabold sm:text-3xl">{v}</dt>
                <dd className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-safe">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── LAHA ───────────────────────────────────────────── */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Eyebrow>OUR LAW</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <GradientText>Love All Humans Always.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface/85">
              LAHA is the reason the company exists. We build human-AI collaboration where
              people, not models, hold final authority over the decisions that matter. Every
              system we ship is measured against it: does it keep humans in command, and treat
              them with care?
            </p>
            <p className="mt-6">
              <Link
                to="/story"
                className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                Where LAHA comes from — our story
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Products constellation ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>THE STACK · FOUR PRODUCTS</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            One discipline, built in layers.
          </h2>
          <p className="mt-3 max-w-2xl text-on-surface/85">
            TACO is the root. Everything above inherits its guardrails — proof, diagnosis,
            and the tools that keep the whole thing honest.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to={`/${p.slug}`}
                className="ch-card group block h-full rounded-lg border border-border-brand bg-card p-6"
                style={{ "--stage": p.color }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold" style={{ color: p.color }}>
                      {p.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] tracking-widest text-muted-safe">
                      {p.layer}
                    </p>
                  </div>
                  <StatusPill color={p.color}>{p.status}</StatusPill>
                </div>
                <p className="mt-4 text-sm font-semibold text-on-surface">
                  &ldquo;{p.hook}&rdquo;
                </p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface/80">{p.blurb}</p>
                <p className="mt-4 font-mono text-xs font-bold tracking-widest text-cool-safe group-hover:text-accent-safe">
                  OPEN {p.name.toUpperCase()} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TACO law ───────────────────────────────────────── */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Eyebrow>CORE PRODUCT LAW</Eyebrow>
            <blockquote className="mt-4 max-w-3xl border-l-4 border-accent pl-6 text-2xl font-bold leading-snug sm:text-3xl">
              Unknown data must increase decision discipline — <GradientText>not model
              confidence.</GradientText>
            </blockquote>
            <p className="mt-6 max-w-2xl text-on-surface/85">
              It&apos;s the law behind every product: bound the uncertainty, slow down when the
              evidence is weak, and route every consequential call to a person.
            </p>
          </Reveal>
          <StackRows />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border-brand bg-card/60">
        <div className="ch-aurora pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Humans hold <GradientText>final authority.</GradientText>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/product"
              className="rounded-md bg-primary px-6 py-3 font-bold text-on-primary hover:opacity-90"
            >
              Explore TACO Loop
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
