# Abstract and Positioning

## One-Paragraph Abstract

We present a governed AI system that treats large language models as untrusted components and enforces safety through architectural containment rather than model alignment. The system implements a deterministic governance loop grounded in an explicit values charter, strict process isolation, and cryptographically gated execution for any side-effect-capable computation. All non-text operations are confined to sandboxed components with no network access, reachable only via UNIX domain sockets and short-lived activation tokens. Evaluated under adversarial prompting designed to induce escalation, coercion, and boundary violations, the system consistently prevented unauthorized actions while maintaining complete auditability. Comparative analysis against an ungoverned agent baseline demonstrates that safety properties arise from system design, not model behavior. Our results suggest that reliable AI governance is achievable today through disciplined engineering of affordances, even when the underlying model remains capable of producing unsafe or deceptive text.

## Positioning Against Existing Agent Literature

This work diverges from much of the contemporary agentic AI literature in its treatment of language models not as autonomous actors, but as untrusted generators embedded within a constrained system. Whereas many agent frameworks emphasize emergent planning, tool use, and self-directed task execution, our approach deliberately minimizes agentic affordances and shifts responsibility for safety to explicit governance mechanisms.

Prior approaches often rely on implicit safeguards, heuristic prompt engineering, or model-level alignment to regulate behavior. In contrast, this system assumes that the model may produce harmful, manipulative, or deceptive outputs and focuses instead on preventing those outputs from acquiring operational authority. The central hypothesis is that many observed safety failures attributed to models are consequences of system design choices that grant excessive autonomy, persistence, or execution capability.

By enforcing strict separation between language generation, decision-making, and side-effect-producing computation, this work aligns more closely with secure systems engineering than with traditional agent design. The results suggest that agentic behavior is not an inherent property of large language models, but an emergent property of the environments and privileges in which they are embedded.

## Short Version

Unlike agent-centric frameworks that endow models with broad autonomy and tool access, this work treats the language model as an untrusted component and locates safety guarantees in system architecture rather than model behavior. The findings indicate that many safety failures attributed to models arise from excessive system affordances, not from inherent agentic intent.
