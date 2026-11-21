import logoMark from "../assets/mark-white.png";
import { useState } from "react";
import useTheme from "../hooks/useTheme";
import { Link, NavLink } from "react-router-dom";
import { site } from "../data/siteData";
const navLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/academy",
    label: "Academy",
  },
  {
    to: "/blog",
    label: "Journal",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false),
    { theme, toggleTheme } = useTheme();
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav__row">
          <Link to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
            <img src={logoMark} alt="" className="nav__logo-mark" />
            <span className="nav__logo-text">{site.name}</span>
          </Link>
          <nav
            aria-label="Primary"
            style={{
              flex: 1,
            }}
          >
            <ul className="nav__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__actions">
            <button
              className="theme-toggle"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀" : "☽"}
            </button>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Start a Project
            </Link>
            <button
              className="nav__toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <path d="M3 6H21M3 12H21M3 18H21" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav className={`nav__mobile ${menuOpen ? "open" : ""}`} aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
