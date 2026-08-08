/* Tools We Use — the credibility page.

   Ruled 2026-08-07 (CLASSHUMAN.md v1.6). This page replaces "trust our stack"
   with "here is our working set." It is the commercial front door alongside
   /services, and it is deliberately NOT a page about our own research.

   Everything rendered here comes from lib/tools.js, where the no-aspirational-
   entries rule is written down. Do not inline a tool name in this file. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";
import { TOOL_GROUPS, DEPLOYMENT_TARGETS } from "../lib/tools.js";

const ACCENT = "var(--ch-cool)";

export default function Tools() {
  return (
    <main>
      <ProductHero
        eyebrow="HOW WE BUILD"
        color={ACCENT}
        title={
          <>
            The tools we <GradientText>actually use.</GradientText>
          </>
        }
        lead="We don't ask clients to bet on our research. We build with what the field has already proven, and we pick per project — your constraints decide the stack, not our preferences."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>THE WORKING SET</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            grouped by purpose · chosen per engagement
          </span>
        </div>
      </ProductHero>

      {/* The rule this page runs on */}
      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="rounded-lg border border-border-brand border-l-4 bg-card p-6"
            style={{ borderLeftColor: "var(--ch-accent)" }}
          >
            <p className="font-mono text-[11px] font-bold tracking-widest text-accent-safe">
              THE RULE FOR THIS PAGE
            </p>
            <p className="mt-3 leading-relaxed text-on-surface/90">
              Every tool listed here is one we have actually built with. Nothing aspirational.
              And <strong>our own research does not appear on this page</strong> — TACO Loop,
              Ag3nt24 and HADES are unproven, they are paused, and they stay out of client
              systems until they earn their way in on merit.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The working set */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-12">
          {TOOL_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 40}>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">{group.title}</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-on-surface/85">{group.why}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map(([name, note]) => (
                    <li
                      key={name}
                      className="ch-card rounded-lg border border-border-brand bg-card p-4"
                      style={{ "--stage": ACCENT }}
                    >
                      <p className="font-bold" style={{ color: ACCENT }}>
                        {name}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-on-surface/80">{note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Where it runs */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHERE IT RUNS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Cloud, on-premise, or <GradientText>entirely on your own hardware.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              &ldquo;An AI project&rdquo; is too often assumed to mean your data leaves the
              building. It doesn&apos;t have to. Where the system runs is your decision, and we
              build for the one you pick.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DEPLOYMENT_TARGETS.map(([name, body], i) => (
              <Reveal key={name} delay={i * 55}>
                <div className="h-full rounded-lg border border-border-brand bg-surface p-5">
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface/80">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we choose */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>HOW WE CHOOSE</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Best fit for the project wins.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            We are judged on outcomes, not on originality of stack. If you already run
            something on this list, we build on it rather than migrating you for our own
            convenience. If you run something that isn&apos;t on it, that is usually fine — the
            list is where we start, not a fence.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
            You keep your tooling, your cloud, and your exit options. We would rather you be
            able to leave than be unable to.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              Tell us what you run
            </Link>
            <Link
              to="/legacy"
              className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Modernizing something older &rarr;
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
