/* Banshee — site agent UI (launcher + panel).
   Calls the serverless function; if that's unreachable (e.g. `vite` dev with no
   functions, or a network failure) it falls back to the in-browser offline
   engine, so the widget always answers. In-memory only — no storage, no trackers.
   Accessible: dialog semantics, focus management, ESC to close, polite live
   region for answers. Motion is handled by index.css (reduced-motion safe). */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { answerOffline, SUGGESTIONS } from "./offline.js";

const ENDPOINT = "/.netlify/functions/banshee";
const GREETING = {
  role: "assistant",
  ...answerOffline(""), // deterministic intro, mode "offline"
  intro: true,
};

async function ask(message, history) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error(`http_${res.status}`);
    const data = await res.json();
    if (!data || typeof data.text !== "string") throw new Error("bad_response");
    return data;
  } catch {
    // Function unreachable → answer in the browser from the same knowledge pack.
    return answerOffline(message);
  }
}

function Sources({ sources, onNavigate }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {sources.map((s) =>
        s.href ? (
          <a
            key={s.href + s.title}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border-brand bg-surface px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-cool-safe hover:border-accent hover:text-accent-safe"
          >
            {s.title} ↗
          </a>
        ) : (
          <Link
            key={s.path + s.title}
            to={s.path}
            onClick={onNavigate}
            className="rounded-sm border border-border-brand bg-surface px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-cool-safe hover:border-accent hover:text-accent-safe"
          >
            {s.title} →
          </Link>
        )
      )}
    </div>
  );
}

export default function BansheeWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const liveRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else launcherRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, busy]);

  async function send(text) {
    const message = (text ?? input).trim();
    if (!message || busy) return;
    setInput("");
    const history = messages
      .filter((m) => !m.intro)
      .map((m) => ({ role: m.role, content: m.text }));
    const next = [...messages, { role: "user", text: message }];
    setMessages(next);
    setBusy(true);
    const reply = await ask(message, history);
    setMessages((cur) => [...cur, { role: "assistant", ...reply }]);
    setBusy(false);
    if (liveRef.current) liveRef.current.textContent = "Banshee replied.";
  }

  return (
    <>
      {/* Launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Close Banshee assistant" : "Open Banshee — ask about classHuman AI"}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-border-brand bg-primary px-4 py-3 font-bold text-on-primary shadow-lg shadow-primary/25 hover:opacity-95"
      >
        <span aria-hidden="true" className="ch-pulse inline-block h-2.5 w-2.5 rounded-full bg-accent" />
        {open ? "Close" : "Ask Banshee"}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Banshee — classHuman AI assistant"
          className="ch-reveal is-in fixed bottom-24 right-5 z-40 flex max-h-[70vh] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-border-brand bg-surface shadow-[0_30px_70px_-24px_rgba(0,0,0,0.55)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border-brand bg-card/70 px-4 py-3">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="ch-pulse inline-block h-2 w-2 rounded-full bg-accent" />
              <span className="font-extrabold">Banshee</span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-muted-safe">
                classHuman guide
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-md px-2 py-1 font-mono text-xs font-bold text-muted-safe hover:text-primary-safe"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : ""}>
                <div
                  className={`inline-block max-w-[92%] rounded-lg px-3 py-2 text-left text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-on-primary"
                      : "border border-border-brand bg-card text-on-surface"
                  }`}
                >
                  {m.text}
                  {m.role === "assistant" && (
                    <Sources sources={m.sources} onNavigate={() => setOpen(false)} />
                  )}
                </div>
                {m.role === "assistant" && m.mode === "offline" && !m.intro && (
                  <p className="mt-1 font-mono text-[10px] tracking-widest text-cool-safe">
                    offline mode · answered from site content
                  </p>
                )}
              </div>
            ))}

            {busy && (
              <p className="font-mono text-xs text-muted-safe" aria-hidden="true">
                Banshee is thinking…
              </p>
            )}

            {/* Suggestions (only before the first question) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-border-brand px-3 py-1 text-xs font-semibold text-cool-safe hover:border-accent hover:text-accent-safe"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-border-brand px-3 py-3"
          >
            <label htmlFor="banshee-input" className="sr-only">
              Ask Banshee about classHuman AI
            </label>
            <input
              id="banshee-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about classHuman AI…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-md border border-border-brand bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-md bg-primary px-3 py-2 text-sm font-bold text-on-primary hover:opacity-90 disabled:opacity-40"
            >
              Send
            </button>
          </form>

          <p className="border-t border-border-brand px-4 py-2 font-mono text-[10px] text-muted-safe">
            Banshee is a guide — it takes no actions and makes no commitments. LAHA.
          </p>
        </div>
      )}

      {/* Screen-reader announcements */}
      <span ref={liveRef} className="sr-only" aria-live="polite" />
    </>
  );
}
