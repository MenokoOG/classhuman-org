import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, TraceField, StatusPill } from "../components/ui.jsx";
import { PRODUCTS } from "../lib/products.js";

const SERVICES = [
  {
    title: "Custom AI agents",
    hook: "Built on the tools you already use.",
    body: "Purpose-built agents wired into your systems, your data, and the frameworks you've standardized on — using the best the industry already offers, not a science project.",
    color: "var(--ch-primary)",
    to: "/contact",
    cta: "Start a build",
  },
  {
    title: "Agentic systems & workflows",
    hook: "Multi-step, multi-agent — still accountable.",
    body: "Pipelines where agents plan and act across your stack, with guardrails and human approval on the calls that matter. Powerful, and never off the leash.",
    color: "var(--ch-cool)",
    to: "/product",
    cta: "The discipline layer",
  },
  {
    title: "Legacy modernization",
    hook: "Modern agents on old systems. No rip-and-replace.",
    body: "We wrap and evolve legacy software with a strangler-fig migration and protocol-droid interfaces — modern AI on top of what you already run, while it keeps running.",
    color: "var(--ch-cool-alt)",
    to: "/legacy",
    cta: "How we do it",
  },
  {
    title: "Agent skills & tools for your team",
    hook: "We can hand you the keys.",
    body: "Prefer to own the upgrade? We equip your team with the agent skills and tools to keep modernizing after we're gone — you own it, not a retainer.",
    color: "var(--ch-muted)",
    to: "/contact",
    cta: "Ask us",
  },
];

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
            We build the <GradientText>agents and agentic systems</GradientText> your business
            runs on.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-surface/85 sm:text-xl">
            classHuman AI designs, builds, and ships production AI agents and agentic
            workflows — on the industry&apos;s best tools and on your legacy stack — with a
            spine of accountability so humans always keep final authority.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3 font-bold text-on-primary shadow-lg shadow-primary/20 hover:opacity-90"
            >
              Work with us
            </Link>
            <Link
              to="/services"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              What we build →
            </Link>
            <Link
              to="/legacy"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Modernize a legacy system →
            </Link>
          </div>

          <p className="mt-5 text-sm text-on-surface/70">
            Rather explore first?{" "}
            <a
              href="https://ljefferson-menoko-site.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent-safe underline decoration-dotted underline-offset-4 hover:opacity-80"
            >
              Chat with Lawrence&apos;s digital twin &rarr;
            </a>
          </p>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              ["Agents & workflows", "built to your spec"],
              ["Legacy → modern", "no rip-and-replace"],
              ["Human-in-the-loop", "by architecture"],
              ["Your tools", "and our own"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-lg font-extrabold leading-tight sm:text-xl">{v}</dt>
                <dd className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-safe">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services · Work with us ────────────────────────── */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Eyebrow>WORK WITH US</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What we build <GradientText>for you.</GradientText>
            </h2>
            <p className="mt-3 max-w-2xl text-on-surface/85">
              We use the best tools the industry already has — and our own discipline layer on
              top — to ship agents you can trust in production.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div
                  className="ch-card flex h-full flex-col rounded-lg border border-border-brand bg-surface p-6"
                  style={{ "--stage": s.color }}
                >
                  <h3 className="text-xl font-extrabold" style={{ color: s.color }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-on-surface">{s.hook}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface/80">{s.body}</p>
                  <p className="mt-4">
                    <Link
                      to={s.to}
                      className="font-mono text-xs font-bold tracking-widest text-cool-safe hover:text-accent-safe"
                    >
                      {s.cta.toUpperCase()} →
                    </Link>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAHA ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>OUR LAW</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            <GradientText>Love All Humans Always.</GradientText>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface/85">
            LAHA is the reason the company exists. Every system we build for you is measured
            against it: does it keep humans in command of the decisions that matter, and treat
            them with care? That&apos;s not a tagline — it&apos;s the spine under the software.
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
      </section>

      {/* ── Our own research & products (secondary area) ───── */}
      <section className="border-t border-border-brand bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Eyebrow>WE BUILD FOR OURSELVES TOO</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our own research &amp; products.
            </h2>
            <p className="mt-3 max-w-2xl text-on-surface/85">
              We don&apos;t just build for clients — we build our own agentic systems and the
              discipline that governs them. It&apos;s proof we ship this in production, not
              slideware. Our core law:{" "}
              <span className="font-semibold">
                unknown data must increase decision discipline, not model confidence.
              </span>
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to={`/${p.slug}`}
                  className="ch-card group block h-full rounded-lg border border-border-brand bg-surface p-6"
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
                  <p className="mt-4 text-sm leading-relaxed text-on-surface/80">{p.blurb}</p>
                  <p className="mt-4 font-mono text-xs font-bold tracking-widest text-cool-safe group-hover:text-accent-safe">
                    OPEN {p.name.toUpperCase()} →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border-brand">
        <div className="ch-aurora pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Humans hold <GradientText>final authority.</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface/85">
            Tell us what you want built — or what you&apos;re trying to modernize.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3 font-bold text-on-primary hover:opacity-90"
            >
              Work with us
            </Link>
            <Link
              to="/services"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              What we build
            </Link>
            <Link
              to="/skills"
              className="rounded-md border border-cool px-6 py-3 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Free agent skills
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
