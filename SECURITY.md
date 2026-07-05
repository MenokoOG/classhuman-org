# SECURITY.md

Security is a shared responsibility between Lawrence and Nicale. Assume breach. Trust
nothing by default.

## Secrets — the hard rules
- **`env.txt` contains a live OpenAI key.** It is git-ignored. Never stage, commit, or
  paste it into code, chat, or a browser bundle.
- **Vite bundles are public.** Anything imported into client-side React ships to every
  visitor. **Never** put an API key, token, or secret in frontend code or in a `VITE_*` var.
- Real secrets live in the **Netlify dashboard** and are read only by serverless functions.
- If a key is ever committed: rotate it immediately, then scrub history.

## Frontend safety
- Validate all user input (contact form). No secrets in the DOM.
- Audit dependencies before deploy; avoid known-vulnerable packages.
- No third-party trackers on the contact page.

## Before every deploy — checklist
- [ ] `git status` shows no `env.txt` / `.env` staged.
- [ ] `grep -ri "sk-" src/` returns nothing.
- [ ] No `VITE_*` var holds a secret.
- [ ] Dependencies reviewed.

Run the `security-auditor` subagent before pushing.

---
*LAHA — Love All Humans Always.*
