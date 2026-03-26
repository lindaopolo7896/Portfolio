import React from "react";
import Profile from "../assets/PROF.jpeg";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-40 ">
      <div
        className="h-[140px] w-[140px] bg-cover bg-center  rounded-full "
        style={{ backgroundImage: `url(${Profile})` }}
      ></div>

      <p className="text-[5.5rem] text-white/64 font-bold">Eleanor Opollo</p>
      <p className="text-[4rem] font-bold text-white/36">Frontend Engineer</p>
      <div className="w-1/3 flex flex-col gap-1 mt-3">
        <div className="w-3/5 h-2 bg-[#14B8A6]"></div>
        <div className="w-3/5 h-2 bg-[#14B8A6] ml-auto"></div>
      </div>
      <p className=" mt-8 text-white/35 text-lg">
        I design and build responsive web applications using React and Tailwind
        CSS.
      </p>
      <div className="w-3/6 flex items-center justify-between gap-3 mt-10">
        <div className="bg-white w-full flex items-center justify-center p-4 rounded-full text-lg font-semibold text-[#00141D] cursor-pointer hover:bg-[#14B8A6] transition-all duration -300 ease-in-out">
          View Projects
        </div>
        <div className="border-2 border-white w-full flex items-center justify-center p-4 rounded-full text-lg font-semibold text-white cursor-pointer hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration -300 ease-in-out">
          Contact Me
        </div>
      </div>
    </div>
  );
}

export default Hero;
