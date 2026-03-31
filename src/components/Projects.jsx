import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import BingeImg from "../assets/bingeBox.png";
import BeatBoxImg from "../assets/beatbox.png";
const projects = [
  {
    id: 1,
    title: "BingeBox",
    description:
      "BingeBox is a frontend movie discovery application that integrates the TMDB API to display trending, popular, and top-rated films. It includes dynamic search, genre filtering, and a watchlist feature implemented with localStorage for client-side persistence. The project highlights skills in API consumption, state handling, and responsive UI development.",
    image: BingeImg,
    tech: [
      "React",
      "React Router DOM",
      "TanStack React Query",
      "Tailwind CSS",
      "TMDB API",
      "LocalStorage",
    ],
    liveLink: "https://binge-box-chi.vercel.app/",
    githubLink: "https://github.com/lindaopolo7896/BingeBox",
    figmaLink:
      "https://www.figma.com/design/aqe5q8C6hkRWzCB6E8EOni/BingeBox?node-id=3-46&t=F35NHyTUEGoraRCt-1",
  },

  {
    id: 2,
    title: "Beat Box",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with a modern UI.",
    image: BeatBoxImg,
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
];
function Projects() {
  return (
    <div className="px-3 md:px-8 lg:px-29 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold py-4 text-[#14B8A6]"
      >
        My Work
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
