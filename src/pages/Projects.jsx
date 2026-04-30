import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SwopIt",
    desc: "Developing an AI-enabled peer-to-peer e-commerce platform for university students, with planned AWS deployment. Currently in active development.",
    stack: ["React.js", "SpringBoot", "PostgreSQL", "AWS"],
    github: "",
    live: null,
    featured: true,
    icon: "🧑🏻‍💻",
  },
  {
    title: "Self-Driving Car Prototype ",
    desc: "Built a miniature autonomous vehicle using Arduino and ultrasonic sensors, achieving immediate real-time obstacle detection and full stop response coded in C++.",
    stack: ["Arduino Uno", "C++", "IoT Sensors"],
    github: "https://github.com/starkver23/Self-Driving-Car",
    live: null,
    icon: "🏎️",
  },
  {
    title: "Savings Goal Tracker",
    desc: "Built an interactive savings tracker with real-time visual analytics, placing 3rd out of 50 teams across 3 rounds of an IEEE university challenge with 95% goal-tracking accuracy.",
    stack: ["React", "ChartJs", "Tailwind CSS"],
    github: "https://do-it-kappa-five.vercel.app/",
    live: null,
    icon: "￡",
  },
  // {
  //   title: "Budget Tracker CLI",
  //   desc: "Terminal-based personal finance tracker with category breakdowns, trend visualisation, and CSV export.",
  //   stack: ["Python", "Rich", "SQLite"],
  //   github: "https://github.com/aryanverma",
  //   live: null,
  //   icon: "📊",
  // },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "60px 24px" }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column", gap: 48 }}>

        <motion.div variants={item}>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Projects</h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 16 }}>
            Things I've built, from coursework to personal side projects.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="card"
              style={{
                borderRadius: 20, padding: 28,
                display: "flex", flexDirection: "column", gap: 14,
                border: p.featured ? "1px solid var(--border-bright)" : "1px solid var(--border)",
                boxShadow: p.featured ? "0 0 30px var(--glow-soft)" : "none",
                position: "relative", overflow: "hidden",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {p.featured && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  fontSize: 10, padding: "3px 10px", borderRadius: 9999,
                  background: "rgba(30,138,255,0.15)", color: "var(--accent)",
                  border: "1px solid var(--border)", fontFamily: "'Space Mono', monospace",
                }}>
                  Featured
                </div>
              )}

              <div style={{ fontSize: 28 }}>{p.icon}</div>

              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", margin: "0 0 8px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                {p.stack.map(t => (
                  <span key={t} style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10, padding: "2px 8px", borderRadius: 9999,
                    border: "1px solid var(--border)", color: "var(--text-dim)",
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 13, color: "var(--text-muted)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 13, color: "var(--text-muted)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
