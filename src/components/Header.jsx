/* Site header.

   Nav order is a positioning decision, not a layout one (CLASSHUMAN.md v1.6):
   client services lead, our own research comes after. The old "Products"
   dropdown mapped over PRODUCTS and linked every entry — including one with no
   route, which shipped an empty page. It is gone. TACO Loop and Ag3nt24 are
   reached through /research, which is the only place they belong now.

   Every entry below has a route in App.jsx. Check that before adding one —
   linking a page that does not exist is the exact defect this replaces. */

import { NavLink, Link } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { Monogram } from "./marks.jsx";

const topLinks = [
  { to: "/services", label: "Work With Us" },
  { to: "/tools", label: "Tools" },
  { to: "/legacy", label: "Legacy" },
  { to: "/skills", label: "Skills" },
  { to: "/demos", label: "Demos" },
  { to: "/research", label: "Research" },
  { to: "/story", label: "Story" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-brand bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <Link to="/" aria-label="classHuman AI — home" className="flex items-center gap-2.5 rounded-sm">
          <Monogram className="h-8 w-8" />
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1.5">
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
