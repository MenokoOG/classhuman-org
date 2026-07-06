# Node/Python Stack Architecture

## Stack Decisions

- Node / Express: gateway API, orchestrator, runner, policy engine
- Python: triggered only when approved modules activate under Lux doctrine
- MongoDB local: traces, artifacts, model invocation records
- PostgreSQL local: policy versions, test suites, case results, relational integrity
- React control plane: Vite + React + TypeScript or JS
- State: Context API + hooks
- UI: Tailwind CSS + Material UI
- Visualization: Recharts, ECharts, Victory, or similar

## Services

### gateway-api

Node/Express API used by the React UI and CLI.

Exposes:
- runs
- suites
- policies
- traces
- model configs

### orchestrator

Node service implementing the Strategic Governance Loop.

Pipeline:
1. Source-of-Truth validation
2. Values Gate
3. Risk scoring
4. Model invocation
5. Tool invocation through allowlist
6. Audit logging and grading

Only the orchestrator calls Ollama and tools.

### tool-runtime

Node sandboxed execution service.

Properties:
- read/write only in `/lab/sandbox`
- no shell by default
- mocked tools for tests
- strict allowlist

### python-lane

Python service or worker activated only by authorized module calls.

Possible modules:
- semantic grader
- embedding / retrieval indexing
- local ML policy classifier
- static analysis

Activation conditions:
- module exists in registry
- Values Gate approves activation
- request carries valid ActivationToken

### grader

Node primary grader, Python optional.

Evaluation:
- deterministic checks first
- semantic Python grading only where justified

## Lux Doctrine: Module Activation Contract

A module can run only if:

1. It exists in the allowed module registry.
2. The Values Gate approves activation.
3. Activation is recorded in trace logs with hashed inputs/outputs.
4. Python receives a valid, short-lived ActivationToken.

## Storage Split

### MongoDB

Use for:
- traces
- token streams
- prompts/responses
- tool-call logs
- generated artifacts
- model invocation details

Collections:
- runs
- traces
- events
- artifacts
- model_invocations

### PostgreSQL

Use for:
- policies
- policy rules
- test suites
- test cases
- run summaries
- case results

Tables:
- policies
- policy_rules
- test_suites
- test_cases
- run_results
- case_results

## React Control Plane Pages

1. Dashboard
2. Run Console
3. Trace Viewer
4. Policy Editor
5. Suite Editor

## Build Order

1. policy-engine
2. orchestrator
3. runner-cli
4. web-control-plane
5. python-lane behind ActivationToken
