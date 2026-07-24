# 2. Banshee — a grounded site agent with offline fallback

Date: 2026-07-24
Status: Accepted

## Context

classHuman.org needs an on-site assistant ("Banshee") that helps visitors
understand the company and its products. As the first agent classHuman puts on
its *own* front door, it must model the discipline the company sells (LAHA /
TACO): humans keep final authority, the system stays trustworthy even when the
model is absent, and it never bluffs past its evidence.

Constraints from the build brief: the OpenAI key must never enter the browser
bundle (Vite bundles are public), AI calls go through a serverless function, no
family health details are ever disclosed, and no new heavy dependencies.

## Decision

- **Frontier model, server-side only.** A Netlify Function
  (`netlify/functions/banshee.mjs`) holds `OPENAI_API_KEY` and calls the OpenAI
  Chat Completions API with the built-in `fetch` (no SDK dependency). Model is
  configurable via `BANSHEE_MODEL` (default `gpt-4o-mini`).
- **Grounded, not open-ended.** A curated knowledge pack (`src/banshee/knowledge.js`)
  built from public site content is the only ground truth. A hand-rolled keyword
  retriever (`src/banshee/offline.js`, BM25-adjacent, no vector DB) selects the
  context slices injected into the system prompt. Guardrails are enforced both in
  the prompt and by grounding.
- **Graceful degradation as an intentional mode.** With no key, on timeout, or on
  any upstream error, the function returns a deterministic answer from the same
  offline engine (labeled honestly as "offline mode"). The browser widget adds a
  second safety net: if the function itself is unreachable, it answers client-side
  from the same knowledge pack. Banshee never breaks in front of an audience.
- **Guide, not authority.** Banshee takes no actions and makes no commitments;
  contact/quote/timeline intents hand off to the human email.

## Alternatives considered

- **Vector DB / embeddings retrieval** — rejected for v1: adds a heavy dependency
  and infra for a small, static corpus. Keyword scoring is sufficient and matches
  the m3n0ko0g agent-console precedent.
- **Client-side model call** — rejected: would leak the key in the public bundle.
- **No fallback (live-only)** — rejected: violates the "never breaks" requirement
  and the LAHA principle that the system must stay useful without the model.

## Consequences

- The knowledge pack must be kept current as product copy changes (single source:
  `src/banshee/knowledge.js`, aligned with `src/lib/products.js`).
- The offline engine's honesty ("I don't have that from the site") is a feature,
  not a gap — it routes unknowns to a human instead of inventing.
- Live-mode quality depends on the OpenAI key being set in Netlify env; without
  it, the site still ships a working (offline) Banshee.

---
*LAHA — Love All Humans Always.*
