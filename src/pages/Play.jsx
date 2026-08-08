/* Play — FINAL AUTHORITY, embedded and playable in place.

   The hook. Nobody reads a page about human-in-the-loop; a lot of people will
   play a short game about it and arrive at the point themselves.

   The game is NOT owned by this repo. Canonical source lives in
   MenokoOG/free-skills at games/final-authority/index.html. The file under
   public/play/ is a deployed artifact, synced by `npm run sync:game` and never
   hand-edited — same relationship dist/ has to src/. See scripts/sync-game.mjs.

   It is embedded in an iframe rather than ported to React on purpose: one
   implementation, no second copy of the logic to keep in step. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, StatusPill } from "../components/ui.jsx";

const ACCENT = "var(--ch-accent)";

const LESSONS = [
  [
    "You cannot investigate everything",
    "Two investigations against three proposals per shift. The shortage is the design — deciding what to look at is the job, and a queue that lets you check everything is a queue that is not yet real.",
  ],
  [
    "Denying everything is not caution",
    "Refuse enough and the work stops, and next quarter they route around you. Being the person who says no to all of it just moves the risk somewhere nobody can see it.",
  ],
  [
    "The agents are not the villain",
    "Every proposal is competent and well argued. The bad ones are wrong because something was cached, a metric was misread, or a policy changed last Tuesday. None of them are malicious, which is what makes them hard.",
  ],
  [
    "You lose by not deciding",
    "Approve four in a row without looking and the run ends. Nothing dramatic happens on screen — the queue keeps moving and the dashboards stay green. That is what it looks like from the outside when a human stops being the thing that makes a system safe.",
  ],
];

export default function Play() {
  return (
    <main>
      {/* Hero — short, because the game is the point */}
      <section className="relative overflow-hidden">
        <div
          className="ch-aurora-soft pointer-events-none absolute inset-0 -z-10"
          style={{ "--stage": ACCENT }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:pt-24">
          <Eyebrow>PLAY IT · FREE · NOTHING TO INSTALL</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            You are the human in the loop. <GradientText>Try holding the line.</GradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface/85">
            Six shifts. Eighteen proposals from a fleet of AI agents. Approve, deny, or spend
            attention investigating — you only get two investigations a shift, so you cannot
            check everything.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <StatusPill color={ACCENT}>3 MINUTES</StatusPill>
            <span className="font-mono text-xs text-muted-safe">
              no signup · no data leaves your browser
            </span>
          </div>
        </div>
      </section>

      {/* The game itself */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="overflow-hidden rounded-lg border border-border-brand bg-card shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
          <iframe
            src="/play/final-authority/index.html"
            title="FINAL AUTHORITY — a game about approving things"
            className="block h-[760px] w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-center font-mono text-[11px] tracking-widest text-muted-safe">
          TROUBLE WITH THE FRAME?{" "}
          <a
            href="/play/final-authority/index.html"
            target="_blank"
            rel="noreferrer"
            className="text-cool-safe underline underline-offset-4 hover:text-accent-safe"
          >
            OPEN IT FULL SCREEN &rarr;
          </a>
        </p>
      </section>

      {/* What it is actually about */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHAT IT IS ACTUALLY ABOUT</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              The failure mode is not a bad call. It is no longer making calls.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              Every serious AI system says it keeps a human in the loop. Far fewer can tell you
              what percentage of their agent runs a person actually read. Those are very
              different claims, and only one of them is measurable.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {LESSONS.map(([title, body], i) => (
              <Reveal key={title} delay={i * 60}>
                <div
                  className="ch-card h-full rounded-lg border border-border-brand bg-surface p-6"
                  style={{ "--stage": ACCENT }}
                >
                  <h3 className="font-extrabold" style={{ color: ACCENT }}>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface/85">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The receipt — the part that is real */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE PART THAT IS REAL</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Every decision you made wrote a <GradientText>receipt.</GradientText>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            The log the game shows you at the end is not set dressing. It is the convention our
            free skills actually use — nine fields, one JSON line per run, append-only.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <pre className="mt-6 overflow-x-auto rounded-lg border border-border-brand bg-surface p-5 font-mono text-[11px] leading-relaxed text-on-surface/80">
{`{"skill":"hot-path","version":"0.1.0","id":"8f2a91c04e77",
 "run_at":"2026-08-08T19:14:22Z","input":"python, 3 functions, 210 lines",
 "findings":2,"unknowns":1,"recommended":"changed","human":"pending"}`}
          </pre>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl leading-relaxed text-on-surface/85">
            <code className="font-mono text-sm text-accent-safe">input</code> records the shape
            of what went in and never its content — that is the line between telemetry and
            surveillance. <code className="font-mono text-sm text-accent-safe">human</code>{" "}
            starts at <code className="font-mono text-sm">pending</code> and only a person can
            change it. Then one query tells you whether your review process is real:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border-brand bg-surface p-5 font-mono text-xs text-on-surface/80">
{`grep -c '"human":"pending"' receipts.jsonl`}
          </pre>
          <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
            If that is 4% of your runs, you have a review process. If it is 96%, you have a
            rubber stamp with extra steps. Almost nobody instruments this, because almost
            nobody wants to see the number.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              Build something like this with us
            </Link>
            <Link
              to="/skills"
              className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              The free skills &rarr;
            </Link>
            <Link
              to="/tools"
              className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              What we build with &rarr;
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
