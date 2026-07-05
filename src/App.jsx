import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Story from "./pages/Story.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const PAGE_META = {
  "/": {
    title: "classHuman AI — driven by LAHA",
    description:
      "Decision-control for human-agentic collaboration. classHuman AI builds the control layer where human warmth meets machine discipline — humans keep final authority.",
  },
  "/product": {
    title: "TACO Loop — classHuman AI",
    description:
      "TACO Loop is a decision-control architecture for unknown-data environments. Take In → Assess → Choose → Operate. Unknown data must increase decision discipline, not model confidence.",
  },
  "/story": {
    title: "Our Story — In Memory of Tonya — classHuman AI",
    description:
      "Where LAHA comes from: the founders' story of classHuman AI, in memory of Tonya. Love All Humans Always.",
  },
  "/about": {
    title: "About — classHuman AI",
    description:
      "A two-person company with a spine. Lawrence and Nicale Jefferson — accessibility-first design, ethical AI systems, humans holding final authority.",
  },
  "/contact": {
    title: "Contact — classHuman AI",
    description:
      "Talk to classHuman AI. No forms, no trackers — just email.",
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
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/story" element={<Story />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
