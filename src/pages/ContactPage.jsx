import logoMark from "../assets/mark-white.png";
import { useState } from "react";
import { faqs, site } from "../data/siteData";
import { FaqItem } from "./AboutPage";
const emptyForm = {
  name: "",
  email: "",
  interest: "Brand & Identity",
  message: "",
};
function ContactForm() {
  let [form, setForm] = useState(emptyForm),
    [errors, setErrors] = useState({}),
    [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    let nextErrors = {};
    if (
      (form.name.trim() || (nextErrors.name = "Your name is required."),
      (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) &&
        (nextErrors.email = "A valid email is required."),
      form.message.trim() || (nextErrors.message = "Please add a message."),
      setErrors(nextErrors),
      !Object.keys(nextErrors).length)
    ) {
      let subject = encodeURIComponent(`${form.interest} enquiry from ${form.name}`),
        body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      ((window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`),
        setSubmitted(true));
    }
  }
  return submitted ? (
    <div
      style={{
        background: "#d6e8e4",
        borderRadius: "var(--r-lg)",
        padding: "2rem",
        textAlign: "center",
        color: "#0e2820",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--step-2)",
          marginBottom: "0.5rem",
        }}
      >
        Message ready ✓
      </h3>
      <p>
        Your email client should have opened. If not, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <button
        className="btn btn-outline-dark"
        style={{
          marginTop: "1.25rem",
        }}
        onClick={() => {
          (setSubmitted(false), setForm(emptyForm));
        }}
      >
        Send another
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} noValidate>
      {[
        ["name", "Your name", "text", "Adaeze Okafor"],
        ["email", "Email address", "email", "hello@email.com"],
      ].map(([id, label, type, placeholder]) => (
        <div key={id} className="form-field">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={id}
            type={type}
            value={form[id]}
            onChange={handleChange}
            placeholder={placeholder}
          />
          {errors[id] && (
            <span
              style={{
                color: "#7a4a28",
                fontSize: "var(--step--2)",
              }}
            >
              {errors[id]}
            </span>
          )}
        </div>
      ))}
      <div className="form-field">
        <label htmlFor="interest">What are you interested in?</label>
        <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
          {[
            "Brand & Identity",
            "UI/UX Design",
            "Web & App Development",
            "Photography & Videography",
            "Kreative Korner Academy",
            "Something else",
          ].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about what you're looking to build..."
        />
        {errors.message && (
          <span
            style={{
              color: "#7a4a28",
              fontSize: "var(--step--2)",
            }}
          >
            {errors.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        Send Message →
      </button>
    </form>
  );
}
export default function ContactPage() {
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
            Get in Touch
          </p>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "22ch",
            }}
          >
            Let’s build, brand, or train something together.
          </h1>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2
                className="display display--sm"
                style={{
                  marginBottom: "1.75rem",
                }}
              >
                Send a message
              </h2>
              <ContactForm />
            </div>
            <div className="contact-info">
              {[
                ["Email", "label--teal", site.email, `mailto:${site.email}`],
                [
                  "Phone",
                  "label--copper",
                  site.phone,
                  `tel:${site.phone.replace(/\s/g, "")}`,
                ],
                ["Location", "label--teal", site.location, null],
              ].map(([label, labelClass, value, href]) => (
                <div key={label} className="contact-info__item">
                  <span className={`label ${labelClass}`}>{label}</span>
                  <div className="contact-info__value">
                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                  </div>
                </div>
              ))}
              <div className="contact-info__item">
                <span className="label label--copper">Follow</span>
                <div
                  className="social-row"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {[
                    ["IG", site.social.instagram],
                    ["X", site.social.twitter],
                    ["in", site.social.linkedin],
                  ].map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
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
    </>
  );
}
