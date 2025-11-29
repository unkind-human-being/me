// components/sections/PortfolioSection.tsx

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A modern web application with a clean UI and responsive layout.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "A small app focused on performance, best practices, and simplicity.",
    tech: ["React", "API Integration"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "An experimental project to explore new tools and design concepts.",
    tech: ["PWA", "Service Worker"],
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <div className="section portfolio">
      <div className="section-header">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          A glimpse of some projects and experiments.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.title} className="portfolio-card">
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-description">{project.description}</p>

            <ul className="portfolio-card-tech-list">
              {project.tech.map((item) => (
                <li key={item} className="portfolio-card-tech-item">
                  {item}
                </li>
              ))}
            </ul>

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                className="portfolio-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
