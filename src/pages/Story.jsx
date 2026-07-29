import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal } from "../components/ui.jsx";

function H2({ children }) {
  return <h2 className="mt-14 text-2xl font-extrabold tracking-tight">{children}</h2>;
}
function P({ children }) {
  return <p className="mt-5 leading-relaxed text-on-surface/90">{children}</p>;
}

export default function Story() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="ch-aurora pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-2xl px-6 pb-8 pt-24">
          <Eyebrow>OUR STORY</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            We build from the <GradientText>floor up.</GradientText>
          </h1>
          <p className="mt-4 text-lg text-muted-safe">
            LAHA — Love All Humans Always. In memory of Tonya.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 pb-24 text-lg">
        <figure className="mt-8">
          <img src="/images/tonya.jpg" alt="Tonya" className="mx-auto w-full max-w-sm rounded-lg" />
          <figcaption className="mt-3 text-center font-mono text-xs text-muted-safe">
            Tonya. The reason for LAHA.
          </figcaption>
        </figure>

        <Reveal>
          <H2>The year the ground gave out</H2>
          <P>
            In 2021 we lost three people in the span of a few months. Lawrence&apos;s close
            friend, co-worker, and mentor passed in April; his father on July 10th; and his wife,
            Tonya, on July 27th. There was no home to fall back into — a car, then a hotel room
            when we could afford one, then nothing at all.
          </P>
          <P>
            We didn&apos;t get to stop. So we made a different decision than the one grief hands
            you: we&apos;d build instead of quit. classHuman started there — not with funding or a
            pitch deck, but with two people who had run out of everything except the will to keep
            going.
          </P>
        </Reveal>

        <Reveal>
          <H2>LAHA is a discipline, not a feeling</H2>
          <P>
            <strong>Love All Humans Always.</strong> We chose it on the worst days we&apos;ve had,
            when the honest impulse runs the other way. That&apos;s the point — it&apos;s a standard
            we hold to under pressure, not a mood. Every system we ship is measured against it:
            does it keep humans in command, and does it treat them with care?
          </P>
        </Reveal>

        <Reveal>
          <H2>Built from nothing, on purpose</H2>
          <P>
            classHuman didn&apos;t start in an office. It started in 2023, in a hotel room, while we
            were homeless. Lawrence had finished a Python course on the road in 2022, and that was
            the thread we pulled. In a weekend we turned some code into a product on a
            print-on-demand store. It sold — enough for a $23 notebook. That notebook fed us.
          </P>
          <P>
            The road stayed hard. The stretch from September 2023 to May 2024 tested everything we
            had left. In July 2024 we got a place of our own again — not recovered, just standing.
            We kept building the whole way. Toughness isn&apos;t a slogan here; it&apos;s the receipt.
          </P>
        </Reveal>

        <Reveal>
          <H2>Two builders, one discipline</H2>
          <P>
            Lawrence brings operational discipline under uncertainty — 24 years in the U.S. Army,
            time in law enforcement where process and evidence protect people, and years of
            engineering that teach you how systems actually behave versus how they&apos;re supposed
            to. His father was a COBOL programmer going back to the 1960s; the lesson, never spoken
            aloud, was that data integrity is the whole game. If you can&apos;t trust the source,
            nothing built on top of it is trustworthy either.
          </P>
          <P>
            Nicale builds the governance — the rules, ethics, and guardrails a system needs before
            it&apos;s handed authority over real decisions. Not bolted on after something breaks;
            built in from day one. Between the two of us, that&apos;s what goes into classHuman:
            discipline, governance, and a source of truth you can stand on.
          </P>
        </Reveal>

        <Reveal>
          <H2>The future we&apos;re building for</H2>
          <P>
            We think humans and agents are going to share the same world and the same work. We
            don&apos;t fear that future — we&apos;re building for it. But coexistence only holds on
            one condition: humans keep final authority, and agents stay accountable for what they
            do. That&apos;s the whole reason classHuman builds a{" "}
            <GradientText>control layer</GradientText> instead of another agent — TACO Loop for the
            discipline, Ag3nt24 for the proof, HADES for the authority.
          </P>
        </Reveal>

        <Reveal>
          <H2>Why telemetry — as a team</H2>
          <P>
            You can&apos;t hold authority over what you can&apos;t see. A team runs on honest,
            continuous telemetry: every person and every agent reports real signal, and decisions
            get made from that shared truth — not from confidence, not from ego, not from a good
            story. It&apos;s how two people run a company without flying blind, and it&apos;s exactly
            what we engineer into our products: audit trails, signed receipts, observable outcomes.
          </P>
          <P>
            No silent failures. No black boxes. When the signal is weak, we slow down and gather
            more before we act. That is LAHA in engineering form — and it&apos;s the same rule
            whether the teammate reporting in is a human or an agent.
          </P>
        </Reveal>

        <Reveal>
          <p className="mt-14 border-t border-border-brand pt-8 text-lg font-semibold">
            classHuman AI — driven by LAHA (Love All Humans Always).
            <br />
            In memory of Tonya. Still building.
          </p>
          <p className="mt-8">
            <Link
              to="/product"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              See what we build — TACO Loop
            </Link>
          </p>
        </Reveal>
      </div>
    </main>
  );
}
