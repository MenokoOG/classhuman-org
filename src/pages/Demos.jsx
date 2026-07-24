import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const WILLOW = "https://willow-bend.netlify.app/";

const features = [
  ["Appointments, human-approved", "Patients request a time; staff approve, reject, cancel, or archive. Approval is never automated — a hard project rule."],
  ["Willow, the AI care assistant", "A chat surface with server-side guardrails: navigation & scheduling help only, no medical advice, and it can never book — staff approve everything."],
  ["Safe by construction", "The model has no write path to appointments. Human-in-the-loop is architecture, not policy."],
  ["Graceful degradation", "Any failure — no key, timeout, upstream error — silently drops to a deterministic offline engine. The demo never breaks in front of an audience."],
  ["Emergency short-circuit", "Emergency inputs never wait on a network round-trip; they hit an instant offline 911 answer."],
  ["Real accountability", "Archive deletes use database transactions with audit flags. Small clinic, real trails."],
];

export default function Demos() {
  return (
    <main>
      <ProductHero
        eyebrow="DEMOS · SEE THE DISCIPLINE WORKING"
        color="#6FA6AE"
        title={
          <>
            Human-in-the-loop, <GradientText>by architecture.</GradientText>
          </>
        }
        lead="Our products are the law; our demos are the proof. Each one is a production-shaped build where the AI helps but never holds final authority — exactly what classHuman AI ships."
      />

      {/* Willow Bend */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>DEMO 01 · WILLOW BEND FAMILY CLINIC</Eyebrow>
            <StatusPill color="#6FA6AE">ACTIVE DEMO</StatusPill>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A clinic assistant that <GradientText>can&apos;t</GradientText> book the appointment.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            A production-shaped demo for a fictional family practice: online appointment requests
            with human approval, a patient portal, a lightweight CMS, admin tooling, and{" "}
            <strong>Willow</strong>, an AI care assistant that degrades gracefully to an offline
            engine. It began as a real client build, then was fully sanitized and rebranded so it
            can be shown publicly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["React 18", "TypeScript", "Vite", "Tailwind", "Firebase", "Netlify Functions", "OpenAI", "Vitest"].map((t) => (
              <span key={t} className="rounded-sm border border-border-brand bg-card px-2.5 py-1 font-mono text-[11px] font-bold tracking-wide text-muted-safe">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a href={WILLOW} target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
              Open the live demo →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map(([t, d], i) => (
            <Reveal key={t} delay={i * 55}>
              <div className="ch-card h-full rounded-lg border border-border-brand bg-card p-5" style={{ "--stage": "#6FA6AE" }}>
                <h3 className="font-extrabold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface/80">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHY THIS IS THE POINT</Eyebrow>
            <blockquote className="mt-4 max-w-3xl border-l-4 border-accent pl-6 text-xl font-bold leading-snug sm:text-2xl">
              The site works identically with the AI turned off — and the model{" "}
              <GradientText>can&apos;t approve anything.</GradientText>
            </blockquote>
            <p className="mt-6 max-w-2xl leading-relaxed text-on-surface/85">
              That&apos;s LAHA in a shipped product: the AI adds convenience, the human keeps
              authority, and the system stays trustworthy even when the model isn&apos;t there.
              The same discipline our products formalize as TACO, Ag3nt24, and HADES.
            </p>
            <p className="mt-8 flex flex-wrap gap-4">
              <Link to="/product" className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90">
                The law behind it — TACO
              </Link>
              <Link to="/contact" className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe">
                Want one built? Get in touch
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* More coming */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="rounded-lg border border-dashed border-border-brand bg-card/40 p-8 text-center">
            <p className="font-mono text-xs font-bold tracking-widest text-muted-safe">MORE DEMOS</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">The bench is deep.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-on-surface/80">
              Additional production-shaped demos are being sanitized for public view. Want to see
              a specific pattern — approvals, audit trails, offline-safe AI?
            </p>
            <p className="mt-5">
              <Link to="/contact" className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe">
                Ask us to walk you through one
              </Link>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
