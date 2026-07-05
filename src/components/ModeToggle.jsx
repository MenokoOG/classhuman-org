import { useState } from "react";

function currentMode() {
  return document.documentElement.getAttribute("data-mode") === "dark" ? "dark" : "light";
}

export default function ModeToggle() {
  const [mode, setMode] = useState(currentMode);

  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem("ch-mode", next);
    } catch {
      /* storage unavailable — mode still applies for this visit */
    }
    setMode(next);
  }

  const dark = mode === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border border-border-brand px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-on-surface hover:border-accent"
    >
      {dark ? "LIGHT" : "DARK"}
    </button>
  );
}
