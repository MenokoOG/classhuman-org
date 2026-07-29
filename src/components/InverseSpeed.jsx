import { useState } from "react";
import { inverseSpeed } from "../lib/taco-controls.ts";

function readoutColor(u) {
  if (u < 0.4) return "var(--ch-cool)";
  if (u < 0.7) return "var(--ch-accent)";
  return "var(--ch-primary-bright)";
}

export default function InverseSpeed() {
  const [raw, setRaw] = useState(34);
  const out = inverseSpeed(raw / 100);
  const speedPct = Math.round(out.speed * 100);
  const scopePct = Math.round(out.scope * 100);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[340px_1fr]">
      {/* Control card */}
      <div className="rounded-lg border border-border-brand bg-card p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-safe">
          U_total
        </p>
        <p
          className="ch-stage-text mt-1 font-mono text-4xl font-extrabold"
          style={{ "--stage": readoutColor(out.u) }}
          aria-live="polite"
        >
          {out.u.toFixed(2)}
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={raw}
          onChange={(e) => setRaw(Number(e.target.value))}
          aria-label="Total uncertainty"
          className="ch-slider mt-5"
        />
        <div className="mt-2 flex justify-between font-mono text-[10px] font-bold tracking-widest text-muted-safe">
          <span>CERTAIN</span>
          <span>UNKNOWN</span>
        </div>
        <p className="mt-5 flex items-center gap-2 font-mono text-xs font-bold tracking-widest">
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: out.slowMode ? "var(--ch-accent)" : "var(--ch-cool-alt)" }}
          />
          <span className="text-muted-safe">LOOP MODE</span>
          <span
            className="ch-stage-text"
            style={{ "--stage": out.slowMode ? "var(--ch-accent)" : "var(--ch-cool-alt)" }}
          >
            {out.slowMode ? "SLOW · gather context" : "NORMAL"}
          </span>
        </p>
      </div>

      {/* Output bars */}
      <div>
        <Bar label="Decision speed" value={`${speedPct}%`} width={speedPct} color="var(--ch-cool)" />
        <Bar
          label="Verification depth"
          value={`${out.verifyPasses} ${out.verifyPasses === 1 ? "pass" : "passes"}`}
          width={(out.verifyPasses / 5) * 100}
          color="var(--ch-cool-alt)"
        />
        <Bar label="Action scope" value={`${scopePct}%`} width={scopePct} color="var(--ch-accent)" />
        <p
          className="mt-6 border-t border-border-brand pt-4 leading-relaxed text-on-surface/85"
          aria-live="polite"
        >
          {out.verdict}
        </p>
      </div>
    </div>
  );
}

function Bar({ label, value, width, color }) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-semibold">{label}</span>
        <span className="font-mono text-xs font-bold text-muted-safe">{value}</span>
      </div>
      <div className="ch-bar-track">
        <div className="ch-bar-fill" style={{ width: `${width}%`, background: color }} />
      </div>
    </div>
  );
}
