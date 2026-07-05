# VERSIONING.md

classHuman.org uses [Semantic Versioning](https://semver.org/): **MAJOR.MINOR.PATCH**.

- **MAJOR** — breaking redesign or structural change.
- **MINOR** — new page, section, or feature, backward-compatible.
- **PATCH** — fixes, copy tweaks, styling corrections.

## Rules
- Current version lives in the `VERSION` file (single line).
- **Every PR bumps `VERSION` as appropriate and adds a `CHANGELOG.md` entry.** Non-negotiable.
- Tag releases in git: `v0.1.0`.
- Pre-1.0.0 the site is in active development; MINOR may include small breaking changes.

## Flow
1. Make change on a branch.
2. Update `CHANGELOG.md` under `[Unreleased]`.
3. Bump `VERSION`; move entries to a dated version section on release.
4. Tag and deploy.

---
*LAHA — Love All Humans Always.*
