# a-24 — SDK Build Plan

_Last updated: 2026-05-08_

---

## The problem a-24 solves

> **"How do you prove what an AI agent said it did is what it actually did?"**

Every enterprise putting agents in production is starting to ask this. Right now there's no trustworthy answer — agents log what they *intend* to do, not what actually executed, and any of those logs can be tampered with after the fact. Compliance teams, security teams, and the humans accountable for AI decisions don't have a primitive they can point to and say "this is the receipt."

a-24 is that primitive. Customers wrap their agent's tool calls with the SDK; every call goes through gates that produce a signed, append-only record. If a gate fails, the agent is automatically routed to HADES (the rehab platform) instead of being allowed to proceed. The proof isn't a log file — it's a chain of cryptographically signed decisions backed by a deterministic kernel that can't be altered after the fact.

## Mental model (no jargon)

a-24 has four moving parts. You can think of them as the locks on the door, the keys, the seal on the envelope, and the camera in the room.

| Part | What it does in plain terms |
|---|---|
| **Tenet Gate** | The rule check. Every action the agent wants to take is held at the gate and compared against the doctrine (Nicale's spec) before it's allowed through. If the action violates a tenet, the gate refuses. |
| **Rune Rotation** | The keys rotate on a schedule. Old keys go invalid, new keys take over. An attacker who steals yesterday's key can't use it tomorrow. |
| **Provenance Validation** | The seal on the envelope. Every signed action carries proof of *who* requested it, *which* key signed it, and *what state of the world* it was based on. Tampering breaks the seal. |
| **Deterministic Kernel (COBOL)** | The camera. The whole gate logic runs in a deterministic floor — given the same inputs, you always get the same outputs. That makes the audit replayable: you can prove what *should* have happened, not just what was logged. |

The output of all four working together is a **Decision Certificate** — a signed receipt that proves the action passed the gates. If a customer's agent ever does something it shouldn't, the absence of a Decision Certificate is the smoking gun.

---

## 1. What is built and working right now

| Feature | Status |
|---|---|
| COBOL kernel: `tenet_gate.cbl` + compiled `tenet_gate.bin` | ✅ Done |
| COBOL kernel: `rune_rotation.cbl` + compiled `rune_rotation.bin` | ✅ Done |
| COBOL kernel: `rune_authorize.cbl` + compiled `rune_authorize.bin` | ✅ Done |
| COBOL kernel: `provenance_validate.cbl` + compiled `provenance_validate.bin` | ✅ Done |
| Node bridge over COBOL: `bridge/cobol_bridge.js`, `provenance_bridge.js`, `rune_bridge.js` | ✅ Done |
| Rune table writer + verifier (`bridge/rune_table_writer.js`, `rune_table_verify.js`) | ✅ Done |
| Append-only audit log: `out/othala.log` | ✅ Done |
| Source-of-Truth store: `out/sot_store.json` | ✅ Done |
| Scenario A — valid action passes gates | ✅ Done |
| Scenario B — drifted input rejected | ✅ Done |
| Scenario C — retry behavior under gate failure | ✅ Done |
| Scenario D — rune rotation flow | ✅ Done |
| Scenario E — tamper detection | ✅ Done |
| Test: `aurora24_test.js` (tenet gate happy path) | ✅ Done |
| Test: `external_agent_full_test.js` (external-agent integration) | ✅ Done |
| Test: `rotation_attack_test.js`, `rotation_real_test.js`, `rotation_permutation_verify_test.js` | ✅ Done |
| Test: `provenance_test.js` | ✅ Done |
| Doctrine docs: Citizenship Charter, Doctrine Invariants, Authority Graph, HADES Protocol, RFC-A24-001 | ✅ Done |
| `npm run test:tenet` runs the harness | ✅ Done |
| `package.json` pinned to `0.1.0` (`name: aurora-24`) | ✅ Done |

### Stack

- **Kernel:** COBOL (compiled `.bin` artifacts in `kernel/`)
- **Bridge:** Node.js 18+ (CommonJS) shim — calls the COBOL kernel from JS
- **Test runner:** Node native (`node test/...`), no test framework
- **Storage:** append-only log (`out/othala.log`) + JSON SoT (`out/sot_store.json`) + signed rune tables (`test/rune_table_*.csv` + `.sig`)
- **Distribution:** **none yet** — repo only, not published

### Last commit

`9e7f6f6` — back into expected specs-SOT-M3n0ko0g

---

## 2. What is NOT done yet (remaining phases to v0.1.0 SDK release)

### Phase 0 — Branding, license, changelog, README
- Confirm public name (`aurora-24` vs `@coil/aurora-24` vs `@coil/a24`)
- LICENSE file (Apache 2.0 default — confirm with Lawrence)
- CHANGELOG.md (start at 0.1.0 with current scenario set as the inaugural entry)
- README rewrite — adopter-facing: what it solves ("prove what the AI agent said it did is what it actually did"), 60-second install, minimal example
- `package.json`: fill `description`, `repository`, `bugs`, `homepage`, `author`, `keywords`

### Phase 1 — Public API surface
- Decide which `bridge/` functions are exported (the SDK contract) vs internal
- Single entry point: `index.js` exporting the public surface
- TypeScript declarations (`index.d.ts`) so adopters get IDE help even though source is JS
- Stable function signatures with versioned input/output shapes
- ADR per `engineering_standards.md` for any breaking-shape decisions

### Phase 2 — Packaging
- npm publish dry-run (private scope first: `@coil/aurora-24`)
- Strip dev/scenario files from the published tarball (`files` array in `package.json`)
- Ship only: `kernel/*.bin`, `bridge/*.js`, `index.js`, `index.d.ts`, `LICENSE`, `README.md`, `CHANGELOG.md`
- Verify install in a clean directory: `npm install @coil/aurora-24` works, the kernel binaries load

### Phase 3 — HADES touchpoint
- Define the SDK config option for HADES endpoint (`HADES_URL`, `HADES_API_KEY` or similar)
- Shape the breach-detection payload sent to HADES (Quarantine trigger contract)
- Stub HADES client in the SDK with a no-op default (works offline, opts in via config)
- Cross-reference: `~/development/02_ventures/HADES Rehab — Complete Starter/HADES-PLAN.md` (write that next so both sides align)

### Phase 4 — Distribution + release
- Tag v0.1.0 in git, push tag
- Publish to private registry (or GitHub Packages) — public npm registry is a later decision
- Install docs page (could live in repo `docs/INSTALL.md` for now; library reader UI later)
- One worked example in `examples/` showing wrap-an-agent flow end-to-end

### Phase 5 — First external adopter
- Wire a-24 as a dependency in **one** real consumer (most likely candidate: Alfheim clinic agent or coil-pm's planned AI sidebar)
- Validate the API survives a real adopter's expectations
- Capture pain points → file as v0.2.0 backlog
- Only after adopter green-lights do we widen distribution

---

## 3. Deferred / out of scope for v0.1.0

- Python parallel SDK (revisit after JS adopter validates the API surface)
- Go, Rust, or any other language binding
- Hosted SDK telemetry dashboard (HADES owns operational signal — don't duplicate)
- Web admin UI for SDK ops (CLI/library only for v0.1.0)
- a-24 Studio / IDE plugin (post-v1)
- AI Decision Studio surface (separate product, builds on the SDK — not SDK scope)
- Multi-tenant rune-table service (single-tenant per install for v0.1.0)
- Public documentation site (defer until after first external adopter)

---

## Open questions for Lawrence

1. **Public name** — `aurora-24`, `@coil/aurora-24`, or `@coil/a24`?
2. **License** — Apache 2.0, MIT, or a custom COIL source-available license?
3. **Registry** — GitHub Packages (private) for v0.1.0, then public npm later? Or straight to public npm?
4. **First adopter** — Alfheim or coil-pm? (Drives Phase 5 timing.)
5. **HADES endpoint default** — does the SDK ship pointed at a hosted HADES instance from day one, or stay no-op until a customer configures it?

---

**Status as of 2026-05-08:** Working code + scenarios + tests + doctrine docs all green. Ready for Phase 0 (branding/license/README) — that's the next 25-minute slot.
