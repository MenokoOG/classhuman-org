/* The classHuman AI product catalog — single source of truth.
   Consumed by the Header (Products menu), Home (products grid), and the
   Footer. Colors are theme vars (used for per-product accenting via the
   --stage custom property) so products recolor with the active theme. */

export const PRODUCTS = [
  {
    slug: "product", // TACO keeps its original /product route (SEO + existing links)
    name: "TACO Loop",
    tag: "Decision-Control Architecture",
    layer: "Layer 0 · root",
    status: "BUILDING · MVP",
    color: "var(--ch-primary)", // Ember
    hook: "Unknown data must increase decision discipline — not model confidence.",
    blurb:
      "A control layer for agents, humans, and workflows. Take In → Assess → Choose → Operate. Not another agent.",
  },
  {
    slug: "asymptote",
    name: "Asymptote",
    tag: "Static Big-O Estimator · built for agents",
    layer: "Tooling · shipped",
    status: "SHIPPED · v0.1",
    color: "var(--ch-cool-alt)", // Teal-cool
    hook: "It names its unknowns instead of bluffing past its evidence.",
    blurb:
      "Point it at Python and it reports per-function time & space complexity, a confidence score, the evidence — and the blind spots it can't decide. CLI, agent tool, or MCP server.",
  },
  {
    slug: "ag3nt24",
    name: "Ag3nt24",
    tag: "The Proof Layer",
    layer: "Layer 1",
    status: "NEXT · paper drafting",
    color: "var(--ch-cool)", // Slate-blue
    hook: "How do you prove what an agent said it did is what it actually did?",
    blurb:
      "Agent actions pass through gates that produce signed, append-only receipts — provable, not just logged. A failed gate routes the agent to HADES.",
  },
  {
    slug: "hades",
    name: "HADES",
    tag: "Human Assisted Diagnostic Evaluation System",
    layer: "Layer 2",
    status: "HORIZON · paper drafting",
    color: "var(--ch-muted)", // Stone
    hook: "It doesn't punish. It gates authority and preserves truth.",
    blurb:
      "A failing agent is contained, diagnosed, and — if it passes — returned to service. If not, its lessons are harvested before an authorized deactivation. Every step written to the on-chain ledger.",
  },
];

export function productBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
