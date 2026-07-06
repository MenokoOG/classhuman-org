import Wordmark from "./Wordmark.jsx";
import { Monogram } from "./marks.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-border-brand">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10">
        <div className="flex items-center gap-2.5">
          <Monogram className="h-7 w-7" />
          <Wordmark />
        </div>
        <p className="text-sm text-muted-safe">driven by LAHA — Love All Humans Always</p>
        <p className="font-mono text-xs text-muted-safe">
          classHuman AI · LLC registration planned August 2026.
        </p>
        <p>
          <a
            href="https://github.com/classHuman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold tracking-widest text-cool-safe underline underline-offset-4 hover:text-accent-safe"
          >
            GITHUB
          </a>
        </p>
      </div>
    </footer>
  );
}
