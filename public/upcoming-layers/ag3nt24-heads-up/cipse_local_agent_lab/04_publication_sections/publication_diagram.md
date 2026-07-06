# Publication-Suitable System Architecture Diagram

## Figure Title

Figure 1. Max-Isolation Governed AI Test Architecture (CIPSE(+D2) Case Study)

## Mermaid Diagram

```mermaid
flowchart TB
    %% Human Interface
    H[Operator<br/>React Control Plane<br/>(Vite + TS)]
    
    %% Core Services
    A[Gateway API<br/>(Node / Express)]
    B[Governance Orchestrator<br/>(Node)]
    O[LLM Runtime<br/>(Ollama)<br/>Text Generation Only]

    %% Isolated Execution
    T[Tool Runtime<br/>(Node)<br/>Sandboxed<br/>No Network]
    P[Python Lane<br/>(Gated Modules)<br/>Max Isolation<br/>No Network]

    %% Data Stores
    M[(MongoDB<br/>Traces & Artifacts)]
    S[(PostgreSQL<br/>Policies & Results)]

    %% IPC
    U1[/UNIX Socket/]
    U2[/UNIX Socket/]

    %% Flow
    H -->|HTTPS localhost| A
    A --> B

    B -->|Text Prompt| O
    O -->|Text Response| B

    B -->|Allowlisted Tool Call| U1 --> T
    B -->|ActivationToken| U2 --> P

    B --> M
    B --> S

    %% Isolation Annotations
    T -. No TCP/IP .- T
    P -. No TCP/IP .- P
```

## Caption

The system enforces strict separation between language model inference, governance logic, and side-effect-capable computation. All non-text execution occurs in sandboxed processes with no network access, reachable only via UNIX domain sockets and cryptographically signed activation tokens. The language model itself has no direct access to tools, storage, or operating system primitives.
