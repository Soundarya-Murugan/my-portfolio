import React from 'react';
import '../assets/styles/Header.css'; // Commented out for now

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;