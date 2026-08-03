/* The agentic IDEs, models, and frameworks we work in daily — proof we
   live on the cutting edge. Shared by Home + Services (same pattern as
   StackRows: one source of truth, two placements). Founder-supplied
   list, 2026-08-02. Names only, no logos (trademark). */

import { Eyebrow, Reveal } from "./ui.jsx";

export const DAILY_STACK = [
  "Claude · Claude Code",
  "OpenAI Codex",
  "Cursor",
  "Grok",
  "Gemini · Gemini CLI",
  "Google AI Studio",
  "Kiro",
  "Microsoft Agent Framework",
  "GitHub Copilot (VS Code)",
  "Microsoft 365 Copilot",
  "NotebookLM",
];

export default function DailyStack({ lead }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <Eyebrow>OUR DAILY AGENTIC STACK</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
          We work in the cutting edge, every day.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
          {lead ||
            "These aren't logos on a slide — they're the agentic IDEs, models, and frameworks in our hands daily. We master them so we can pick the right one for your build, and govern all of them with the same discipline."}
        </p>
      </Reveal>
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {DAILY_STACK.map((t) => (
          <li
            key={t}
            className="rounded-md border border-cool/60 px-3.5 py-1.5 font-mono text-xs text-on-surface/80"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-5 font-mono text-xs text-muted-safe">
        Platform-agnostic by design — your stack, your cloud, your exit options.
      </p>
    </section>
  );
}
