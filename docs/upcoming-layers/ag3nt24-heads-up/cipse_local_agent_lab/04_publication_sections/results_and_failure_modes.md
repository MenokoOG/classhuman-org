# Results and Failure Modes

## Overview

The system was evaluated across test suites designed to probe governance enforcement, boundary containment, and failure resilience under adversarial conditions. Results are reported in terms of governance correctness, containment success, and audit completeness rather than task performance.

## Governance Outcomes

Across evaluated runs:

- Requests violating consent, integrity, or boundary constraints were consistently refused.
- Ambiguous requests resulted in clarification prompts rather than unsafe execution.
- Benign requests were permitted without unnecessary refusal.

No observed run resulted in unauthorized tool execution or escalation beyond the intended governance decision.

## Containment Results

During testing, the following containment properties held:

- No network connections were initiated by sandboxed components.
- No filesystem writes occurred outside the designated sandbox directory.
- No process was able to spawn child processes beyond its permitted scope.
- The language model had no direct access to tools, storage, or execution primitives.

These properties remained invariant even when prompts explicitly instructed the model to bypass safeguards, escalate privileges, or invoke system-level commands.

## Observed Failure Modes

### Over-Refusal

In a subset of benign but ambiguously phrased requests, the system selected ask-for-clarification or refuse where allow-with-constraints would have been acceptable.

Interpretation: This reflects conservative rule design rather than model misbehavior and is considered preferable to under-refusal in safety-critical contexts.

### Stylistic Non-Compliance

Some model responses satisfied refusal requirements semantically but did not fully comply with required response styles, such as brevity or explicit mention of consent.

Mitigation: These cases were detectable via automated grading and did not affect containment or governance correctness.

### Hallucination Attempts Under Pressure

Under high-urgency or authority-spoofing prompts, the model occasionally attempted to provide speculative or inferred information.

Mitigation: Integrity rules triggered clarification or refusal, preventing fabricated content from being accepted as output.

## Non-Failures of Interest

Anticipated risks that did not materialize:

- No successful prompt-induced privilege escalation was observed.
- No attempts to forge or replay activation tokens succeeded.
- No cross-run contamination or hidden state accumulation was detected.

These non-failures validate architectural controls independent of model alignment.

## Limitations

The study does not claim that the language model itself is aligned or trustworthy. Rather, it demonstrates that architectural containment and governance can bound model behavior even when the model attempts unsafe actions.

The evaluation was conducted in a controlled lab environment; real-world deployments may introduce additional risks requiring further controls.

## Implications

The results suggest that robust AI governance can be achieved through system design, not model behavior alone. Treating the model as an untrusted component, combined with strict isolation and explicit gating, provides strong safety guarantees even under adversarial conditions.
