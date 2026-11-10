import { skills } from "../data/content";
import SectionHeader from "../components/SectionHeader";
import { FadeUp } from "../components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeader
          index="04"
          name="Skills"
          aside="What I build with"
          titleId="skills-title"
          title={[
            "Technical",
            <>
              <span className="accent">toolkit</span>.
            </>,
          ]}
        />

        <ul className="skills">
          {skills.map(({ category, items }, i) => (
            <FadeUp as="li" className="skills__row grid-12" key={category} y={20}>
              <h3 className="skills__cat" style={{ margin: 0 }}>
                <span aria-hidden="true">{String.fromCharCode(65 + i)}</span>
                {category}
              </h3>
              <ul className="skills__items">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
