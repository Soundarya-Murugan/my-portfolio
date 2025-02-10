import React, { useState } from "react";
import "../assets/styles/Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <header className={isDarkMode ? "dark-mode" : ""}>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;