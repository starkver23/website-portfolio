import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/content";
import { EASE, FadeUp } from "./Reveal";

const nameLine = {
  hidden: { y: "105%" },
  show: (i) => ({ y: "0%", transition: { duration: 1.1, ease: EASE, delay: 0.15 + i * 0.12 } }),
};

export default function Hero() {
  const reduce = useReducedMotion();

  // The two name lines drift apart slightly as the page scrolls.
  const { scrollY } = useScroll();
  const driftLeft = useTransform(scrollY, [0, 700], ["0%", reduce ? "0%" : "-7%"]);
  const driftRight = useTransform(scrollY, [0, 700], ["0%", reduce ? "0%" : "7%"]);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true">
        <div className="wrap">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>

      <div className="wrap" style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
        <FadeUp className="hero__meta label" y={12} delay={0.05}>
          <span>Portfolio ©{new Date().getFullYear()}</span>
          <span>
            <strong>Based in {profile.location}</strong> &nbsp;/&nbsp; Backend &amp; full-stack engineering
          </span>
          <span className="hero__status">{profile.availability}</span>
        </FadeUp>

        <div style={{ position: "relative" }}>
          <h1 className="hero__name" id="hero-title">
            <span className="visually-hidden">
              {profile.name}: {profile.roles.join(", ")}
            </span>
            <span className="hero__name-line" aria-hidden="true">
              <motion.span style={{ x: driftLeft }}>
                <motion.span style={{ display: "inline-block" }} variants={nameLine} custom={0} initial="hidden" animate="show">
                  {profile.firstName}
                </motion.span>
              </motion.span>
            </span>
            <span className="hero__name-line hero__name-line--indent" aria-hidden="true">
              <motion.span style={{ x: driftRight }}>
                <motion.span style={{ display: "inline-block" }} variants={nameLine} custom={1} initial="hidden" animate="show">
                  {profile.lastName}
                  <i className="hero__name-dot" />
                </motion.span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="hero__badge"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
          >
            <MagneticBadge disabled={reduce} />
          </motion.div>
        </div>

        <div className="hero__bottom grid-12">
          <FadeUp as="ul" className="hero__roles" delay={0.7} y={16}>
            {profile.roles.map((role, i) => (
              <li key={role}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {role}
              </li>
            ))}
          </FadeUp>

          <FadeUp as="p" className="hero__intro" delay={0.8} y={16}>
            I'm a Computer Science postgraduate from the <em>University of Birmingham</em> who enjoys building
            practical software solutions, exploring backend engineering and solving real-world problems through
            technology.
          </FadeUp>

          <FadeUp as="ul" className="hero__social" delay={0.9} y={16}>
            <li>
              <a className="link-line" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
            </li>
            <li>
              <a className="link-line" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
            </li>
            <li>
              <a className="link-line" href={`mailto:${profile.email}`}>
                Email <ArrowUpRight size={15} />
              </a>
            </li>
          </FadeUp>

          <FadeUp className="hero__scroll label" delay={1} y={0} aria-hidden="true">
            <span className="hero__scroll-line" />
            Scroll
          </FadeUp>

          <FadeUp className="hero__cta" delay={1} y={16}>
            <a className="btn btn--cobalt btn--down" href="#projects">
              View projects <ArrowDown size={18} />
            </a>
            <a className="btn btn--ghost btn--down" href={profile.cv} download>
              Download CV <Download size={18} />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// Rotating "selected work" badge that leans towards the pointer.
function MagneticBadge({ disabled }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });

  const onMove = (e) => {
    if (disabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      href="#projects"
      className="badge"
      aria-label="Jump to selected work"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <svg className="badge__ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text>
          <textPath href="#badge-circle" textLength="462" lengthAdjust="spacing">
            Selected work • View projects • Selected work • View projects •
          </textPath>
        </text>
      </svg>
      <span className="badge__arrow" aria-hidden="true">
        <ArrowDown strokeWidth={1.6} />
      </span>
    </motion.a>
  );
}
