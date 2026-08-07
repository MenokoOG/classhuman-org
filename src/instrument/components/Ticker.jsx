import { TICKER, THETA } from "../instrument.ts";

/**
 * The TICKER array is rendered twice back to back; the track translates -50%,
 * so the duplicate makes the loop seamless. The second copy is aria-hidden —
 * a screen reader should hear the feed once, not twice.
 */
export default function Ticker() {
  return (
    <div className="i-ticker">
      <span className="i-ticker__label">Live loop</span>
      <div className="i-ticker__window">
        <div className="i-ticker__track">
          {[0, 1].map((copy) =>
            TICKER.map((t) => (
              <span
                key={`${copy}-${t.ref}`}
                className={`i-ticker__item${t.risk >= THETA ? " is-held" : ""}`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                <span className="i-ticker__ref">{t.ref}</span>
                <span className="i-ticker__text">{t.label}</span>
                <span className="i-ticker__risk">{t.risk.toFixed(2)}</span>
                <span className="i-ticker__state">{t.state}</span>
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
