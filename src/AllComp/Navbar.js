
import React, { useEffect, useState } from "react";
import logok from "../Assets/logoR.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Navbar.css";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid px-3 px-lg-5">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeNavbar}
        >
          <img
            src={logok}
            alt="Maghanim Medical Co. LLC"
            className="logoo"
            data-aos="fade-down"
            data-aos-delay="100"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${
            !isNavCollapsed ? "active" : ""
          }`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarMenu"
          aria-expanded={!isNavCollapsed}
          aria-label={
            isNavCollapsed
              ? "Open navigation"
              : "Close navigation"
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarMenu"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {navLinks.map((link) => (
              <li
                className="nav-item items"
                key={link.href}
              >
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={closeNavbar}
                >
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

