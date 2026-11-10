import { about } from "../data/content";

// Decorative ticker of interests. The same list is readable in the About section.
export default function Band() {
  const items = [...about.interests, ...about.interests];
  return (
    <div className="band" aria-hidden="true">
      <div className="band__track">
        {items.map((item, i) => (
          <span className="band__item" key={i}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
