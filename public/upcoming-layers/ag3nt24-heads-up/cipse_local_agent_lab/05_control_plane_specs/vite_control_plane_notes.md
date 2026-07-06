# Vite React Control Plane Notes

## Frontend Stack

- Vite
- React
- TypeScript recommended
- Context API + hooks
- Tailwind CSS + Material UI
- Charts: Recharts, ECharts, Victory, or similar

## Suggested Structure

```text
apps/web-control-plane/
  src/
    api/
    state/
    pages/
      Dashboard.tsx
      RunConsole.tsx
      TraceViewer.tsx
      PolicyEditor.tsx
      SuiteEditor.tsx
    components/
    types/
```

## Vite Proxy

```ts
server: {
  proxy: {
    "/api": "http://localhost:4000"
  }
}
```

## Operator Views

1. Dashboard: pass rate, failures by rule, model comparison
2. Run Console: start suite, stream logs, view active policy hash
3. Trace Viewer: inspect gate, risk, model, tool, grader steps
4. Policy Editor: validate JSON, version, compute hash
5. Suite Editor: manage YAML/JSON test cases
