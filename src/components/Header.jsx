import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/5 backdrop-blur-md  shadow-lg flex w-11/12   md:w-7/8 items-center justify-between py-6 px-3 md:px-10 fixed top-10 border border-[#14B8A6]/20 z-10 left-1/2 -translate-x-1/2  rounded-full "
    >
      <Link
        to="/"
        className="text-white md:text-xl font-semibold cursor-pointer"
      >
        [Eleanor Opolo]
      </Link>
      <nav className="flex  items-center gap-8">
        <Link to="/about" className="md:text-xl text-white font-semibold">
          About
        </Link>
        <a
          href="/src/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center  bg-[#14B8A6] py-2 px-1 md:px-4 text-black font-bold text-sm md:text-lg rounded-full cursor-pointer hover:bg-[#118f80] hover:text-white transition-all duration-300 ease-in-out "
          download
        >
          Download CV
        </a>
      </nav>
    </motion.header>
  );
}

export default Header;
