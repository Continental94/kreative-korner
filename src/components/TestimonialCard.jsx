function getInitials(name) {
  let parts = name.trim().split(/\s+/);
  return (
    (parts[0]?.[0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")
  ).toUpperCase();
}
export default function TestimonialCard({
  quote,
  name,
  role,
  pillar = "creative",
  rating = 5,
  rotate = 0,
}) {
  return (
    <div
      className={`testi-card testi-card--${pillar}`}
      style={{
        "--rotate": `${rotate}deg`,
      }}
    >
      <span className="testi-card__quote" aria-hidden="true">
        “
      </span>
      <p className="testi-card__text">{quote}</p>
      <div className="testi-card__stars" aria-label={`${rating} stars`}>
        {"★".repeat(rating)}
      </div>
      <div className="testi-card__footer">
        <span className="testi-card__avatar">{getInitials(name)}</span>
        <div>
          <span className="testi-card__name">{name}</span>
          <span className="testi-card__role">{role}</span>
        </div>
      </div>
    </div>
  );
}
