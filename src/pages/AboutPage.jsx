import Profile from "../assets/PROF.jpeg";
import Figma from "../assets/figma.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Design from "../assets/design.png";
import Code from "../assets/code.png";
import SkillsCard from "../components/SkillsCard";
import ServiceCard from "../components/ServiceCard";

const skills = [
  {
    id: "1",
    skill: Figma,
  },
  {
    id: "2",
    skill: Html,
  },
  {
    id: "3",
    skill: Css,
  },
  {
    id: "4",
    skill: Js,
  },
  {
    id: "5",
    skill: React,
  },
  {
    id: "6",
    skill: Tailwind,
  },
];

const services = [
  {
    id: "1",
    name: "Web Design",
    icon: Design,
    description:
      "I design modern, user-focused interfaces in Figma, creating layouts that are both visually appealing and easy to navigate.",
    button: "View Designs",
  },
  {
    id: "2",
    name: "Frontend Development",
    icon: Code,
    description:
      "I transform Figma designs into responsive and interactive web applications using React and Tailwind CSS, focusing on performance and user experience.",
    button: "Github",
  },
];
function AboutPage() {
  return (
    <div className="pt-40 ">
      <h1 className="text-5xl py-3 font-bold text-center text-[#14B8A6]">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row text-center md:text-left px-5 items-center gap-8 md:px-10 lg:px-30 pt-4 pb-15">
        <div
          className="h-[140px] w-[140px] bg-cover bg-center  rounded-full "
          style={{ backgroundImage: `url(${Profile})` }}
        ></div>
        <p className="md:w-full lg:w-5/6 text-lg text-white/66">
          I’m a frontend developer with a passion for turning ideas into real,
          interactive experiences. I design clean and user-friendly interfaces
          in Figma and bring them to life using React and Tailwind CSS. As I
          continue to grow, I’m focused on improving my skills and building
          applications that are not only visually appealing but also practical
          and easy to use.
        </p>
      </div>
      <div className="w-full h-40 bg-[#14B8A6]/40 flex items-center justify-between px-5 md:px-10 lg:px-30 mt-15">
        {skills.map((skill) => (
          <SkillsCard skills={skill} />
        ))}
      </div>
      <div className="px-5 md:px-10 lg:px-30 py-30">
        <h1 className="text-3xl font-semibold text-white/66 border border-white/66 w-1/2 lg:w-1/6 text-center p-4 rounded-full mb-10">
          Services
        </h1>
        <div className="flex gap-10 flex-col md:flex-row ">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
