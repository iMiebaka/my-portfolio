import React from "react";
import info from "../assets/info";
import IMAGES from "../images";
// src/assets/Miebaka_Iwarr_CV.pdf

let mobileMenuState = false;

const Header = () => {
  const toggleMenu = () => {
    const mobileMenu = document.querySelector(".mobile-view-header");
    {
      mobileMenuState
        ? (mobileMenu.style.display = "none")
        : (mobileMenu.style.display = "inline-block");
    }
    mobileMenuState = !mobileMenuState;
  };
  return (
    <header className="header" id="home">
      <a href=""><img src={IMAGES.favicon} alt="" srcSet="" width="50" /></a>
      <ul className="main-view-header">
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#achievement">Achievement</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        <li>
          <a href={info.cv} download className="download-cv">
            Download CV
          </a>
        </li>
      </ul>
      <button className="mobile-btn" onClick={toggleMenu}>
        <i className="mdi mdi-format-align-center"></i>
      </button>
      <ul className="mobile-view-header">
        <li className="close-menu">
          <button className="" onClick={toggleMenu}>
            <i className="mdi mdi-close"></i>
          </button>
        </li>
        <li>
          <a href="#about-me">About Me </a>
        </li>
        <li>
          <a href="#achievement">Achievement</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio </a>
        </li>
        <li>
          <a href="#experience">Experience </a>
        </li>
        <li>
          <a href="#contact-me">Contact Me </a>
        </li>
        <li>
          <a href="" target="_blank" className="download-cv">
            Download CV
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
