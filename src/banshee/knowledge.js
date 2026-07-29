/* Banshee knowledge pack — the ONLY ground truth Banshee may use.
   Public site content only. No private founder details ever (privacy rule:
   the phrase is "accessibility-first design" — nothing more).

   Each entry: { id, title, path, keywords[], text }.
   - keywords drive the offline intent matcher (src/banshee/offline.js)
   - text is what gets injected into the model context (server function)
   - path is the on-site page Banshee cites/links to
   Shared by the browser (client fallback) and the Netlify function (server). */

export const CONTACT_EMAIL = "lawrencejefferson@classhuman.org";

export const KNOWLEDGE = [
  {
    id: "company",
    title: "classHuman AI — who we are",
    path: "/about",
    keywords: ["company", "classhuman", "who", "what", "about", "llc", "firm", "engineering", "research", "generative", "positioning", "mission"],
    text: "classHuman AI is a Generative AI Software Engineering, Development & Research LLC. We build AI agents and agentic systems for clients — using the industry's best existing tools plus our own discipline layer — and we build our own products too. Across everything, humans keep final authority over their agents. It is a two-person company — Lawrence Jefferson II (CEO/CTO/architect) and Nicale Jefferson (CFO, HR & operations, AI ethics & governance). LLC registration is planned for August 2026.",
  },
  {
    id: "services",
    title: "What classHuman builds for clients",
    path: "/",
    keywords: ["services", "build", "client", "clients", "hire", "custom", "workflow", "workflows", "agentic", "tools", "work", "help", "business", "develop", "development", "make"],
    text: "classHuman AI builds AI agents and agentic systems for clients, using the industry's best existing tools plus its own discipline layer. Services: custom AI agents wired into your systems and data; multi-agent agentic workflows with guardrails and human approval; legacy modernization; and equipping your team with agent skills and tools to keep going after we leave. Humans always keep final authority. To start a build, use the contact page.",
  },
  {
    id: "legacy",
    title: "Legacy modernization",
    path: "/legacy",
    keywords: ["legacy", "modernize", "modernization", "old", "mainframe", "cobol", "migrate", "migration", "strangler", "fig", "protocol", "droid", "droids", "interface", "upgrade", "rewrite"],
    text: "classHuman modernizes legacy software without a rip-and-replace. Approach: the strangler-fig pattern (grow the new system around the old one, replacing it capability by capability while it keeps running) and protocol-droid interfaces (adapter agents fluent in both the legacy system's protocols and a modern agentic stack). Backed by senior and CTO-level experience — 24 years U.S. Army operational discipline, senior full-stack engineering, and a COBOL lineage — so no stack is too old. Optionally, classHuman hands your team the agent skills and tools to run the migration themselves. See the Legacy page.",
  },
  {
    id: "laha",
    title: "LAHA — Love All Humans Always",
    path: "/story",
    keywords: ["laha", "love", "humans", "always", "why", "values", "philosophy", "authority", "final"],
    text: "LAHA — Love All Humans Always — is the reason the company exists. classHuman builds human-AI collaboration where people, not models, hold final authority over the decisions that matter. Every system is measured against it: does it keep humans in command, and treat them with care?",
  },
  {
    id: "taco",
    title: "TACO Loop — decision-control architecture",
    path: "/product",
    keywords: ["taco", "loop", "decision", "control", "architecture", "product", "guardrail", "uncertainty", "stages", "take", "assess", "choose", "operate"],
    text: "TACO Loop is a decision-control architecture for unknown-data environments — a control layer for agents, humans, and workflows, not another agent. TACO = Take In unknowns, Assess and align, Choose correctly, Operate and observe outcome. Its Core Product Law: unknown data must increase decision discipline, not model confidence. Risk above 0.50 routes to a human; actions are bounded, reversible, and traceable with a SHA-256 hash-chained audit trail. Credentials: White Paper v1.0 (published July 2026) and Mathematical Model v0.1. Status: building, MVP.",
  },
  {
    id: "asymptote",
    title: "Asymptote — static Big-O estimator",
    path: "/asymptote",
    keywords: ["asymptote", "big-o", "bigo", "complexity", "estimator", "python", "static", "time", "space", "tool", "mcp", "confidence", "unknowns"],
    text: "Asymptote is a static time & space complexity (Big-O) estimator for Python, built for agents. Point it at a file or directory and it reports, per function, estimated time and space Big-O, a confidence score, the evidence, and the unknowns it could not determine. Because the exact complexity of an arbitrary program is undecidable, it names its blind spots instead of bluffing — the same TACO law, shipped as a tool. Run it as a CLI, an agent tool, or an MCP server. Python 3.10+, zero runtime dependencies, MIT licensed. Status: shipped, v0.1. Repo: github.com/MenokoOG/asymptote.",
  },
  {
    id: "ag3nt24",
    title: "Ag3nt24 — the proof layer",
    path: "/ag3nt24",
    keywords: ["ag3nt24", "agent24", "aurora", "proof", "receipt", "receipts", "signed", "gate", "gates", "append", "audit", "layer"],
    text: "Ag3nt24 is the proof layer (Layer 1, built on TACO). It answers: how do you prove what an AI agent said it did is what it actually did? Agent actions pass through gates that produce signed, append-only receipts — provable, not just logged. Flow: Act, Gate, Receipt, Route. A failed gate routes the agent to HADES. Renamed from Aurora 24 / A-24. Status: next; white paper in drafting.",
  },
  {
    id: "hades",
    title: "HADES — diagnostic & authority gating",
    path: "/hades",
    keywords: ["hades", "diagnostic", "evaluation", "deactivation", "rehabilitation", "sandbox", "contain", "ledger", "on-chain", "authority"],
    text: "HADES is the Human Assisted Diagnostic Evaluation System (Layer 2). A failing agent is contained in a sandbox, diagnosed, and — if it passes — validated and returned to service. If it cannot be repaired, its experience and lessons are harvested, then HADES becomes the Human Authorized Deactivation Evidence Sequence. Either path is documented to the on-chain ledger; a human holds final authority. It doesn't punish — it gates authority and preserves truth. Status: horizon; white paper in drafting.",
  },
  {
    id: "demos",
    title: "Demos — Willow Bend Family Clinic",
    path: "/demos",
    keywords: ["demo", "demos", "willow", "bend", "clinic", "example", "working", "appointment", "assistant", "offline", "graceful"],
    text: "Our demos are production-shaped builds where the AI helps but never holds final authority. Willow Bend Family Clinic is an active demo: online appointment requests with human approval (never automated), a patient portal, admin tooling, and Willow — an AI care assistant that only helps navigate and schedule, can never book, gives no medical advice, and degrades gracefully to an offline engine so it never breaks. The site works identically with the AI turned off. It began as a real client build, then was fully sanitized and rebranded. Live demo: willow-bend.netlify.app.",
  },
  {
    id: "story",
    title: "Our story — in memory of Tonya",
    path: "/story",
    keywords: ["story", "tonya", "founders", "history", "origin", "how", "started", "began"],
    text: "classHuman AI began in 2023 in a hotel room while the founders were homeless, in memory of Tonya. It is a father-and-daughter company built on discipline, governance, and a source of truth you can stand on. LAHA — Love All Humans Always — was born on their hardest night and is the reason the company exists. The full story is on the Story page.",
  },
  {
    id: "team",
    title: "The team",
    path: "/about",
    keywords: ["team", "founders", "lawrence", "jefferson", "nicale", "who", "people", "ceo", "cfo", "menoko", "luxgirl"],
    text: "Lawrence Jefferson II (Menoko OG, 'Original Geek') is CEO, CTO, and architect — 24 years U.S. Army, senior backend and full-stack engineer, AI systems builder. Nicale Jefferson (LuxGirl OG) is CFO, Head of HR & Operations, and admin for AI ethics and governance; she authors the governance framework behind classHuman. The company practices accessibility-first design. Recognition: Scrimba 'Portfolio of the Week', May 2026. Nicale's page: luxgirlog.netlify.app.",
  },
  {
    id: "contact",
    title: "Contact classHuman AI",
    path: "/contact",
    keywords: ["contact", "email", "reach", "talk", "hire", "quote", "engage", "work", "get", "touch", "call"],
    text: `You can reach classHuman AI by email at ${CONTACT_EMAIL}. No forms, no trackers — just email. For quotes, engagements, timelines, or anything that needs a commitment, a human handles it directly.`,
  },
];

/* One-line facts Banshee may state directly (used to seed the offline greeting). */
export const QUICK_FACTS = {
  positioning: "classHuman AI is a Generative AI Software Engineering, Development & Research LLC.",
  products: "TACO Loop, Asymptote, Ag3nt24, and HADES.",
};
