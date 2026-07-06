import { NavLink, Link } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import ModeToggle from "./ModeToggle.jsx";
import { Monogram } from "./marks.jsx";

const links = [
  { to: "/product", label: "Product" },
  { to: "/story", label: "Story" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border-brand bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link to="/" aria-label="classHuman AI — home" className="flex items-center gap-2.5 rounded-sm">
          <Monogram className="h-8 w-8" />
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {links.map(({ to, label }) => (
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
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
