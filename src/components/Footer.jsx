import logoMark from "../assets/mark-white.png";
import { Link } from "react-router-dom";
import { site } from "../data/siteData";
export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <img
                src={logoMark}
                alt=""
                style={{
                  width: 30,
                  height: 30,
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--step-1)",
                  color: "var(--on-chrome)",
                  letterSpacing: "-0.02em",
                }}
              >
                {site.name}
              </span>
            </Link>
            <p className="footer__brand-desc">
              {site.tagline} A creative and technology ecosystem helping ideas, brands and
              people grow with clarity.
            </p>
          </div>
          <div>
            <p className="footer__col-title">Explore</p>
            <ul className="footer__links">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/academy", "Academy"],
                ["/blog", "Journal"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Services</p>
            <ul className="footer__links">
              {[
                "Brand & Identity",
                "UI/UX Design",
                "Web & App Dev",
                "Photography",
                "Videography",
                "Academy",
              ].map((label) => (
                <li key={label}>
                  <Link to="/services">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Contact</p>
            <ul className="footer__links">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Creative · Technology · Education</span>
        </div>
      </div>
    </footer>
  );
}
