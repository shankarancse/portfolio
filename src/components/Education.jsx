import { GraduationCap } from "lucide-react";
import personalInfo from "../data/personalInfo.js";
import "./Education.css";

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">
            Education <span className="accent">Timeline</span>
          </h2>
        </div>

        <div className="edu-timeline reveal">
          <div className="edu-timeline-marker">
            <GraduationCap size={18} />
          </div>
          <div className="edu-timeline-content card">
            <p className="edu-timeline-range mono">
              {education.startYear} – {education.status}
            </p>
            <h3 className="edu-timeline-title">{education.degree}</h3>
            <p className="edu-timeline-college">{education.college}</p>
            <p className="edu-timeline-university">{education.university}</p>
            <span className="tag edu-timeline-tag">Currently pursuing {education.year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
