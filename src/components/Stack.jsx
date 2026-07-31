/* The research stack — TACO is the root layer, Ag3nt24 enforces it. Shared by
   Home + Product. HADES was scrapped and archived 2026-07-31; the escalation
   and human-in-the-loop work it carried now lives in the client harness (see
   pages/Services.jsx). Do not re-add a Layer 2 here.
   The Ag3nt24 white paper is IN DRAFTING — copy below reflects design intent
   from docs/upcoming-layers/ but may evolve. Colors are theme vars. */

export const STACK = [
  {
    name: "TACO",
    layer: "Layer 0 · root",
    pill: "BUILDING · MVP",
    color: "var(--ch-primary)",
    emphasis: true,
    desc: "The decision-control loop. Take in unknowns, bound uncertainty, gate every action, keep a tamper-evident trace.",
  },
  {
    name: "Ag3nt24",
    layer: "Layer 1",
    pill: "NEXT",
    color: "var(--ch-cool)",
    hook: "How do you prove what an AI agent said it did is what it actually did?",
    desc: "The proof layer. Agent actions pass through gates that produce signed, append-only receipts — so what an agent did is provable, not just logged. Agents inherit TACO's guardrails, and the kernel is fail-closed: every uncertainty resolves to deny. A failed gate denies the action, writes it to the chain, and escalates to a named human.",
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
        The Ag3nt24 white paper is in active drafting — details may evolve.
      </p>
    </>
  );
}
