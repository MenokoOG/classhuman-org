/**
 * The cH mark: a reverse-C arc in ember, a gated H in ink.
 * No nodes, no dots — two paths and nothing else.
 */
export default function Logo({ size = 20, strokeWidth = 14 }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M54.9 38.7 A26 26 0 1 1 54.9 81.3"
        stroke="var(--ember)"
        strokeWidth={strokeWidth}
      />
      <path
        d="M80 36 L80 84 M108 36 L108 84 M80 60 L108 60"
        stroke="var(--ink)"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
