import { Check, Loader2, Sparkles } from "lucide-react";
import "./LearningJourney.css";

const STAGES = [
  { label: "Programming Fundamentals", status: "learned" },
  { label: "Python Basics", status: "learned" },
  { label: "Object-Oriented Programming", status: "learned" },
  { label: "Problem Solving", status: "practicing" },
  { label: "Data Structures", status: "practicing" },
  { label: "Database Concepts", status: "practicing" },
  { label: "Web Development", status: "practicing" },
  { label: "Backend Development", status: "exploring" },
  { label: "Practical Projects", status: "exploring" },
];

const STATUS_META = {
  learned: { icon: Check, text: "Learned" },
  practicing: { icon: Loader2, text: "Practicing" },
  exploring: { icon: Sparkles, text: "Exploring" },
};

export default function LearningJourney() {
  return (
    <section id="learning-journey" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Growth</p>
          <h2 className="section-title">
            My Learning <span className="accent">Journey</span>
          </h2>
          <p className="section-sub">
            The order reflects how each stage builds on the last — some stages are behind me,
            some I&rsquo;m actively practicing, and some I&rsquo;m just starting to explore.
          </p>
        </div>

        <div className="legend reveal">
          {Object.entries(STATUS_META).map(([key, meta]) => (
            <span className={`legend-item legend-${key}`} key={key}>
              <meta.icon size={13} /> {meta.text}
            </span>
          ))}
        </div>

        <ol className="journey-list reveal">
          {STAGES.map((stage, i) => {
            const meta = STATUS_META[stage.status];
            const Icon = meta.icon;
            return (
              <li className={`journey-item journey-${stage.status}`} key={stage.label}>
                <span className="journey-node">
                  <Icon size={14} className={stage.status === "practicing" ? "spin" : ""} />
                </span>
                <span className="journey-body">
                  <span className="journey-label">{stage.label}</span>
                  <span className="journey-status">{meta.text}</span>
                </span>
                {i < STAGES.length - 1 && <span className="journey-connector" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
