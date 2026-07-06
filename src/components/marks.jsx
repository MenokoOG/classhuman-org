/* Canonical brand marks as React components.
   Geometry from brand/assets/*.svg — exact. Colors via var(--ch-*) so the
   marks re-theme live with season and mode. Decorative uses: aria-hidden. */

export function Monogram({ className = "", title }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        d="M54.9 38.7 A26 26 0 1 1 54.9 81.3"
        fill="none"
        stroke="var(--ch-primary)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M80 36 L80 84 M108 36 L108 84 M80 60 L108 60"
        fill="none"
        stroke="var(--ch-primary)"
        strokeWidth="11"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ControlNode({ className = "", title }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="60" cy="60" r="34" fill="none" stroke="var(--ch-primary)" strokeWidth="6" />
      <circle cx="60" cy="60" r="20" fill="none" stroke="var(--ch-sage)" strokeWidth="3" />
      <g stroke="var(--ch-sage)" strokeWidth="4" strokeLinecap="round">
        <line x1="74.14" y1="45.86" x2="82.63" y2="37.37" />
        <line x1="45.86" y1="45.86" x2="37.37" y2="37.37" />
        <line x1="45.86" y1="74.14" x2="37.37" y2="82.63" />
        <line x1="74.14" y1="74.14" x2="82.63" y2="82.63" />
      </g>
      <g fill="var(--ch-primary)">
        <circle cx="82.63" cy="37.37" r="4" />
        <circle cx="37.37" cy="37.37" r="4" />
        <circle cx="37.37" cy="82.63" r="4" />
        <circle cx="82.63" cy="82.63" r="4" />
      </g>
      <line x1="60" y1="40" x2="60" y2="22" stroke="var(--ch-primary)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="19" r="6" fill="var(--ch-accent)" className="ch-pulse" />
      <circle cx="60" cy="60" r="11" fill="var(--ch-accent)" className="ch-pulse" />
    </svg>
  );
}

/* Decorative horizontal trace — agent paths gating through nodes.
   Brand trace grammar, used sparingly as a section accent. */
export function TraceLine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 800 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--ch-sage)" strokeWidth="2" strokeLinecap="round">
        <path d="M0 20 H250 M310 20 H520 M580 20 H800" />
        <path d="M250 20 L280 8 M280 8 H310" opacity="0.7" />
        <path d="M520 20 L550 32 M550 32 H580" opacity="0.7" />
      </g>
      <g fill="var(--ch-accent)">
        <circle cx="250" cy="20" r="4" />
        <circle cx="310" cy="20" r="4" />
        <circle cx="520" cy="20" r="4" />
        <circle cx="580" cy="20" r="4" />
      </g>
      <circle cx="400" cy="20" r="6" fill="none" stroke="var(--ch-primary)" strokeWidth="2.5" />
    </svg>
  );
}
