import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Asymptote from "./pages/Asymptote.jsx";
import Ag3nt24 from "./pages/Ag3nt24.jsx";
import Play from "./pages/Play.jsx";
import Tools from "./pages/Tools.jsx";
import Research from "./pages/Research.jsx";
import Demos from "./pages/Demos.jsx";
import Legacy from "./pages/Legacy.jsx";
import Services from "./pages/Services.jsx";
import Skills from "./pages/Skills.jsx";
import Story from "./pages/Story.jsx";
import About from "./pages/About.jsx";
import Credentials from "./pages/Credentials.jsx";
import Contact from "./pages/Contact.jsx";
import BansheeWidget from "./banshee/BansheeWidget.jsx";
import Instrument from "./instrument/Instrument.jsx";

const SITE = "classHuman AI";

const PAGE_META = {
  "/": {
    title: "classHuman AI — driven by LAHA",
    description:
      "classHuman AI builds AI agents and agentic systems for your business — on the industry's best tools and on your legacy stack — with humans keeping final authority. Custom agents, agentic workflows, and legacy modernization.",
  },
  "/legacy": {
    title: "Legacy Modernization — " + SITE,
    description:
      "Modern AI agents on your legacy stack, with no rip-and-replace. classHuman picks the modernization pattern that fits your system — strangler fig, branch by abstraction, parallel run, anti-corruption layer, or an honest rewrite — and builds protocol-droid interfaces at the seam. Senior + CTO-level experience on any stack.",
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
  "/play": {
    title: "FINAL AUTHORITY — play it — " + SITE,
    description:
      "A free browser game about being the human in the loop. Six shifts, eighteen AI agent proposals, two investigations each. You do not lose by making a bad call — you lose by no longer making calls. Playable in the page, nothing to install.",
  },
  "/tools": {
    title: "The Tools We Use — " + SITE,
    description:
      "The working set classHuman AI actually builds with: Anthropic, OpenAI and Google model SDKs, LangChain and Langflow, MCP, GitHub Spec Kit and agent skills, PyTorch with LoRA/QLoRA tuning, NestJS and FastAPI, PostgreSQL, React. Cloud, on-premise, or entirely on your own hardware.",
  },
  "/research": {
    title: "Research & Development — paused — " + SITE,
    description:
      "classHuman AI's own research: TACO Loop (Layer 0), Ag3nt24 (Layer 1) and HADES (Layer 2). Paused while we build the company, and kept out of client systems until proven. Research, not products.",
  },
  "/services": {
    title: "Work With Us — Agents & Agentic Systems — " + SITE,
    description:
      "classHuman AI builds agents and agentic systems on modern platforms and open-source frameworks, modernizes legacy stacks, and ships custom harness and security-agent software: registration, validation, revocation, escalation, human-in-the-loop.",
  },
  "/skills": {
    title: "Skills — Free Agent Skills from classHuman — " + SITE,
    description:
      "Free, installable Claude Skills from classHuman AI's own practice — legacy modernization scouting and agent gate review. Our working method, published, not a sales sheet.",
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
  "/credentials": {
    title: "Credentials — Education, Training & Certifications — " + SITE,
    description:
      "The training behind the work: Lawrence Jefferson II's education, engineering training, and certifications — 24 years U.S. Army, full-stack engineering programs, and current-generation AI-agent credentials from AWS, Vanderbilt, Google, IBM, and the Python Institute.",
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
        <Route path="/play" element={<Play />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/research" element={<Research />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/story" element={<Story />} />
        <Route path="/about" element={<About />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/*
        "The Instrument" sits outside Layout on purpose: it carries its own
        masthead, ticker, and colophon, and must not inherit the seasonal
        header, footer, or brand tokens.
      */}
      <Route path="/instrument" element={<Instrument />} />
    </Routes>
  );
}
