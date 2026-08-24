import { useState } from "react";
import { Mail, ArrowUpRight, Send, AlertCircle } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons/BrandIcons.jsx";
import personalInfo from "../data/personalInfo.js";
import "./Contact.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | not-configured

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }
    // No backend/email service is connected yet. Rather than pretending
    // the message was sent, this is an honest placeholder — swap in
    // Formspree, EmailJS, or a custom API route here.
    setStatus("not-configured");
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Let&rsquo;s <span className="accent">Connect</span>
          </h2>
          <p className="section-sub">
            I&rsquo;m always interested in learning, collaborating on projects, and connecting
            with other developers.
          </p>
        </div>

        <div className="contact-cards reveal">
          <div className="card contact-card">
            <span className="contact-card-icon">
              <Mail size={19} />
            </span>
            <h3>Email Me</h3>
            <p className="mono contact-card-value">{personalInfo.email}</p>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary btn-sm btn-block">
              Send Email
            </a>
          </div>

          <div className="card contact-card">
            <span className="contact-card-icon">
              <Github size={19} />
            </span>
            <h3>GitHub</h3>
            <p className="mono contact-card-value">@{personalInfo.github.username}</p>
            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm btn-block"
            >
              View GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="card contact-card">
            <span className="contact-card-icon">
              <Linkedin size={19} />
            </span>
            <h3>LinkedIn</h3>
            <p className="contact-card-value">Connect with me</p>
            <a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm btn-block"
            >
              View LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <form className="contact-form card reveal" onSubmit={handleSubmit} noValidate>
          <h3 className="contact-form-title">Send a message</h3>

          <div className="form-row">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "cf-name-error" : undefined}
            />
            {errors.name && (
              <p className="form-error" id="cf-name-error">
                <AlertCircle size={13} /> {errors.name}
              </p>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "cf-email-error" : undefined}
            />
            {errors.email && (
              <p className="form-error" id="cf-email-error">
                <AlertCircle size={13} /> {errors.email}
              </p>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "cf-message-error" : undefined}
            />
            {errors.message && (
              <p className="form-error" id="cf-message-error">
                <AlertCircle size={13} /> {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <Send size={15} /> Send Message
          </button>

          {status === "not-configured" && (
            <p className="form-note" role="status">
              This form isn&rsquo;t connected to a backend or email service yet, so your
              message wasn&rsquo;t actually sent. Reach out directly at{" "}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> for now, or
              wire this form up to Formspree, EmailJS, or a custom API route.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
