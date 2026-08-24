import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons/BrandIcons.jsx";
import personalInfo from "../data/personalInfo.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{personalInfo.name}</p>
          <p className="footer-tagline mono">Building. Learning. Improving.</p>
        </div>

        <ul className="footer-socials" aria-label="Social links">
          <li>
            <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
              <Github size={17} />
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
              <Linkedin size={17} />
            </a>
          </li>
          <li>
            <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Send an email">
              <Mail size={17} />
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <p className="footer-copyright">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
