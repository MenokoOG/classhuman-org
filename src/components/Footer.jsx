import { Link } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import { Monogram } from "./marks.jsx";
import { PRODUCTS } from "../lib/products.js";

export default function Footer() {
  return (
    <footer className="border-t border-border-brand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Monogram className="h-7 w-7" />
            <Wordmark />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-safe">
            A Generative AI Software Engineering, Development &amp; Research LLC. We build the
            software for the agentic systems we create.
          </p>
          <p className="mt-3 text-sm font-semibold text-on-surface/80">
            driven by LAHA — Love All Humans Always
          </p>
        </div>

        <nav aria-label="Products">
          <p className="font-mono text-[11px] font-bold tracking-widest text-muted-safe">PRODUCTS</p>
          <ul className="mt-3 space-y-2">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/${p.slug}`}
                  className="text-sm font-semibold text-on-surface hover:text-primary-safe"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="font-mono text-[11px] font-bold tracking-widest text-muted-safe">COMPANY</p>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            <li><Link to="/demos" className="text-on-surface hover:text-primary-safe">Demos</Link></li>
            <li><Link to="/story" className="text-on-surface hover:text-primary-safe">Story</Link></li>
            <li><Link to="/about" className="text-on-surface hover:text-primary-safe">About</Link></li>
            <li><Link to="/contact" className="text-on-surface hover:text-primary-safe">Contact</Link></li>
            <li>
              <a
                href="https://github.com/classHuman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-safe underline underline-offset-4 hover:text-accent-safe"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border-brand">
        <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-xs text-muted-safe">
          classHuman AI · LLC registration 2026. — LAHA.
        </p>
      </div>
    </footer>
  );
}
