import { motion } from "framer-motion";
import { Download, Linkedin, ArrowRight } from "lucide-react";
import cvFile from "./AryanResume.pdf"; 

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ onNavigate }) {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        padding: "40px 24px 80px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* LEFT — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="profile-ring" style={{ width: 280, height: 280 }}>
            <div
              className="profile-inner"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src="/src/components/pic1.jpg"
                alt="Aryan Verma"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Intro */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <motion.div variants={item}>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textShadow: "0 0 12px var(--glow)",
              }}
            >
              &gt; hello, world
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1.1,
              color: "var(--text)",
              margin: 0,
            }}
          >
            I'm{" "}
            <span
              style={{
                color: "var(--accent)",
                textShadow:
                  "0 0 30px var(--glow), 0 0 60px var(--glow-soft)",
              }}
            >
              Aryan
            </span>
            <br />
            <span style={{ color: "var(--accent2)" }}>Verma</span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--text-muted)",
              margin: 0,
              maxWidth: 460,
            }}
          >
            A Junior Software Engineer & MSc Computer Science student at the
            University of Birmingham. I build clean, performant web applications
            and love exploring machine learning, backend systems, and open
            source.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            variants={item}
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            {["Python", "React", "Node.js", "Java", "SQL", "ML"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  padding: "4px 12px",
                  borderRadius: 9999,
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  background: "rgba(30,138,255,0.06)",
                  letterSpacing: "0.05em",
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* ✅ DOWNLOAD CV */}
            <motion.a
              href={cvFile}
              download="Aryan_Verma_CV.pdf"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 12,
                fontSize: 14,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Download size={16} />
              Download CV
            </motion.a>

            {/* LINKEDIN */}
            <motion.a
              href="https://linkedin.com/in/aryan-verma-soft-dev"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 20px",
                borderRadius: 12,
                fontSize: 14,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <LinkedInIcon />
              LinkedIn
            </motion.a>

            {/* NAVIGATION */}
            <motion.button
              onClick={() => onNavigate("projects")}
              whileHover={{ x: 4 }}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-dim)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              View projects <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div:first-child { order: -1; }
          .hero-grid p, .hero-grid h1 { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}