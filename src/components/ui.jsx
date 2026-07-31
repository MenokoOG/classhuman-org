/* Shared UI kit — LAHA visual language.
   Everything themes live through brand tokens (var(--ch-*)); motion respects
   prefers-reduced-motion (the reveal falls back to fully-visible, and the CSS
   animations are frozen globally by index.css). */

import { useEffect, useRef, useState } from "react";

/* Mono, tracked, sage eyebrow — the technical signal above a heading. */
export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-mono text-xs font-bold tracking-[0.25em] text-sage-safe ${className}`}>
      {children}
    </p>
  );
}

/* Warm→amber gradient headline. Falls back to solid on-surface via the
   .ch-gradient-text utility, so text stays legible if clip is unsupported. */
export function GradientText({ children, className = "" }) {
  return <span className={`ch-gradient-text ${className}`}>{children}</span>;
}

/* Reveal-on-scroll. Starts hidden+offset, animates in once when it enters the
   viewport. If IntersectionObserver or motion is unavailable, shows immediately. */
export function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`ch-reveal ${shown ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* Animated brand backdrop: a circuit-trace field where agent paths gate through
   pulsing amber nodes toward one converging core = humans holding final
   authority. Decorative (aria-hidden); animation frozen under reduced-motion. */
export function TraceField({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 460"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ch-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--ch-accent)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--ch-primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--ch-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* engineered traces — 45/90 degree grammar, never organic curves */}
      <g fill="none" stroke="var(--ch-sage)" strokeWidth="1.5" opacity="0.55">
        <path className="ch-trace" d="M0 90 H210 L260 140 H400" />
        <path className="ch-trace" style={{ animationDelay: "0.4s" }} d="M0 210 H150 L200 160 H400" />
        <path className="ch-trace" style={{ animationDelay: "0.8s" }} d="M0 330 H240 L300 270 H400" />
        <path className="ch-trace" style={{ animationDelay: "1.2s" }} d="M800 130 H620 L560 190 H400" />
        <path className="ch-trace" style={{ animationDelay: "1.6s" }} d="M800 250 H600 L540 220 H400" />
        <path className="ch-trace" style={{ animationDelay: "2.0s" }} d="M800 370 H640 L560 250 H400" />
      </g>

      {/* node dots along the gates */}
      <g fill="var(--ch-accent)">
        <circle className="ch-node" cx="210" cy="90" r="3.5" />
        <circle className="ch-node" style={{ animationDelay: "0.5s" }} cx="200" cy="160" r="3.5" />
        <circle className="ch-node" style={{ animationDelay: "1s" }} cx="300" cy="270" r="3.5" />
        <circle className="ch-node" style={{ animationDelay: "0.7s" }} cx="560" cy="190" r="3.5" />
        <circle className="ch-node" style={{ animationDelay: "1.3s" }} cx="560" cy="250" r="3.5" />
      </g>

      {/* the converging core — one gate, human authority */}
      <circle cx="400" cy="220" r="120" fill="url(#ch-core-glow)" className="ch-breathe" />
      <circle cx="400" cy="220" r="26" fill="none" stroke="var(--ch-primary)" strokeWidth="2.5" />
      <circle cx="400" cy="220" r="9" fill="var(--ch-accent)" className="ch-pulse" />
      <line x1="400" y1="194" x2="400" y2="168" stroke="var(--ch-primary)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="400" cy="164" r="5" fill="var(--ch-accent)" className="ch-pulse" />
    </svg>
  );
}

/* Per-product status pill (mono, tracked, colored border). */
export function StatusPill({ children, color, className = "" }) {
  return (
    <span
      className={`ch-stage-text inline-block rounded-sm border px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest ${className}`}
      style={{ "--stage": color, borderColor: color }}
    >
      {children}
    </span>
  );
}

/* Standard product-page hero — used by TACO/Asymptote/Ag3nt24 and the service
   pages so the whole site reads as one system. */
export function ProductHero({ eyebrow, title, lead, color, children }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="ch-aurora-soft pointer-events-none absolute inset-0 -z-10"
        style={{ "--stage": color }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface/85">{lead}</p>
        )}
        {children}
      </div>
    </section>
  );
}
