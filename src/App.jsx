import React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import "./App.css";
import Voluntrack from "./assets/voluntrack.jpg";
import Telemed from "./assets/telemed.jpg";
import CampusNest from "./assets/campusnest.jpg";
import Logo from "./assets/PROF.jpeg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="bg-[#00141D] h-auto">
      <Header />

      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
