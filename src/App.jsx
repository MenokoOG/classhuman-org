import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Asymptote from "./pages/Asymptote.jsx";
import Ag3nt24 from "./pages/Ag3nt24.jsx";
import Hades from "./pages/Hades.jsx";
import Demos from "./pages/Demos.jsx";
import Story from "./pages/Story.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BansheeWidget from "./banshee/BansheeWidget.jsx";

const SITE = "classHuman AI";

const PAGE_META = {
  "/": {
    title: "classHuman AI — driven by LAHA",
    description:
      "classHuman AI is a Generative AI Software Engineering, Development & Research LLC. We build the control layer where humans keep final authority over their agents. TACO Loop, Asymptote, Ag3nt24, HADES.",
  },
  "/product": {
    title: "TACO Loop — " + SITE,
    description:
      "TACO Loop is a decision-control architecture for unknown-data environments. Take In → Assess → Choose → Operate. Unknown data must increase decision discipline, not model confidence.",
  },
  "/asymptote": {
    title: "Asymptote — Static Big-O Estimator — " + SITE,
    description:
      "Asymptote is a static time & space complexity (Big-O) estimator for Python, built for agents. It reports per-function complexity, confidence, evidence, and the unknowns it can't decide. CLI, agent tool, or MCP server.",
  },
  "/ag3nt24": {
    title: "Ag3nt24 — The Proof Layer — " + SITE,
    description:
      "Ag3nt24 gates agent actions through proof gates that produce signed, append-only receipts — so what an agent did is provable, not just logged. Built on TACO Loop.",
  },
  "/hades": {
    title: "HADES — Diagnostic & Authority Gating — " + SITE,
    description:
      "HADES, the Human Assisted Diagnostic Evaluation System: contain, diagnose, and validate a failing agent — or authorize its deactivation with a human in the loop. Every step to the on-chain ledger.",
  },
  "/demos": {
    title: "Demos — Human-in-the-loop by architecture — " + SITE,
    description:
      "Production-shaped demos where the AI helps but never holds final authority — including Willow Bend Family Clinic, an assistant that's safe by construction and degrades gracefully offline.",
  },
  "/story": {
    title: "Our Story — In Memory of Tonya — " + SITE,
    description:
      "Where LAHA comes from: the founders' story of classHuman AI, in memory of Tonya. Love All Humans Always.",
  },
  "/about": {
    title: "About — " + SITE,
    description:
      "A two-person company with a spine. Lawrence and Nicale Jefferson — a Generative AI Software Engineering, Development & Research LLC. Accessibility-first design, humans holding final authority.",
  },
  "/contact": {
    title: "Contact — " + SITE,
    description: "Talk to classHuman AI. No forms, no trackers — just email.",
  },
};

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = PAGE_META[pathname] ?? PAGE_META["/"];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <BansheeWidget />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/asymptote" element={<Asymptote />} />
        <Route path="/ag3nt24" element={<Ag3nt24 />} />
        <Route path="/hades" element={<Hades />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/story" element={<Story />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
