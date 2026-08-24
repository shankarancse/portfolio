import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./icons/BrandIcons.jsx";
import personalInfo from "../data/personalInfo.js";
import "./GithubSection.css";

// Static mock heatmap data (not live API data) — purely decorative,
// as noted in the UI, so it never misrepresents real activity.
const WEEKS = 26;
const DAYS = 7;
function mockLevel(w, d) {
  const seed = (w * 7 + d * 13) % 9;
  if (seed < 3) return 0;
  if (seed < 5) return 1;
  if (seed < 7) return 2;
  return 3;
}

export default function GithubSection() {
  return (
    <section id="github" className="section">
      <div className="container">
        <div className="github-panel reveal">
          <div className="github-panel-text">
            <p className="eyebrow">GitHub</p>
            <h2 className="section-title">
              Code, Learn, <span className="accent">Build.</span>
            </h2>
            <p className="github-panel-desc">
              Most of my learning happens through coding, experimentation, and building
              practical projects.
            </p>

            <div className="github-profile-row">
              <span className="github-avatar" aria-hidden="true">
                <Github size={20} />
              </span>
              <span>
                <strong>GitHub</strong>
                <span className="mono">@{personalInfo.github.username}</span>
              </span>
            </div>

            <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View My GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="github-graph-card card">
            <p className="github-graph-caption mono">github.com/{personalInfo.github.username}</p>
            <div className="github-graph" role="img" aria-label="Illustrative contribution graph (sample data)">
              {Array.from({ length: WEEKS }).map((_, w) => (
                <div className="github-graph-col" key={w}>
                  {Array.from({ length: DAYS }).map((_, d) => (
                    <span key={d} className={`github-cell level-${mockLevel(w, d)}`} />
                  ))}
                </div>
              ))}
            </div>
            <div className="github-graph-legend">
              <span>Less</span>
              <span className="github-cell level-0" />
              <span className="github-cell level-1" />
              <span className="github-cell level-2" />
              <span className="github-cell level-3" />
              <span>More</span>
            </div>
            <p className="github-graph-note">Sample layout — connect the GitHub API for live data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
