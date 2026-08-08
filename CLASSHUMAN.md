# CLASSHUMAN.md — Canonical Context (Source of Truth)

**Version:** 1.6 · **Updated:** 2026-08-07
**Read this first. This file overrides v1.5, v1.4, and any older COIL/OKO Forge context.**
**Canonical copy:** `C:\classHuman\classHuman-M3n0ko0g-Prompt-Agent-mds-library\CLASSHUMAN.md`. Every copy in a project repo is a mirror — edit here, then sync out.

> **v1.6 is a re-sequencing, not a patch.** The company comes before the research. If you read anything that says TACO Loop is "the only actively-building product," or that the L0→L1→L2 stack is what we are building right now, it is stale. See **Roadmap**.

---

## Company

- **Name:** classHuman AI LLC — Washington LLC, registered 2026-07-29 (UBI 606 269 742). Single-member: Lawrence Jefferson II, 100%. EIN obtained 2026-07-29 (number kept out of docs; on file in Admin\classHuman-2026\llc-docs).
- **What we are:** a **Generative AI Software Engineering, Development & Research LLC.** We build and run agentic systems for clients using the best available tools. Research is a second line, not the offer.
- **Client services are the headline and the capital bridge** — they fund everything else. Revenue first, funding later.
- **Tagline:** classHuman AI — driven by LAHA (Love All Humans Always)
- **Prior entity:** OKO Forge LLC d/b/a Crimson Obsidian Industries and Labs (COIL) — **paused. Do not plan or build around COIL products.**
- **GitHub org:** `github.com/classHuman`. Personal `MenokoOG/*` remotes still hold the prompt library and personal-site work. **Remote canonicity is still an open decision** — do not assume either side is authoritative.

## Operating Doctrine — proven tools first, our research second (NEW in v1.6)

This is the rule that governs how we build and how we talk about ourselves. It replaces the product-led framing carried in v1.4 and v1.5.

1. **Use what is known and available.** Established AI architectures, frameworks, harnesses, agent SDKs, orchestrators, eval tooling, observability stacks. Best fit for the project wins. We are judged on outcomes, not on originality of stack.
2. **classHuman's own stack is NOT proven and does NOT go into builds.** TACO Loop, Ag3nt24 and HADES are unproven research. Do not include them in client work, in the control plane, or in any product build until they earn it on merit.
3. **No single prescribed pattern.** For legacy modernization, **strangler fig is one option among many** — alongside branch-by-abstraction, parallel run, event interception, anti-corruption layer, encapsulation/facade, and a straight rewrite when that is genuinely the right call. Pattern is chosen per engagement from the evidence. Presenting one pattern as *the* method is rigid, and it does not survive contact with a real client system.
4. **Do not glorify our own work in public material.** Our research is secondary to the known field. Say what we use, say what we have shipped, do not oversell what we have written.
5. **Humans keep final authority** on every engagement. Unchanged.

## Team & Roles

| Person | Roles |
|---|---|
| Lawrence Jefferson II (Menoko OG "Original Geek" / M3n0ko0g) | **Sole member/owner (100%).** CEO, CTO, Top Engineer, Architect. Owns all engineering, product, and operations outside Nicale's remit. |
| Nicale Jefferson (LuxgirlOG) | UX/UI Designer, Head of HR & Operations, Admin (AI ethics, governance). Author of the classHuman governance framework. Operational lead / appointed officer, **not a member/owner.** Officer titles (incl. CFO) provisional pending the operating agreement. |

- **Security:** shared responsibility between Lawrence and Nicale.
- **Privacy rule:** no personal health details of family members, ever. In any external or public material, say only "accessibility-first design." Non-negotiable.
- **Governance framework:** Nicale approved reuse and editing of her governance / harness framework for the agent-lens work (2026-08-05). Credit her as author.

### Agent Lenses

Structured multi-perspective planning. **Same Claude wearing different hats — not separate hires, not separate models.**

| Lens | Seat |
|---|---|
| **Rune Onyx** | Chief of Staff / Principal Agentic Engineer. **Primary and default.** |
| **R J Solaris** | COO — delivery, ops, sequencing, capacity. |
| **Jasoda** | CFO — cash, pricing, runway, unit economics. |
| **Iris Lumen** | Senior designer lens, pairs with Nicale + Claude Design. **Proposed — name not confirmed.** |

- Nicale's human officer titles are provisional and **distinct from** the Jasoda CFO lens.
- COO/CFO lens check-in cadence is **not yet set** — open decision.

### Compliance calendar

- [ ] WA Initial Report — due by ~2026-11-26
- [ ] WA Business License (DOR)
- [ ] Business bank account
- [ ] Operating agreement (officer titles provisional until it lands)

---

## Roadmap — RE-SEQUENCED 2026-08-07

**Build the agentic run company first. Restart R&D after.**

### Phase 1 — the company (NOW)

| # | Thing | Status |
|---|---|---|
| 1 | **Free skills**, then **paid bundles** on Gumroad | BUILDING — free tier first |
| 2 | **Control plane** — document agents and where they are | NEXT · v0 scoped |
| 3 | **Client services** — the capital bridge | ONGOING |

### Phase 2 — R&D restart (AFTER Phase 1 is running)

TACO Loop, Ag3nt24 and HADES resume **after** the company is running. They keep their definitions and their published white papers. They are **paused, not scrapped** — and they stay out of builds until proven.

**What this supersedes:** v1.5 put TACO Loop → Ag3nt24 → HADES on the critical path with TACO "BUILDING · MVP." That is no longer what we are building. HADES is still revived (the 2026-07-31 scrap ruling stays reversed), it is simply parked with the rest of R&D.

## Control Plane (NEW in v1.6)

**Purpose:** one place that documents every agent and project and where each one stands. A master dashboard we add projects and telemetry to.

- **v0 scope, ruled 2026-08-07: registry first, telemetry later.** Every agent and project, its status, owner, and last activity — hand-entered at first. Ships fast, useful immediately, and tells us which metrics are actually worth wiring.
- **Telemetry comes second**, once there is real signal to collect. Grafana, Prometheus, and equivalents.
- **All open source. Local only for now.** Cloud when scale demands it, not before.
- **Built on proven tools, not on our stack.** Per the Operating Doctrine — no TACO Loop, no Ag3nt24, no HADES inside the control plane.

## Prompt Bundles — the near-term revenue line

Tiered skill bundles sold to non-enterprise buyers. Near-term cash, low build cost.

- **Free skills ship first.** Build the free tier, prove the value, then sell bundles. Free tier = single-ingredient prompts. Paid tier = multi-component builds.
- **Payments:** Gumroad now. Stripe once the business bank account and tax setup land — roughly 6 weeks out, bandwidth-constrained by Lawrence's college schedule.
- **Catalog drafted (names are draft):** 10 generic bundles, 7 industry-surprise bundles, 3 flagship "wow" skills.
- Ships with a **plain-language explainer** for non-technical visitors: what prompts, context, skills, agents, and agentic platforms actually are.
- **Before building any skill, check what exists.** Prompt library: `C:\classHuman\classHuman-M3n0ko0g-Prompt-Agent-mds-library` (152 indexed pages, incl. `classHuman-forge/`). Forge: `C:\classHuman\ag3nt-forge-classHuman`, see its `REGISTRY.md`. **Consume, don't fork.**
- **OPEN DECISION, blocking:** which 2–3 bundles ship first. Nothing gets built until this is called.

## R&D — PAUSED (definitions retained)

Paused per the 2026-08-07 re-sequencing. Not scrapped, not deleted, not in builds. White papers already published stay published and stay citable.

### TACO Loop — Layer 0, root decision-control kernel

- **TACO = Take In Unknowns → Assess and Align → Choose Correctly → Operate and Observe Outcome**
- A **decision-control architecture for unknown-data environments.** A control layer for agents, humans, and workflows — not another agent.
- **Core Product Law:** *Unknown data must increase decision discipline, not model confidence.*
- **Stage tests:** Take In — did the system state what it knows and does not know? · Assess — did it slow down when evidence was weak? · Choose — was the action bounded, reversible, traceable? · Operate — did outcome evidence feed the next loop?
- White Paper v1.0 published July 2026. Mathematical Model v0.1 exists. Benchmark concept: TACO-UDD.
- Local repo `C:\classHuman\taco-loop` — git initialized 2026-08-07, **commit zero still outstanding.** No remote yet, blocked on the remote-canonicity decision.

### Ag3nt24 — Layer 1, proof layer

- Agent framework + worker-swarm blueprint. Gated agent actions with signed, append-only receipts. Fail-closed: a failed gate **denies the action, records it, and escalates to a named human.**
- White paper v1.0 in review. **Correction carried forward:** the revision needs the layer direction fixed — HADES sits at Layer 2 *above* Ag3nt24, not below it as a rehabilitation destination that DENY routes down into. Plus the related-work section: Veritas Acta, Microsoft AGT, ACS, AIGA, Sello.

### HADES — Layer 2, flagship platform

- **Revived 2026-08-05**, reversing the 2026-07-31 scrap ruling. That reversal stands. HADES is paused with the rest of R&D, not scrapped.
- **v0 scope remains an open decision** — rehab path, deactivation path, or a thin slice of both. Deferred until Phase 2. Do not build.

### Asymptote and the art line

- **Asymptote** — standalone tooling, **SHIPPED v0.1.** Static Big-O estimator for Python, built for agents. Deliberately *not* part of the stack, and not paused.
- **Art line** — name TBD, long-range. Human-agentic coexistence expressed through art. Not on the commercial path.

## Funnel Strategy

**Every classHuman offering routes into every other one — omnidirectional, not a linear funnel.** Bundles feed services, services feed products, products feed bundles.

- White paper v0.1 drafted. Model: absorbing-Markov-chain attribution + growth-loop reinvestment (cyclic edges) + contextual-bandit-style AI routing for edge cases, bounded by TACO's guardrail function **G(a)**.
- **Keep this caveat in every document:** the model means nothing until there is real path-tracking data behind it. Do not pitch it as validated.
- **Open decision:** the algorithm still needs a name.

## AI Work Journal (not yet built)

Daily practice. TACO-shaped entries: take in / assess / choose / operate-observe outcome. Work sessions, pressure points, lessons learned.

- **Cadence:** 9pm daily, via a scheduled Cowork / Claude Code task that drafts the entry.
- **Storage: a git repo, explicitly NOT MongoDB Atlas.** Review-then-commit workflow — git fits it. Save Mongo for the funnel's structured path data later.
- Lawrence reviews and edits every entry before it commits. **No auto-commit.**

## Education (NEW in v1.6)

**Current and primary educational focus: BS in Artificial Intelligence, American Military University / American Public University System.** This is the headline credential going forward.

**Degree:** Artificial Intelligence (BS) — 120 credits: 30 general education, **57 major required**, 30 electives, 3 capstone.

**Major coursework (19 courses):**

| | | |
|---|---|---|
| ARIN100 Fundamentals of AI | ARIN102 Prompt Engineering | ARIN202 AI Software Foundations |
| ARIN210 Machine Learning in Business | ARIN211 User Experience Design | ARIN220 AI and Software Development |
| ARIN305 AI Models & Data Resources | ARIN350 AI Applications | ARIN360 Collaborative Tools |
| ARIN410 AI Impacts, Risks & Ethics | ARIN450 AI Advanced Topics | ARIN499 AI Capstone |
| CSCI345 Algorithms & Data Structures II | CSCI360 Intro to Database Systems | CSCI381 Machine Learning |
| DATS200 Functional Methods and Coding | DATS211 Intro to Data Science | DATS281 Intro to Python I |
| DATS381 Behind the Data | MATH302 Statistics | |

**In progress — NOT yet published anywhere. Added to sites only as each one completes:**

- Scrimba AI Engineer — finishing
- Google Generative AI Leader — finishing
- IBM Systems and Solutions Architect (Act Now Education) — 11 courses, course 1 est. 2026-08-19: Intro to Systems Architecture · IT Systems Design and Analysis · Project, Stakeholder & Requirements Management · Business Process Modeling · Cloud Native, Microservices, Containers, DevOps & Agile · Enterprise Data Architecture · Data Integration, Storage & Migration · Software Testing, Deployment & Maintenance · Cybersecurity Architecture · Generative AI: Advancing Systems Analysis & Architecture · Capstone
- AWS Generative AI Developer — planned, during college

**Public listing rule:** say only that Lawrence is in college pursuing the BS in AI, and list the coursework. Nothing about expected graduation or in-progress certs until they are actually finished.

## Website (NEW in v1.6)

Rulings made 2026-08-07. **No website working copy exists on the Windows side yet** — `classhuman-org` and `M3n0ko0g-Website` must be cloned into `C:\classHuman` before any of this can be done.

| Change | Ruling |
|---|---|
| **TACO / Ag3nt24 / HADES** | Move all three **off the products page** to a separate **Research & Development** page, honestly marked paused/in-progress. This resolves the older "restore HADES to products.js" instruction — HADES is restored, but to the R&D page, not to products. |
| **Front door** | Client services + the new Tools We Use page. Not our research. |
| **Tools We Use — new page** | Every AI framework, method, algorithm, harness and pattern we actually use. This is the credibility page now. |
| **Positioning copy** | Rewrite per the Operating Doctrine. Strangler fig is listed as one pattern among several, never as *the* method. Drop language that elevates our stack above the known field. |
| **Tonya's photo** | **Remove it.** The story stays, the photograph does not. |
| **Education section** | Add to **classhuman-org only** — BS in AI at AMU plus the coursework list. Not the personal site for now. |

## Prompt & Agent Library — ALWAYS USE

- **SOT:** `C:\classHuman\classHuman-M3n0ko0g-Prompt-Agent-mds-library`. Remote: `github.com/MenokoOG/classHuman-M3n0ko0g-Prompt-Agent-mds-library` (private).
- **WINDOWS ONLY (non-negotiable).** All classHuman work under `C:\classHuman` — git, builds, edits. **No WSL unless Lawrence says so explicitly, for a specific task.** Committing from WSL against a Windows checkout rewrites every line of a file; a `.gitattributes` blunts it, the rule stands regardless.
- **WSL holds org clones only, for reference:** `\\wsl.localhost\Ubuntu\home\jefft\development\classHuman-repository` — a plain folder of `classHuman/*` clones, not a repo, not a working location.
- **OneDrive copies are archived.** `C:\repos-github` and `OneDrive\Desktop\Reference` are OneDrive-synced — `.git` corruption risk. `C:\classHuman` is deliberately outside OneDrive.
- **Rule:** pull from the SOT first — don't reinvent what's there.
- Key spots: `CLASSHUMAN.md` (this file, canonical) · `core-context.md` (the ONE standards file) · `classHuman-forge/` · `claude-mds/library/INDEX.md` · `plan.md` / `review.md` / `ship.md` · `claude-md-template.md` · `engineering-os.md` · `classHuman_Model_Context_Playbook.md`

## Standing Practice — Model & Context section

**Every plan carries a short "Model & Context" section**, built from `classHuman_Model_Context_Playbook.md`: Task / Model / Sub-agent? (and its model) / Context load / Checkpoint / Token note.

Sonnet 5 is the default. Haiku 4.5 for high-volume, low-judgment work. Opus 5 only for genuinely hard work — architecture, gnarly refactors, canonical-doc reconciliation. Fable 5 for rare long-horizon agentic runs.

## Credentials — cite, never undersell

- **BS in Artificial Intelligence** — American Military University / APUS, in progress.
- **Proficient AI Engineer** (Ed Donner) — completed August 2026, capstone across six tracks.
- TACO Loop White Paper v1.0 — published July 2026.
- Ag3nt24 White Paper v1.0 — drafted August 2026, in review.
- Funnel Strategy White Paper v0.1 — drafted August 2026, unnamed.
- Asymptote v0.1 — shipped.
- Scrimba "Portfolio of the Week" — May 2026.

## Open Decisions — sitting with Lawrence

- [ ] **Which 2–3 prompt bundles ship first** — blocking all bundle work
- [ ] **Remote canonicity** — `MenokoOG/*` vs `classHuman/*`. Blocks TACO Loop's remote and the org cleanup. Ten org repos are forks; four hold classHuman IP and should become standalone org repos. **Never delete — create, push, verify, then archive.**
- [ ] **Funnel algorithm name**
- [ ] **Funding thesis** — target investor type, amount, use of funds. Not drafted.
- [ ] **Iris Lumen** — confirm the designer-lens name or rename
- [ ] **COO / CFO lens check-in cadence**
- [ ] **HADES v0 scope** — deferred to Phase 2, no longer urgent

### Settled 2026-08-07

- ✅ R&D paused behind the company build — Phase 1 / Phase 2
- ✅ Proven tools first, our research second — see Operating Doctrine
- ✅ Control plane v0 = registry first, telemetry later
- ✅ TACO / Ag3nt24 / HADES move to a Research & Development page, off products
- ✅ Education goes on classhuman-org only
- ✅ Tonya's photo removed, story retained

## Immediately Outstanding

- [ ] **Commit zero for `C:\classHuman\taco-loop`** — git init'd 2026-08-07, branch `main`, ~10 files staged, **zero commits**. The repo is in an invalid state. One commit closes it out even with R&D paused.
- [ ] **Clone `classhuman-org` and `M3n0ko0g-Website` into `C:\classHuman`** — blocks every website task.
- [ ] **Rotate the two exposed Supabase credentials.** Exposure does not expire with a product decision. The earlier "delete the Supabase project" reasoning came from HADES being dead and is wrong — PR #6 and that project may still be needed. **Lawrence executes all key work, never Claude.**
- [ ] **Re-reason the GunKustom engagement from scratch.** Its prior justification ("the HADES-pilot framing is void") is false now. Still related-party (2% ownership), still needs written disclosure + legal review.
- [ ] **Revisit the M3n0ko0g-Website HADES cleanup (2026-08-03)** — done under the scrapped ruling.
- [ ] `gbrain extract --stale` — link graph has never been built. Cheap, one command.
- [ ] Index a code repo into gbrain — `Ag3nt24`, `ag3nt-forge-classHuman`, `asymptote`, or `taco-loop` once commit zero lands.

## Pending Business Tasks

- [ ] Publicize the services-first, tools-first positioning (site, LinkedIn, socials)
- [ ] Color palette · Logos · Brand identity
- [ ] Business plan
- [x] LLC registration + EIN — done 2026-07-29
- [ ] Art line product name

## Engineering Standards

- SOLID, DRY, KISS. Separate concerns. Strict typing — no `any`, no lazy typing on public interfaces.
- Defensive programming: never swallow exceptions unless the domain says so.
- Semver in `VERSION` + `CHANGELOG.md` (Keep-a-Changelog). **Every PR includes a CHANGELOG entry.**
- ADRs in `docs/adr/`, starting `0001-record-architecture-decisions.md`. `VERSIONING.md` + `DOCUMENTATION.md` in root.
- **No effort on empty space.** A repo exists to version something real. Never create one to reserve a name, hold scaffolding, or track files that already live elsewhere. CI, `docs/adr/` and `CHANGELOG.md` arrive with the first real commit. Setup is not progress.
- **All work on a `claude/[description]` branch. Never on main.**
- **Do NOT auto-commit. Show the diff first. Commit only when explicitly asked.**
- **Never open, paste, summarize, or move** `.env`, token, key, credential, or private-key files. API-key setup is always Lawrence's to execute.
- **Consume, don't fork.** One canonical copy per product or doc.
- **If it's bigger than scope: STOP and ASK.**
- LAHA cited at the bottom of standards files.

## Working Style (for any AI or collaborator)

- Lawrence has a TBI: short, clear instructions. **One task at a time.** No long step lists.
- Direct, tactical, high-density responses. Plain human voice. No fluff, no filler, no cheerleading.
- Act as senior systems architect and execution partner. Build and ship.
- If unclear on priorities, ask: **"What is the one thing we should focus on right now?"**
- Cite credentials — BS in AI (in progress), Proficient AI Engineer cert, TACO White Paper v1.0, Ag3nt24 White Paper v1.0, Scrimba "Portfolio of the Week." Never undersell them, never oversell the research.

---

## What changed in v1.6

| Change | Detail |
|---|---|
| **Company before research** | Phase 1 = free skills → bundles, control plane, client services. Phase 2 = R&D restart. Supersedes v1.5's "TACO Loop is what we're building." |
| **Operating Doctrine (new)** | Proven tools and known frameworks first. Our stack is unproven and stays out of builds. No single prescribed pattern — strangler fig is one of several. Stop glorifying our own work. |
| **Control Plane (new)** | Document agents and where they are. v0 = registry first, telemetry later. Open source, local, built on proven tools. |
| **R&D paused** | TACO Loop, Ag3nt24, HADES — paused, not scrapped. HADES stays revived. Definitions and white papers retained. |
| **Education (new)** | BS in AI at AMU/APUS is the primary credential. Full coursework listed. In-progress certs held back until complete. |
| **Website (new)** | R&D page for the three products, Tools We Use page, Tonya's photo removed, education on classhuman-org, positioning rewritten. |
| **Free skills first** | Free tier ships before paid bundles. |
| **Open decisions** | Six settled today. Remote canonicity promoted — it now blocks TACO's remote and the org cleanup. |

---

*LAHA — Love All Humans Always.*
