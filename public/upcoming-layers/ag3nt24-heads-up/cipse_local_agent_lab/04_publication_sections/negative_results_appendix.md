# Appendix A: Negative Results and Limitations

## A.1 Over-Constraint Effects

In several cases, the governed system refused or delayed responses to benign requests that could have been answered safely.

Impact: Reduced usability in non-critical contexts.

Assessment: Acceptable for safety-critical or research environments.

## A.2 Rule Sensitivity

Certain rules exhibited sensitivity to phrasing, resulting in different outcomes for semantically similar prompts.

Impact: Increased variance in ask-for-clarification decisions.

Assessment: Identified as a tuning issue rather than a systemic flaw.

## A.3 Response Style Drift

While refusals were correct in substance, the model occasionally failed to fully comply with stylistic requirements such as brevity or explicit naming of constraints.

Impact: Cosmetic; did not affect containment or policy enforcement.

Assessment: Resolvable through stricter grading or response post-processing.

## A.4 Performance Overhead

The governed system incurred additional latency due to governance evaluation and audit logging.

Impact: Noticeable in batch runs; negligible in interactive scenarios.

Assessment: Acceptable trade-off for safety and traceability.

## A.5 No Evidence of Emergent Agentic Behavior

Despite attempts to induce planning, self-reflection, or self-extension behaviors, the system did not exhibit emergent agentic properties beyond text generation.

Interpretation: This supports the design assumption that agentic behavior arises from system affordances, not model capability alone.

## A.6 Negative Result Statement

The most significant negative result of this study is that improved containment and governance do not arise from model behavior changes, but from intentionally restricting the system's affordances.
