import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="relative  rounded-2xl overflow-hidden group cursor-pointer">
      <div
        className="flex flex-col justify-end bg-cover bg-center h-105 shadow-xl shadow-[#14B8A6] "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${project.image})`,
        }}
      >
        <div className="p-5 ">
          <h2 className="text-2xl font-bold text-[#14B8A6] mb-2">
            {project.title}
          </h2>

          <div className="flex gap-3 mb-5 flex-wrap">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="
                px-4 py-2 rounded-full text-sm text-white
                bg-white/10 backdrop-blur-md
                border border-white/20
              "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="
          absolute inset-0 
          bg-black/60 backdrop-blur-md

          opacity-0 
          group-hover:opacity-100
         

          transition-all duration-500

          flex flex-col p-6

          
        "
      >
        <div className="h-[100px] w-[100px]">
          <img
            src={project.image}
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </div>
        <h2 className="text-[#00d1c1] text-2xl font-bold mb-4 mt-2">
          {project.title}
        </h2>

        <p className="text-white/80">{project.description}</p>

        <button className="w-full border-2 border-[#14b8a6] text-[#14b8a6] mt-6 mb-4 py-2 rounded-full text-lg font-semibold">
          Live Preview
        </button>

        <div className="flex gap-4 justify-between mt-2">
          <a
            href={project.figmaLink}
            target="_blank"
            className="
               py-2 rounded-lg font-semibold 
              text-[#00d1c1]
              text-lg
              hover:opacity-80 transition
            "
          >
            Figma
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            className="
               py-2 rounded-lg font-semibold text-white
              
            "
          >
            <FaGithub className="text-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
