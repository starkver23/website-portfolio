import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Download, Moon, Sun } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { EASE } from "./Reveal";

const pad = (n) => String(n).padStart(2, "0");

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // index.html has already applied any saved theme, so read it back from <html>.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#141210" : "#f3eee4");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage blocked (private mode): the theme still works for this visit.
    }
  }, [theme]);

  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a href="#home" className="nav__brand" onClick={close} aria-label="Aryan Verma, back to top">
            <span className="nav__mark" aria-hidden="true" />
            {profile.name}
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {navLinks.slice(1).map(({ id, label }, i) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a href={`#${id}`} className="nav__link" aria-current={isActive ? "true" : undefined}>
                      {label}
                      <sup>{pad(i + 1)}</sup>
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="nav__indicator"
                          transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav__actions">
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} strokeWidth={1.8} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} strokeWidth={1.8} />
            </a>
            <a className="btn nav__cv btn--down" href={profile.cv} download>
              CV <Download size={15} strokeWidth={2.2} />
            </a>
          </div>

          <button
            type="button"
            className="icon-link nav__theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Light theme" : "Dark theme"}
          >
            {isDark ? <Sun size={19} strokeWidth={1.8} /> : <Moon size={19} strokeWidth={1.8} />}
          </button>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span className="nav__burger" aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ul className="menu__list">
                {navLinks.map(({ id, label }, i) => (
                  <li key={id}>
                    <motion.a
                      href={`#${id}`}
                      className="menu__link"
                      aria-current={active === id ? "true" : undefined}
                      onClick={close}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      <span>{pad(i)}</span>
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu__foot">
              <a className="btn btn--down" href={profile.cv} download>
                Download CV <Download size={16} />
              </a>
              <a className="link-line" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link-line" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="link-line" href={`mailto:${profile.email}`}>
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
