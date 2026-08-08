import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const ACCENT = "var(--ch-cool)";

/* The working set of modernization patterns.

   Copy rule (CLASSHUMAN.md v1.6, 2026-08-07): strangler fig is ONE option, not
   the classHuman method. Presenting a single pattern as the answer is rigid and
   it does not survive contact with a real client system. Lead with "we pick the
   pattern that fits," then show the list. Order runs roughly least- to
   most-invasive; it is not a ranking and not a preference. Most engagements
   combine several of these at once. */
const patterns = [
  ["Lift and shift (rehost)", "Move it as-is onto modern infrastructure first, change nothing about the application. Buys breathing room and a reversible starting position."],
  ["Replatform", "Same application, better foundation — managed database, container runtime, real deployment pipeline — without touching business logic."],
  ["Strangler fig", "Grow the new system around the old one, replacing it capability by capability while it keeps running."],
  ["Branch by abstraction", "Put a seam in, run both sides behind it, then swap what's underneath without the callers noticing."],
  ["Parallel run", "Old and new side by side on the same inputs. Compare outputs, cut over on evidence rather than on faith."],
  ["Shadow traffic", "Send real production traffic to the new path with its results discarded. You find out how it behaves under load before anyone depends on it."],
  ["Canary & phased rollout", "A slice of traffic, a single region, one customer segment. Expand on measurements, roll back on the first bad signal."],
  ["Event interception", "Tap the events, redirect them, and leave the core untouched. Useful when the core is too risky to open."],
  ["Anti-corruption layer", "A translation boundary so the new model doesn't inherit the old one's assumptions along with its data."],
  ["Encapsulation / facade", "Wrap it, expose a clean interface, and defer the rewrite until it's actually worth doing."],
  ["A straight rewrite", "When the system is small enough or broken enough that rewriting is honestly the cheapest path. We will say so."],
  ["Protocol-droid interfaces", "Adapter agents fluent in the legacy system's protocols on one side and a modern agentic stack on the other."],
];

const steps = [
  ["Map", "We inventory the legacy system — its seams, its data, its business logic — and pick the highest-value slice to modernize first."],
  ["Wrap", "We build protocol-droid interfaces around the legacy boundary: adapters that speak the old system's language and a modern agentic stack at the same time."],
  ["Route", "We stand up modern agents and workflows beside the legacy system and redirect one capability at a time — the lights never go off."],
  ["Replace", "Once the new path is proven, the old one is retired on a human-approved cutover. Reversible, traceable, no drama."],
  ["Hand off", "Docs, receipts, and — if you want it — the agent skills and tools for your team to keep going without us."],
];

const why = [
  ["Operational discipline", "24 years U.S. Army: how to make the right call when the data is incomplete and the stakes are real."],
  ["Senior + CTO-level engineering", "Years of backend and full-stack systems work — how software actually behaves versus how it's supposed to."],
  ["A COBOL lineage", "Lawrence's father programmed COBOL from the 1960s. Mainframe-era systems aren't foreign here — data integrity is the whole game."],
  ["Evidence over vibes", "Law-enforcement rigor on process and proof. Every migration step is documented and reversible."],
];

const projects = [
  {
    title: "GunKustom.com",
    kind: "Full platform rebuild",
    href: "https://gunkustom.com",
    attribution: "OKO Forge LLC, now classHuman AI LLC",
    body: "Joined as senior backend engineer; CTO within six months. Inherited non-functional codebases on a monolithic build that could not ship. Briefed the engineering team, secured buy-in on a complete rebuild, and delivered v1 to production in twelve months. Architected a hybrid NestJS + Python system to normalize messy multi-format vendor feeds at scale — orchestration and APIs in NestJS, ingestion and ML categorization in Python, canonical inventory in MongoDB. Introduced a modular-monolith gateway pattern that gave the team microservice-style domain separation without microservice operational cost, and a two-tier product model with idempotent upserts and alias-driven matching that improved its own accuracy with every vendor feed.",
  },
  {
    title: "PowAlert.com",
    kind: "Real-time snowfall alert platform",
    href: "https://powalert.com",
    attribution: "OKO Forge LLC, now classHuman AI LLC",
    body: "Built for the managing partner of a Texas-based capital management firm. A MERN application that pulls resort-level snowfall data from a commercial weather API and pushes alerts to users by SMS and email based on their own thresholds and resort preferences. The engineering problem was reliability at the edges, not the happy path: cron-driven fetch cycles, 24-hour duplicate suppression so a user never gets hit twice for the same storm, phone-number validation before hitting the SMS provider, and batched database reads and writes to keep processing flat as the user base grows.",
  },
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
            the pattern is chosen per system · never prescribed
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
            Tell us what you&apos;re running
          </Link>
          <Link to="/services" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
            Everything else we build &rarr;
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

      {/* The approach — several patterns, chosen per system. Never one method. */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE APPROACH</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            We read the system first, <GradientText>then pick the pattern.</GradientText>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            There is no single right way to modernize a legacy system, and any shop that tells
            you otherwise is selling you their habit. Some systems want to be grown around.
            Some want a seam and a swap. Some want to be run in parallel until the evidence is
            in. A few are genuinely better off rewritten — and we will tell you when that&apos;s
            the case, even though it&apos;s the smaller engagement.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
            The choice comes from your system, not from our preference. This is the working
            set, running roughly least- to most-invasive — and most real engagements use
            several of them at the same time:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {patterns.map(([name, body], i) => (
            <Reveal key={name} delay={i * 45}>
              <div
                className="ch-card h-full rounded-lg border border-border-brand bg-card p-5"
                style={{ "--stage": ACCENT }}
              >
                <h3 className="font-extrabold" style={{ color: ACCENT }}>
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface/85">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-lg border border-border-brand bg-card p-6">
            <p className="font-mono text-[11px] font-bold tracking-widest text-accent-safe">
              AND WHERE IT LANDS IS YOURS TO PICK
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed text-on-surface/85">
              Cloud, on-premise, or entirely on hardware you own. Modernizing does not have to
              mean moving your data into someone else&apos;s data center — plenty of systems
              stay exactly where they are and simply get a modern seam, modern agents, and a
              deployment pipeline that works.{" "}
              <Link
                to="/tools"
                className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                The tools we use, and where they run &rarr;
              </Link>
            </p>
          </div>
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
          Every consequential change routes through a human approval step. Reversible,
          traceable, and evidenced at each step — that is our working discipline on any
          engagement, whichever pattern the system calls for.
        </p>
      </section>

      {/* Proof — in production */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>PROOF · IN PRODUCTION</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            The work, <GradientText>shipped.</GradientText>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            Not theory. The same instincts — move capability across piece by piece, tame messy
            inputs at the seam, and keep the system running the whole time — in two production
            builds.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 55}>
              <article
                className="ch-card flex h-full flex-col rounded-lg border border-border-brand bg-card p-6"
                style={{ "--stage": ACCENT }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-extrabold tracking-tight">{p.title}</h3>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 font-mono text-xs text-cool-safe hover:text-accent-safe"
                  >
                    visit &rarr;
                  </a>
                </div>
                <p className="mt-1 font-mono text-xs font-bold tracking-widest" style={{ color: ACCENT }}>
                  {p.kind.toUpperCase()}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-on-surface/85">{p.body}</p>
                <p className="mt-5 border-t border-border-brand pt-3 font-mono text-[11px] text-muted-safe">
                  {p.attribution}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
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
            with the agent skills and tools to run the migration themselves — protocol droids
            included. You own the modernization, not a retainer.
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
