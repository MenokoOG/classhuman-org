/* Credentials — Lawrence's education, training, and certifications.
   Data-driven: update the arrays below when a new credential lands.
   Source of truth: Admin\career-planning\education (private). Public content
   only — names, issuers, dates. No transcripts, no student IDs. */

import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";

const ACCENT = "#C0492C";

const EDUCATION = [
  {
    title: "Associate's Degree",
    org: "American Military University",
    note: "Earned while serving. The academic base under everything since.",
  },
  {
    title: "U.S. Army — 24 Years of Service",
    org: "United States Army",
    note: "Two and a half decades of systems, discipline, and leadership under real stakes. The origin of how classHuman runs engagements.",
  },
];

const PROGRAMS = [
  {
    title: "Full Stack JavaScript Software Engineer",
    org: "V School · Utah Valley University Boot Camp",
    note: "Mastery-based program — advance only after demonstrating each module to an instructor. JavaScript, React, Node, Express, MongoDB, auth, and full-stack capstones.",
  },
  {
    title: "Web Publishing & Development — JavaScript",
    org: "Syracuse University Tech Boot Camp",
    note: "Where the Python Institute certifications below were earned.",
  },
];

/* Professional certificates & specializations — multi-course credentials. */
const CERTIFICATES = [
  {
    title: "AWS Generative AI and AI Agents with Amazon Bedrock",
    org: "Amazon Web Services · Coursera",
    date: "Jul 2026",
    kind: "PROFESSIONAL CERTIFICATE",
    courses: [
      "Getting Started with AWS Generative AI for Developers",
      "Generative AI Applications with Amazon Bedrock",
      "Amazon Bedrock Customization, Optimization & Automation",
    ],
  },
  {
    title: "Generative AI Software Engineering",
    org: "Vanderbilt University · Coursera",
    date: "Jul 2026",
    kind: "SPECIALIZATION",
    courses: [
      "Claude Code: Software Engineering with Generative AI Agents",
      "AI Agents and Agentic AI with Python & Generative AI",
      "Prompt Engineering for ChatGPT",
      "OpenAI GPTs: Creating Your Own Custom AI Assistants",
    ],
  },
  {
    title: "AI Agents with Model Context Protocol",
    org: "Vanderbilt University · Coursera",
    date: "Jul 2026",
    kind: "SPECIALIZATION",
    courses: [
      "AI Agents with Model Context Protocol",
      "Prompt Engineering for ChatGPT",
      "Claude Code: Software Engineering with Generative AI Agents",
    ],
  },
  {
    title: "Google AI Professional Certificate",
    org: "Google · Student Veterans of America",
    date: "Jun 2026",
    kind: "PROFESSIONAL CERTIFICATE",
    courses: [
      "AI Fundamentals",
      "AI for Brainstorming and Planning",
      "AI for Research and Insights",
      "AI for Writing and Communicating",
      "AI for Content Creation",
      "AI for Data Analysis",
      "AI for App Building",
    ],
  },
  {
    title: "Google Cybersecurity Certificate",
    org: "Grow with Google · U.S. Dept. of Commerce",
    kind: "PROFESSIONAL CERTIFICATE",
  },
];

/* Single-credential certifications and courses. */
const CREDENTIALS = [
  { title: "PCAP — Certified Associate in Python Programming", org: "Python Institute", },
  { title: "PCEP — Certified Entry-Level Python Programmer", org: "Python Institute", date: "Dec 2022" },
  { title: "ITIL 4® Foundation", org: "PeopleCert · ACI Learning / LeaderQuest", date: "Mar 2022" },
  { title: "AI Coder: Complete Claude Code & Coding Agents Course", org: "Ed Donner · Ligency · Udemy" },
  { title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents", org: "Ed Donner · Ligency · Udemy" },
  { title: "AI Leader: Generative AI & Agentic AI for Leaders & Founders", org: "Ed Donner · Ligency · Udemy" },
  { title: "Complete Python Developer: Zero to Mastery", org: "Andrei Neagoie · Udemy" },
  { title: "Crash Course on Python", org: "Google · Coursera", date: "Oct 2022" },
];

const IBM_BADGES = [
  "Foundations in Generative AI",
  "Introduction to Large Language Models",
  "Prompt Engineering: Shaping Better AI Responses",
  "Introduction to Retrieval-Augmented Generation",
  "Retrieval-Augmented Generation for Enhanced AI Outputs",
  "Build an AI Agent",
  "Ethical Considerations for Generative AI",
];

function CredentialCard({ title, org, date, note, children, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article
        className="ch-card h-full rounded-lg border border-border-brand bg-card p-6"
        style={{ "--stage": ACCENT }}
      >
        <h3 className="text-lg font-extrabold leading-snug">{title}</h3>
        <p className="mt-1 font-mono text-xs font-bold tracking-widest text-accent-safe">
          {org}
          {date ? ` · ${date}` : ""}
        </p>
        {note && <p className="mt-3 text-sm leading-relaxed text-on-surface/85">{note}</p>}
        {children}
      </article>
    </Reveal>
  );
}

export default function Credentials() {
  return (
    <main>
      <ProductHero
        eyebrow="EDUCATION · TRAINING · CERTIFICATIONS"
        color={ACCENT}
        title={
          <>
            The training behind <GradientText>the work.</GradientText>
          </>
        }
        lead="classHuman doesn't ask you to take capability on faith. This is the record — Lawrence Jefferson II's education, engineering training, and certifications, from 24 years of Army service through the current generation of AI-agent engineering."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={ACCENT}>VERIFIED CREDENTIALS</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            Coursera credentials carry public verification links
          </span>
        </div>
      </ProductHero>

      {/* Education & service */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>EDUCATION & SERVICE</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">The foundation.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {EDUCATION.map((e, i) => (
              <CredentialCard key={e.title} {...e} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Intensive programs */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>INTENSIVE PROGRAMS</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Engineering, proven module by module.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <CredentialCard key={p.title} {...p} delay={i * 60} />
          ))}
        </div>
      </section>

      {/* Professional certificates & specializations */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>PROFESSIONAL CERTIFICATES & SPECIALIZATIONS</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Current-generation AI engineering.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              Multi-course credentials in agentic AI, completed 2026 — the same systems
              classHuman builds for clients: agents, tool protocols, and the platforms
              underneath them.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <article
                  className="ch-card rounded-lg border border-border-brand bg-card p-6 sm:p-8"
                  style={{ "--stage": ACCENT }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <StatusPill color={ACCENT}>{c.kind}</StatusPill>
                    {c.date && (
                      <span className="font-mono text-xs text-muted-safe">{c.date}</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{c.title}</h3>
                  <p className="mt-1 font-mono text-xs font-bold tracking-widest text-accent-safe">
                    {c.org}
                  </p>
                  {c.courses && (
                    <ul className="mt-4 grid gap-x-8 gap-y-1.5 text-sm leading-relaxed text-on-surface/85 sm:grid-cols-2">
                      {c.courses.map((course) => (
                        <li key={course} className="flex gap-2">
                          <span aria-hidden="true" className="text-accent-safe">▸</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & courses */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>CERTIFICATIONS & COURSES</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">The rest of the stack.</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {CREDENTIALS.map((c, i) => (
            <CredentialCard key={c.title} {...c} delay={i * 40} />
          ))}
        </div>
      </section>

      {/* IBM badges */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>IBM SKILLSBUILD BADGES</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Generative AI fundamentals, badge by badge.
            </h2>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {IBM_BADGES.map((b) => (
              <li
                key={b}
                className="rounded-md border border-border-brand bg-card px-4 py-2 text-sm font-semibold"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>WHAT THIS BUYS YOU</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Training is the floor. The published work is the proof.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
            The TACO Loop White Paper v1.0, the free agent skills, and the production case
            studies on this site are what this training produces in practice.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
            >
              Work with us
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
            >
              Back to About
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
