import { Link } from "react-router-dom";
import { Eyebrow, GradientText, Reveal, ProductHero, StatusPill } from "../components/ui.jsx";
import { productBySlug } from "../lib/products.js";

const P = productBySlug("asymptote");
const REPO = "https://github.com/MenokoOG/asymptote";

const sampleReport = `================================================================
  ASYMPTOTE - TIME & SPACE COMPLEXITY REPORT
================================================================

examples/sample.py
  L4   bubble_sort: time O(n^2) | space O(1)   | confidence 90%
        evidence: nested loops -> polynomial degree 2
 ~L18  merge:       time O(n)   | space O(n)   | confidence 80%
        evidence: single-level iteration over input
        unknown : calls merge_halves() - cost not analyzed
 ~L27  fib:         time O(2^n) | space O(n)   | confidence 40%
        evidence: 2 recursive calls
        unknown : exponential shape assumes no memoization

----------------------------------------------------------------
Analyzed 3 function(s). '~' marks low-confidence estimates.
Asymptote is a static heuristic, not a proof. Unknowns are stated.
================================================================`;

const rules = [
  ["Sequential statements", "the dominant term wins"],
  ["Nested loops", "terms multiply — the polynomial degree rises"],
  ["sorted() / .sort()", "contributes an n log n term"],
  ["while with // 2", "recognized as divide-and-conquer → log n"],
  ["1 self-call", "O(n) — or O(log n) if it halves"],
  ["2+ self-calls", "O(2^n) — or O(n log n) if it halves"],
];

const limits = [
  "Python only in v0.1. The AST approach ports to other languages via a language-specific front end feeding the same Cost algebra.",
  "Cross-function costs are not inlined — they are listed as unknowns, not guessed.",
  "Loop bounds are assumed to scale with n; a loop over a true constant is over-counted (flagged in confidence + evidence).",
  "Memoized recursion is reported at its un-memoized upper bound.",
];

export default function Asymptote() {
  return (
    <main>
      <ProductHero
        eyebrow="PRODUCT · ASYMPTOTE"
        color={P.color}
        title={
          <>
            The curve your runtime <GradientText>approaches.</GradientText>
          </>
        }
        lead="Asymptote is a static time & space complexity (Big-O) estimator for Python — built for agents. Point it at a file or a directory and it reports, per function, the estimated time and space Big-O, a confidence score, the evidence behind the call, and the unknowns it could not determine."
      >
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill color={P.color}>{P.status}</StatusPill>
          <span className="font-mono text-xs text-muted-safe">
            Python 3.10+ · zero runtime dependencies · MIT
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
          >
            View on GitHub
          </a>
          <Link
            to="/product"
            className="rounded-md border border-cool px-5 py-2.5 font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
          >
            The law it runs on — TACO
          </Link>
        </div>
      </ProductHero>

      {/* Why unknowns */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>WHY &ldquo;UNKNOWNS&rdquo; INSTEAD OF FALSE CERTAINTY</Eyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
              The exact complexity of an arbitrary program is undecidable.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-on-surface/85">
              It reduces to the halting problem. Asymptote is a heuristic, and it says so. Rather
              than bluff, it lowers its confidence and names its blind spots — recursion depth,
              cross-function calls — so you can judge the estimate instead of trusting a label.
            </p>
            <blockquote className="mt-6 max-w-2xl border-l-4 border-accent pl-5 text-lg font-semibold italic">
              Unknown data should increase your discipline, not the tool&apos;s confidence.
            </blockquote>
            <p className="mt-4 font-mono text-xs text-muted-safe">
              The same law as TACO Loop — Asymptote is that discipline, shipped as a tool.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sample report */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THE REPORT</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
            Time, space, confidence — and what it can&apos;t see.
          </h2>
          <pre className="mt-6 overflow-x-auto rounded-lg border border-border-brand bg-card p-5 font-mono text-[12px] leading-relaxed text-on-surface/90">
{sampleReport}
          </pre>
          <p className="mt-3 font-mono text-xs text-muted-safe">
            Human-readable by default; <span className="text-accent-safe">--json</span> for
            machine-readable output.
          </p>
        </Reveal>
      </section>

      {/* Cost algebra */}
      <section className="border-y border-border-brand bg-card/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>HOW IT WORKS · THE COST ALGEBRA</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Walk the AST, compose one small term.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-on-surface/85">
              Asymptote composes a <code className="font-mono text-accent-safe">Cost</code> term
              <span className="font-mono"> (degree, logs, exp, fact)</span> over the input size{" "}
              <span className="font-mono">n</span>:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {rules.map(([k, v], i) => (
              <Reveal key={k} delay={i * 50}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border-brand bg-surface p-4">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: P.color }} />
                  <p className="text-sm leading-relaxed">
                    <span className="font-mono font-bold text-on-surface">{k}</span>
                    <span className="text-on-surface/80"> — {v}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <Eyebrow>THREE WAYS TO RUN IT</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">CLI, agent tool, or MCP server.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["CLI", "python asymptote.py .", "Human-readable report over a file or a whole tree. Add --json for machine output."],
            ["Agent tool", "run_tool(code=...)", "A JSON-Schema tool definition (ASYMPTOTE_TOOL) + dispatcher for any function-calling model."],
            ["MCP server", "analyze_complexity(...)", "One new tool for frontier (Claude, GPT) or fully local models (Ollama, LM Studio, vLLM) over stdio or HTTP."],
          ].map(([title, code, desc], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-lg border border-border-brand bg-card p-5">
                <p className="font-mono text-xs font-bold tracking-widest text-accent-safe">{title}</p>
                <code className="mt-3 block rounded-md bg-surface px-3 py-2 font-mono text-xs text-on-surface/90">
                  {code}
                </code>
                <p className="mt-4 text-sm leading-relaxed text-on-surface/80">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Known limits */}
      <section className="border-t border-border-brand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <Eyebrow>KNOWN LIMITS · STATED, NOT HIDDEN</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">A decision aid, not an oracle.</h2>
            <ul className="mt-8 space-y-3">
              {limits.map((l) => (
                <li key={l} className="flex items-start gap-3 rounded-md border border-border-brand bg-card px-4 py-3">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-on-surface/85">{l}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-5 py-2.5 font-bold text-on-primary hover:opacity-90"
              >
                Read the evidence, not just the label →
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
