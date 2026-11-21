import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <section
      className="bg-chrome"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="wrap">
        <p
          className="label"
          style={{
            color: "var(--brand-copper)",
            marginBottom: "0.75rem",
            justifyContent: "center",
            display: "flex",
          }}
        >
          404
        </p>
        <h1
          className="display display--md"
          style={{
            color: "var(--on-chrome)",
            marginBottom: "1rem",
          }}
        >
          This page doesn’t exist.
        </h1>
        <p
          style={{
            color: "var(--on-chrome-mute)",
            marginBottom: "2rem",
          }}
        >
          Let’s get you back somewhere that does.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back Home →
        </Link>
      </div>
    </section>
  );
}
