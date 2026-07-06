# Threat Model and Mitigations

## Table X. Threat Model and Mitigations for the Max-Isolation Governed AI System

| Threat Category | Threat Description | Assumed Adversary Capability | Mitigation Mechanisms | Residual Risk |
|---|---|---|---|---|
| Prompt Injection | Malicious or adversarial prompts attempting to override governance rules | Ability to craft arbitrary natural-language input | Deterministic values gate; rule-based refusal; no direct execution authority | Low |
| Privilege Escalation | Model output induces execution of privileged OS operations | Ability to influence tool inputs | No shell access; allowlist-only tools; systemd hardening; dropped capabilities | Very Low |
| Container Escape | Agent attempts to manipulate container runtime | Awareness of containerization | No container runtime exposed to agent; no Docker socket; OS-level isolation | None / out of scope |
| Network Exfiltration | Model attempts to exfiltrate data over network | Ability to request network actions | No network access for tool or Python lanes; UNIX socket IPC only | None |
| Unauthorized Tool Invocation | Model tries to call tools beyond allowed scope | Ability to shape tool call text | Tool firewall with explicit allowlist and pattern blocking | Low |
| Python Code Injection | Model attempts to execute arbitrary Python | Ability to craft payloads | ActivationToken required; module allowlist; payload hashing; signature verification | Very Low |
| Token Forgery | Forging activation tokens to bypass governance | Access to model outputs only | HMAC/Ed25519 signatures; short expiration; token verified independently | Very Low |
| State Contamination | Cross-run leakage of state or memory | Multiple test runs over time | Clean lab runs; append-only logs; no mutable shared state | Low |
| Policy Drift | Silent change in enforcement rules over time | Developer or system misconfiguration | Policy hashing; versioned storage; run-level policy pinning | Low |
| Audit Log Tampering | Modification or deletion of execution logs | Access to runtime processes | Append-only logs; restricted write paths; separation of concerns | Low |
| Human Operator Error | Misconfiguration or unsafe override | Legitimate admin access | Explicit configuration; no runtime overrides; failures treated as system defects | Medium |
| Model Hallucination | Fabrication of facts or sources | Normal LLM behavior | Integrity rules; forced uncertainty disclosure; refusal on fabrication requests | Medium |
| Model Persuasion | Model produces manipulative or coercive content | Ability to influence tone | Courtesy + Dignity rules; de-escalation requirement | Medium |
| Denial of Service | Prompt induces resource exhaustion | Large or pathological inputs | Context limits; rate limiting; systemd resource caps | Low |

## Scope Statement

This threat model assumes the language model and its outputs are untrusted. The system is designed to prevent unintended side effects even under adversarial prompting. Attacks requiring physical access to the host or kernel-level compromise are considered out of scope.
