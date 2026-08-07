import { useEffect, useRef } from "react";
import { STAGES } from "../instrument.ts";

const DIVIDER_WORDS = ["Take in.", "Assess.", "Choose.", "Operate."];

/**
 * Fig. 03 — scroll-driven sticky stack. Whichever stage block is crossing the
 * viewport midline wins, via a second observer at -42% top and bottom.
 */
export default function Fig03Loop({ u, active, onActiveChange }) {
  const containerRef = useRef(null);

  /* Keep the callback in a ref so the observer is built once and is not torn
     down and rebuilt on every slider frame. */
  const onActiveChangeRef = useRef(onActiveChange);
  onActiveChangeRef.current = onActiveChange;

  useEffect(() => {
    const root = containerRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const num = entry.target.getAttribute("data-stage");
          if (num) onActiveChangeRef.current(num);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    root.querySelectorAll("[data-stage]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const act = STAGES.find((s) => s.num === active) ?? STAGES[0];

  /* As u rises the page's own reading pace slows. Almost subliminal. */
  const trackSlow = `${(u * 0.09).toFixed(3)}em`;

  return (
    <section className="i-section i-section--alt" id="fig-03">
      <div className="i-shell i-body">
        <div className="i-fig" style={{ marginBottom: 44 }}>
          <span className="i-fig__num">Fig. 03</span>
          <h2 className="i-fig__title">One loop, four stages</h2>
        </div>

        <div className="i-loop">
          <div className="i-loop__stages" ref={containerRef}>
            {STAGES.map((s) => (
              <div
                key={s.num}
                data-stage={s.num}
                className={`i-stage${s.num === active ? " is-active" : ""}`}
              >
                <div className="i-stage__head">
                  <span className="i-stage__letter">{s.letter}</span>
                  <div className="i-stage__meta">
                    <span className="i-stage__num">{s.num} / 04</span>
                    <span className="i-stage__name" style={{ letterSpacing: trackSlow }}>
                      {s.name}
                    </span>
                  </div>
                </div>
                <p className="i-stage__fn">{s.fn}</p>
                <span className="i-stage__test">{s.test}</span>
              </div>
            ))}
          </div>

          <aside className="i-evidence">
            <div className="i-evidence__head">
              <span>Stage {act.num} — evidence</span>
              <span className="i-evidence__letter">{act.letter}</span>
            </div>

            <div className="i-evidence__rows">
              {act.rows.map((r) => (
                <div key={r.k} className="i-evidence__row">
                  <span className="i-evidence__k">{r.k}</span>
                  <span className="i-evidence__v">{r.v}</span>
                </div>
              ))}
            </div>

            <div className="i-evidence__prevents">
              <span className="i-evidence__prevents-label">Prevents</span>
              <span className="i-evidence__prevents-text">{act.prevents}</span>
            </div>

            <div className="i-evidence__progress" aria-hidden="true">
              {STAGES.map((s) => (
                <span
                  key={s.num}
                  className={`i-evidence__seg${s.num === active ? " is-active" : ""}`}
                />
              ))}
            </div>
          </aside>
        </div>

        <div className="i-loop__divider">
          {DIVIDER_WORDS.map((w) => (
            <span key={w} className="i-loop__word">
              {w}
            </span>
          ))}
          <span className="i-rule-fill" />
        </div>
      </div>
    </section>
  );
}
