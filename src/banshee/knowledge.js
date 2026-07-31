/* Banshee knowledge pack — the ONLY ground truth Banshee may use.
   Public site content only. No private founder details ever (privacy rule:
   the phrase is "accessibility-first design" — nothing more).

   Each entry: { id, title, path, keywords[], text }.
   - keywords drive the offline intent matcher (src/banshee/offline.js)
   - text is what gets injected into the model context (server function)
   - path is the on-site page Banshee cites/links to
   Shared by the browser (client fallback) and the Netlify function (server). */

export const CONTACT_EMAIL = "lawrencejefferson@classhuman.org";
export const DIGITAL_TWIN = "https://ljefferson-menoko-site.netlify.app";

export const KNOWLEDGE = [
  {
    id: "company",
    title: "classHuman AI — who we are",
    path: "/about",
    keywords: ["company", "classhuman", "who", "what", "about", "llc", "firm", "engineering", "research", "generative", "positioning", "mission"],
    text: "classHuman AI is a Generative AI Software Engineering, Development & Research LLC. We build AI agents and agentic systems for clients — using the industry's best existing tools plus our own discipline layer — and we build our own products too. Across everything, humans keep final authority over their agents. It's a father-and-daughter, two-person company: Lawrence Jefferson II (CEO, CTO, and architect — he owns the engineering and product) and Nicale Jefferson (UX/UI designer, head of HR & operations, and AI ethics & governance — she authors the governance framework). classHuman AI is a registered Washington LLC (July 2026).",
  },
  {
    id: "services",
    title: "What classHuman builds for clients",
    path: "/services",
    keywords: ["services", "build", "client", "clients", "hire", "custom", "workflow", "workflows", "agentic", "tools", "work", "help", "business", "develop", "development", "make", "harness", "security", "registration", "validation", "revocation", "escalation", "gates"],
    text: "classHuman AI builds AI agents and agentic systems for clients on modern platforms and open-source frameworks — the client keeps their tooling, their cloud, and their exit options. Four kinds of engagement: agents and agentic systems (build); legacy modernization (migrate); custom work — our own harness and security-agent software (custom); and enabling your team to keep going without us (hand off). The security-agent layer is five controls: registration (is this agent known?), validation (is this action legitimate, checked before it happens?), revocation (can authority be withdrawn right now?), escalation (what happens when confidence is low?), and human-in-the-loop (is final authority actually held by a person?). Fail-closed throughout: a failed gate denies the action, records the refusal, and escalates to a named human. See the Work With Us page.",
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
    text: "Ag3nt24 is the proof layer (Layer 1, built on TACO). It answers: how do you prove what an AI agent said it did is what it actually did? Agent actions pass through gates that produce signed, append-only receipts — provable, not just logged. Flow: Act, Gate, Receipt, Deny. It is fail-closed by construction — every uncertainty resolves to deny. A failed gate denies the action, writes the refusal to the chain, and escalates to a named human. Renamed from Aurora 24 / A-24. Status: R&D; white paper in drafting.",
  },
  {
    id: "skills",
    title: "Free agent skills from classHuman",
    path: "/skills",
    keywords: ["skill", "skills", "download", "free", "install", "claude", "open", "method", "scout", "gate", "review", "checklist", "resources"],
    text: "classHuman publishes the skills it uses on real engagements, free and installable. Two are available now. legacy-modernization-scout maps a legacy system before anyone commits to a rewrite — it inventories the surfaces, finds the seams, designs the adapters, and ranks strangler-fig slices by value against reversibility, marking every finding Confirmed, Inferred, or Unknown; it produces MODERNIZATION-SCOUT.md. agent-gate-review reviews an agent against the five authority gates — registration, validation, revocation, escalation, human-in-the-loop — rating each Enforced, Advisory, Absent, or Unknown with a concrete failure scenario; it produces AGENT-GATE-REVIEW.md. Both ship as a .skill package and a plain SKILL.md. No signup, no email gate. See the Skills page.",
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
    keywords: ["team", "founders", "lawrence", "jefferson", "nicale", "who", "people", "ceo", "menoko", "luxgirl", "twin"],
    text: "Lawrence Jefferson II (Menoko OG, 'Original Geek') is CEO, CTO, and architect — 24 years U.S. Army, senior backend and full-stack engineer, AI systems builder; he owns the engineering and product. You can even talk to his digital twin at ljefferson-menoko-site.netlify.app. Nicale Jefferson (LuxGirl OG) is UX/UI designer, Head of HR & Operations, and admin for AI ethics & governance; she authors the governance framework behind classHuman. The company practices accessibility-first design. Recognition: Scrimba 'Portfolio of the Week', May 2026. Nicale's page: luxgirlog.netlify.app.",
  },
  {
    id: "twin",
    title: "Talk to Lawrence's digital twin",
    path: "/",
    href: DIGITAL_TWIN,
    keywords: ["twin", "digital", "lawrence", "founder", "chat", "conversation", "person", "portfolio", "menoko", "himself"],
    text: `Want a more personal conversation? You can talk to Lawrence Jefferson II's digital twin — an AI version of the founder that goes deep on his background, projects, and how classHuman thinks about building agents. It lives at ${DIGITAL_TWIN}, and there's a link right in the hero on the home page. For anything that needs a commitment, a real human still handles it.`,
  },
  {
    id: "engagement",
    title: "How to work with classHuman",
    path: "/contact",
    keywords: ["engage", "engagement", "start", "started", "getting", "process", "onboard", "onboarding", "discovery", "pilot", "scope", "steps", "begin", "project", "timeline"],
    text: `Getting started is simple: email ${CONTACT_EMAIL} with what you want to build or the system you need to modernize. The usual path is a short discovery to scope the problem, then a focused build, then a handoff — and, if you want it, classHuman equips your team with the agent skills and tools to keep going on their own. A human handles every commitment (scope, timeline, price); the site and I never commit the company to terms.`,
  },
  {
    id: "why",
    title: "Why classHuman — the discipline layer",
    path: "/product",
    keywords: ["why", "different", "difference", "differentiator", "better", "trust", "discipline", "compare", "versus", "unique", "value", "accountability", "safe", "reliable"],
    text: "What sets classHuman apart is the discipline layer under the agents. Every build keeps humans in final authority, degrades gracefully to an offline path so it never hard-fails, and leaves an audit trail — signed receipts, observable outcomes, no black boxes. The bench is senior/CTO-level: 24 years of Army operational discipline, a COBOL data-integrity lineage, and deep failure literacy (Agent Autopsy — 12 production agent failure modes, each broken and fixed). Not demos — production-shaped systems that hold up under pressure.",
  },
  {
    id: "credentials",
    title: "Credentials & track record",
    path: "/legacy",
    keywords: ["credentials", "proof", "track", "record", "experience", "gunkustom", "powalert", "whitepaper", "paper", "scrimba", "autopsy", "shipped", "built", "case"],
    text: "Track record: the TACO Loop White Paper v1.0 (July 2026) and Mathematical Model v0.1; Ag3nt24 v1.0.0 (a deterministic integrity kernel with signed decision certificates); and Asymptote shipped (v0.1, MIT). Production platform work includes GunKustom.com — a full rebuild where Lawrence joined as senior backend engineer and became CTO within six months — and PowAlert.com, a real-time snowfall alert platform. Recognition: Scrimba 'Portfolio of the Week', May 2026. The Legacy page has the production case studies.",
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
  products: "Client work first — agents, agentic systems, legacy modernization, and our own harness and security-agent software. R&D: TACO Loop and Ag3nt24. Asymptote is a standalone tool.",
};
