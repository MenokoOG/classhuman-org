# classHuman.org

Marketing + product website for **classHuman AI** — decision-control for human-agentic
collaboration. *Driven by LAHA — Love All Humans Always.*

**Stack:** Vite + React + Tailwind + React Router · **Deploy:** Netlify

---

## For the AI agent (Rune Onyx)
Open this folder in VS Code and start with **`CLAUDE.md`** — it's the build brief. Then read
`docs/PRD-website.md`, `docs/DESIGN-SYSTEM.md`, and `docs/CONTENT.md`, and write your plan
into `PLAN.md` before coding. Run `/plan` to do this automatically.

## For humans — quickstart
```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
```
Deploy: push to the connected repo; Netlify builds `npm run build`, publishes `dist`.

## Repo map
| Path | What |
|---|---|
| `CLAUDE.md` | Agent build brief (read first) |
| `CLASSHUMAN.md` | Canonical company context (source of truth) |
| `PLAN.md` | Live implementation plan |
| `docs/PRD-website.md` | Requirements, pages, acceptance criteria |
| `docs/DESIGN-SYSTEM.md` | Palette, type, trace grammar, seasonal themes |
| `docs/FOUNDERS-STORY.md` | The founders' story, in memory of Tonya (use verbatim) |
| `brand/` | Canonical brand: `tokens.css`, `season-switch.js`, SVG marks, handoff |
| `docs/CONTENT.md` | Approved copy |
| `docs/adr/` | Architecture decision records |
| `soul/` | Agent personas (mirrored in `.claude/agents/`) |
| `SECURITY.md` | Secrets + frontend safety rules |

## Guardrails
- `env.txt` holds a live key — it is git-ignored. **Never commit secrets.** See `SECURITY.md`.
- Public accessibility wording is only **"accessibility-first design."**
- No COIL / OKO Forge references.

---
*LAHA — Love All Humans Always.*
