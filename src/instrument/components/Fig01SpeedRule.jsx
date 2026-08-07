import { CURVES, PLOT, THETA, curvePath, inverseSpeed, px, py } from "../instrument.ts";
import Reveal from "./Reveal.jsx";

/* The three curves never change shape — only the readout marker moves. Sample
   them once at module load rather than on every slider frame. */
const PATHS = {
  speed: curvePath(CURVES.speed.f),
  verify: curvePath(CURVES.verify.f),
  scope: curvePath(CURVES.scope.f),
};

const THETA_X = px(THETA);

/* 11 ticks across the track; majors at 0, 0.5, 1.0 are labelled and taller.
   The 0.5 tick is the only ember mark on the control — that is θ. */
const TICKS = Array.from({ length: 11 }, (_, i) => {
  const t = i / 10;
  const major = i % 5 === 0;
  return {
    t,
    major,
    theta: Math.abs(t - THETA) < 0.001,
    label: major ? t.toFixed(1) : "",
  };
});

const pct = (v) => `${Math.round(v * 100)}%`;

export default function Fig01SpeedRule({ uRaw, u, onChange }) {
  const { speed, verifyPasses, scope, slow, verdict } = inverseSpeed(u);

  const markX = px(u);
  const legend = [
    { ...CURVES.speed, readout: pct(speed) },
    { ...CURVES.verify, readout: `${verifyPasses} passes` },
    { ...CURVES.scope, readout: pct(scope) },
  ];

  return (
    <section className="i-section i-section--alt" id="fig-01">
      <div className="i-shell i-body">
        <div className="i-fig">
          <span className="i-fig__num">Fig. 01</span>
          <h2 className="i-fig__title">The Inverse Speed Rule</h2>
        </div>
        <p className="i-lede">
          Set the total uncertainty. Everything below it — this page included — obeys the result.
        </p>

        {/* ── Control bar ─────────────────────────────────────────────── */}
        <Reveal className="i-control">
          <div className="i-control__left">
            <div className="i-control__row">
              <span>U_total — drag</span>
              <span>θ = 0.50</span>
            </div>
            <input
              type="range"
              className="i-slider"
              min="0"
              max="100"
              step="1"
              value={uRaw}
              onChange={(e) => onChange(parseInt(e.target.value, 10))}
              aria-label="Total uncertainty"
            />
            <div className="i-ticks" aria-hidden="true">
              {TICKS.map((tick) => (
                <div
                  key={tick.t}
                  className={[
                    "i-tick",
                    tick.major ? "i-tick--major" : "",
                    tick.theta ? "i-tick--theta" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ left: `${tick.t * 100}%` }}
                >
                  <span className="i-tick__mark" />
                  <span className="i-tick__label">{tick.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`i-readout${slow ? " is-slow" : ""}`}>
            <span className="i-readout__label">Loop state</span>
            <span className="i-readout__value" aria-live="polite">
              {u.toFixed(2)}
            </span>
            <span className="i-readout__state">
              {slow ? "SLOW — gather context" : "Nominal"}
            </span>
          </div>
        </Reveal>

        {/* ── The plot ────────────────────────────────────────────────── */}
        <Reveal className="i-plot">
          <svg
            viewBox="0 0 900 300"
            className="i-plot__svg"
            role="img"
            aria-label={`Inverse speed rule at total uncertainty ${u.toFixed(2)}: decision speed ${pct(speed)}, verification depth ${verifyPasses} passes, action scope ${pct(scope)}.`}
          >
            <g stroke="#17171B" strokeWidth="1">
              {[20, 90, 160, 230].map((y) => (
                <line key={`h${y}`} x1={PLOT.x0} y1={y} x2={PLOT.x1} y2={y} />
              ))}
              {[220, 380, 540, 700].map((x) => (
                <line key={`v${x}`} x1={x} y1={PLOT.yTop} x2={x} y2={PLOT.yBase} />
              ))}
            </g>

            <g stroke="#3A3A42" strokeWidth="1">
              <line x1={PLOT.x0} y1={PLOT.yBase} x2={PLOT.x1} y2={PLOT.yBase} />
              <line x1={PLOT.x0} y1={PLOT.yTop} x2={PLOT.x0} y2={PLOT.yBase} />
            </g>

            <g fontFamily="'Space Mono', monospace" fontSize="10" fill="#5E5B56">
              <text x="52" y="24" textAnchor="end">1.0</text>
              <text x="52" y="264" textAnchor="end">0</text>
              <text x="60" y="282" textAnchor="middle">0</text>
              <text x="460" y="282" textAnchor="middle">U_total</text>
              <text x="860" y="282" textAnchor="middle">1.0</text>
            </g>

            {/* θ — the human-review threshold */}
            <line
              x1={THETA_X}
              y1="12"
              x2={THETA_X}
              y2={PLOT.yBase}
              stroke="#C0492C"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.85"
            />
            <text
              x={THETA_X + 6}
              y="18"
              fontFamily="'Space Mono', monospace"
              fontSize="9"
              fill="#C0492C"
              letterSpacing="1"
            >
              θ HUMAN REVIEW
            </text>

            {/* Curves are told apart by dash pattern, not hue — colorblind-safe. */}
            <path d={PATHS.speed} fill="none" stroke={CURVES.speed.stroke} strokeWidth="2" />
            <path
              d={PATHS.verify}
              fill="none"
              stroke={CURVES.verify.stroke}
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <path
              d={PATHS.scope}
              fill="none"
              stroke={CURVES.scope.stroke}
              strokeWidth="1.5"
              strokeDasharray="1 4"
              strokeLinecap="round"
            />

            {/* Live readout marker */}
            <line
              x1={markX}
              y1={PLOT.yTop}
              x2={markX}
              y2={PLOT.yBase}
              stroke="#EDE8E0"
              strokeWidth="1"
              opacity="0.55"
            />
            <circle cx={markX} cy={py(speed)} r="4.5" fill="#EDE8E0" />
            <circle
              cx={markX}
              cy={py(CURVES.verify.f(u))}
              r="3.5"
              fill="#0B0B0D"
              stroke="#9A968E"
              strokeWidth="1.5"
            />
            <circle cx={markX} cy={py(scope)} r="3" fill="#5E5B56" />
          </svg>

          <div className="i-legend">
            {legend.map((g) => (
              <div key={g.label} className="i-legend__item">
                <svg viewBox="0 0 26 8" width="26" height="8" aria-hidden="true" style={{ flex: "none" }}>
                  <line
                    x1="0"
                    y1="4"
                    x2="26"
                    y2="4"
                    stroke={g.stroke}
                    strokeWidth={g.width}
                    strokeDasharray={g.dash}
                  />
                </svg>
                <span className="i-legend__formula">{g.formula}</span>
                <span className="i-legend__name">{g.label}</span>
                <span className="i-legend__readout">{g.readout}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="i-verdict">{verdict}</p>
      </div>
    </section>
  );
}
