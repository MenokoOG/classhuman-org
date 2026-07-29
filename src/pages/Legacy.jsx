import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const ACCENT = "var(--ch-cool)";

const steps = [
  ["Map", "We inventory the legacy system — its seams, its data, its business logic — and pick the highest-value slice to modernize first."],
  ["Wrap", "We build protocol-droid interfaces around the legacy boundary: adapters that speak the old system's language and a modern agentic stack at the same time."],
  ["Route", "We stand up modern agents and workflows beside the legacy system and redirect one capability at a time — the lights never go off."],
  ["Replace", "Once the new path is proven, the old one is strangled out, with a human-approved cutover. Reversible, traceable, no drama."],
  ["Hand off", "Docs, receipts, and — if you want it — the agent skills and tools for your team to keep going without us."],
];

const why = [
  ["Operational discipline", "24 years U.S. Army: how to make the right call when the data is incomplete and the stakes are real."],
  ["Senior + CTO-level engineering", "Years of backend and full-stack systems work — how software actually behaves versus how it's supposed to."],
  ["A COBOL lineage", "Lawrence's father programmed COBOL from the 1960s. Mainframe-era systems aren't foreign here — data integrity is the whole game."],
  ["Evidence over vibes", "Law-enforcement rigor on process and proof. Every migration step is documented and reversible."],
];

export default function Legacy() {
  return (
    <main>
      <ProductHero
        eyebrow="SERVICE · LEGACY MODERNIZATION"
        color={ACCENT}
        title={
          <>
            Modern agents on your <GradientText>legacy stack.</GradientText> No rip-and-replace.
          </>
        }
        lead="Your legacy system is load-bearing — you can't just switch it off. classHuman builds modern AI agents and workflows that wrap, translate, and gradually replace legacy software while it keeps running. No big-bang rewrite, no downtime bet."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>NO STACK TOO OLD</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            strangler-fig migration · protocol-droid interfaces
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
            Tell us what you&apos;re running
          </Link>
          <Link to="/product" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
            The discipline behind it — TACO
          </Link>
        </div>
      </ProductHero>

      {/* The problem */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              Legacy isn&apos;t the enemy. Downtime is.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Your legacy system holds decades of business logic and hard-won data integrity.
              Ripping it out and starting over is how modernization projects die. The real job
              is to bring modern AI to what you already run — without breaking the thing that
              keeps the business alive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strangler fig */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE PATTERN · STRANGLER FIG</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            We grow the new system <GradientText>around</GradientText> the old one.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            Named for the fig that grows around a host tree until it can stand on its own, the
            strangler-fig pattern replaces a legacy system incrementally. Route by route,
            capability by capability, we stand up modern agents and workflows alongside the
            legacy code and redirect traffic to them — until the old system is safely strangled
            out. You&apos;re never one risky weekend away from disaster.
          </p>
        </Reveal>
      </section>

      {/* Protocol droids */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>OUR TRICK · PROTOCOL DROIDS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Interfaces that speak <GradientText>both languages.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              The hard part of legacy work is the seam. classHuman are masters at building{" "}
              <strong>protocol-droid interfaces</strong> — adapter agents fluent in your legacy
              system&apos;s formats and protocols on one side, and a modern agentic stack on the
              other. They let new agents read, write, and act on legacy systems safely, behind a
              human-approved boundary. Like a protocol droid fluent in a thousand forms of
              communication, they translate so nothing gets lost — and nothing acts without
              authority.
            </p>
            <blockquote className="mt-6 max-w-2xl border-l-4 border-accent pl-5 text-lg font-semibold italic">
              The seam is where modernization usually breaks. It&apos;s where we&apos;re strongest.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Map → Wrap → Route → Replace → Hand off.
          </h2>
        </Reveal>
        <ol className="mt-8 space-y-3.5">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 55} as="li">
              <div className="ch-card rounded-lg border border-border-brand bg-card p-6 sm:flex sm:items-start sm:gap-6" style={{ "--stage": ACCENT }}>
                <p className="font-mono text-sm font-extrabold tracking-widest sm:w-32 sm:shrink-0" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")} · {t}
                </p>
                <p className="mt-2 flex-1 leading-relaxed text-on-surface/85 sm:mt-0">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-safe">
          Every consequential change routes through a human — the TACO discipline, applied to
          migration. Reversible, traceable, and evidenced at each step.
        </p>
      </section>

      {/* Why classHuman */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHY CLASSHUMAN</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Senior and CTO-level — on any stack.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              Tackling gnarly legacy systems is exactly where classHuman&apos;s depth shows.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {why.map(([t, d], i) => (
              <Reveal key={t} delay={i * 55}>
                <div className="h-full rounded-lg border border-border-brand bg-surface p-5">
                  <h3 className="font-extrabold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface/80">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keep the keys */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>YOU KEEP THE KEYS</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Want to keep going without us? We hand you the tools.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            If you&apos;d rather own the upgrade than depend on a vendor, we can equip your team
            with the agent skills and tools to run the strangler-fig migration themselves —
            protocol droids included. You own the modernization, not a retainer.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
              Talk about your legacy system
            </Link>
            <Link to="/demos" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
              See a working build — Demos
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
