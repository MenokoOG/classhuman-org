# 0005 — Company before research; lead with the tools we use

- **Status:** Accepted
- **Date:** 2026-08-07
- **Deciders:** Lawrence Jefferson II (CEO/CTO), classHuman AI
- **Supersedes:** [0004](0004-scrap-hades-lead-with-client-engineering.md)
- **Source of truth:** `CLASSHUMAN.md` v1.6 (prompt-library root; mirrored in this repo)

## Context

ADR 0004 scrapped HADES and moved the commercial headline to client engineering. Half of
that held and half of it did not.

HADES was revived on 2026-08-05. It is Layer 2, **above** Ag3nt24 — the platform layer the
first two were built to make possible. Pre-scrap docs describe it as a rehabilitation
destination that a failed gate routes *down* into. That topology is wrong and predates the
revival. A naive "un-delete the HADES references" pass would reintroduce it.

Separately, a harder call landed on 2026-08-07. The research is not proven. TACO Loop,
Ag3nt24 and HADES have papers and definitions, but nothing shipped and nothing validated by
a client. Presenting them as the company's substance — and presenting strangler fig as
*the* modernization method — is rigid, and it does not survive contact with a buyer or with
a real legacy system.

## Decision

**1. The company comes before the research.**
Phase 1 is free agent skills then paid bundles, a control plane that documents every agent
and project, and client services as the capital bridge. Phase 2 restarts TACO Loop, Ag3nt24
and HADES. The research is **paused, not scrapped** — papers stay published and citable.

**2. Proven tools first; our research is secondary.**
We build with established frameworks, SDKs, orchestrators, eval tooling and observability
stacks. Our own stack is unproven and does **not** go into client work, into the control
plane, or into any product build until it earns it on merit. We are judged on outcomes, not
on originality of stack.

**3. No single prescribed pattern.**
Strangler fig is one option among many — alongside branch by abstraction, parallel run,
event interception, anti-corruption layer, encapsulation/facade, and a straight rewrite when
that is honestly the cheapest path. The pattern is chosen per engagement, from evidence.

**4. HADES is restored to the catalog, at the correct layer.**
`src/lib/products.js` carried a comment reading "HADES was scrapped and archived
2026-07-31 — do not re-add it here." That comment is void. HADES is back, at Layer 2, with
scope still an open decision and nothing being built.

**5. Site structure follows.**
The three research projects move **off the products page** onto a new `/research` page,
marked paused. A new `/tools` page becomes the credibility page. The front door is client
services plus tools. An education section (BS in AI, American Military University) is added
to `/about` — company site only. No photograph of Tonya; the story stays.

## Consequences

**Good.** The public story matches what we can actually defend. A buyer sees proven tooling
and a named working set rather than three unshipped layers. The research stops being a
promise we have to keep and becomes work we can resume honestly.

**Cost.** We give up the "three-layer stack" narrative, which was distinctive. Two new pages
have to be built, and `docs/CONTENT.md`, `docs/PRD-website.md`, `src/lib/products.js` and
`src/banshee/knowledge.js` all had to be rewritten to stop contradicting each other.

**Watch for.** Banshee answers from `src/banshee/knowledge.js`, not from the rendered pages.
Any future positioning change has to update that file too, or the site agent will keep
telling visitors the old story long after the copy changes.

**Still open.** HADES v0 scope (deferred to Phase 2). Which 2–3 skill bundles ship first.
The actual tool list for `/tools` — that content has to come from Lawrence.

---
*LAHA — Love All Humans Always.*
