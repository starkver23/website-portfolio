import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export default function App() {
  const [theme, setTheme] = useState("blue"); // "blue" | "white"
  const [page, setPage]   = useState("home"); // "home"|"about"|"experience"|"projects"|"contact"

  const toggleTheme = () => setTheme(t => t === "blue" ? "white" : "blue");

  return (
    <div className={theme === "white" ? "theme-white" : ""} style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      {/* Ambient glow blobs */}
      <div style={{
        position: "fixed", top: "10%", left: "15%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, var(--glow-soft) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0, transition: "background 0.4s"
      }} />
      <div style={{
        position: "fixed", bottom: "15%", right: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, var(--glow-soft) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0, transition: "background 0.4s"
      }} />

      {/* Dot grid background */}
      <div className="dot-grid" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar
          currentPage={page}
          onNavigate={setPage}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={page}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {page === "home"       && <Hero onNavigate={setPage} />}
            {page === "about"      && <About />}
            {page === "experience" && <Experience />}
            {page === "projects"   && <Projects />}
            {page === "contact"    && <Contact />}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
