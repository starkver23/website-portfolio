import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects, profile } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import { FadeUp, RevealLines } from "../components/Reveal";
import { ModellingMock, RadarMock, TrackerArchitecture, TrackerMock } from "../components/Mockups";

const pad = (n) => String(n).padStart(2, "0");

const visuals = {
  codeclassroom: { variant: "a", Mock: ModellingMock },
  "job-tracker": { variant: "b", Mock: TrackerMock, extra: TrackerArchitecture },
  "job-radar": { variant: "c", Mock: RadarMock },
};

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeader
          index="03"
          name="Projects"
          aside="Selected work & case studies"
          titleId="projects-title"
          title={[
            "Selected",
            <>
              work<span className="accent-v">.</span>
            </>,
          ]}
        />

        {featuredProjects.map((project, i) => (
          <CaseStudy key={project.id} project={project} number={i + 1} total={featuredProjects.length} />
        ))}

        <OtherWork />
      </div>
    </section>
  );
}

function CaseStudy({ project, number, total }) {
  const { variant, Mock, extra: Extra } = visuals[project.id];
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  // Case 02 sets its final word in the accent colour.
  const words = project.title.split(" ");
  const title =
    variant === "b"
      ? [
          <>
            {words.slice(0, -1).join(" ")} <em>{words.at(-1)}</em>
          </>,
        ]
      : [project.title];

  const visual = (
    <motion.figure className="case__visual" style={{ y }}>
      <Mock />
      <figcaption className="label">
        <span>Fig. {pad(number)}: {project.title}</span>
        <span>Illustrative mock-up, not a screenshot</span>
      </figcaption>
      {Extra && (
        <FadeUp>
          <Extra />
        </FadeUp>
      )}
    </motion.figure>
  );

  const stack = (
    <ul className="case__stack" aria-label="Technologies">
      {project.stack.map((tech) => (
        <li className="chip" key={tech}>
          {tech}
        </li>
      ))}
    </ul>
  );

  const links =
    project.links.length > 0 ? (
      <div className="case__links">
        {project.links.map((link, i) => (
          <a
            key={link.href}
            className={`btn ${i === 0 ? "" : "btn--ghost"}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    ) : (
      <p className="case__note">
        No public link yet.{" "}
        <a className="link-line" href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title)}`}>
          Ask me for a walkthrough
        </a>
      </p>
    );

  const highlightItems = project.highlights.map((h) => (
    <li key={h.title}>
      <div>
        <strong>{h.title}</strong>
        <p>{h.text}</p>
      </div>
    </li>
  ));

  return (
    <article ref={ref} className={`case case--${variant}`} aria-labelledby={`${project.id}-title`}>
      <div className="case__head">
        <span className="case__index">
          Case <span>{pad(number)}</span> / {pad(total)}
        </span>
        <span className="label">{project.kind}</span>
      </div>

      <RevealLines as="h3" id={`${project.id}-title`} className="case__title" lines={title} />

      {variant === "c" ? (
        <div className="grid-12 case__body">
          {visual}
          <FadeUp className="case__lede">
            <p className="case__summary">{project.summary}</p>
            {stack}
            {links}
          </FadeUp>
          <FadeUp as="ol" className="case__highlights" delay={0.1}>
            {highlightItems}
          </FadeUp>
        </div>
      ) : (
        <div className="grid-12 case__body">
          {visual}
          <FadeUp className="case__text">
            <p className="case__summary">{project.summary}</p>
            <ol className="case__highlights">{highlightItems}</ol>
            {stack}
            {links}
          </FadeUp>
        </div>
      )}
    </article>
  );
}

function OtherWork() {
  return (
    <div className="index">
      <div className="index__head">
        <h3>Other work</h3>
        <span className="label">From the CV & earlier portfolio</span>
      </div>
      <ul className="index__list">
        {otherProjects.map((p, i) => {
          const isRepo = p.href?.includes("github.com");
          return (
            <FadeUp as="li" key={p.title} className={`index__row ${p.href ? "has-link" : ""}`} y={16}>
              <div className="index__inner">
                <span className="index__no label">({pad(i + 1)})</span>
                <span className="index__title">{p.title}</span>
                <p className="index__summary">{p.summary}</p>
                <div className="index__aside">
                  <span className="label">{p.stack.join(" · ")}</span>
                  {p.href ? (
                    <a className="index__arrow" href={p.href} target="_blank" rel="noreferrer">
                      {isRepo ? "Code" : "Live"} <ArrowUpRight size={16} />
                      <span className="visually-hidden">: {p.title}</span>
                    </a>
                  ) : (
                    <span className="label">{p.status}</span>
                  )}
                </div>
              </div>
            </FadeUp>
          );
        })}
      </ul>
    </div>
  );
}
