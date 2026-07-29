import { useState } from "react";
import { STAGES } from "../lib/taco-controls.ts";

export default function TacoLoop() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Stage selector */}
      <ol className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4" aria-label="TACO Loop stages">
        {STAGES.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.letter}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="taco-stage-panel"
                onClick={() => setActive(i)}
                className={`w-full rounded-lg border bg-card p-5 text-left transition-[transform,border-color] hover:-translate-y-0.5 ${
                  isActive ? "" : "border-border-brand"
                }`}
                style={isActive ? { borderColor: s.color } : undefined}
              >
                <span className="flex items-center justify-between">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md font-mono text-base font-bold"
                    style={
                      isActive
                        ? { background: s.color, color: s.letter === "C" || s.letter === "A" ? "var(--ch-on-accent)" : "#FFFFFF" }
                        : { background: "color-mix(in srgb, var(--ch-on-surface) 8%, transparent)", color: "var(--ch-on-surface)" }
                    }
                  >
                    {s.letter}
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-safe">
                    {String(s.num).padStart(2, "0")}
                  </span>
                </span>
                <span className="mt-3 block font-bold leading-snug">{s.name}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Detail panel */}
      <div
        id="taco-stage-panel"
        aria-live="polite"
        className="mt-5 grid gap-8 rounded-lg border border-border-brand bg-card p-7 lg:grid-cols-[1.4fr_1fr]"
        style={{ borderLeft: `4px solid ${stage.color}` }}
      >
        <div>
          <p
            className="ch-stage-text font-mono text-xs font-bold tracking-[0.25em]"
            style={{ "--stage": stage.color }}
          >
            {stage.letter} · {stage.name.toUpperCase()}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-on-surface/90">{stage.fn}</p>
          <p className="mt-4 text-sm">
            <span className="text-muted-safe">Prevents: </span>
            <span className="font-semibold text-accent-safe">{stage.prevents}</span>
          </p>
        </div>
        <div className="border-t border-border-brand pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-sage-safe">
            OPERATIONAL TEST
          </p>
          <p className="mt-3 italic leading-relaxed text-on-surface/85">
            &ldquo;{stage.test}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
