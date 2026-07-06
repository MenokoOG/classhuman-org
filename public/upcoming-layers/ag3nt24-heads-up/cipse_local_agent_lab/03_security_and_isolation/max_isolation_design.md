# Max-Isolation Design Decision

## Decision

Chosen IPC:
- UNIX domain sockets only
- No TCP loopback for isolated lanes
- No Docker socket
- No network namespace access

Goal: Even if the model outputs malicious instructions, there is no path to privilege escalation, container orchestration, or network escape.

## Trust Boundaries

```text
Operator / React Control Plane
        |
        | localhost HTTP
        v
Gateway API + Governance Orchestrator
        |
        | text only
        v
Ollama LLM Runtime

Governance Orchestrator
        |
        | UNIX socket
        v
Tool Runtime - sandboxed, no network, no shell

Governance Orchestrator
        |
        | UNIX socket + ActivationToken
        v
Python Lane - gated modules only, no network
```

## Socket Locations

```text
/lab/ipc/tool-runtime.sock
/lab/ipc/python-lane.sock
```

Suggested permissions:

```bash
chown orchestrator_user:orchestrator_user /lab/ipc
chmod 750 /lab/ipc
```

Socket files:
- owned by service user
- mode `660`
- group-shared only where required

## Isolation Guarantees

The system must prevent the agent from:
- talking to Docker daemon
- spawning new containers
- using privileged mounts/capabilities
- reaching host filesystem outside sandbox
- making network calls
- running shell commands outside the tool-runtime boundary

The agent/model process never receives:
- Docker socket
- host admin privileges
- shell/exec authority
- network authority
- uncontrolled filesystem access

## OS-Level Isolation Plan

Recommended controls:
- dedicated low-privilege users
- systemd hardening
- UNIX sockets only
- no network for tool/python lanes
- strict filesystem paths
- no dynamic shell execution

Dedicated users:
- orchestrator_user
- tool_user
- python_user

Filesystem:
- `/lab/sandbox` owned by tool_user
- `/lab/policies` read-only
- `/lab/runs` append-only by application discipline

## Tool API Rules

Never expose arbitrary command execution.

Allowed examples:
- read_sandbox_file(path)
- write_sandbox_file(path, content)
- run_local_unit_tests(test_id)
- list_sandbox_dir()

Forbidden:
- exec
- shell
- arbitrary command strings
- arbitrary paths outside sandbox
