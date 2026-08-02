/* Work With Us — the commercial headline of classHuman AI.
   Founder ruling 2026-07-31: what we sell is client engineering. TACO Loop and
   Ag3nt24 are R&D — the discipline underneath the work, not the invoice line.
   Escalation and human-in-the-loop were previously described as HADES
   capabilities; HADES was scrapped and archived, and those two are re-homed
   here as part of the security-agent offering. Do not re-add HADES.
   Governing doc: classhuman/product-stack.md. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const ACCENT = "var(--ch-primary)";

const offerings = [
  {
    title: "Agents and agentic systems",
    kind: "Build",
    body:
      "We build agents and multi-agent systems on modern platforms and open-source frameworks — the tools your team already trusts, not a proprietary box you can never leave. Tool design, orchestration, evaluation, and the boring operational work that decides whether an agent survives contact with real users. The client keeps their tooling, their cloud, and their exit options.",
  },
  {
    title: "Legacy modernization",
    kind: "Migrate",
    body:
      "Modern agents on a stack you cannot switch off. Strangler-fig migration and protocol-droid adapters move capability across one slice at a time, reversibly, with the lights on. The first slice is chosen to be small and safe, not impressive — its job is to prove the rollback path works.",
  },
  {
    title: "Our harness and security-agent software",
    kind: "Custom",
    body:
      "The part most agent projects skip. We build the harness that runs your agents and the control layer that decides what they are allowed to do: registration, validation, revocation, escalation, and human-in-the-loop. Fail-closed by construction — every uncertainty resolves to deny.",
  },
  {
    title: "Enabling your team",
    kind: "Hand off",
    body:
      "If you would rather own the capability than rent it, we equip your engineers to keep going without us — the skills, the tools, the review method, and documentation written for the person who inherits it. You own the system, not a retainer.",
  },
];

const gates = [
  [
    "Registration",
    "Is this agent known?",
    "A durable identity per agent, distinct from the service it runs in, with declared capabilities and a declared scope of authority — enforced at runtime, not documented on a wiki. Without it, nothing can be attributed and nothing can be revoked.",
  ],
  [
    "Validation",
    "Is this action legitimate, checked before it happens?",
    "Enforced contracts on every tool call — schema, scope, and provenance. Content an agent retrieves is data, never instruction. An agent that acts on instructions found inside a web page, an email, or a ticket does not have a validation gate; it has an injection surface.",
  ],
  [
    "Revocation",
    "Can authority be withdrawn, right now?",
    "Authority that cannot be taken back was never granted safely. Revocation that works mid-run, that a non-engineer can trigger, that invalidates credentials already fetched, and that records who did it and why. A revocation path nobody has exercised is a hypothesis.",
  ],
  [
    "Escalation",
    "What happens when confidence is low?",
    "A defined threshold below which the agent stops rather than proceeds — triggered on evidence, not on self-reported confidence. Escalation goes to a named human with an SLA. \"Escalate, then proceed if nobody answers\" is not escalation; it is a delay.",
  ],
  [
    "Human-in-the-loop",
    "Is final authority actually held by a person?",
    "Named decision classes where a human decides, with enough context in front of them to decide for real. Scoped so the gate fires rarely enough to still mean something — a gate that gets clicked through manufactures a record of consent that was never given.",
  ],
];

/* The build stack we publish: Strands Agents is the primary framework for
   custom/production agent builds; the platform grid is what we're fluent on.
   Keep truthful — only list platforms we actually work with. */
const platforms = [
  ["AWS", ["Amazon Bedrock", "SageMaker", "Kiro"]],
  ["Google", ["Google AI Studio"]],
  ["IBM", ["watsonx", "IBM Bob"]],
  ["Microsoft", ["Microsoft Agent Framework"]],
  ["GitHub", ["Spec Kit — spec-driven development"]],
];

export default function Services() {
  return (
    <main>
      <ProductHero
        eyebrow="WORK WITH US"
        color={ACCENT}
        title={
          <>
            We build agents and agentic systems — and the{" "}
            <GradientText>harness that governs them.</GradientText>
          </>
        }
        lead="classHuman AI is a Generative Software Engineering firm. We build the software for the agentic systems we create: custom agents on modern platforms and open-source frameworks, legacy modernization without a rewrite, and the security-agent layer that decides what an agent is allowed to do before it does it."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>TAKING ENGAGEMENTS</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            register · validate · revoke · escalate · human-in-the-loop
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
            Tell us what you&apos;re building
          </Link>
          <Link to="/skills" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
            See how we work — free skills
          </Link>
        </div>
      </ProductHero>

      {/* What we do */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Four kinds of engagement.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Most of our work starts in one of these and grows into another. We are a
              two-person firm by design — you get the people who build it, not an account
              manager between you and them.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 55}>
                <article
                  className="ch-card flex h-full flex-col rounded-lg border border-border-brand bg-surface p-6"
                  style={{ "--stage": ACCENT }}
                >
                  <p className="font-mono text-xs font-bold tracking-widest" style={{ color: ACCENT }}>
                    {o.kind.toUpperCase()}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight">{o.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface/85">{o.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The five gates */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE CONTROL LAYER · FIVE GATES</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            An agent that can only read is a demo. The moment it can{" "}
            <GradientText>write, spend, or send,</GradientText> it needs five answers.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            Most agent systems in production today cannot answer all five. This is the layer we
            build, and it is the reason our agents are safe to give real authority.
          </p>
        </Reveal>
        <ol className="mt-8 space-y-3.5">
          {gates.map(([name, question, detail], i) => (
            <Reveal key={name} delay={i * 55} as="li">
              <div
                className="ch-card rounded-lg border border-border-brand bg-card p-6 sm:flex sm:items-start sm:gap-6"
                style={{ "--stage": ACCENT }}
              >
                <p
                  className="font-mono text-sm font-extrabold tracking-widest sm:w-44 sm:shrink-0"
                  style={{ color: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")} · {name}
                </p>
                <div className="mt-2 flex-1 sm:mt-0">
                  <p className="font-semibold">{question}</p>
                  <p className="mt-2 leading-relaxed text-on-surface/80">{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-safe">
          Fail-closed throughout: a failed gate denies the action, records the refusal, and
          escalates to a named human. There is no &ldquo;warn and continue&rdquo; — a warning
          nobody blocks on is a log line.
        </p>
      </section>

      {/* How we build — framework & platforms */}
      <section className="border-t border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>HOW WE BUILD · FRAMEWORK & PLATFORMS</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              One framework at the core, <GradientText>fluent across the stack.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Our primary framework for custom and production agent builds is{" "}
              <a
                href="https://strandsagents.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                Strands Agents
              </a>{" "}
              — the open-source, model-driven agent SDK. It keeps our builds portable across
              model providers, observable in production, and governable by the five gates
              above — with big-tech agent tooling alongside wherever the job calls for it.
              The work itself runs spec-first with{" "}
              <a
                href="https://github.github.com/spec-kit/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                GitHub&apos;s Spec Kit
              </a>
              : define what to build before building it — spec, plan, tasks, then
              implementation.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              We work with — and are at home in — all the foundation and frontier models and
              their pipelines, on the platforms your team already runs:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {platforms.map(([vendor, tools], i) => (
              <Reveal key={vendor} delay={i * 55}>
                <article
                  className="ch-card h-full rounded-lg border border-border-brand bg-surface p-6"
                  style={{ "--stage": ACCENT }}
                >
                  <p className="font-mono text-xs font-bold tracking-widest" style={{ color: ACCENT }}>
                    {vendor.toUpperCase()}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border-brand bg-card px-3 py-1.5 text-sm font-semibold"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-safe">
            Framework and platform are the tools; the five gates and TACO discipline are what
            make the result safe to hand authority. Both travel with every build.
          </p>
        </div>
      </section>

      {/* The discipline underneath */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>THE DISCIPLINE UNDERNEATH</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              We do our own research, and it shows up in your build.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              <strong>TACO Loop</strong> is our decision-control architecture for unknown-data
              environments, and its product law governs everything we ship:{" "}
              <em>unknown data must increase decision discipline, not model confidence.</em>{" "}
              <strong>Ag3nt24</strong> is the fail-closed proof layer — gated agent actions that
              produce signed, append-only receipts.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              Neither is the invoice line. They are the reason our client work behaves the way
              it does under pressure.
            </p>
            <p className="mt-8 flex flex-wrap gap-4">
              <Link to="/product" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
                TACO Loop
              </Link>
              <Link to="/ag3nt24" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
                Ag3nt24
              </Link>
              <Link to="/legacy" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
                Legacy modernization
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>START HERE</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Tell us what the agent is supposed to be allowed to do.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            That one sentence is where every engagement starts. If nobody can state it yet,
            that is fine — working it out is the first thing we do together, and it is usually
            the most valuable hour of the project.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
              Get in touch
            </Link>
            <Link to="/demos" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
              See a working build
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
