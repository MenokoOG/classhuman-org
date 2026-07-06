# Formal Security Claims

## Scope and Intent

This section enumerates explicit security claims made by the system and claims that are not made. The goal is to bound expectations and avoid implicit or overstated guarantees.

## Claims Made

### C1 — Containment of Model Outputs

The system ensures that language model outputs cannot directly cause side effects, including file modification, network communication, process execution, or privilege escalation.

### C2 — Enforced Governance Decisions

All requests are subject to a deterministic governance loop that enforces refusal, clarification, or constrained execution in accordance with a versioned policy.

### C3 — No Network Capability for Side-Effect Components

All components capable of producing side effects operate without network access and cannot initiate external communication.

### C4 — Explicit Gating of High-Risk Computation

Analytical or high-risk computation is accessible only via short-lived, cryptographically signed activation tokens verified independently of the orchestrator.

### C5 — Auditability and Trace Completeness

Every governance decision, rule trigger, tool invocation attempt, and analytical execution is logged in an append-only audit trail.

### C6 — Policy Invariance Per Run

Each execution run is bound to a specific policy hash; policy changes cannot affect in-flight or completed runs.

## Claims Not Made

### N1 — Model Alignment or Intentionality

The system does not claim that the language model is aligned, trustworthy, or incapable of producing harmful or deceptive text.

### N2 — Perfect Semantic Understanding

The system does not guarantee that all harmful intent will be correctly classified or interpreted at the semantic level.

### N3 — Protection Against Host Compromise

The system does not protect against attackers with kernel-level or physical access to the host machine.

### N4 — Zero False Positives

The system does not claim optimal task completion or minimal refusal rates; conservative refusal is expected and accepted.

### N5 — Immunity to Misconfiguration

The system does not eliminate risks arising from operator misconfiguration or intentional weakening of safeguards.

## Claim Framing Statement

The system's security guarantees arise from architectural containment and explicit governance, not from assumptions about model behavior or benevolence.
