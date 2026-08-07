import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

export default function Close() {
  return (
    <section className="i-close">
      <div className="i-shell i-close__inner">
        <Reveal as="h2" className="i-close__h2">
          Your agents will keep getting faster.
          <br />
          <span className="i-dim">Someone still has to be </span>
          <strong>accountable</strong>
          <span className="i-dim"> for what they do.</span>
        </Reveal>

        <div className="i-btngroup">
          <Link to="/contact" className="i-btn">
            Request access
          </Link>
          <Link to="/product" className="i-btn">
            White Paper v1.0
          </Link>
        </div>
      </div>
    </section>
  );
}
