import Reveal from "./Reveal.jsx";

const FACTS = [
  { k: "Architecture", v: "12 layers" },
  { k: "Uncertainty classes", v: "6" },
  { k: "Audit", v: "SHA-256 chain" },
  { k: "Human review at", v: "Risk > 0.50" },
];

/** Fig. 00 — the Core Product Law, stated once, at 64px in weight 300. */
export default function Fig00Statement() {
  return (
    <section className="i-statement" id="fig-00">
      <div className="i-statement__grid" aria-hidden="true" />
      <div className="i-shell i-statement__inner">
        <div className="i-statement__main">
          <div className="i-statement__head">
            <span className="i-fig__num">Fig. 00</span>
            <span className="i-rule-fill" />
            <span className="i-fig__num">Core product law</span>
          </div>

          <Reveal as="h1" className="i-h1">
            Unknown data must increase decision <strong>discipline</strong>, not model{" "}
            <span className="i-strike">confidence</span>.
          </Reveal>

          <Reveal as="p" className="i-statement__sub">
            TACO is a control layer for agents, humans, and workflows that must decide before
            they know enough. It is not an agent. It does not make your system more certain — it
            makes your system behave correctly when it isn&apos;t.
          </Reveal>
        </div>

        <div className="i-statement__side">
          <div>
            {FACTS.map((f) => (
              <div key={f.k} className="i-fact">
                <span className="i-fact__k">{f.k}</span>
                <span className="i-fact__v">{f.v}</span>
              </div>
            ))}
          </div>
          <span className="i-laha">
            classHuman AI, LLC
            <br />
            Driven by LAHA —
            <br />
            Love All Humans Always
          </span>
        </div>
      </div>
    </section>
  );
}
