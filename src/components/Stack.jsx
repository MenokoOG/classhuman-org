/* The product stack — TACO is the root layer. Shared by Home + Product.
   Ag3nt24 & HADES copy is PLACEHOLDER per Handler (2026-07-06) until the
   real briefs/white papers land in public/upcoming-layers/. */

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
    desc: "The agentic layer that operates on top of TACO — agents that inherit its guardrails and audit by default. Details to come.",
  },
  {
    name: "HADES",
    layer: "Layer 2",
    pill: "HORIZON",
    color: "#8B7F6E",
    desc: "The horizon layer. Scope defined after TACO and Ag3nt24 are proven.",
  },
];

export default function StackRows() {
  return (
    <ol className="mt-8 space-y-3.5">
      {STACK.map(({ name, layer, pill, color, emphasis, desc }) => (
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
  );
}
