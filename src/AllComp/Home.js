
import React from "react";
import homee from "../Assets/HP.jpg";
import "./Home.css";

function Home() {
  const scrollToServices = () => {
    const section = document.getElementById("Services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="home-section" id="home">

      {/* Background Image */}
      <img
        src={homee}
        alt="Our business"
        className="home-hero-image"
      />

      {/* Dark Overlay */}
      <div className="home-hero-overlay"></div>

      {/* Hero Content */}
      <div className="home-hero-content">
        <div className="home-hero-text">

          <span className="home-hero-label">
            WELCOME TO OUR WORLD
          </span>

          <h1>
            Our Commitment
            <br />
            <span>to Excellence</span>
          </h1>

          <p>
            We proudly lead a renowned group of businesses, each
            driven by a passion for excellence and committed to
            offering superior, high-quality services that exceed
            expectations and create lasting value.
          </p>

          {/* Buttons */}
          <div className="home-hero-buttons">

            <button
              type="button"
              className="home-primary-btn"
              onClick={scrollToServices}
            >
              Explore Our Services
              <span>→</span>
            </button>

            <a
              href="#Contactus"
              className="home-secondary-btn"
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#Services"
        className="home-scroll-indicator"
        aria-label="Scroll to services"
      >
        <span></span>
        <small>SCROLL TO EXPLORE</small>
      </a>

    </main>
  );
}

export default Home;

