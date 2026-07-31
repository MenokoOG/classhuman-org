/* Skills — free, installable agent skills published from our own practice.
   These are real Claude Skills (SKILL.md + .skill package), not marketing
   collateral. Download files live in public/skills/. When a new skill ships,
   add it to SKILLS below and drop both files in public/skills/.
   Public content only — no internal paths, no personal detail. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const ACCENT = "var(--ch-cool-alt)";

const SKILLS = [
  {
    name: "legacy-modernization-scout",
    title: "Legacy Modernization Scout",
    summary:
      "Maps a legacy system before anyone commits to a rewrite. Inventories the surfaces, finds the seams where a facade can be inserted, designs the adapter for each seam, and ranks strangler-fig slices by value against reversibility.",
    detail:
      "Every finding carries a confidence mark — Confirmed, Inferred, or Unknown — and the report leads with an Unknowns register rather than burying it in an appendix. Any slice that depends on an Unknown does not get scheduled; it gets a spike. The first slice is chosen to be small, reversible, and resting on confirmed evidence, even when a more valuable one is available.",
    deliverable: "MODERNIZATION-SCOUT.md",
    use: "Before any rewrite, replatform, cloud migration, or “we’ll just rebuild it” decision.",
    skill: "/skills/legacy-modernization-scout.skill",
    md: "/skills/legacy-modernization-scout.SKILL.md",
  },
  {
    name: "agent-gate-review",
    title: "Agent Gate Review",
    summary:
      "Reviews an agent or agentic system against the five controls that decide whether it is safe to give real authority: registration, validation, revocation, escalation, and human-in-the-loop.",
    detail:
      "Each gate is rated Enforced, Advisory, Absent, or Unknown — established from the code path, not the design doc — and every gap gets a concrete failure scenario rather than a category name. A finding without a scenario is an opinion. Findings are ranked by blast radius, and the report names the smallest fix that changes each rating.",
    deliverable: "AGENT-GATE-REVIEW.md",
    use: "Before an agent gets write access, spend authority, customer contact, or any action that cannot be undone. Also after an incident.",
    skill: "/skills/agent-gate-review.skill",
    md: "/skills/agent-gate-review.SKILL.md",
  },
];

export default function Skills() {
  return (
    <main>
      <ProductHero
        eyebrow="SKILLS · FREE TO USE"
        color={ACCENT}
        title={
          <>
            Our working method, <GradientText>published.</GradientText>
          </>
        }
        lead="These are the skills we use on real engagements, packaged so you can install and run them yourself. Not lead-magnet checklists — the actual method, including the parts that make a report uncomfortable to read."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>FREE · INSTALLABLE</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            Claude Skills · SKILL.md + .skill package
          </span>
        </div>
      </ProductHero>

      {/* Why we publish */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHY WE PUBLISH THESE</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              The easiest way to show what we&apos;re good at is to hand it over.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              A capabilities deck tells you we understand agentic systems. A working skill lets
              you check. Each one encodes the discipline from our TACO Loop research —{" "}
              <em>unknown data must increase decision discipline, not model confidence</em> —
              as something an agent actually does, not a principle it cites.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              Use them on your own systems. If what they surface is bigger than your team wants
              to take on, that is when to call us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The skills */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>AVAILABLE NOW</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Two skills, both free.
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <article
                className="ch-card rounded-lg border border-border-brand bg-card p-6 sm:p-8"
                style={{ "--stage": ACCENT }}
              >
                <p className="font-mono text-xs font-bold tracking-widest" style={{ color: ACCENT }}>
                  {s.name}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-on-surface/85">{s.summary}</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-on-surface/75">
                  {s.detail}
                </p>
                <dl className="mt-6 grid gap-4 border-t border-border-brand pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[11px] font-bold tracking-widest text-muted-safe">
                      DELIVERABLE
                    </dt>
                    <dd className="mt-1 font-mono text-sm">{s.deliverable}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-bold tracking-widest text-muted-safe">
                      WHEN TO RUN IT
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-on-surface/85">{s.use}</dd>
                  </div>
                </dl>
                <p className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={s.skill}
                    download
                    className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
                  >
                    Download .skill
                  </a>
                  <a
                    href={s.md}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
                  >
                    Read the SKILL.md
                  </a>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How to install */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>HOW TO USE THEM</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Install the package, or just read the method.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              The <code className="font-mono text-sm">.skill</code> file is a package you can
              install in Claude to make the skill available to an agent directly. The{" "}
              <code className="font-mono text-sm">SKILL.md</code> is the same content in plain
              markdown — drop it into your own agent&apos;s instructions, adapt it to your
              stack, or read it and run the method by hand. Both are released for public use.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              No signup, no email gate, no tracker. Take them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>MORE COMING</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            We publish a skill whenever a method proves itself on real work.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            If there is a review or scouting pass you keep doing by hand and wish an agent could
            run properly, tell us — it may be the next one.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
              Suggest a skill
            </Link>
            <Link to="/services" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
              Work with us
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
