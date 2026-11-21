import logoMark from "../assets/mark-white.png";
import { academyFeatures, services } from "../data/siteData";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
export default function ServicesPage() {
  return (
    <>
      <section className="page-hdr bg-chrome">
        <div className="wrap">
          <img src={logoMark} alt="" className="page-hdr__mark" />
          <p
            className="label"
            style={{
              color: "var(--brand-copper)",
              marginBottom: "0.75rem",
            }}
          >
            What We Do
          </p>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "22ch",
              marginBottom: "1.25rem",
            }}
          >
            Creative & tech services built to be used.
          </h1>
          <p
            style={{
              color: "var(--on-chrome-mute)",
              maxWidth: "48ch",
              lineHeight: 1.65,
            }}
          >
            Two ways to work with Kreative Korner: hire us to build, or train with us to
            build it yourself.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label label--copper"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              For Businesses, Brands & Individuals
            </p>
            <h2 className="display display--md">Creative & Tech Services</h2>
          </div>
          <div className="grid cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-teal">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label"
              style={{
                color: "var(--brand-gold)",
                marginBottom: "0.75rem",
              }}
            >
              For Future Tech & Creative Professionals
            </p>
            <h2
              className="display display--md"
              style={{
                color: "var(--on-chrome)",
              }}
            >
              Quarterly Training & Skill Development
            </h2>
          </div>
          <div className="grid cols-3 gap-6">
            {academyFeatures.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: "rgba(246,241,228,0.07)",
                  border: "1px solid var(--chrome-line)",
                  borderRadius: "var(--r-lg)",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "var(--step-0)",
                    color: "var(--on-chrome)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: "var(--step--1)",
                    color: "var(--on-chrome-mute)",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "2.5rem",
            }}
          >
            <Link to="/academy" className="btn btn-primary">
              See the Academy →
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head center">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              How It Works
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              Tell us where you are. We’ll meet you there.
            </h2>
          </div>
          <div className="grid cols-3 gap-6">
            {[
              [
                "Step 1",
                "Tell us your goal",
                "A brand, a product, a shoot, or a skill — share what you want to build.",
              ],
              [
                "Step 2",
                "We scope it together",
                "A short call or message to align on scope, timeline and outcome.",
              ],
              [
                "Step 3",
                "We build, you grow",
                "We get to work — and keep you in the loop the whole way through.",
              ],
            ].map(([step, title, description]) => (
              <div key={step} className="svc-card">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--step--1)",
                    color: "var(--brand-copper)",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step}
                </span>
                <h3 className="svc-card__title">{title}</h3>
                <p className="svc-card__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Not sure which service fits? Just ask.</h2>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
