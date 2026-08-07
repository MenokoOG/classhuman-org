import { useCallback, useEffect, useState } from "react";
import "./instrument.css";

import Ticker from "./components/Ticker.jsx";
import Masthead from "./components/Masthead.jsx";
import Fig00Statement from "./components/Fig00Statement.jsx";
import Fig01SpeedRule from "./components/Fig01SpeedRule.jsx";
import Fig02Gate from "./components/Fig02Gate.jsx";
import Fig03Loop from "./components/Fig03Loop.jsx";
import Fig04Boundaries from "./components/Fig04Boundaries.jsx";
import Close from "./components/Close.jsx";
import Colophon from "./components/Colophon.jsx";

const TITLE = "The Instrument — classHuman AI";
const DESCRIPTION =
  "Unknown data must increase decision discipline, not model confidence. Drag the uncertainty slider and this page applies its own product law to itself — past θ = 0.50 it withholds its contents until a human releases them.";

/**
 * "The Instrument" — a single interactive page for the TACO Loop's core law.
 *
 * This route mounts outside the site Layout, so it carries its own masthead,
 * ticker, and colophon and inherits none of the seasonal brand. All styling is
 * scoped under `.instrument` in instrument.css; all math comes from
 * instrument.ts, which is the design handoff file used as delivered.
 *
 * One piece of state governs everything below it:
 *   u        — total uncertainty, held as a 0–100 int for the range input
 *   released — decision ref → whether a human has released it
 *   active   — which loop stage the scroll position is on
 */
export default function Instrument() {
  const [u, setU] = useState(22);
  const [released, setReleased] = useState({});
  const [active, setActive] = useState("01");

  useEffect(() => {
    window.scrollTo(0, 0);

    const previousTitle = document.title;
    document.title = TITLE;

    const metaTag = document.querySelector('meta[name="description"]');
    const previousDescription = metaTag?.getAttribute("content");
    metaTag?.setAttribute("content", DESCRIPTION);

    /* Keeps overscroll ground dark instead of flashing the site's paper. */
    document.body.classList.add("instrument-body");

    return () => {
      document.title = previousTitle;
      if (previousDescription) metaTag?.setAttribute("content", previousDescription);
      document.body.classList.remove("instrument-body");
    };
  }, []);

  const release = useCallback((ref) => {
    setReleased((prev) => (prev[ref] ? prev : { ...prev, [ref]: true }));
  }, []);

  const changeActive = useCallback((num) => {
    setActive((prev) => (prev === num ? prev : num));
  }, []);

  const uFraction = u / 100;

  return (
    <div className="instrument">
      <svg viewBox="0 0 20 20" width="14" height="14" className="i-reg i-reg--l" aria-hidden="true">
        <path d="M10 0 L10 20 M0 10 L20 10" stroke="#33333A" strokeWidth="1" />
      </svg>
      <svg viewBox="0 0 20 20" width="14" height="14" className="i-reg i-reg--r" aria-hidden="true">
        <path d="M10 0 L10 20 M0 10 L20 10" stroke="#33333A" strokeWidth="1" />
      </svg>

      <Ticker />
      <Masthead />

      <main>
        <Fig00Statement />
        <Fig01SpeedRule uRaw={u} u={uFraction} onChange={setU} />
        <Fig02Gate u={uFraction} released={released} onRelease={release} />
        <Fig03Loop u={uFraction} active={active} onActiveChange={changeActive} />
        <Fig04Boundaries />
        <Close />
      </main>

      <Colophon />
    </div>
  );
}
