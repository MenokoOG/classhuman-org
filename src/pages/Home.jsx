import { Link } from "react-router-dom";
import { ControlNode, TraceLine } from "../components/marks.jsx";

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage-safe">{children}</p>
  );
}

const roadmap = [
  { name: "TACO Loop", note: "Active now.", active: true },
  { name: "Ag3nt24", note: "Agent infrastructure. Later build layer." },
  { name: "HADES", note: "Agent diagnosis, correction, accountability. Later build layer." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Decision-control for human-agentic collaboration.
            </h1>
            <p className="mt-6 text-lg text-on-surface/85">
              classHuman AI builds the control layer where human warmth meets machine
              discipline — so humans keep final authority over their agents.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/product"
                className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
              >
                Explore TACO Loop
              </Link>
              <Link
                to="/about"
                className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
              >
                Meet the team
              </Link>
            </div>
          </div>
          <ControlNode className="hidden h-52 w-52 shrink-0 md:block lg:h-64 lg:w-64" />
        </div>
        <TraceLine className="mt-16 h-8 w-full" />
      </section>

      {/* LAHA */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Eyebrow>OUR LAW</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Love All Humans Always.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface/85">
            LAHA is the reason the company exists. We build human-AI collaboration where
            people, not models, hold final authority over the decisions that matter. Every
            system we ship is measured against it: does it keep humans in command, and
            treat them with care?
          </p>
          <p className="mt-6">
            <Link to="/story" className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe">
              Where LAHA comes from — our story
            </Link>
          </p>
        </div>
      </section>

      {/* TACO teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Eyebrow>PRODUCT · TACO LOOP</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Take In → Assess → Choose → Operate.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface/85">
          TACO Loop is a decision-control architecture for unknown-data environments — a
          control layer for agents, humans, and workflows.{" "}
          <strong>Not another agent.</strong>
        </p>
        <blockquote className="mt-6 max-w-2xl border-l-4 border-accent pl-5 text-lg font-semibold italic">
          Unknown data must increase decision discipline, not model confidence.
        </blockquote>
        <p className="mt-8">
          <Link
            to="/product"
            className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
          >
            See the four stages
          </Link>
        </p>
      </section>

      {/* Roadmap */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Eyebrow>WHAT&apos;S NEXT</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Roadmap</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {roadmap.map(({ name, note, active }, i) => (
              <li
                key={name}
                className={`rounded-lg border p-5 ${
                  active ? "border-accent" : "border-border-brand"
                }`}
              >
                <p className="font-mono text-xs font-bold tracking-widest text-muted-safe">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  {name}
                  {active && (
                    <span className="ml-3 rounded-sm bg-accent px-2 py-0.5 align-middle font-mono text-xs font-bold text-on-accent">
                      ACTIVE
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-on-surface/80">{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <TraceLine className="mx-auto mb-10 h-6 w-full max-w-lg" />
          <h2 className="text-3xl font-extrabold tracking-tight">
            Humans hold final authority.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/product"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              Explore TACO Loop
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
