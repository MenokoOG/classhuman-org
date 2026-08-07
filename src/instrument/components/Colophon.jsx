import { Link } from "react-router-dom";

export default function Colophon() {
  return (
    <footer className="i-colophon">
      <div className="i-shell i-colophon__inner">
        <span>classHuman AI, LLC · 2026</span>
        <span>Love All Humans Always</span>
        <Link to="/">classhuman.org</Link>
      </div>
    </footer>
  );
}
