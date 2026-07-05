# LOOP-PLAYBOOK.md — how agents work on this project

> **Template.** Copy into a project's `docs/`. Replace `<…>` placeholders and the role table
> with the project's own subagents. Reusable across any repo.

**Design loops and constraints, not one-off prompts.** The human sets the goal and the
guardrails; the agent runs the loop until an evaluation gate says it's done.

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
Stop condition, or hand to the human (with what it learned)
```

Only open up exploration when budget and success criteria are solid.

## 2. Two loops, always both

**Inner loop (within one task).** Don't say "done" until the work is verified.
> Weak: edit file → "Done!"
> Strong: edit → build/test → detect failures → fix → re-run → green → "Done!"

**Outer loop (across sessions).** Write what you learned to `progress.md` so the next session
starts smarter (§4).

## 3. Roles — generator / evaluator split

Separate who builds from who checks. Never let the builder approve its own work.

| Role | Agent |
|---|---|
| Orchestrator (holds the goal) | <lead agent> |
| Generators (build) | <builder agents> |
| Evaluators / gate (check) | <reviewer agents> |

## 4. Memory: `progress.md`

Keep a live `progress.md` at the project root. Update every session.

```markdown
# Progress — <project>

## Goal
<the one outcome we're driving to>

## Completed
- [x] <thing> (PR/commit ref)

## In Progress
- [ ] <current step>   ← one thing at a time

## Blocked / Needs human
- <decision or approval needed>

## Lessons Learned
- <gotcha worth remembering next time>
```

"The agent forgets, the repository doesn't."

## 5. Evaluation gates (non-negotiable)

Nothing passes until:
- [ ] Build is clean.
- [ ] Tests + lint pass.
- [ ] Security check: no secrets staged; no key in a client/public var.
- [ ] Changelog entry added; version bumped if needed.
- [ ] `progress.md` updated.

If a gate fails: fix and re-run. Don't push a broken step.

## 6. Heavier tools — reach for later

- **Git worktrees** — only when >1 agent works the same repo in parallel.
- **Cron / automated loops** — once there's real recurring flow (e.g. daily triage).
- **Fleet / dynamic (many parallel sub-agents)** — open-loop, high budget. Not first.

## 7. Verify tool claims before relying on them

Agent tooling changes fast. Confirm a command/feature exists in the installed version before
building a workflow on it. Don't assume from a blog post.

---
*Design loops, not prompts.*
