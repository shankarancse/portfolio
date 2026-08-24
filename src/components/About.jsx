import { GraduationCap, Code2 } from "lucide-react";
import personalInfo from "../data/personalInfo.js";
import "./About.css";

const LEARNING = [
  "Advanced Python",
  "Problem Solving",
  "Data Structures & Algorithms",
  "Backend Development",
  "SQL & Databases",
  "Web Development",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              About <span className="accent">Me</span>
            </h2>

            <p className="about-p">
              I&rsquo;m {personalInfo.name}, a Computer Science Engineering student currently
              pursuing my {personalInfo.education.year.toLowerCase()}. I enjoy learning
              programming concepts, solving coding problems, and turning ideas into practical
              applications.
            </p>
            <p className="about-p">
              My current focus is Python development and strengthening my programming
              fundamentals for software development placements. I&rsquo;m particularly
              interested in backend development, problem solving, databases, and building
              useful real-world projects.
            </p>
            <p className="about-p">
              I believe in learning by building, so I continuously work on small projects and
              coding challenges to improve my skills.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <GraduationCap size={18} />
                <span>
                  {personalInfo.education.degree}
                  <br />
                  <span className="text-secondary">
                    {personalInfo.education.college}, {personalInfo.education.university}
                  </span>
                </span>
              </div>
              <div className="about-meta-item">
                <Code2 size={18} />
                <span>
                  Primary language
                  <br />
                  <span className="text-secondary">Python</span>
                </span>
              </div>
            </div>
          </div>

          <div className="reveal about-card card">
            <p className="about-card-title mono">currently_learning.json</p>
            <ul className="about-learning-list">
              {LEARNING.map((item) => (
                <li key={item}>
                  <span className="about-learning-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
