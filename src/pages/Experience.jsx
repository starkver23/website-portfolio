import { experience } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import { FadeUp } from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeader
          index="02"
          name="Experience"
          aside={`${experience.length} roles · newest first`}
          titleId="experience-title"
          title={["Professional", <span className="outline-text">experience</span>]}
        />

        <ol className="xp">
          {experience.map((job, i) => (
            <FadeUp as="li" className="xp__row grid-12" key={job.company} amount={0.15}>
              <span className="xp__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="xp__meta">
                <span className="xp__company">{job.company}</span>
                {job.period && <span className="xp__period">{job.period}</span>}
                {job.location && <span className="label">{job.location}</span>}
                <span className="xp__tag">{job.type}</span>
              </div>

              <div className="xp__main">
                <h3 className="xp__role">{job.role}</h3>
                {job.points.length > 0 && (
                  <ul className="xp__points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {job.stack.length > 0 && (
                  <dl className="xp__stack">
                    <dt>Stack:</dt>
                    {job.stack.map((tech) => (
                      <dd key={tech}>{tech}</dd>
                    ))}
                  </dl>
                )}
              </div>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
