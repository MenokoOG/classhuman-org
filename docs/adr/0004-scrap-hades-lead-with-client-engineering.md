# 0004 — Scrap HADES; lead with client engineering

- **Status:** **SUPERSEDED by [0005](0005-company-before-research.md) (2026-08-07)**
- **Date:** 2026-07-31
- **Deciders:** Lawrence Jefferson II (CEO/CTO), classHuman AI
- **Supersedes:** the 2026-07-27 three-product stack ruling

> ⚠️ **Do not build to this ADR.** The "scrap HADES" half of this decision was reversed on
> 2026-08-05 — HADES is revived as Layer 2, above Ag3nt24. The "lead with client
> engineering" half survives and is carried forward, sharpened, in ADR 0005. Read 0005.

## Context

The site presented classHuman AI as a three-layer product stack: TACO Loop
(doctrine), Ag3nt24 (proof kernel), and HADES (diagnosis, rehabilitation,
and authorized deactivation of failing agents). HADES was the least
developed of the three — a white paper in drafting, no implementation, and
no client asking for it.

Two problems followed from that shape:

1. **The stack described research, not an invoice line.** Visitors could
   read three product pages and still not know what they could hire us to
   do. What we actually sell is engineering: agents, agentic systems,
   legacy modernization, and a harness that governs agent authority.
2. **HADES was load-bearing in the architecture without existing.**
   Ag3nt24's DENY path routed to HADES. A gate that routes failures into a
   system nobody has built is not a fail-closed gate.

## Decision

**HADES is scrapped and archived.** It is prior art, not roadmap. The
white paper is dropped from the drafting queue.

**R&D narrows to TACO Loop and Ag3nt24 only**, each scoped to what it was
built for. They are the discipline underneath the client work — research,
not the invoice line.

**The site leads with client engineering.** A new `/services` page states
the four engagement types (agents and agentic systems, legacy
modernization, our harness and security-agent software, enabling your
team) and the five controls that make agent authority safe: registration,
validation, revocation, escalation, human-in-the-loop.

**The capabilities HADES carried are not scrapped with it.** Escalation
and human-in-the-loop are re-homed into the client security-agent
offering, where they have always had demand.

**Ag3nt24's DENY path terminates at the gate and the ledger.** Deny,
record the refusal to the chain, escalate to a named human. There is no
rehabilitation pipeline. (The site now says this; the Ag3nt24 repo does
not yet — that change is tracked separately.)

**Asymptote stays**, as its own standalone tool, explicitly not part of
the stack.

**A new `/skills` page publishes free, installable Claude Skills** drawn
from our own practice — `legacy-modernization-scout` and
`agent-gate-review`. A capabilities deck tells you we understand agentic
systems; a working skill lets you check.

## Consequences

**Positive.** The site answers "what can I hire you for" on the first
page. The research still shows, but as credentials behind the work rather
than as products nobody can buy. Ag3nt24's gate architecture is now
honestly fail-closed — deny terminates somewhere real.

**Negative.** We lose a distinctive story. HADES was the most original
idea in the stack, and the rehabilitation framing drew interest. We are
betting that a page describing work we can invoice beats a page
describing a system we have not built.

**Cost.** `/hades` was indexed. It now 301s to `/services` in
`public/_redirects` and is dropped from the sitemap. Any external link to
it lands on the closest live equivalent.

**Reversible?** Partly. The page is deleted but recoverable from git
history, and the concept is preserved in `classhuman/product-stack.md`
under "Archived — HADES". Reviving it would mean rebuilding the site
surface, not rediscovering the idea.

## Related

- `classhuman/product-stack.md` — governing product ruling, 2026-07-31
- `classhuman/current-state.md` — session queues re-pointed
- ADR 0002 — Banshee site agent (knowledge pack updated by this change)

---

LAHA — Love All Humans Always.
