const pillarIcons = {
  creative: "✦",
  tech: "◈",
  education: "◎",
};
export default function ServiceCard({
  title: title,
  description: description,
  pillar = "creative",
}) {
  return (
    <div className="svc-card">
      <div
        className="svc-card__icon"
        style={{
          background:
            pillar === "creative" ? "#fde8d8" : pillar === "tech" ? "#d6e8e4" : "#faefd0",
        }}
      >
        <span
          style={{
            fontSize: "1.1rem",
          }}
        >
          {pillarIcons[pillar] || "✦"}
        </span>
      </div>
      <span className={`svc-card__tag svc-card__tag--${pillar}`}>{pillar}</span>
      <h3 className="svc-card__title">{title}</h3>
      <p className="svc-card__desc">{description}</p>
    </div>
  );
}
