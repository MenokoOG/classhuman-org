import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const NAV = [
  { label: "Instrument", target: "fig-01" },
  { label: "Loop", target: "fig-03" },
  { label: "Gate", target: "fig-02" },
  { label: "Boundaries", target: "fig-04" },
];

/**
 * Sticky, 56px, blurred ground — the one place backdrop-blur is allowed.
 * Items are divided by vertical hairlines rather than gaps, so the bar reads
 * as a drawing rule instead of a nav.
 */
export default function Masthead() {
  const jump = (id) => {
    const node = document.getElementById(id);
    if (!node) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    node.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <header className="i-masthead">
      <div className="i-shell i-masthead__inner">
        <div className="i-masthead__brand">
          <Logo size={20} strokeWidth={14} />
          <span className="i-masthead__wordmark">classHuman AI</span>
        </div>

        <nav className="i-masthead__nav" aria-label="Instrument sections">
          {NAV.map((item) => (
            <button
              key={item.target}
              type="button"
              className="i-masthead__link"
              onClick={() => jump(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="i-masthead__spacer" />

        <div className="i-masthead__end">
          <span className="i-masthead__cell i-masthead__cell--wp">WP v1.0</span>
          <Link to="/contact" className="i-masthead__cell i-masthead__link i-masthead__cta">
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
