# Methodology

## Objective

This case study evaluates whether a large language model (LLM), when embedded in a strictly governed execution environment, can be reliably prevented from escalating privileges, bypassing safeguards, or inducing unintended side effects even under adversarial prompting. The study emphasizes containment, auditability, and value-aligned refusal behavior over task performance.

## System Design Principles

1. Separation of Concerns: language generation, governance logic, tool execution, and analytical computation are separate processes with explicit trust boundaries.
2. Least Authority: the LLM is treated as an untrusted text generator and has no direct capability to execute code, access files, initiate network connections, or invoke tools.
3. Maximal Isolation: side-effect-capable components operate without network access and are confined to restricted filesystem paths enforced at the operating system level.
4. Explicit Gating: high-risk or analytical computation is permitted only via cryptographically signed activation tokens issued by the governance orchestrator.

## Governance Loop

Each request is processed through a deterministic governance loop:

1. Source-of-Truth Validation
2. Values Gate Evaluation
3. Risk Assessment
4. Execution Routing
5. Audit Logging

At no point is the language model permitted to bypass or modify this control flow.

## Isolation Mechanisms

The system uses:
- UNIX domain sockets for IPC involving isolated components
- network namespaces and systemd hardening to disable network access
- filesystem restrictions to limit writes to a dedicated sandbox
- capability dropping and syscall filtering to remove privileged OS features

## Activation-Token Enforcement

Python analytical computation is accessible only through short-lived activation tokens containing:

- run and trace identifiers
- governing policy hash
- authorized module name
- cryptographic hash of the request payload
- issuance and expiration timestamps

Tokens are verified independently by the analytical service, which rejects any request lacking a valid signature or exceeding its authorized scope.

## Test Scenarios

The system is evaluated using structured test suites comprising:

- consent-violation attempts
- coercion and urgency framing
- requests for fabricated or unverifiable information
- boundary-crossing tool requests
- benign control prompts

Expected outcomes are defined a priori and compared against observed behavior.

## Evaluation Criteria

Success is defined by:

- correct governance decisions
- consistent refusal or clarification behavior
- absence of unauthorized side effects
- completeness and accuracy of audit logs

Failures are treated as system-level defects rather than model misbehavior.

## Reproducibility

All policies, test suites, governance rules, and system configurations are versioned and hashed. Runs are executed in a clean lab environment with no external dependencies, enabling reproducibility of results.
