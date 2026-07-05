export default function Wordmark({ className = "" }) {
  return (
    <span className={`ch-wordmark inline-flex items-baseline gap-1.5 ${className}`}>
      <span className="text-xl">
        <span className="class text-muted-safe">class</span>
        <span className="human text-primary">Human</span>
      </span>
      <span className="font-mono text-sm font-bold tracking-[0.2em] text-accent-safe">AI</span>
    </span>
  );
}
