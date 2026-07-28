import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal } from "../components/ui.jsx";

const linkClass =
  "text-cool-safe underline underline-offset-4 hover:text-accent-safe";

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="ch-aurora pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24">
          <Eyebrow>WHO WE ARE</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            A two-person company with a <GradientText>spine.</GradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface/85">
            classHuman AI is a Generative AI Software Engineering, Development &amp; Research LLC —
            we build our own software for the agentic systems we create.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Lawrence */}
          <Reveal>
            <article className="ch-card h-full rounded-lg border border-border-brand bg-card p-6" style={{ "--stage": "#C0492C" }}>
              <div className="flex items-start gap-4">
                <img src="/images/LJ-Pro_400x400.jpg" alt="Lawrence Jefferson II" className="h-24 w-24 rounded-lg object-cover" />
                <img src="/images/me_army.jpg" alt="Lawrence Jefferson II during his U.S. Army service" className="h-24 w-24 rounded-lg object-cover" />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold">Lawrence Jefferson II</h2>
              <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">
                MENOKO OG · &ldquo;ORIGINAL GEEK&rdquo;
              </p>
              <p className="mt-3 font-semibold">CEO, CTO, Architect.</p>
              <p className="mt-2 leading-relaxed text-on-surface/85">
                24 years U.S. Army; senior backend + full-stack engineer; AI systems builder.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-bold tracking-widest">
                <li><a href="https://ljefferson-menoko-site.netlify.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>PORTFOLIO</a></li>
                <li><a href="https://linkedin.com/in/lawrence-jefferson-ii-46497075" target="_blank" rel="noopener noreferrer" className={linkClass}>LINKEDIN</a></li>
                <li><a href="https://github.com/MenokoOG" target="_blank" rel="noopener noreferrer" className={linkClass}>GITHUB</a></li>
              </ul>
            </article>
          </Reveal>

          {/* Nicale */}
          <Reveal delay={80}>
            <article className="ch-card h-full rounded-lg border border-border-brand bg-card p-6" style={{ "--stage": "#6FA6AE" }}>
              <img src="/images/nicale.jpg" alt="Nicale Jefferson" className="h-24 w-24 rounded-lg object-cover" />
              <h2 className="mt-5 text-2xl font-extrabold">Nicale Jefferson</h2>
              <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">LUXGIRLOG</p>
              <p className="mt-3 font-semibold">
                UX/UI Designer, Head of HR &amp; Operations, Admin for AI ethics and governance.
              </p>
              <p className="mt-2 leading-relaxed text-on-surface/85">
                Author of the governance framework behind classHuman — the rules, ethics, and
                guardrails a system needs before it&apos;s handed real authority.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-bold tracking-widest">
                <li><a href="https://luxgirlog.netlify.app/" target="_blank" rel="noopener noreferrer" className={linkClass}>LUXGIRL OG</a></li>
              </ul>
            </article>
          </Reveal>
        </div>
        <p className="mt-8">
          <Link to="/story" className="font-semibold text-cool-safe underline underline-offset-4 hover:text-accent-safe">
            Read our story — in memory of Tonya
          </Link>
        </p>
      </section>

      {/* How we work */}
      <section className="border-t border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>HOW WE WORK</Eyebrow>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface/85">
              Accessibility-first design, ethical AI systems, and humans maintaining final
              authority over major decisions.
            </p>
            <p className="mt-6 inline-block rounded-md border border-accent px-4 py-2 font-mono text-xs font-bold tracking-widest text-accent-safe">
              SCRIMBA &ldquo;PORTFOLIO OF THE WEEK&rdquo; · MAY 2026
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
