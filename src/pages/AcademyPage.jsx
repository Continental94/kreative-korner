import logoMark from "../assets/mark-white.png";
import { Link } from "react-router-dom";
import { academyFeatures, academySteps, academyTracks } from "../data/siteData";
export default function AcademyPage() {
  return (
    <>
      <section className="page-hdr bg-chrome">
        <div className="wrap">
          <img src={logoMark} alt="" className="page-hdr__mark" />
          <p
            className="label"
            style={{
              color: "var(--brand-gold)",
              marginBottom: "0.75rem",
            }}
          >
            Kreative Korner Academy
          </p>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "22ch",
              marginBottom: "1.25rem",
            }}
          >
            A quarterly cohort. A clear roadmap. A real portfolio.
          </h1>
          <p
            style={{
              color: "var(--on-chrome-mute)",
              maxWidth: "48ch",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            Structured learning paths for anyone who wants to break into tech and creative
            fields — with hands-on guidance from professionals actively working in the
            field.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Join the Next Cohort →
          </Link>
        </div>
      </section>
      <section className="section bg-teal">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label"
              style={{
                color: "#8ad4c2",
                marginBottom: "0.75rem",
              }}
            >
              The Roadmap
            </p>
            <h2
              className="display display--md"
              style={{
                color: "var(--on-chrome)",
              }}
            >
              From enrollment to a launched portfolio.
            </h2>
          </div>
          <div className="grid cols-4 gap-6">
            {academySteps.map((step) => (
              <div key={step.step} className="step-card">
                <span className="step-card__num">{step.step}</span>
                <div className="step-card__title">{step.title}</div>
                <div className="step-card__desc">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Choose a Track
            </p>
            <h2 className="display display--md">
              Tech and creative tracks, taught by people who do the work.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
            }}
          >
            {academyTracks.map((track) => (
              <span key={track} className="track-chip">
                {track}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head center">
            <p
              className="label label--copper"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              What You Get
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              Every cohort is built around the same promise.
            </h2>
          </div>
          <div className="grid cols-3 gap-6">
            {academyFeatures.map((feature) => (
              <div key={feature.title} className="spec-card">
                <div className="spec-card__icon">✓</div>
                <div>
                  <div className="spec-card__title">{feature.title}</div>
                  <div className="spec-card__desc">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div
            className="cta-banner"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-teal) 0%, var(--chrome) 100%)",
            }}
          >
            <div>
              <p
                className="label"
                style={{
                  color: "var(--brand-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Applications Open
              </p>
              <h2 className="cta-banner__title">
                Applications for the next cohort are open.
              </h2>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
