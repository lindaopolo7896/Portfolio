import React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import "./App.css";
import Voluntrack from "./assets/voluntrack.jpg";
import Telemed from "./assets/telemed.jpg";
import CampusNest from "./assets/campusnest.jpg";
import Logo from "./assets/PROF.jpeg";

const projects = [
  {
    title: "Student Accommodation App",
    description:
      "Figma prototype showcasing UI/UX design for a student housing platform.",
    image: CampusNest,
  },
  {
    title: "Telemedicine App",
    description:
      "Figma design highlighting responsive layouts and user flows for a telemedicine platform.",
    image: Telemed,
  },
  {
    title: "VolunTrack",
    description:
      "Figma prototype show casing UI/UX design of a volunteer opportunity platform",
    image: Voluntrack,
    figmaLink:
      "https://www.figma.com/proto/w65eXxj9h4sYc8Gs7kR0Bs/volunTrack?node-id=332-189&t=jV1ImQcgZ6Lz270x-1",
  },
];
function App() {
  return (
    <div className="app">
      <Header />
      <section id="about" className="intro">
        <div className="logo">
          <img src={Logo} alt="profile" />
        </div>
        <h2>Hi, I’m Eleanor</h2>
        <p>
          I am a UI/UX designer and aspiring full-stack developer. I create
          modern, responsive web applications and interactive prototypes. This
          portfolio showcases my work and designs.
        </p>
      </section>

      <section id="projects" className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:eleanor.opolo@email.com">eleanor.opolo@email.com</a>
        </p>
        <p>Phone: +254711852605</p>
        <p>
          LinkedIn:{" "}
          <a href="linkedin.com/in/linda-opolo-91a0992bb">linkedin.com/in</a>
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
