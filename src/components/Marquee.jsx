const marqueeItems = [
  "Brand Identity",
  "UI/UX Design",
  "Web & App Development",
  "Photography",
  "Videography",
  "Motion Design",
  "Academy Training",
  "Creative Direction",
];
export default function Marquee({ dark = true }) {
  let items = [...marqueeItems, ...marqueeItems];
  return (
    <div className={`marquee ${dark ? "" : "marquee--light"}`} aria-hidden="true">
      <div className="marquee__inner">
        {items.map((label, index) => (
          <span key={index} className="marquee__item">
            <span className="marquee__dot" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
