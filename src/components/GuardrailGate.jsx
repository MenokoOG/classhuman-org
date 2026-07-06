import { RISK_CLASSES } from "../lib/taco-controls.ts";

const QUEUE = [
  { title: "Approve $2,400 refund — order #48812", risk: "0.61", cls: "HIGH", state: "HELD", dot: "#E39A3B" },
  { title: "Send redlined MSA to Acme Corp", risk: "0.68", cls: "HIGH", state: "HELD", dot: "#E39A3B" },
  { title: "Roll back deploy 7f3a on api-gw", risk: "0.82", cls: "CRITICAL", state: "HELD", dot: "#D9603F" },
  { title: "Closed ticket #9921 — billing", risk: "0.14", cls: "LOW", state: "DONE", dot: "#6FA6AE" },
];

export default function GuardrailGate() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <p className="ch-stage-text font-mono text-xs font-bold tracking-[0.25em]" style={{ "--stage": "#6FA6AE" }}>
          GUARDRAIL GATE · RISK ROUTING
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Above 0.50 risk, a human signs.
        </h2>
        <p className="mt-5 leading-relaxed text-on-surface/85">
          The guardrail is an AND-gate: if permission, scope, safety, or reversibility
          hits zero, the action is blocked or escalated. Risk is scored, classed, and
          routed — the mathematical form of humans holding final authority.
        </p>
        <ul className="mt-6 space-y-2">
          {RISK_CLASSES.map((rc) => (
            <li
              key={rc.label}
              className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-md border border-border-brand bg-card px-4 py-3 text-sm"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: rc.color }}
              />
              <span className="w-24 font-mono text-xs font-bold text-muted-safe">
                {rc.min.toFixed(2)}–{rc.max > 1 ? "1.00" : rc.max.toFixed(2)}
              </span>
              <span className="w-20 font-bold">{rc.label}</span>
              <span className="text-on-surface/85">{rc.action}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Escalation queue */}
      <div className="self-center rounded-lg border border-border-brand bg-card p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-extrabold">Escalation queue</h3>
          <span className="rounded-sm border border-accent px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-accent-safe">
            3 AWAITING A HUMAN
          </span>
        </div>
        <ul className="mt-4 divide-y divide-border-brand">
          {QUEUE.map((q) => (
            <li key={q.title} className="flex items-center gap-3 py-3">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: q.dot }}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{q.title}</span>
                <span className="font-mono text-xs text-muted-safe">
                  Risk {q.risk} · {q.cls}
                </span>
              </span>
              <span
                className="ch-stage-text font-mono text-xs font-bold tracking-widest"
                style={{ "--stage": q.state === "HELD" ? "#E39A3B" : "#6FA6AE" }}
              >
                {q.state}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
