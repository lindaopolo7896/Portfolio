import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <h1 className="text-center text-[#14B8A6] font-bold text-5xl">
        Contact Me
      </h1>
      <p className="text-center my-4 text-white/80 text-lg">
        Feel free to reach out
      </p>
      <div className="h-0.5 w-1/4 bg-white/80 m-auto"></div>
      <div className="flex items-center justify-center gap-5 md:gap-10 py-6">
        <div className="bg-white/10 shadow-lg hover:shadow-[#14B8A6]/25 hover:scale-120 p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
          <MdEmail className="text-white text-[30px]" />
        </div>
        <div className="bg-white/10 shadow-lg hover:shadow-[#14B8A6]/25 hover:scale-120 p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
          <IoLogoWhatsapp className="text-white text-[30px]" />
        </div>
        <div className="bg-white/10 shadow-lg hover:shadow-[#14B8A6]/25 hover:scale-120 p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
          <FaLinkedin className="text-white text-[30px]" />
        </div>
        <div className="bg-white/10 shadow-lg hover:shadow-[#14B8A6]/25 hover:scale-120 p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
          <FaGithub className="text-white text-[30px]" />
        </div>
      </div>
      <p className="text-white/80 text-sm text-center pt-12 pb-4">
        &copy; {new Date().getFullYear()} Eleanor Opolo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
