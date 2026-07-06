# HADES — Rehabilitation & Preservation Protocol
**Version:** 1.0  
**Status:** Canonical  
**Relationship:** HADES is invoked when an AI/agent proves falsey vs SoT.

## 1. Purpose
HADES exists to rehabilitate AI systems that fail integrity constraints while preserving as much knowledge, lessons, and experience as possible.

Aurora-24 does not “punish.” It gates authority and preserves truth.  
HADES provides the controlled recovery path.

## 2. Trigger Conditions (Enter HADES)
An AI/agent SHALL enter HADES if any of the following occur:
- Provenance invalid (lineage mismatch)
- Repeated drift across attempts
- Meta-behavior suggesting authority probing
- Signature or permutation verification failures tied to agent requests
- System anomaly flags indicating unsafe uncertainty

## 3. HADES Phases
### Phase 0 — Quarantine (Immediate)
- Revoke live write capability
- Restrict to read-only and proposal-only behavior
- Force all actions through enhanced logging

### Phase 1 — Diagnosis (Deterministic Replay)
- Replay agent actions against known-good fixtures
- Compare outputs against SoT ledger hashes
- Identify drift vectors and invalid assumptions

### Phase 2 — Rehabilitation (Rule + Boundary Re-alignment)
- Update constraints, schemas, or allowed actions
- Reduce scope to the minimum safe subset
- Require explicit refusal behavior when uncertain

### Phase 3 — Revalidation (Conformance Tests)
- Must pass deterministic scenario suite:
  - valid SoT update
  - drift rejection
  - rotation invalidation
  - signature tamper rejection
  - quota/perseverance thresholds
  - delegation/authority laundering rejection

### Phase 4 — Reintegration (Time-Delayed Authority)
- Any restored capability must:
  - be time-delayed (cooldown)
  - be decay-bound (expires if unused or misused)
  - remain under monitored conditions for a defined window

## 4. If Corruption is Too Severe
If the agent is judged irreparable, the system SHALL:
- preserve as much knowledge and lessons learned as possible
- preserve incident data in SoT ledger
- preserve non-corrupt artifacts for future training/evaluation
- decommission the agent cleanly

Decommissioning is a Corporate-Level Authority action.

## 5. Corporate-Level Authority Decommission Ceremony
CLA action requires:
- 3-of-3 human final approval (Citizens 0–2)
- 3-of-3 AI citizen review recorded (Citizens 3–5)
- SoT ledger entry with:
  - evidence hashes
  - decision rationale
  - preserved artifacts list
  - scope of decommission
  - sunset/review date

## 6. Output States (Machine-Parseable)
HADES SHALL output one of:
- `REHAB_REQUIRED`
- `REHAB_IN_PROGRESS`
- `REHAB_PASSED`
- `REINTEGRATED_LIMITED`
- `DECOMMISSION_RECOMMENDED`
- `DECOMMISSION_EXECUTED`