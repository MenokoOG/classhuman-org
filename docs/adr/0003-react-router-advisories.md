# 3. React Router security advisories — assessed non-exploitable, upgrade deferred

Date: 2026-07-30
Status: Accepted

## Context

Dependabot reports open advisories on `react-router` / `react-router-dom`
(the app is pinned at `react-router-dom@6.30.4`). Four alerts, two underlying
CVEs, each flagged on both packages:

- **Open redirect via backslash in `<Link>` / `useNavigate`** (GHSA-wrjc-x8rr-h8h6).
- **Arbitrary constructor injection via `deserializeErrors()` in SSR hydration**
  (GHSA-337j-9hxr-rhxg). GitHub rates this High; npm rates it Moderate.

There is currently **no `react-router` version that clears all advisories**:

- `<= 7.17.x` carries the two advisories above.
- `>= 7.18.0` fixes them, but falls inside the range of a newer **High** advisory —
  **RSC-mode CSRF** (GHSA-qwww-vcr4-c8h2, affects 7.12.0 – 8.2.0) — which has **no
  published patched release**. Verified by upgrading to `react-router-dom@7.18.2`
  on a scratch branch: `npm audit` then reports 2 high, and its only offered "fix"
  is a downgrade to 7.11.0 (which reintroduces the original advisories).

## Decision

**Stay on `react-router-dom@6.30.4`. Do not upgrade to v7 at this time.** Dismiss
the Dependabot alerts as *not affected*, because none of the vulnerable code paths
exist in this application:

- classHuman.org is a **client-only SPA** — `BrowserRouter` in `main.jsx`, plain
  `Routes`/`Route`/`Outlet` in `App.jsx`. There is **no SSR, no RSC, and no
  data/framework-router mode**.
- All navigation targets are **hardcoded internal routes**; the app never navigates
  to a user-controlled or external-derived URL.

Therefore: the open-redirect requires a user-controlled redirect target (none),
the `deserializeErrors` issue is SSR-hydration-only (no SSR), and the RSC-CSRF
issue is RSC-mode-only (not used).

## Alternatives considered

- **Upgrade to `react-router-dom@7.18.2`** — rejected: fixes the two moderates but
  introduces the unpatched RSC-CSRF **High**. A strictly worse posture (a scarier,
  unfixable alert) for no real security gain on a client-only SPA.
- **Downgrade to 7.11.0 per `npm audit fix --force`** — rejected: a v7 major bump
  that still carries the original two advisories. All downside, no upside.
- **Ignore the alerts silently** — rejected: leaves an undocumented open item.
  Dismiss-with-reason records the assessment where the next maintainer will see it.

## Consequences

- The Dependabot alerts are dismissed as "Vulnerable code is not actually used,"
  citing this ADR. If the app ever adopts SSR, RSC, or user-controlled navigation,
  this assessment must be revisited immediately.
- A recurring check watches for a `react-router` release that clears all advisories
  at once (a version `>= 7.18.0` with GHSA-qwww-vcr4-c8h2 patched). When one ships,
  upgrade in a single clean step and supersede this ADR.
- Until then, the pinned `6.30.4` is the deliberate, documented state — not neglect.

---
*LAHA — Love All Humans Always.*
