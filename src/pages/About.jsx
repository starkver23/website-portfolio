import { about } from "../data/content";
import profilePic from "../assets/pic1.jpg";
import SectionHeader from "../components/SectionHeader";
import { FadeUp } from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeader
          index="01"
          name="About"
          aside="Background & interests"
          titleId="about-title"
          title={[
            "Practical software,",
            <>
              built <span className="accent">end to end.</span>
            </>,
          ]}
        />

        <div className="grid-12 about__body">
          <FadeUp as="figure" className="about__figure">
            <div className="about__photo">
              <img src={profilePic} alt="Aryan Verma standing on Tower Bridge, London" loading="lazy" width="1181" height="1181" />
            </div>
            <figcaption className="label">
              <span>Fig. 01</span>
              <span>London</span>
            </figcaption>
          </FadeUp>

          <div className="about__text">
            <FadeUp as="p" className="about__lead">
              I like seeing a system work end to end, <em>from the data model and the API</em> through to the
              interface someone actually uses.
            </FadeUp>

            <FadeUp className="about__paras" delay={0.1}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </FadeUp>

            <FadeUp as="dl" className="about__facts" delay={0.15}>
              {about.facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="label">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </FadeUp>

            <div className="interests">
              <h3 className="label" style={{ margin: 0 }}>
                What I'm interested in
              </h3>
              <ul className="interests__list">
                {about.interests.map((interest, i) => (
                  <FadeUp as="li" className="interests__item" key={interest} delay={i * 0.05} y={16}>
                    {interest}
                  </FadeUp>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
