import { motion } from "framer-motion";

const experiences = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technologies",
    period: "Jul 2025 – Sep 2025",
    location: "Pune, India",
    type: "Full-Time",
    points: [
      "Completed structured enterprise onboarding and technical training covering full-stack development with React, Spring Boot, and PostgreSQL as part of the Programmer Analyst induction programme.",
      "Transitioned out of role after two months to commence MSc in Advanced Computer Science at the University of Birmingham, UK.",
    ],
    stack: ["React.js", "SpringBoot", "Postman", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "ASR Aviation",
    period: "Nov 2024 – May 2025",
    location: "Jaipur, India",
    type: "Internship",
    points: [
      "Built a full-stack web platform for a private aviation company using React.js, Node.js, and Tailwind CSS, supporting a projected user base of 2,000–3,000 monthly users.",
      "Delivered 5+ core frontend modules including flight booking, operator listings, and admin dashboards, accelerating development through reusable component architecture.",
      "Architected a backend infrastructure deployed on VPS with AWS integration, designed to handle concurrent user sessions at scale.",
      "Participated in Agile testing and release cycles across the full SDLC, contributing to on-schedule delivery of core modules.",
    ],
    stack: ["React.js", "AWS", "Node.js"],
  },
  {
    role: "Backend Developer",
    company: "Zummit Infolabs",
    period: "Jul 2024 – Dec 2024",
    location: "Remote",
    type: "Internship",
    points: [
      "Developed RESTful APIs for a backend service using Python and Node.js, working within a distributed team following structured knowledge transfer and onboarding.",
      "Integrated backend endpoints with React-based frontend components, contributing to smoother UI-API communication across the application.",
      "Gained hands-on experience with backend architecture patterns, API design, and collaborative development workflows in a remote engineering environment.",
    ],
    stack: ["Python", "FlasAPI", "React.js"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column", gap: 48 }}>

        <motion.div variants={item}>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Experience</h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: 24 }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 0, top: 8, bottom: 8,
            width: 1, background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={item} style={{ position: "relative" }}>
                {/* Timeline dot */}
                <div style={{
                  position: "absolute", left: -28, top: 8,
                  width: 10, height: 10, borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--glow), 0 0 20px var(--glow-soft)",
                }} />

                <div className="card" style={{ borderRadius: 20, padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)", margin: "0 0 4px" }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--accent)", margin: 0, fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--text-dim)", margin: "0 0 4px" }}>{exp.period}</p>
                      <span style={{
                        fontSize: 11, padding: "3px 10px", borderRadius: 9999,
                        background: "rgba(30,138,255,0.1)", color: "var(--accent)",
                        border: "1px solid var(--border)", fontFamily: "'Space Mono', monospace",
                      }}>{exp.type}</span>
                    </div>
                  </div>

                  <ul style={{ margin: "0 0 16px", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>{p}</li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {exp.stack.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 11, padding: "3px 10px", borderRadius: 9999,
                        border: "1px solid var(--border)", color: "var(--text-dim)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
