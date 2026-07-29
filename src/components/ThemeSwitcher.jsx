import { useState, useRef, useEffect } from "react";

/* Theme control: the CLASSIC brand system (light/dark + auto-season) plus three
   opt-in dark "cosmic" themes. Sets data-theme (cosmic) / data-mode (classic) on
   <html>; persists ch-theme + ch-mode in localStorage. index.html restores both
   pre-paint. */

const COSMIC = [
  { id: "nebula", name: "Nebula", dot: "#9B7BF5" },
  { id: "aurora", name: "Aurora", dot: "#4FE0C0" },
  { id: "horizon", name: "Event Horizon", dot: "#C86BF0" },
];

function currentTheme() {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "nebula" || t === "aurora" || t === "horizon" ? t : "classic";
}
function currentMode() {
  return document.documentElement.getAttribute("data-mode") === "dark" ? "dark" : "light";
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(currentTheme);
  const [mode, setMode] = useState(currentMode);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function persist(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch {
      /* storage unavailable — choice still applies this visit */
    }
  }

  function pickCosmic(id) {
    document.documentElement.setAttribute("data-theme", id);
    persist("ch-theme", id);
    setTheme(id);
  }

  function pickClassic(nextMode) {
    document.documentElement.removeAttribute("data-theme");
    persist("ch-theme", "classic");
    setTheme("classic");
    if (nextMode) {
      document.documentElement.setAttribute("data-mode", nextMode);
      persist("ch-mode", nextMode);
      setMode(nextMode);
    }
  }

  const active = COSMIC.find((c) => c.id === theme);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Theme"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md border border-border-brand px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-on-surface hover:border-accent"
      >
        <span
          aria-hidden="true"
          className={active ? "ch-theme-dot" : "inline-block h-2.5 w-2.5 rounded-full border border-current"}
          style={active ? { "--dot": active.dot } : undefined}
        />
        THEME
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-20 mt-2 w-56 rounded-lg border border-border-brand bg-surface p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]"
        >
          {/* Classic */}
          <div className="rounded-md px-2 py-2">
            <p className="mb-1.5 font-mono text-[10px] font-bold tracking-widest text-muted-safe">
              CLASSIC
            </p>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => pickClassic("light")}
                aria-pressed={theme === "classic" && mode === "light"}
                className={`flex-1 rounded-md border px-2 py-1.5 font-mono text-[11px] font-bold tracking-widest ${
                  theme === "classic" && mode === "light"
                    ? "border-accent bg-card text-on-surface"
                    : "border-border-brand text-muted-safe hover:text-on-surface"
                }`}
              >
                LIGHT
              </button>
              <button
                type="button"
                onClick={() => pickClassic("dark")}
                aria-pressed={theme === "classic" && mode === "dark"}
                className={`flex-1 rounded-md border px-2 py-1.5 font-mono text-[11px] font-bold tracking-widest ${
                  theme === "classic" && mode === "dark"
                    ? "border-accent bg-card text-on-surface"
                    : "border-border-brand text-muted-safe hover:text-on-surface"
                }`}
              >
                DARK
              </button>
            </div>
          </div>

          <div className="my-1 border-t border-border-brand" />

          {/* Cosmic themes */}
          <p className="mb-1 px-2 pt-1 font-mono text-[10px] font-bold tracking-widest text-muted-safe">
            COSMIC
          </p>
          {COSMIC.map((c) => {
            const isActive = theme === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => pickCosmic(c.id)}
                className={`flex w-full items-center gap-2.5 rounded-md border px-2.5 py-2 text-left ${
                  isActive ? "border-current bg-card" : "border-transparent hover:bg-card"
                }`}
                style={isActive ? { color: c.dot } : undefined}
              >
                <span className="ch-theme-dot" style={{ "--dot": c.dot }} aria-hidden="true" />
                <span
                  className={`font-mono text-[11px] font-bold tracking-widest ${
                    isActive ? "" : "text-on-surface"
                  }`}
                >
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
