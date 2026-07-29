import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { Monogram } from "./marks.jsx";
import { PRODUCTS } from "../lib/products.js";

const topLinks = [
  { to: "/demos", label: "Demos" },
  { to: "/story", label: "Story" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const onProduct = PRODUCTS.some((p) => pathname === `/${p.slug}`);

  useEffect(() => setOpen(false), [pathname]);
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

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`rounded-md px-2.5 py-1.5 text-sm font-semibold sm:px-3 ${
          onProduct ? "text-primary-safe" : "text-on-surface hover:text-primary-safe"
        }`}
      >
        Products <span aria-hidden="true" className="text-xs">▾</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-20 mt-2 w-72 rounded-lg border border-border-brand bg-surface p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]"
        >
          {PRODUCTS.map((p) => (
            <NavLink
              key={p.slug}
              role="menuitem"
              to={`/${p.slug}`}
              className="block rounded-md px-3 py-2.5 hover:bg-card"
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: p.color }}
                />
                <span className="font-bold">{p.name}</span>
              </span>
              <span className="mt-0.5 block pl-[18px] font-mono text-[11px] text-muted-safe">
                {p.tag}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-brand bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <Link to="/" aria-label="classHuman AI — home" className="flex items-center gap-2.5 rounded-sm">
          <Monogram className="h-8 w-8" />
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1.5">
          <ProductsMenu />
          {topLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-2.5 py-1.5 text-sm font-semibold sm:px-3 ${
                  isActive ? "text-primary-safe" : "text-on-surface hover:text-primary-safe"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
