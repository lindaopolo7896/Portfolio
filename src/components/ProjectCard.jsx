import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.7 }}
      className="relative  rounded-2xl overflow-hidden group cursor-pointer h-auto"
    >
      <div
        className="flex flex-col justify-end bg-cover bg-center h-auto min-h-150  shadow-xl shadow-[#14B8A6] "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project.image})`,
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

          lg:opacity-0 
          group-hover:opacity-100
         

          transition-all duration-500

          flex flex-col

          
        "
      >
        <div
          className=" w-full h-70 bg-cover bg-center flex flex-col justify-end px-4 pb-2"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${project.image}) `,
          }}
        >
          <div className="flex gap-3 mb-5 flex-wrap  lg:hidden">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="
                px-4 py-1 rounded-full text-sm text-white
                bg-white/10 backdrop-blur-md
                border border-white/20
              "
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4 justify-between  w-full px-6 bg-[#00141D] rounded-full">
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
              <FaGithub className="text-[30px] hover:text-[#00d1c1]" />
            </a>
          </div>
        </div>
        <div className="px-6 py-2">
          <h2 className="text-[#00d1c1] text-2xl font-bold mb-4 mt-2">
            {project.title}
          </h2>

          <p className="text-white/80">{project.description}</p>

          <button className="w-full border-2 border-[#14b8a6] text-[#14b8a6] mt-6 mb-4 py-2 rounded-full text-lg font-semibold hover:bg-white hover:border-0 transition-all duration-300 ease-in-out">
            <a href={project.liveLink} target="_blank">
              Live Preview
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
