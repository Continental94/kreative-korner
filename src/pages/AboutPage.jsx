import logoMark from "../assets/mark-white.png";
import { useState } from "react";
import {
  aboutIntro,
  faqs,
  mission,
  outcomes,
  team,
  values,
  vision,
} from "../data/siteData";
import { Link } from "react-router-dom";
function getTeamInitials(name) {
  if (!name || name === "Add Name") return "?";
  let parts = name.trim().split(/\s+/);
  return (
    (parts[0]?.[0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")
  ).toUpperCase();
}
function TeamCard({ name, role, purpose, photo }) {
  return (
    <div className="team-card">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="team-card__avatar"
          style={{
            borderRadius: "50%",
            width: 60,
            height: 60,
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
      ) : (
        <div className="team-card__avatar">
          <span>{getTeamInitials(name)}</span>
        </div>
      )}
      <div className="team-card__role">{role}</div>
      <span className="team-card__name">{name}</span>
      <p className="team-card__purpose">{purpose}</p>
    </div>
  );
}
export function FaqItem({ q, a }) {
  let [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="faq-btn"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        {q}
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-body">
        <p>{a}</p>
      </div>
    </div>
  );
}
export default function AboutPage() {
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
            About Kreative Korner
          </p>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "22ch",
              marginBottom: "1.25rem",
            }}
          >
            {aboutIntro.intro}
          </h1>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="split">
            <div>
              {aboutIntro.body.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    color: "var(--text-muted)",
                    marginBottom: "1.25rem",
                    lineHeight: 1.75,
                  }}
                >
                  {paragraph}
                </p>
              ))}
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--step-1)",
                  fontStyle: "italic",
                  color: "var(--brand-teal)",
                  marginTop: "1.5rem",
                }}
              >
                {aboutIntro.closing}
              </p>
            </div>
            <div
              className="split__media split__media--teal"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logoMark}
                alt=""
                style={{
                  width: 110,
                  opacity: 0.3,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-teal">
        <div className="wrap">
          <div className="split reverse">
            <div
              className="split__media split__media--copper"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--r-xl)",
              }}
            >
              <img
                src={logoMark}
                alt=""
                style={{
                  width: 110,
                  opacity: 0.25,
                }}
              />
            </div>
            <div>
              <p
                className="label"
                style={{
                  color: "#8ad4c2",
                  marginBottom: "0.75rem",
                }}
              >
                Our Mission
              </p>
              <p
                className="display display--sm"
                style={{
                  color: "var(--on-chrome)",
                  lineHeight: 1.3,
                }}
              >
                {mission}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="split">
            <div>
              <p
                className="label label--teal"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                Our Vision
              </p>
              <p
                className="display display--sm"
                style={{
                  lineHeight: 1.3,
                }}
              >
                {vision}
              </p>
            </div>
            <div>
              <p
                className="label label--copper"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                Our Goal
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--brand-copper)",
                        fontWeight: 700,
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--step-0)",
                      }}
                    >
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Our Values
            </p>
            <h2 className="display display--md">The principles behind every project.</h2>
          </div>
          <div>
            {values.map((value) => (
              <div
                key={value.title}
                className="value-row"
                style={{
                  "--dot-color":
                    value.pillar === "creative"
                      ? "var(--brand-copper)"
                      : value.pillar === "tech"
                        ? "var(--brand-teal)"
                        : "var(--brand-gold)",
                }}
              >
                <div className="value-row__title">{value.title}</div>
                <div className="value-row__desc">{value.description}</div>
              </div>
            ))}
          </div>
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
              Leadership
            </p>
            <h2 className="display display--md">The people steering Kreative Korner.</h2>
            <p className="section-head__lede">
              A quick snapshot of who leads what. Swap in real names and photos as your
              team grows.
            </p>
          </div>
          <div className="grid cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.role} {...member} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Common Questions
            </p>
            <h2 className="display display--md">Frequently asked questions.</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Ready to build with us?</h2>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
