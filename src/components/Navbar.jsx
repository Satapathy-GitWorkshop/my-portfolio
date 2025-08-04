import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    const toggleSwitch = document.querySelector('#switch');
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", (e) => {
      const theme = e.target.checked ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 id="logo">
          <a href="#"><img src={logo} alt="logo" /></a>
        </h1>
        <ul className="nav-menu">
          <li><a className="nav-link" href="#projects">PROJECTS</a></li>
          <li><a className="nav-link" href="#experience">EXPERIENCE</a></li>
          <li>
            <a className="nav-link btn btn-primary" href="#">
              RESUME <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <div className="theme-switch">
            <input type="checkbox" id="switch" />
            <label className="toggle-icons" htmlFor="switch">
              <img className="moon" src={moon} alt="moon" />
              <img className="sun" src={sun} alt="sun" />
            </label>
          </div>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
