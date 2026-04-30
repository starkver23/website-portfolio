import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [sent, setSent]     = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Integrate with EmailJS, Formspree, etc.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--surface)",
    color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    backdropFilter: "blur(8px)",
  };

  return (
    <section style={{ maxWidth: 840, margin: "0 auto", padding: "60px 24px 100px" }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column", gap: 48 }}>

        <motion.div variants={item}>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Get in Touch</h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", marginTop: 16, lineHeight: 1.7 }}>
            Open to grad roles, FTE, internships, and interesting conversations. Drop me a message.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }} className="contact-grid">

          {/* Social links */}
          <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", margin: 0 }}>
              FIND ME AT
            </p>
            {[
              { icon: <Mail size={16} />, label: "aryanverma2035@gmail.com", href: "mailto:aryanverma2035@gmail.com" },
              { icon: <Linkedin size={16} />, label: "LinkedIn", href: "www.linkedin.com/in/aryan-verma-soft-dev" },
              { icon: <Github size={16} />, label: "GitHub", href: "https://github.com/starkver23" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="card"
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 18px", borderRadius: 14,
                  color: "var(--text-muted)", textDecoration: "none",
                  fontSize: 13, transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >
                <span style={{ color: "var(--accent)" }}>{icon}</span>
                {label}
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form variants={item} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "var(--border-bright)"; e.target.style.boxShadow = "0 0 12px var(--glow-soft)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <div>
                <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "var(--border-bright)"; e.target.style.boxShadow = "0 0 12px var(--glow-soft)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>
                MESSAGE
              </label>
              <textarea
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                onFocus={e => { e.target.style.borderColor = "var(--border-bright)"; e.target.style.boxShadow = "0 0 12px var(--glow-soft)"; }}
                onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "13px 28px", borderRadius: 12, fontSize: 14, cursor: "pointer",
                width: "fit-content",
              }}
            >
              {sent ? "Message Sent ✓" : <><Send size={15} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>

      </motion.div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.4fr; }
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
