import { certifications, education } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import { FadeUp } from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeader
          index="05"
          name="Education"
          aside="UK · Czech Republic · India"
          titleId="education-title"
          title={["Academic", <span className="outline-text">background</span>]}
        />

        <ol className="edu">
          {education.map((item, i) => (
            <FadeUp as="li" className="edu__item" key={item.degree} delay={i * 0.1}>
              <span className="edu__years" aria-hidden="true">
                {item.years}
              </span>
              <h3 className="edu__degree">{item.degree}</h3>
              <p className="edu__inst">{item.institution}</p>
              <p className="edu__place">
                {item.place} · {item.period}
              </p>
              {item.notes.length > 0 && (
                <ul className="edu__notes">
                  {item.notes.map((note) => (
                    <li className="chip" key={note}>
                      {note}
                    </li>
                  ))}
                </ul>
              )}
              {item.modules && (
                <p className="edu__modules">
                  <span className="label">Modules</span>
                  {item.modules}
                </p>
              )}
            </FadeUp>
          ))}
        </ol>

        <FadeUp className="certs grid-12">
          <h3 className="label" style={{ margin: 0 }}>
            Certifications
          </h3>
          <ul>
            {certifications.map((c) => (
              <li key={c.title}>
                {c.title}
                <span>{c.issuer}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
