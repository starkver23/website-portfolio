import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { profile } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import { FadeUp, RevealLines } from "../components/Reveal";

const [mailUser, mailDomain] = profile.email.split("@");

const links = [
  { label: "GitHub", value: "starkver23", href: profile.github },
  { label: "LinkedIn", value: "aryan-verma-soft-dev", href: profile.linkedin },
  { label: "Portfolio", value: "vermacodes.me", href: profile.portfolio },
  { label: "Curriculum vitae", value: "Download PDF", href: profile.cv, download: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="contact">
      <section id="contact" className="wrap" aria-labelledby="contact-title">
        <SectionHeader index="06" name="Contact" aside={profile.availability} showNumber={false} />

        <RevealLines
          as="h2"
          id="contact-title"
          className="contact__title"
          lines={["Let's", <span className="outline-text">talk.</span>]}
        />

        <div className="grid-12 contact__grid">
          <FadeUp as="p" className="contact__lead">
            Open to graduate and junior software developer roles, and conversations about backend and full-stack work.
            Email is the quickest way to reach me.
          </FadeUp>

          <FadeUp className="contact__mail" delay={0.1}>
            <span className="label">Write to</span>
            <br />
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {mailUser}@<wbr />
              {mailDomain}
            </a>
            <div className="contact__actions">
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me <Mail size={18} />
              </a>
              <button type="button" className="btn btn--ghost" onClick={copyEmail} aria-live="polite">
                {copied ? "Copied" : "Copy address"}
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </FadeUp>
        </div>

        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.download ? { download: link.download } : { target: "_blank", rel: "noreferrer" })}
              >
                <span className="label">{link.label}</span>
                <strong>
                  {link.value} {link.download ? <ArrowDown size={20} /> : <ArrowUpRight size={20} />}
                </strong>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="wrap footer label">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <button type="button" className="link-line label" onClick={() => window.scrollTo({ top: 0 })}>
          Back to top <ArrowUp size={14} />
        </button>
      </footer>
    </div>
  );
}
