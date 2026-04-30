import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const skills = [
  { category: "Languages",  items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend",   items: ["React", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
  { category: "Backend",    items: ["Node.js", "Express", "Flask", "Spring Boot", "REST APIs"] },
  { category: "Tools",      items: ["Git", "Docker", "PostgreSQL", "MongoDB", "Linux"] },
];

export default function About() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column", gap: 48 }}>

        <motion.div variants={item}>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: 0 }}>
            About Me
          </h2>
        </motion.div>

        <motion.div variants={item} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }} className="about-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              I'm <strong style={{ color: "var(--text)" }}>Aryan Verma</strong>, a junior software engineer currently pursuing my MSc in Computer Science at the University of Birmingham, UK.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              My passion lies in building clean, efficient software. From robust backend APIs to engaging frontend experiences. I'm drawn to the intersection of systems engineering and machine learning.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
              Outside of code, I contribute to open source, read about distributed systems, and constantly tinker with side projects that challenge what I know.
            </p>
          </div>

          {/* Education card */}
          <div className="card" style={{ borderRadius: 20, padding: 28 }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 20, color: "var(--accent)", letterSpacing: "0.12em", margin: "0 0 16px" }}>EDUCATION</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <EduItem
                degree="MSc Computer Science"
                school="University of Birmingham, UK"
                year="2025 – 2026"
                active
              />
              <EduItem
                degree="B.Tech (Hons) in Computer Science with IoT&IS"
                school="Manipal University Jaipur"
                year="2021 – 2025"
                grade="8.19/10"
              />
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={item}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 20 }}>SKILLS</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {skills.map(({ category, items }) => (
              <div key={category} className="card" style={{ borderRadius: 16, padding: 20 }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)", margin: "0 0 12px" }}>{category}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {items.map(s => (
                    <span key={s} style={{ fontSize: 13, color: "var(--text-muted)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      <style>{`.about-grid { @media (max-width: 700px) { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function EduItem({ degree, school, year, grade, active }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{degree}</span>
        {active && (
          <span style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 9999,
            background: "rgba(30,138,255,0.15)", color: "var(--accent)",
            border: "1px solid var(--border)", fontFamily: "'Space Mono', monospace",
          }}>
            Current
          </span>
        )}
      </div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "0 0 2px" }}>{school}</p>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--text-dim)", margin: 0 }}>{year}{grade ? ` · ${grade}` : ""}</p>
    </div>
  );
}
