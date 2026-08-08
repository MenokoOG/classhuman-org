/* classHuman AI research & tooling catalog — single source of truth.

   RE-SEQUENCED 2026-08-07 (CLASSHUMAN.md v1.6). Read that file first.

   R&D is PAUSED, not scrapped. TACO Loop, Ag3nt24 and HADES keep their
   definitions and their published papers, but the company build comes
   first: free skills -> paid bundles, the control plane, and client
   services. R&D restarts after Phase 1 is running.

   HADES is RESTORED here. It was scrapped 2026-07-31 and revived
   2026-08-05. Note the layer direction: HADES is Layer 2, ABOVE Ag3nt24 —
   not a rehabilitation destination that a failed gate routes down into.
   Any doc still showing the old topology is stale.

   These belong on the Research & Development page, NOT the products page.
   The commercial front door is client services + the Tools We Use page;
   see pages/Services.jsx. Per the Operating Doctrine we do not lead with
   our own unproven stack.

   `track` — "rnd" (paused research) or "tooling" (shipped, standalone).
   `hasPage` — false means no detail route exists yet; don't link it.
   Colors are theme vars (per-product accenting via --stage). */

export const PRODUCTS = [
  {
    slug: "product", // TACO keeps its original /product route (SEO + existing links)
    name: "TACO Loop",
    tag: "Decision-Control Architecture",
    layer: "Layer 0 · root",
    status: "R&D · PAUSED",
    track: "rnd",
    hasPage: true,
    color: "var(--ch-primary)", // Ember
    hook: "Unknown data must increase decision discipline — not model confidence.",
    blurb:
      "A control layer for agents, humans, and workflows. Take In → Assess → Choose → Operate. Not another agent. White Paper v1.0 published July 2026.",
  },
  {
    slug: "ag3nt24",
    name: "Ag3nt24",
    tag: "The Proof Layer",
    layer: "Layer 1",
    status: "R&D · PAUSED · paper in review",
    track: "rnd",
    hasPage: true,
    color: "var(--ch-cool)", // Slate-blue
    hook: "How do you prove what an agent said it did is what it actually did?",
    blurb:
      "Agent actions pass through gates that produce signed, append-only receipts — provable, not just logged. Fail-closed: a failed gate denies the action, records it, and escalates to a named human.",
  },
  {
    slug: "hades",
    name: "HADES",
    tag: "Human Assisted Diagnostic Evaluation System",
    layer: "Layer 2 · flagship",
    status: "R&D · PAUSED · scope open",
    track: "rnd",
    hasPage: false, // no detail route yet — surfaced on /research only
    color: "var(--ch-warm-alt)",
    hook: "The platform layer the first two were built to make possible.",
    blurb:
      "Revived 2026-08-05 after being archived in July. Layer 2, above Ag3nt24. Scope is an open decision and nothing is being built yet — listed here for honesty about where the research sits, not as an offering.",
  },
  {
    slug: "asymptote",
    name: "Asymptote",
    tag: "Static Big-O Estimator · built for agents",
    layer: "Tooling · shipped",
    status: "SHIPPED · v0.1",
    track: "tooling",
    hasPage: true,
    color: "var(--ch-cool-alt)", // Teal-cool
    hook: "It names its unknowns instead of bluffing past its evidence.",
    blurb:
      "Point it at Python and it reports per-function time & space complexity, a confidence score, the evidence — and the blind spots it can't decide. CLI, agent tool, or MCP server.",
  },
];

/* Everything actively paused. Useful for the /research page's banner. */
export const RND_PAUSED = PRODUCTS.filter((p) => p.track === "rnd");

/* Shipped and usable today — safe to reference in commercial copy. */
export const SHIPPED = PRODUCTS.filter((p) => p.track === "tooling");

export function productBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
