import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: 1,
    title: "Telemedicine Platform",
    description:
      "A responsive web application that allows patients to connect with doctors through chat and video consultations.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Tailwind CSS", "JavaScript", "Html"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/telemedicine",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A desktop application built with JavaFX that allows students to manage classes, feedback, and topics.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    tech: ["Java", "JavaFX"],
    liveLink: "",
    githubLink: "https://github.com/yourusername/student-system",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with a modern UI.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
];
function Projects() {
  return (
    <div className="px-29 py-20">
      <h1 className="text-4xl font-bold py-4 text-[#14B8A6]">My Work</h1>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
