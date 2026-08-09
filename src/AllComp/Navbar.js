
import React, { useEffect, useState } from "react";
import logok from "../Assets/logoR.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const toggleNavbar = () => {
    setIsNavCollapsed((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  const navLinks = [
    { label: "OUR UPDATES", href: "#updates" },
    { label: "ABOUT US", href: "#Aboutus" },
    { label: "JOIN US", href: "#form" },
    { label: "SERVICES", href: "#Services" },
    { label: "CONTACT US", href: "#Contactus" },
  ];

  return (
    <nav className="custom-navbar fixed-top">
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeNavbar}
          aria-label="Home"
        >
          <img
            src={logok}
            alt="Company Logo"
            data-aos="slide-down"
            data-aos-delay="100"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${!isNavCollapsed ? "active" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarMenu"
          aria-expanded={!isNavCollapsed}
          aria-label={isNavCollapsed ? "Open navigation" : "Close navigation"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div
          id="navbarMenu"
          className={`navbar-menu ${
            isNavCollapsed ? "" : "navbar-menu-open"
          }`}
        >
          <ul className="navbar-links">
            {navLinks.map((link, index) => (
              <li key={link.href} data-aos="fade-down" data-aos-delay={index * 100}>
                <a href={link.href} onClick={closeNavbar}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

