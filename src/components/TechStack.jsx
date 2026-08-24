import "./TechStack.css";

const STACK = [
  "Python",
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "SQL",
  "VS Code",
  "Linux",
];

export default function TechStack() {
  return (
    <div className="techstack" aria-label="Technologies I work with">
      <div className="techstack-track">
        {STACK.concat(STACK).map((tech, i) => (
          <span className="techstack-item mono" key={`${tech}-${i}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
