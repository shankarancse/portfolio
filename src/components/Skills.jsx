import skills from "../data/skills.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">
            Tools &amp; <span className="accent">Technologies</span>
          </h2>
          <p className="section-sub">
            A practical toolkit built through coursework, projects, and self-study — no
            inflated proficiency bars, just what I actually use and learn.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="card skills-card reveal" key={group.category}>
              <h3 className="skills-card-title">{group.category}</h3>
              <ul className="skills-chip-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
