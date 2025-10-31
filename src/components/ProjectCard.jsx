import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.figmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="viewLink"
      >
        View Prototype
      </a>
    </div>
  );
}

export default ProjectCard;
