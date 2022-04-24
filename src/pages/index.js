import React, { useRef as UseRef } from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

export default function index() {
  const projectsPage = UseRef(null);
  const scrollToProjectPage = () => {
    projectsPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <HeroSection onButtonClick={scrollToProjectPage} />
      <hr className="my-8" />
      <div ref={projectsPage}>
        <ProjectsSection />
      </div>
    </div>
  );
}
