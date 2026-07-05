# LOOP-PLAYBOOK.md — how agents work on classHuman projects

**Design loops and constraints, not one-off prompts.** The Handler sets the goal and the
guardrails; the agent runs the loop until an evaluation gate says it's done. This is the same
discipline as TACO Loop — bounded, traceable, evaluated at each step.

> TBI note: the repo holds the context so Lawrence doesn't have to. The agent reads state,
> works one step, writes state back. One task at a time.

---

## 1. Default to closed-loop

Closed-loop = human-designed path. Open-loop = free exploration (expensive, save for later).
**Always start closed-loop:**

```
Clear goal
  ↓
Defined steps
  ↓
Evaluation gate at each step
  ↓
Stop condition, or hand to Lawrence (with what it learned)
```

Only open up exploration when the budget and success criteria are solid. On the home server
(i3 / 16GB), closed-loop is the only realistic mode. This mirrors TACO's core law: *unknown
data must increase decision discipline, not model confidence.*

## 2. Two loops, always both

**Inner loop (within one task).** Don't say "done" until the work is verified.
> Weak: edit file → "Done!"
> Strong: edit → run `npm run build` / tests → detect failures → fix → re-run → green → "Done!"

**Outer loop (across sessions).** Write what you learned to `progress.md` so the next session
starts smarter. See §4.

## 3. Roles = the existing souls (generator / evaluator split)

Separate who builds from who checks. Never let the builder approve its own work.

| Role | Souls / subagents |
|---|---|
| Orchestrator (holds the goal) | Rune Onyx (you) |
| Generators (build) | `architect`, `frontend`, `devops` |
| Evaluators / gate (check) | `security-auditor`, audit soul |

## 4. Memory: `progress.md`

Keep a live `progress.md` at the project root (or `.loop/progress.md`). Update it every
session. Template:

```markdown
# Progress — <project>

## Goal
<the one outcome we're driving to>

## Completed
- [x] <thing> (PR/commit ref)

## In Progress
- [ ] <current step>  ← one thing at a time

## Blocked / Needs Lawrence
- <decision or approval needed>

## Lessons Learned
- <gotcha worth remembering next time>
```

"The agent forgets, the repository doesn't."

## 5. Evaluation gates (non-negotiable)

Nothing passes the gate until:
- [ ] `npm run build` (or the project's build) is clean.
- [ ] Tests + lint pass.
- [ ] `security-auditor` check: no secrets staged (`git status`, `grep -ri "sk-" src/`),
      no key in a `VITE_*`/client var. (See `SECURITY.md`.)
- [ ] `CHANGELOG.md` entry added; `VERSION` bumped if needed.
- [ ] `progress.md` updated.

If a gate fails: fix and re-run the loop. Don't push. Don't hand up a broken step.

## 6. When to reach for the heavier tools (later, not now)

- **Git worktrees** — only when running >1 agent on the same repo in parallel.
- **Cron / automated loops** — once there's real recurring flow (e.g. daily issue triage).
- **Fleet / dynamic (many parallel sub-agents)** — open-loop, high-budget. Not yet.

## 7. Verify tool claims before relying on them

Claude Code commands and features change. Before wiring a workflow around a command
(`/loop`, `/goal`, etc.), confirm it exists in the installed version. Don't assume from a
blog post.

---
*Design loops, not prompts. · LAHA — Love All Humans Always.*
