import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { label: "About",      page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects",   page: "projects" },
  { label: "Contact",    page: "contact" },
];

export default function Navbar({ currentPage, onNavigate, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ padding: "24px 16px", display: "flex", justifyContent: "center", position: "relative", zIndex: 50 }}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`nav-pill ${menuOpen ? "nav-mobile-open" : ""}`}
        style={{
          borderRadius: 9999,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Name / logo */}
        <button
          onClick={() => { onNavigate("home"); setMenuOpen(false); }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: "var(--accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.03em",
            textShadow: "0 0 16px var(--glow)",
            marginRight: 8,
            transition: "color 0.3s",
          }}
        >
          AV
        </button>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(({ label, page }) => (
            <NavLink key={page} label={label} active={currentPage === page} onClick={() => onNavigate(page)} />
          ))}

          {/* GitHub button */}
          <motion.a
            href="https://github.com/starkver23"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px",
              borderRadius: 9999,
              background: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              border: "none",
              cursor: "pointer",
              marginLeft: 8,
              boxShadow: "0 0 16px var(--glow)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.3s",
            }}
          >
            <Github size={14} />
            GitHub
          </motion.a>

          {/* Theme toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: "none" }} className="mobile-menu-btn">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", padding: 4 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "absolute",
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--nav-bg)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              backdropFilter: "blur(20px)",
              minWidth: 200,
              alignItems: "center",
            }}
          >
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => { onNavigate(page); setMenuOpen(false); }}
                style={{
                  background: "none", border: "none",
                  color: currentPage === page ? "var(--accent)" : "var(--text-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15, cursor: "pointer",
                  textShadow: currentPage === page ? "0 0 10px var(--glow)" : "none",
                }}
              >
                {label}
              </button>
            ))}
            <a
              href="https://github.com/aryanverma"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 16px",
                borderRadius: 9999,
                background: "var(--accent)",
                color: "var(--bg)",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: 13,
                textDecoration: "none",
                boxShadow: "0 0 16px var(--glow)",
              }}
            >
              <Github size={14} /> GitHub
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </motion.div>
        )}
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function NavLink({ label, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{
        background: active ? "rgba(30,138,255,0.12)" : "none",
        border: active ? "1px solid var(--border)" : "1px solid transparent",
        borderRadius: 9999,
        padding: "6px 14px",
        color: active ? "var(--accent)" : "var(--text-muted)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.25s",
        textShadow: active ? "0 0 10px var(--glow)" : "none",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </motion.button>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      title={theme === "blue" ? "Switch to White" : "Switch to Blue"}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "50%",
        width: 34, height: 34,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--accent)",
        cursor: "pointer",
        marginLeft: 4,
        boxShadow: "0 0 10px var(--glow-soft)",
        transition: "all 0.3s",
      }}
    >
      {theme === "blue" ? <Sun size={15} /> : <Moon size={15} />}
    </motion.button>
  );
}
