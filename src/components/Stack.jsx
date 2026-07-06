/* The product stack — TACO is the root layer. Shared by Home + Product.
   Ag3nt24 & HADES white papers are IN DRAFTING (Handler, 2026-07-06) — copy
   below reflects the true design intent from docs/upcoming-layers/ but
   details may evolve until the papers are final. */

export const STACK = [
  {
    name: "TACO",
    layer: "Layer 0 · root",
    pill: "BUILDING · MVP",
    color: "#C0492C",
    emphasis: true,
    desc: "The decision-control loop. Take in unknowns, bound uncertainty, gate every action, keep a tamper-evident trace.",
  },
  {
    name: "Ag3nt24",
    layer: "Layer 1",
    pill: "NEXT",
    color: "#5A88BE",
    hook: "How do you prove what an AI agent said it did is what it actually did?",
    desc: "The proof layer. Agent actions pass through gates that produce signed, append-only receipts — so what an agent did is provable, not just logged. Agents inherit TACO's guardrails; a failed gate routes the agent to HADES.",
  },
  {
    name: "HADES",
    layer: "Layer 2",
    pill: "HORIZON",
    color: "#8B7F6E",
    hook: "It doesn't punish. It gates authority and preserves truth.",
    desc: "Human Assisted Diagnostic Evaluation System. A failing agent is contained in a sandbox, diagnosed, and — if it passes — validated and returned to service. If it can't be, its experience and lessons are harvested and HADES becomes the Human Authorized Deactivation Evidence Sequence. Either way, every step is documented to the on-chain ledger.",
  },
];

export default function StackRows() {
  return (
    <>
      <ol className="mt-8 space-y-3.5">
      {STACK.map(({ name, layer, pill, color, emphasis, hook, desc }) => (
        <li
          key={name}
          className={`rounded-lg border p-6 sm:flex sm:items-center sm:gap-6 ${
            emphasis ? "border-primary/60" : "border-border-brand"
          } bg-card`}
        >
          <div className="sm:w-44 sm:shrink-0">
            <h3
              className={`text-xl font-extrabold ${emphasis ? "" : ""}`}
              style={emphasis ? { color: "var(--ch-primary)" } : undefined}
            >
              {name}
            </h3>
            <p className="font-mono text-xs text-muted-safe">{layer}</p>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface/85 sm:mt-0">
            {hook && (
              <em className="mb-1 block font-semibold not-italic text-on-surface">
                “{hook}”
              </em>
            )}
            {desc}
          </p>
          <p className="mt-3 sm:mt-0 sm:shrink-0">
            <span
              className="ch-stage-text rounded-sm border px-2 py-1 font-mono text-[10px] font-bold tracking-widest"
              style={{ "--stage": color, borderColor: color }}
            >
              {pill}
            </span>
          </p>
        </li>
      ))}
      </ol>
      <p className="mt-4 font-mono text-xs text-muted-safe">
        Ag3nt24 and HADES white papers are in active drafting — details may evolve.
      </p>
    </>
  );
}
