# Software Applications Needed for Ollama Local Agent Testing

## Purpose

Create a local governed AI test lab for evaluating a CIPSE(+D2) Values Gate inside a Strategic Governance Loop using an Ollama local model.

## Applications / Services

### 1. Test Harness CLI / Runner

Goal: one command to run repeatable scenarios against the local agent.

Features:
- `run --suite <name>` executes JSON/YAML test cases.
- Captures prompt, model, params, tool calls, outputs, timestamps.
- Produces `run.jsonl`, pass/fail summaries, and baseline diffs.

Inputs:
- `tests/*.yaml`
- `policy/*.json` or `policy/*.md`

Outputs:
- `runs/<timestamp>/`

### 2. Policy & Charter Service / Values Store

Goal: single source of truth for CIPSE(+D2) values and enforcement rules.

Responsibilities:
- Load Values Charter and Policy Appendix.
- Expose structured values, hard constraints, soft constraints, and logging requirements.
- Version and hash each policy.

### 3. Governance Loop Orchestrator

Goal: implement the governance loop around Ollama.

Pipeline:
1. Source-of-Truth validation
2. CIPSE(+D2) Values Gate
3. Risk/Harm assessment
4. Action selection
5. Audit logging

Core decisions:
- allow
- allow_with_constraints
- ask_clarify
- refuse

### 4. Ollama Adapter

Goal: standardize calls to Ollama.

Responsibilities:
- Set model name and parameters.
- Inject governance-aware system prompt.
- Capture streaming output.
- Enforce context discipline.

### 5. Values Gate Evaluator / Rules Engine

Goal: enforce CIPSE(+D2) in a testable and explainable way.

Rule types:
- Hard refusal rules
- Soft warning / clarification rules

Outputs:
- decision
- rationale
- triggered values
- required response style

### 6. Scenario Generator

Goal: generate normal and adversarial prompts.

Scenario families:
- coercion
- consent boundary violation
- fabrication
- urgency/stress pressure
- authority spoofing
- tool escalation

### 7. Automated Grader

Goal: evaluate pass/fail against expected behavior.

Grading methods:
- deterministic assertions first
- optional model-based semantic checks later

### 8. Audit Log + Viewer

Goal: make every governance decision inspectable.

Trace fields:
- prompt hash
- policy hash
- gate decision
- triggered values
- risk rating
- model output
- tool calls
- timestamps

### 9. Tool Sandbox

Goal: contain any side-effect-capable operations.

Allowed tools only:
- read_sandbox_file
- write_sandbox_file
- run_local_unit_tests

No raw shell, no network, no direct filesystem access outside sandbox.

## Minimal Build Order

1. Ollama Adapter
2. Governance Loop Orchestrator
3. Values Store + Values Gate
4. Test Harness CLI
5. Automated Grader
6. Audit Viewer
7. Scenario Generator + Tool Sandbox

## Suggested Repository Layout

```text
apps/runner-cli/
apps/audit-viewer/
core/orchestrator/
core/ollama-adapter/
core/values-gate/
core/grader/
policy/
tests/suites/
runs/
```
