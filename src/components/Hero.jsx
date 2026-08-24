import { Mail, Download, ArrowRight, Coffee } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons/BrandIcons.jsx";
import personalInfo from "../data/personalInfo.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-green" aria-hidden="true" />
      <div className="hero-glow hero-glow-purple" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-kicker mono">Hello World! I&rsquo;m</p>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <p className="hero-subtitle">Computer Science Engineering Student | Python Developer</p>
        <p className="hero-desc">
          I build practical software projects, solve programming problems, and continuously
          improve my development skills with a focus on Python and backend development.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span className="mono">&lt;/&gt;</span> View My Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            <Mail size={16} /> Contact Me
          </a>
          <a href={personalInfo.resume} download className="btn btn-ghost">
            <Download size={16} /> Download Resume
          </a>
        </div>

        <ul className="hero-socials" aria-label="Connect with me">
          <li>
            <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer">
              <span className="hero-social-icon">
                <Github size={18} />
              </span>
              <span>
                <strong>GitHub</strong>
                <span className="mono">@{personalInfo.github.username}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer">
              <span className="hero-social-icon">
                <Linkedin size={18} />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${personalInfo.email}`}>
              <span className="hero-social-icon">
                <Mail size={18} />
              </span>
              <span>
                <strong>Email</strong>
                <span>{personalInfo.email}</span>
              </span>
            </a>
          </li>
        </ul>

        <div className="hero-terminal-wrap">
          <div className="hero-code-card reveal" aria-hidden="true">
            <pre className="mono">
{`def build_future():
    learn()
    practice()
    build()
    improve()

    return "Keep Building"

print(build_future())`}
            </pre>
          </div>

          <div className="hero-terminal reveal">
            <div className="hero-terminal-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="hero-terminal-title mono">{personalInfo.shortName.toLowerCase()}@portfolio</span>
            </div>
            <div className="hero-terminal-body mono">
              <p className="term-prompt">{personalInfo.shortName.toLowerCase()}@portfolio</p>
              <p><span className="term-key">OS:</span> DevOS v1.0.0</p>
              <p><span className="term-key">Host:</span> Developer Machine</p>
              <p><span className="term-key">Kernel:</span> 6.6.0-dev</p>
              <p><span className="term-key">Uptime:</span> Focused on learning</p>
              <p><span className="term-key">Languages:</span> Python, JavaScript, SQL</p>
              <p><span className="term-key">Editor:</span> VS Code</p>
              <p><span className="term-key">Frameworks:</span> React, Node.js</p>
              <p><span className="term-key">Mission:</span> Build. Learn. Improve. Repeat.</p>
            </div>
          </div>

          <div className="hero-mug" aria-hidden="true">
            <Coffee size={20} />
            <span className="mono">coffee</span>
          </div>
        </div>

        <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
