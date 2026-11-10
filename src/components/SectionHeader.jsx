import { RevealLines } from "./Reveal";

export default function SectionHeader({ index, name, aside, title, titleId, showNumber = true }) {
  return (
    <header className="shead">
      <div className="shead__bar">
        <span className="shead__index">
          <span>(</span>
          {index}
          <span>)</span>
        </span>
        <span className="shead__name label">{name}</span>
        {aside && <span className="shead__aside label">{aside}</span>}
      </div>
      {title && <RevealLines as="h2" id={titleId} className="shead__title" lines={title} />}
      {showNumber && (
        <span className="shead__num" aria-hidden="true">
          {index}
        </span>
      )}
    </header>
  );
}
