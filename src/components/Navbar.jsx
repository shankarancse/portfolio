import { useEffect, useState } from "react";
import { Mail, Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons/BrandIcons.jsx";
import personalInfo from "../data/personalInfo.js";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar glass${scrolled ? " navbar-scrolled" : ""}`}>
      <nav className="container navbar-inner" aria-label="Primary">
        <a href="#home" className="navbar-logo" aria-label={`${personalInfo.name} — home`}>
          <Terminal size={18} aria-hidden="true" />
          <span>
            &lt;/&gt; {personalInfo.initials}
            <span className="navbar-logo-dot">.dev</span>
          </span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="navbar-socials" aria-label="Social links">
            <a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Send an email">
              <Mail size={17} />
            </a>
          </div>

          <button
            type="button"
            className="icon-btn navbar-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? " mobile-menu-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-socials">
          <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" onClick={closeMenu}>
            <Github size={16} /> GitHub
          </a>
          <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" onClick={closeMenu}>
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-outline btn-sm" onClick={closeMenu}>
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </header>
  );
}
