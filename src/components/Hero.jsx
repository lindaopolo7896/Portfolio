import React from "react";
import Profile from "../assets/PROF.jpeg";
import { motion } from "framer-motion";

function Hero() {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center justify-center pt-45 md:pt-40 "
    >
      <motion.div
        variants={childVariants}
        className="h-[140px] w-[140px] bg-cover bg-center  rounded-full "
        style={{ backgroundImage: `url(${Profile})` }}
      ></motion.div>

      <motion.p
        variants={childVariants}
        className="text-[4rem] text-center md:text-[5.5rem] text-white/64 font-bold"
      >
        Eleanor Opollo
      </motion.p>
      <motion.p
        variants={childVariants}
        className="text-[2rem] md:text-[4rem] font-bold text-white/36"
      >
        Frontend Engineer
      </motion.p>
      <motion.div
        variants={childVariants}
        className="w-5/6 md:w-3/4 lg:w-1/3 flex flex-col gap-1 mt-3"
      >
        <div className="w-3/5 h-2 bg-[#14B8A6]"></div>
        <div className="w-3/5 h-2 bg-[#14B8A6] ml-auto"></div>
      </motion.div>
      <motion.p
        variants={childVariants}
        className="text-center  mt-8 text-white/60 text-lg"
      >
        I design and build responsive web applications using React and Tailwind
        CSS.
      </motion.p>
      <motion.div
        variants={childVariants}
        className="w-full px-4 md:px-0 md:w-5/6 lg:w-3/6 flex items-center justify-between gap-3 mt-10"
      >
        <div className="bg-white w-full flex items-center justify-center p-4 rounded-full text-lg font-semibold text-[#00141D] cursor-pointer hover:bg-[#14B8A6] transition-all duration -300 ease-in-out">
          View Projects
        </div>
        <div className="border-2 border-white w-full flex items-center justify-center p-4 rounded-full text-lg font-semibold text-white cursor-pointer hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration -300 ease-in-out">
          Contact Me
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
