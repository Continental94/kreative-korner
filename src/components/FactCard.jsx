import CountUp from "./CountUp";
export default function FactCard({
  value: value,
  prefix: prefix,
  suffix: suffix,
  label: label,
  pillar = "creative",
}) {
  return (
    <div className={`fact-card fact-card--${pillar}`}>
      <span className="fact-card__value">
        <CountUp target={value} prefix={prefix} suffix={suffix} />
      </span>
      <span className="fact-card__label">{label}</span>
    </div>
  );
}
