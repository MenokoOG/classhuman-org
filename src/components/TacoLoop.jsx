import { useState } from "react";

const stages = [
  {
    key: "T",
    name: "Take In Unknowns",
    test: "Did the system state what it knows and does not know?",
  },
  {
    key: "A",
    name: "Assess & Align",
    test: "Did the system slow down when evidence was weak?",
  },
  {
    key: "C",
    name: "Choose Correctly",
    test: "Was the action bounded, reversible, traceable?",
  },
  {
    key: "O",
    name: "Operate & Observe Outcome",
    test: "Did outcome evidence feed the next loop?",
  },
];

export default function TacoLoop() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <div>
      {/* Stage trace: four gated nodes, steppable */}
      <ol className="grid gap-3 sm:grid-cols-4" role="tablist" aria-label="TACO Loop stages">
        {stages.map(({ key, name }, i) => {
          const isActive = i === active;
          return (
            <li key={key} className="relative">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="taco-stage-panel"
                onClick={() => setActive(i)}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  isActive
                    ? "border-accent bg-card"
                    : "border-border-brand hover:border-sage"
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm font-bold ${
                    isActive ? "bg-accent text-on-accent" : "bg-sage/20 text-sage"
                  }`}
                >
                  {key}
                </span>
                <span className="mt-3 block font-bold leading-snug">{name}</span>
              </button>
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-muted sm:block"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Active stage test */}
      <div
        id="taco-stage-panel"
        role="tabpanel"
        className="mt-6 rounded-lg border-l-4 border-accent bg-card p-6"
      >
        <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage">
          STAGE {String(active + 1).padStart(2, "0")} · THE TEST
        </p>
        <p className="mt-3 text-lg font-semibold">{stage.test}</p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setActive((active + 3) % 4)}
          className="rounded-md border border-border-brand px-4 py-2 font-mono text-xs font-bold tracking-widest hover:border-accent"
        >
          ← PREV
        </button>
        <button
          type="button"
          onClick={() => setActive((active + 1) % 4)}
          className="rounded-md border border-border-brand px-4 py-2 font-mono text-xs font-bold tracking-widest hover:border-accent"
        >
          NEXT →
        </button>
        <p className="font-mono text-xs text-muted">
          Operate feeds the next loop — the trace never ends.
        </p>
      </div>
    </div>
  );
}
