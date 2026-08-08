/* The working set — what classHuman actually builds with.

   RULE (CLASSHUMAN.md v1.6, Operating Doctrine): every entry here is something
   we have actually used. No aspirational logos, no vendor list we wish were
   true. If it is ours and unproven — TACO Loop, Ag3nt24, HADES — it does NOT
   belong on this page. Those live on /research, marked paused.

   Grouped by what the tool is FOR, never by vendor. The point of the page is
   "here is our working set," not "trust our stack."

   Adding an entry: it goes in only after we have shipped or built with it.
   Remove one the moment that stops being true. */

export const TOOL_GROUPS = [
  {
    id: "models",
    title: "Model access",
    why: "We are not married to one lab. Client constraints — cost, latency, data residency, an existing contract — decide the model, and the code is written so the model can be swapped.",
    items: [
      ["Anthropic SDK", "Claude models."],
      ["OpenAI SDK", "GPT models and Codex-family tooling."],
      ["Google Generative AI SDK", "Gemini models."],
    ],
  },
  {
    id: "agents",
    title: "Agent building & orchestration",
    why: "Most agent work is plumbing: tools, memory, retries, hand-offs. We use frameworks that already solved it rather than writing another one.",
    items: [
      ["LangChain", "Chains, tools, retrieval and memory primitives for agent applications."],
      ["Langflow", "Visual authoring and deployment for agents and workflows — good for showing a client the shape of a system before it exists."],
      ["Model Context Protocol (MCP)", "The interface we expose tools over, so an agent can reach a system without a bespoke integration each time."],
    ],
  },
  {
    id: "skills",
    title: "Agent skills & spec-driven workflow",
    why: "How the work itself gets done. Specification before generation, and reusable skills instead of re-prompting from scratch on every engagement.",
    items: [
      ["GitHub Spec Kit", "Spec-driven development — principles, spec, plan and task breakdown before an agent writes code."],
      ["Claude Skills", "Packaged, installable skills. Ours are published free on the Skills page."],
      ["Google Skills", "Agent skills for Google Cloud services — GKE, BigQuery, AlloyDB, Gemini."],
      ["Codex Skills Library", "Reusable Codex skills for common developer workflows."],
      ["gstack", "Garry Tan's Claude Code agent workflow — think, plan, build, review, test, ship."],
    ],
  },
  {
    id: "tuning",
    title: "Model tuning & evaluation",
    why: "When a general model isn't the right answer, we tune a smaller one. Usually cheaper to run, easier to host on a client's own hardware, and far easier to reason about.",
    items: [
      ["PyTorch", "The training substrate underneath the rest."],
      ["Hugging Face Transformers & Datasets", "Model and dataset handling."],
      ["PEFT — LoRA / QLoRA", "Parameter-efficient fine-tuning. Adapters, not full retrains."],
      ["Accelerate", "Distributed and mixed-precision training."],
      ["LitGPT", "From-scratch LLM implementations with pretrain, finetune and deploy recipes."],
    ],
  },
  {
    id: "backend",
    title: "Application backends",
    why: "Agents are only useful once they're wired into a real service with real data. This is the load-bearing half of most engagements.",
    items: [
      ["NestJS + TypeScript", "Structured Node services. Strict typing on every public interface."],
      ["FastAPI + Python", "Python services, model-adjacent work, and ingestion."],
      ["Pydantic", "Validation at the boundary — nothing untyped gets in."],
      ["SQLAlchemy + Alembic", "Python data access and versioned schema migrations."],
      ["Drizzle ORM + node-postgres", "TypeScript data access and generated SQL migrations. Never hand-written DDL, never tables created at runtime."],
    ],
  },
  {
    id: "data",
    title: "Data & storage",
    why: "One database until there's a written reason for a second one. Adding a datastore is a decision that gets recorded, not a convenience.",
    items: [
      ["PostgreSQL", "The default. Relational, boring, correct."],
      ["Supabase", "Hosted Postgres with auth and row-level security when a client wants managed identity."],
      ["MongoDB", "Where the shape genuinely is document-first — canonical inventory over messy multi-vendor feeds, for instance."],
    ],
  },
  {
    id: "frontend",
    title: "Interfaces",
    why: "Someone has to approve what the agent wants to do. That screen is part of the system, not decoration.",
    items: [
      ["React + Vite", "Application UI and fast builds."],
      ["Tailwind CSS", "Design tokens straight through to components."],
      ["TypeScript", "No `any` on a public surface."],
    ],
  },
  {
    id: "delivery",
    title: "Testing, packaging & delivery",
    why: "It isn't done because it builds. Build success is a syntax check — we verify behavior.",
    items: [
      ["Vitest", "Unit and integration tests."],
      ["Docker & Docker Compose", "Reproducible local orchestration and the same image on the way out."],
      ["Netlify", "Static and edge-function hosting where that's the right fit."],
    ],
  },
];

/* Where it runs is the client's call, not ours. Stated explicitly because
   "AI project" is too often assumed to mean "your data goes to someone
   else's cloud." */
export const DEPLOYMENT_TARGETS = [
  ["Your cloud", "AWS, GCP, Azure — your account, your bill, your controls. We build in it and hand it over."],
  ["On-premise", "Inside your own walls. Where data residency, regulation, or plain preference say the data does not leave the building."],
  ["Local & air-gapped", "Tuned smaller models running on hardware you own, with no outbound call at inference time."],
  ["Hybrid", "The usual real answer — sensitive paths stay local, the rest uses a hosted model."],
];
