import React from "react";
import FadeImage from "./FadeImage";
import "../assets/styles/Projects.css";

const Projects = () => {
  const images = [
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300/ff0000",
    "https://via.placeholder.com/400x300/00ff00",
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <FadeImage images={images} />
    </section>
  );
};

export default Projects;