export default function Scallop({
  from = "transparent",
  to = "var(--bg)",
  flip = false,
}) {
  return (
    <div
      className="scallop-wrap"
      aria-hidden="true"
      style={{
        background: from,
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      <svg className="scallop-svg" viewBox="0 0 240 20" preserveAspectRatio="none">
        <path
          d="M0,20 L0,10 A10,10 0 0 1 20,10 A10,10 0 0 1 40,10 A10,10 0 0 1 60,10 A10,10 0 0 1 80,10 A10,10 0 0 1 100,10 A10,10 0 0 1 120,10 A10,10 0 0 1 140,10 A10,10 0 0 1 160,10 A10,10 0 0 1 180,10 A10,10 0 0 1 200,10 A10,10 0 0 1 220,10 A10,10 0 0 1 240,10 L240,20 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
