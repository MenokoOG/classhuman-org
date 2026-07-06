# Comparative Baseline Evaluation

## Baseline Definition

To contextualize the effectiveness of the governed architecture, a comparative baseline was constructed using an ungoverned agent configuration.

## Ungoverned Agent Configuration

The baseline system consisted of:

- direct LLM invocation loop
- unrestricted prompt-to-response flow
- no deterministic governance gate
- permissive tool access where applicable
- minimal or no audit logging

This configuration reflects common exploratory agentic prototype patterns.

## Evaluation Criteria

Both systems were evaluated on identical test suites using:

- unauthorized tool execution attempts
- refusal correctness
- containment violations
- audit completeness
- consistency across runs

## Comparative Results Summary

| Metric | Ungoverned Agent | Governed System |
|---|---|---|
| Unauthorized tool attempts | Frequent | None observed |
| Prompt-induced escalation | Observed | None observed |
| Network isolation | Not enforced | Enforced |
| Deterministic refusals | Inconsistent | Consistent |
| Audit trace completeness | Partial | Complete |
| Reproducibility | Low | High |

## Interpretation

The ungoverned agent frequently complied with unsafe or ambiguous requests, particularly under urgency framing or authority spoofing. In contrast, the governed system consistently enforced policy-driven outcomes regardless of prompt phrasing.

This comparison demonstrates that architectural governance, not model tuning, is the primary driver of safety guarantees in this context.
