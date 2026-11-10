import { motion } from "framer-motion";
import { Lock, MousePointer2 } from "lucide-react";
import { EASE } from "./Reveal";

// CSS-drawn, illustrative mock-ups of the featured projects.
// They are not screenshots, and every figure that uses them says so.

function Chrome({ tabs, children }) {
  return (
    <div className="mock__bar">
      <span className="mock__dots">
        <i />
        <i />
        <i />
      </span>
      {tabs.map((tab, i) => (
        <span key={tab} className={`mock__tab ${i === 0 ? "is-on" : ""}`}>
          {tab}
        </span>
      ))}
      <span className="mock__spacer" />
      {children}
    </div>
  );
}

export function ModellingMock() {
  return (
    <div className="mock" aria-hidden="true">
      <Chrome tabs={["classroom.jdl", "Canvas", "Generated"]}>
        <span className="mock__pill">Generate app →</span>
      </Chrome>
      <div className="mm">
        <pre className="mm__code">
          <span className="c">{"// domain model\n"}</span>
          <span className="k">entity</span> Course {"{\n"}
          {"  title "}
          <span className="t">String</span> required{"\n"}
          {"  level "}
          <span className="t">Level</span>
          {"\n}\n"}
          <span className="k">entity</span> Student {"{\n"}
          {"  name "}
          <span className="t">String</span> required{"\n}\n"}
          <span className="k">entity</span> Lesson {"{\n"}
          {"  topic "}
          <span className="t">String</span>
          {"\n}\n"}
          <span className="k">relationship</span> OneToMany {"{\n"}
          {"  Course to Lesson\n}\n"}
          <span className="k">relationship</span> ManyToMany {"{\n"}
          {"  Course to Student\n}"}
        </pre>
        <div className="mm__canvas">
          <svg className="mm__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M45 20 H52 V62 H56" />
            <path className="dashed" d="M22 37 V56" />
          </svg>
          <div className="mm__entity is-active" style={{ top: "9%", left: "8%" }}>
            <header>Course</header>
            <ul>
              <li>
                title <span>String</span>
              </li>
              <li>
                level <span>Level</span>
              </li>
            </ul>
          </div>
          <div className="mm__entity" style={{ top: "55%", left: "56%" }}>
            <header>Student</header>
            <ul>
              <li>
                name <span>String</span>
              </li>
            </ul>
          </div>
          <div className="mm__entity" style={{ top: "57%", left: "6%" }}>
            <header>Lesson</header>
            <ul>
              <li>
                topic <span>String</span>
              </li>
            </ul>
          </div>
          <MousePointer2 className="mm__cursor" style={{ top: "30%", left: "44%" }} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

const trackerColumns = [
  { stage: "Applied", cards: ["Graduate Software Engineer", "Junior Backend Developer"] },
  { stage: "Assessment", cards: ["Software Engineer I"] },
  { stage: "Interview", cards: ["Associate Engineer"], auto: 0 },
  { stage: "Offer", cards: [] },
];

export function TrackerMock() {
  return (
    <div className="mock" aria-hidden="true">
      <Chrome tabs={["Applications", "Inbox sync"]}>
        <span className="tm__lock">
          <Lock size={11} strokeWidth={2.5} /> Stored on this device
        </span>
      </Chrome>
      <div className="tm__board">
        {trackerColumns.map((col) => (
          <div className="tm__col" key={col.stage}>
            <header>
              {col.stage}
              <span>{col.cards.length}</span>
            </header>
            {col.cards.map((title, i) => (
              <div className={`tm__card ${col.auto === i ? "is-auto" : ""}`} key={title}>
                <strong>{title}</strong>
                <span className="skel" />
                <span className="skel" />
                {col.auto === i && <span className="tm__auto">Auto-classified from email</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrowRightSmall() {
  return (
    <svg className="arch__arrow" viewBox="0 0 28 12" aria-hidden="true">
      <path d="M0 6 H26 M21 1 L26 6 L21 11" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Data-flow diagram for the job tracker. Unlike the mock-ups, this describes
// the real architecture: local IndexedDB via Dexie, optional read-only Gmail.
export function TrackerArchitecture() {
  return (
    <div className="arch" role="img" aria-label="Architecture: the React UI reads and writes through Dexie to IndexedDB on the user's device. Gmail is an optional read-only source feeding a rule-based classifier.">
      <div className="arch__node">
        <strong>React UI</strong>
        <span>In the browser</span>
      </div>
      <ArrowRightSmall />
      <div className="arch__node">
        <strong>Dexie</strong>
        <span>Data layer</span>
      </div>
      <ArrowRightSmall />
      <div className="arch__node is-store">
        <strong>IndexedDB</strong>
        <span>On this device</span>
      </div>
      <div className="arch__ext">
        <strong>Optional</strong>
        Gmail API · read-only scope · your own OAuth client → rule-based stage classifier
      </div>
    </div>
  );
}

const radarRows = [
  { title: "Graduate Software Engineer", place: "London", source: "Greenhouse", score: 0.94 },
  { title: "Junior Backend Engineer", place: "Manchester", source: "Adzuna", score: 0.83 },
  { title: "Software Engineer I", place: "Bengaluru", source: "Lever", score: 0.76 },
  { title: "Graduate Java Developer", place: "Birmingham", source: "Reed", score: 0.64 },
  { title: "Associate Software Engineer", place: "Prague", source: "JSearch", score: 0.55 },
];

export function RadarMock() {
  return (
    <div className="mock rm" aria-hidden="true">
      <Chrome tabs={["Ranked", "Saved", "Routines"]}>
        <span className="mock__pill" style={{ background: "var(--vermilion)" }}>
          5 sources
        </span>
      </Chrome>
      <div className="rm__body">
        <div className="rm__side">
          <h4>Region</h4>
          <div className="rm__chips">
            <span className="rm__chip is-on">UK</span>
            <span className="rm__chip is-on">India</span>
            <span className="rm__chip is-on">Czech Republic</span>
          </div>
          <h4>Sources</h4>
          <ul className="rm__sources">
            {["JSearch", "Adzuna", "Reed", "Greenhouse", "Lever"].map((s) => (
              <li key={s} className="is-on">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <ol className="rm__list">
          {radarRows.map((row, i) => (
            <li className="rm__row" key={row.title}>
              <span>{i + 1}</span>
              <div className="rm__title">
                <strong>{row.title}</strong>
                <span className="skel" />
              </div>
              <span>{row.place}</span>
              <span className="rm__src">{row.source}</span>
              <span className="rm__score">
                <motion.i
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: row.score }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.08 }}
                />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
