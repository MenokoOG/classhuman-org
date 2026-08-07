import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal: opacity 0→1, translateY(22px)→0 over 900ms on the one easing.
 * Unobserves after firing — a reveal never plays twice.
 *
 * `prefers-reduced-motion` is handled in CSS: the .silk rule collapses to its
 * visible state, so the observer here becomes a no-op rather than a jump.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ["silk", visible ? "is-visible" : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
