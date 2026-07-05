# DOCUMENTATION.md

How docs are organized for classHuman.org. Keep these current — future-you (and the next
agent) will thank you.

## Where things live
| Doc | Purpose | Update when |
|---|---|---|
| `CLAUDE.md` | Agent build brief | Workflow or guardrails change |
| `CLASSHUMAN.md` | Canonical company context (source of truth) | Company facts change |
| `README.md` | Human quickstart + repo map | Setup or structure changes |
| `PLAN.md` | Live implementation plan | Every work session |
| `docs/PRD-website.md` | Requirements + acceptance criteria | Scope changes |
| `docs/DESIGN-SYSTEM.md` | Visual tokens, trace grammar, seasonal themes | Design changes |
| `docs/CONTENT.md` | Approved copy | Copy changes |
| `docs/adr/` | Architecture decision records | A real decision is made |
| `CHANGELOG.md` | What shipped | Every PR |
| `SECURITY.md` | Secrets + frontend safety | Security posture changes |
| `VERSIONING.md` | SemVer rules | Rarely |

## Conventions
- Markdown, sentence-case headings, short sections.
- Component-level docs: JSDoc-style comments in the code, not separate files.
- New architecture decision → new numbered ADR (copy `0001` as the template).
- Every standards doc ends with the LAHA line.

---
*LAHA — Love All Humans Always.*
