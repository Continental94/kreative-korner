import logoMark from "../assets/mark-white.png";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import {
  aboutIntro,
  facts,
  pillars,
  posts,
  services,
  testimonials,
  values,
} from "../data/siteData";
import Marquee from "../components/Marquee";
import ServiceCard from "../components/ServiceCard";
import Scallop from "../components/Scallop";
import FactCard from "../components/FactCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
const cardRotations = [-2, 1.5, -1.5, 2];
const whyChooseUs = [
  {
    icon: "🎨",
    title: "Brand & Creative",
    desc: "Identity, photography, motion and creative direction for brands that want to be felt.",
  },
  {
    icon: "💻",
    title: "Tech & Product",
    desc: "UI/UX design, web and app development built for humans, not just screens.",
  },
  {
    icon: "🎓",
    title: "Academy Training",
    desc: "Quarterly cohorts with real mentors, real projects and career-ready portfolios.",
  },
  {
    icon: "🚀",
    title: "End-to-End Delivery",
    desc: "From strategy to execution — we own the brief and see it through.",
  },
  {
    icon: "🤝",
    title: "Partnership First",
    desc: "We work with you, not just for you. Transparent process, honest communication.",
  },
  {
    icon: "📈",
    title: "Scalable Systems",
    desc: "Everything we build is designed to grow with you — not outgrown in six months.",
  },
];
export default function HomePage() {
  return (
    <>
      <section className="hero bg-chrome">
        <div className="wrap">
          <div className="hero__grid">
            <div>
              <div className="hero__kicker">✦ Creative · Technology · Education</div>
              <h1 className="hero__title">
                Where ideas, brands and people <em>grow</em> with clarity.
              </h1>
              <p className="hero__lede">
                Kreative Korner is a creative and technology ecosystem — we build digital
                products, shape brands, capture stories, and train the next generation of
                tech and creative talent.
              </p>
              <div className="hero__ctas">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start a Project →
                </Link>
                <Link to="/academy" className="btn btn-outline-light btn-lg">
                  Join the Academy
                </Link>
              </div>
              <div className="hero__stats">
                <div className="hero__stat">
                  <strong>
                    <CountUp target={3} />
                  </strong>
                  <span>Pillars under one roof</span>
                </div>
                <div className="hero__stat">
                  <strong>
                    <CountUp target={4} suffix="×" />
                  </strong>
                  <span>Academy cohorts a year</span>
                </div>
                <div className="hero__stat">
                  <strong>
                    <CountUp target={7} suffix="+" />
                  </strong>
                  <span>Services offered</span>
                </div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__mark-wrap">
                <div className="hero__mark-ring" />
                <div className="hero__mark-ring" />
                <div className="hero__mark-ring" />
                <img src={logoMark} alt="Kreative Korner" className="hero__mark-img" />
              </div>
              <div className="hero__pillar-tags" aria-hidden="true">
                {pillars.map((pillar) => (
                  <span key={pillar.id} className="hero__pillar-tag">
                    <span
                      className="dot"
                      style={{
                        background:
                          pillar.id === "creative"
                            ? "var(--brand-copper)"
                            : pillar.id === "tech"
                              ? "#8ad4c2"
                              : "var(--brand-gold)",
                      }}
                    />
                    {pillar.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div
            className="pillar-strip"
            style={{
              marginTop: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            {pillars.map((pillar) => (
              <div key={pillar.id} className="pillar-strip__item">
                <span
                  className="pillar-strip__dot"
                  style={{
                    background:
                      pillar.id === "creative"
                        ? "var(--brand-copper)"
                        : pillar.id === "tech"
                          ? "#8ad4c2"
                          : "var(--brand-gold)",
                  }}
                />
                <div>
                  <div className="pillar-strip__title">{pillar.label}</div>
                  <div className="pillar-strip__desc">{pillar.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee dark />
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
                About Us
              </p>
              <h2
                className="display display--md"
                style={{
                  marginBottom: "1.25rem",
                }}
              >
                {aboutIntro.intro}
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {aboutIntro.body[0]}
              </p>
              <Link to="/about" className="btn btn-outline-dark">
                Learn more →
              </Link>
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
                  width: 120,
                  opacity: 0.35,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head-row">
            <div>
              <p
                className="label label--copper"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                What We Do
              </p>
              <h2 className="display display--md">
                Creative & tech services built to be used.
              </h2>
            </div>
            <Link to="/services" className="btn btn-outline-dark">
              View all →
            </Link>
          </div>
          <div className="grid cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <Scallop from="var(--bg-subtle)" to="#f0ddc8" />
      <section className="section bg-copper">
        <div className="wrap">
          <div className="section-head center">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              The Numbers
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              A small studio, doing a lot at once.
            </h2>
          </div>
          <div className="grid cols-3 gap-6">
            {facts.map((fact) => (
              <FactCard key={fact.label} {...fact} />
            ))}
          </div>
        </div>
      </section>
      <Scallop from="#f0ddc8" to="var(--bg)" flip />
      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head center">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Why Kreative Korner
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              Everything under one roof.
            </h2>
            <p
              className="section-head__lede"
              style={{
                margin: "1rem auto 0",
              }}
            >
              A complete creative and technology ecosystem — strategy, design, development
              and education, all in one place.
            </p>
          </div>
          <div className="grid cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="spec-card">
                <div className="spec-card__icon">{item.icon}</div>
                <div>
                  <div className="spec-card__title">{item.title}</div>
                  <div className="spec-card__desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-teal">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem,5vw,4rem)",
              alignItems: "center",
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
                Kreative Korner Academy
              </p>
              <h2
                className="display display--md"
                style={{
                  color: "var(--on-chrome)",
                  marginBottom: "1.25rem",
                }}
              >
                Quarterly cohorts. Real mentors. Real portfolios.
              </h2>
              <p
                style={{
                  color: "var(--on-chrome-mute)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "42ch",
                }}
              >
                Structured learning paths for anyone who wants to break into tech and
                creative fields — from beginner to career-ready in one cohort.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/academy" className="btn btn-primary btn-lg">
                  Explore Tracks →
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Apply Now
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                "UI/UX Design",
                "Web Development",
                "Product Management",
                "Brand Identity",
                "Photography & Media",
                "Content Production",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "rgba(246,241,228,0.08)",
                    border: "1px solid var(--chrome-line)",
                    borderRadius: "var(--r-md)",
                    padding: "0.75rem 1rem",
                    color: "var(--on-chrome)",
                    fontSize: "var(--step--1)",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
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
              What We Stand For
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              Our values, in practice.
            </h2>
          </div>
          <div className="grid cols-3 gap-6">
            {values.slice(0, 6).map((value) => (
              <div key={value.title} className="svc-card">
                <h3 className="svc-card__title">{value.title}</h3>
                <p className="svc-card__desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head center">
            <p
              className="label label--teal"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              Real Feedback
            </p>
            <h2
              className="display display--md section-head__title"
              style={{
                margin: "0 auto",
              }}
            >
              What clients & graduates say.
            </h2>
          </div>
          <div className="grid cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                rotate={cardRotations[index % cardRotations.length]}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="wrap">
          <div className="section-head-row">
            <div>
              <p
                className="label label--copper"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                From the Journal
              </p>
              <h2 className="display display--md">
                Notes on building, branding & learning.
              </h2>
            </div>
            <Link to="/blog" className="btn btn-outline-dark">
              All posts →
            </Link>
          </div>
          <div className="grid cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-chrome">
        <div
          className="wrap"
          style={{
            textAlign: "center",
          }}
        >
          <p
            className="label"
            style={{
              color: "var(--brand-copper)",
              marginBottom: "0.75rem",
            }}
          >
            Stay Connected
          </p>
          <h2
            className="display display--md"
            style={{
              color: "var(--on-chrome)",
              marginBottom: "1rem",
            }}
          >
            Get updates from Kreative Korner.
          </h2>
          <p
            style={{
              color: "var(--on-chrome-mute)",
              marginBottom: "2rem",
            }}
          >
            New cohort openings, project showcases, and notes from the studio — straight
            to your inbox.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="newsletter">
              <input
                className="newsletter__input"
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button className="newsletter__btn">Subscribe →</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <p
                className="label"
                style={{
                  color: "var(--brand-copper)",
                  marginBottom: "0.75rem",
                }}
              >
                Ready?
              </p>
              <h2 className="cta-banner__title">
                Have a project, a brand, or a skill to build? Let’s talk.
              </h2>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
