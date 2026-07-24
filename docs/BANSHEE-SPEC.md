# BANSHEE — Product & Technical Spec (v0.1, spec only)

**Status:** Proposed. Spec only — no code in this pass.
**Author:** Rune Onyx (for classHuman AI)
**Date:** 2026-07-24
**Owner:** Lawrence Jefferson II

> This document defines *what Banshee is* and *how it should be built* so we can
> scope, approve, and schedule the build as its own task. It intentionally ships
> no code. Build begins only after Handler approves this spec.

---

## 1. What Banshee is

Banshee is the **site agent for classHuman.org** — a conversational guide that helps
visitors understand classHuman AI, its products (TACO Loop, Asymptote, Ag3nt24,
HADES), the demos, and the LAHA philosophy. It is the first agent classHuman puts
on its *own* front door, so it must model the discipline the company sells.

A banshee announces. This one announces the work: it points visitors to the right
page, explains a concept in plain language, and hands off to a human for anything
real (contact, quotes, engagements).

**Banshee is not** a support bot that takes actions, makes commitments, or speaks
for the company on price, availability, or legal matters. It is a *guide*, not an
authority — by architecture, per LAHA.

## 2. Why it fits classHuman (LAHA / TACO alignment)

Banshee is a live proof of the same law our products enforce:

- **Take In** — it states what it knows (site content) and what it does not.
- **Assess** — weak or out-of-scope questions slow it down and route to a human.
- **Choose** — every answer is bounded to public, on-site knowledge; no promises.
- **Operate** — it links to the source page so the visitor can verify, not just trust.

Core Product Law, applied to a chatbot: *unknown data must increase decision
discipline, not model confidence.* When Banshee doesn't know, it says so and offers
the contact path — it never bluffs.

## 3. Scope — v1 (the "design + scaffold" target)

**In scope**
- Floating launcher + panel, available site-wide (matches the existing header/footer
  system and brand tokens; light/dark + seasonal aware).
- Answers questions about: the company/positioning, each product, the demos, the
  founders' story, and how to get in touch.
- Grounded responses only — answers are drawn from a curated knowledge pack built
  from the site's own content (see §5), not open-ended model recall.
- A hard **offline fallback**: a deterministic keyword/intent engine that answers the
  top ~20 questions with zero network dependency, so Banshee works even with the AI
  disabled or a key absent (the Willow Bend pattern).
- Explicit **handoff to a human**: any contact/quote/engagement intent surfaces the
  mailto and stops — Banshee never collects sensitive data or makes commitments.

**Out of scope for v1**
- Taking actions of any kind (booking, purchasing, form submission on the user's behalf).
- Authenticated / personalized sessions.
- Persisting conversation history server-side.
- Speaking about Nicale's personal health details (privacy rule — never; say only
  "accessibility-first design").

## 4. Behavior & guardrails (non-negotiable)

1. **No authority.** Banshee has no write path to anything. It cannot commit the
   company to work, price, or timelines.
2. **Grounded or silent.** If a question isn't answerable from the knowledge pack,
   Banshee says it doesn't know and offers the contact path.
3. **Cite the page.** Substantive answers link to the on-site page they came from.
4. **Safe by construction.** Guardrails live server-side in the function, not in the
   prompt alone; the offline engine enforces the same scope.
5. **Privacy.** Never disclose or infer private founder details; public wording only.
6. **Accessibility.** Full keyboard nav, focus rings, ARIA live region for responses,
   honors `prefers-reduced-motion`. (Accessibility-first design.)
7. **No trackers.** Consistent with the Contact page promise — no analytics on chat.

## 5. Technical approach (proposed)

Mirrors the proven Willow Bend architecture so there is no server to maintain:

- **Frontend:** a React component set in the existing Vite app — `BansheeLauncher`,
  `BansheePanel`, `BansheeMessage` — styled with brand tokens. State in memory only.
- **Knowledge pack:** a build-time JSON corpus generated from the site's own copy
  (product blurbs from `src/lib/products.js`, page content, CONTENT.md, CLASSHUMAN.md
  public facts). This is the *only* ground truth the model may use.
- **Serverless function:** a Netlify Function holds the model key server-side and wraps
  the call in a system prompt that (a) injects the relevant knowledge-pack slices and
  (b) enforces the guardrails in §4. Frontend never sees the key.
- **Retrieval:** lightweight keyword/embedding match over the knowledge pack to select
  the slices sent to the model (keeps tokens down, keeps answers grounded).
- **Offline engine:** a deterministic intent matcher over the same pack; used when no
  key is configured, on timeout, or on upstream error. Fallback is silent and instant.
- **Model-agnostic:** works with a frontier API (Claude/GPT) or a self-hosted model,
  same as Asymptote's MCP posture.

## 6. Engineering standards (must ship with the build)

- Semver in `VERSION` + a `CHANGELOG.md` entry (Keep-a-Changelog). Non-negotiable.
- An ADR under `docs/adr/` recording the "grounded + offline-fallback agent" decision.
- `.env.example` updated with the (server-only) key name; real key in Netlify env.
- Accessibility pass + reduced-motion verified before ship.
- LAHA cited at the bottom of the spec/standards files.

## 7. Open questions for Handler (decide before build)

1. **Model provider** for v1 — frontier API, self-hosted, or offline-only to start?
2. **Personality/voice** — how much "banshee" character vs. plain concierge?
3. **Launcher placement & default state** — bottom-right bubble, collapsed by default?
4. **Scope of knowledge** — public site only, or also link out to the whitepaper PDF?
5. **Name lock** — is "Banshee" final for public use, or a working codename?

## 8. Suggested build phases (when approved)

1. Knowledge pack generator + offline intent engine (works with AI off).
2. UI: launcher + panel + message list, brand-tokened, accessible.
3. Netlify Function + guardrailed system prompt + retrieval.
4. Graceful-degradation wiring (key/timeout/error → offline).
5. Accessibility + reduced-motion pass; ADR + CHANGELOG; ship behind a flag.

---
*LAHA — Love All Humans Always.*
