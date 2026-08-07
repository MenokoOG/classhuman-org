import { NON_CLAIMS } from "../instrument.ts";
import Reveal from "./Reveal.jsx";

/**
 * Fig. 04 — a credibility asset, not fine print. A decision-control company
 * that overstates its own certainty has already broken its own law.
 */
export default function Fig04Boundaries() {
  return (
    <section className="i-section" id="fig-04">
      <div className="i-shell i-bounds">
        <div className="i-bounds__left">
          <div className="i-fig" style={{ marginBottom: 22 }}>
            <span className="i-fig__num">Fig. 04</span>
          </div>
          <Reveal as="h2" className="i-bounds__h2">
            What we do not claim.
          </Reveal>
          <p className="i-bounds__rationale">
            A decision-control company that overstates its own certainty has already broken its
            own law. So this is on the homepage, not buried in the appendix.
          </p>
        </div>

        <div className="i-bounds__right">
          {NON_CLAIMS.map((n) => (
            <div key={n.claim} className="i-claim">
              <span className="i-claim__text">{n.claim}</span>
              <span className="i-claim__position">{n.position}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
