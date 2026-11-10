import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Band from "./components/Band";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import useActiveSection from "./hooks/useActiveSection";
import { navLinks } from "./data/content";

const sectionIds = navLinks.map((l) => l.id);

export default function App() {
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Navbar active={active} />

      <main id="main">
        <Hero />
        <Band />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}
