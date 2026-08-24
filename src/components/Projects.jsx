import { useState } from "react";
import { ExternalLink, Info, X } from "lucide-react";
import { GithubIcon as Github } from "./icons/BrandIcons.jsx";
import projects from "../data/projects.js";
import "./Projects.css";

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className={`card card-hover project-card reveal accent-${project.accent}`}>
      <div className="project-card-cover" aria-hidden="true">
        <span className="mono">{`<${project.title.replace(/\s+/g, "")} />`}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-desc">{project.description}</p>

        <ul className="project-card-tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card-actions">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              <Github size={15} /> GitHub
            </a>
          ) : (
            <span className="btn btn-ghost btn-sm project-btn-disabled" aria-disabled="true">
              <Github size={15} /> GitHub soon
            </span>
          )}

          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : null}

          <button type="button" className="btn btn-outline btn-sm" onClick={() => onViewDetails(project)}>
            <Info size={15} /> View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="section-sub">
            A mix of applied builds and fundamentals practice — each one written to sharpen a
            different part of my Python and backend skill set.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setActive} />
          ))}
        </div>
      </div>

      {active ? (
        <div className="project-modal-backdrop" role="presentation" onClick={() => setActive(null)}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="icon-btn project-modal-close" onClick={() => setActive(null)} aria-label="Close details">
              <X size={18} />
            </button>
            <h3 id="project-modal-title">{active.title}</h3>
            <p className="project-modal-desc">{active.description}</p>

            <p className="project-modal-label mono">Features</p>
            <ul className="project-modal-features">
              {active.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p className="project-modal-label mono">Technologies</p>
            <ul className="project-card-tech">
              {active.technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
