const projects = [
  {
    title: "Ts-Generic-Components",
    lastUpdated: "Feb 4, 2024",
    createdAt: "Feb 4, 2024",
    githubLink: "#",
  },
  {
    title: "Express-Todo-Api",
    lastUpdated: "Jan 6, 2024",
    createdAt: "Jan 3, 2024",
    githubLink: "#",
  },
  // More projects...
];

const Projects = () => {
  return (
    <section className="projects">
      <h3>GitHub Projects</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.title}</h4>
            <p>Last Updated: {project.lastUpdated}</p>
            <p>Created At: {project.createdAt}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;