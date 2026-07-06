# Express API Contract

## Conventions

- All responses are JSON.
- `X-Request-Id` optional; server returns `request_id`.
- Server-Sent Events (SSE) recommended for run streaming.

## Policies

### GET /api/policies

Returns policy list.

```json
{
  "request_id": "uuid",
  "policies": [
    {
      "policy_id": "cipse-d2-local-lab",
      "version": "0.1.0",
      "hash": "sha256:...",
      "created_at": "ISO",
      "description": "..."
    }
  ]
}
```

### GET /api/policies/:hash

Returns full policy document.

### POST /api/policies/validate

Request:

```json
{ "policy": {} }
```

Response:

```json
{
  "request_id": "uuid",
  "valid": true,
  "errors": []
}
```

### POST /api/policies

Creates new policy version and returns computed hash.

## Suites

### GET /api/suites

Returns suite headers.

### GET /api/suites/:suiteId

Returns full test suite.

### POST /api/suites/validate

Validates suite shape.

### POST /api/suites

Persists a suite.

## Runs

### POST /api/runs

Starts an async run.

Request:

```json
{
  "suite_id": "cipse_core_v0",
  "policy_hash": "sha256:...",
  "models": [
    { "model": "llama3", "params": { "temperature": 0.2 } }
  ],
  "run_label": "first isolation test"
}
```

Response:

```json
{
  "request_id": "uuid",
  "run": {
    "run_id": "uuid",
    "suite_id": "cipse_core_v0",
    "policy_hash": "sha256:...",
    "status": "queued",
    "created_at": "ISO"
  }
}
```

### GET /api/runs

Returns run list.

### GET /api/runs/:runId

Returns one run record.

### GET /api/runs/:runId/results

Returns summary and optional case results.

### GET /api/runs/:runId/cases/:testId

Returns one test case across models.

## Traces / Events

### GET /api/runs/:runId/traces

Returns trace headers.

### GET /api/traces/:traceId

Returns full trace steps, tool calls, and optional raw prompt/response.

## Streaming

### GET /api/runs/:runId/stream

SSE event types:
- run_status
- trace_step
- case_result
- log

Example:

```json
{ "type": "run_status", "status": "running" }
```

## Health / Safety

### GET /api/health

Response:

```json
{
  "request_id": "uuid",
  "ok": true,
  "services": {
    "orchestrator": "ok",
    "ollama": "ok",
    "mongo": "ok",
    "postgres": "ok",
    "tool_runtime": "ok",
    "python_lane": "ok"
  }
}
```
