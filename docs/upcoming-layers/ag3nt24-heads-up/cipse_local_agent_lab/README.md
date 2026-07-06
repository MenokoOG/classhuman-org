# CIPSE(+D2) Governed Local AI Agent Lab

This ZIP packages the first-draft concept-to-software architecture and publication materials developed in the conversation.

## Contents

- `01_architecture/` — software application outline and stack decisions
- `02_policy_and_tests/` — policy JSON schema, example policy, starter test suite, Ollama system prompt
- `03_security_and_isolation/` — max-isolation design, UNIX socket IPC, systemd hardening, threat model
- `04_publication_sections/` — diagram, methodology, results/failure modes, security claims, abstract, positioning
- `05_control_plane_specs/` — TypeScript shared types, Express API contract, systemd templates, Vite notes

## Core Design Position

The model is treated as an untrusted text generator. Safety is enforced by architecture: deterministic governance, strict isolation, explicit gating, and auditability.
