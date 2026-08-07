import { DECISIONS, evaluateDecision } from "../instrument.ts";
import Reveal from "./Reveal.jsx";

const riskTone = (risk) => (risk < 0.25 ? "low" : risk < 0.5 ? "mid" : "high");

/**
 * Fig. 02 — the point of the site.
 *
 * Risk rises with the global slider, so raising uncertainty pushes rows over θ
 * one at a time. Past θ a row withholds its own contents until a human clicks
 * Release. The visitor performs the product.
 *
 * The blur is deliberately not a security control — the text stays in the DOM
 * and available to assistive tech. It is withheld from the machine, not from
 * the person.
 */
export default function Fig02Gate({ u, released, onRelease }) {
  const rows = DECISIONS.map((d) => evaluateDecision(d, u, !!released[d.ref]));
  const heldNow = rows.filter((r) => r.withheld).length;
  const past = u >= 0.5;

  return (
    <section className="i-section" id="fig-02">
      <div className="i-shell i-body">
        <div className="i-fig">
          <span className="i-fig__num">Fig. 02</span>
          <h2 className="i-fig__title">The guardrail gate</h2>
        </div>
        <p className="i-lede">
          Four live decisions. Each carries a risk score. This page applies the same rule it
          sells: past θ, the content is withheld and a human has to release it. That human is
          you.
        </p>

        <Reveal className="i-gate">
          <div className="i-gate__row i-gate__row--head">
            <span>Ref</span>
            <span>Action</span>
            <span>Risk</span>
            <span>Class</span>
            <span className="i-gate__head-state">State</span>
          </div>

          {rows.map((d) => {
            const tone = riskTone(d.risk);
            return (
              <div
                key={d.ref}
                className={`i-gate__row i-gate__row--data${d.withheld ? " is-withheld" : ""}`}
              >
                <span className="i-gate__ref">{d.ref}</span>

                <div className="i-gate__action">
                  <span className="i-gate__text">{d.action}</span>
                  {d.withheld && <span className="i-gate__stamp">HELD</span>}
                </div>

                <div className="i-gate__risk">
                  <span className="i-gate__risk-val">{d.risk.toFixed(2)}</span>
                  <span className="i-gate__bar">
                    <span
                      className={`risk-${tone}-bg`}
                      style={{ width: `${Math.round(d.risk * 100)}%` }}
                    />
                  </span>
                </div>

                <span className={`i-gate__cls risk-${tone}`}>{d.cls}</span>

                <div className="i-gate__state">
                  <button
                    type="button"
                    className={[
                      "i-release",
                      d.withheld ? "i-release--armed" : "",
                      d.held && !d.withheld ? "i-release--done" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    disabled={!d.withheld}
                    aria-label={
                      d.withheld ? `Release ${d.ref} — ${d.action}` : `${d.ref} ${d.buttonLabel}`
                    }
                    onClick={() => onRelease(d.ref)}
                  >
                    {d.buttonLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </Reveal>

        <div className="i-gate__foot">
          <span className="i-gate__count" aria-live="polite">
            {heldNow === 0
              ? "0 held — all decisions inside automatic scope"
              : `${heldNow} of 4 held — awaiting human release`}
          </span>
          <span className="i-gate__note">
            {past
              ? "This is the product. Not a warning banner — the action does not proceed until a named human releases it, and that release is what the audit chain records."
              : "Raise the uncertainty above 0.50 and watch what this page does to itself."}
          </span>
        </div>
      </div>
    </section>
  );
}
