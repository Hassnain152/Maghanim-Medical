
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import last from "../Assets/lasttt.webp";
import whtsapp1 from "../Assets/whtsapp1.png";

import "./Contactus.css";

function Contactus() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="contact-section" id="Contactus">
      <div className="contact-container">

        {/* =========================================
            HEADING
        ========================================= */}

        <div
          className="contact-heading"
          data-aos="fade-up"
        >
          <span>GET IN TOUCH</span>

          <h1>
            Contact <strong>Us</strong>
          </h1>

          <p>
            Have a question or want to work with us?
            We would love to hear from you.
          </p>
        </div>

        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div
            className="contact-info"
            data-aos="fade-right"
          >
            <div className="contact-image-wrapper">
              <img
                src={last}
                alt="Contact us"
                className="contact-main-image"
                loading="lazy"
              />

              <div className="contact-image-overlay">
                <span>We Are Here For You</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="contact-details"
            data-aos="fade-left"
          >

            <h2>
              Let's Start a <span>Conversation</span>
            </h2>

            <p className="contact-description">
              Whether you have a question, need more information,
              or would like to discuss our services, feel free
              to reach out to us.
            </p>

            {/* WhatsApp */}
            <a
              className="contact-item whatsapp-contact"
              href="https://wa.me/966566257866"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon whatsapp-icon">
                <img
                  src={whtsapp1}
                  alt="WhatsApp"
                />
              </div>

              <div>
                <small>WHATSAPP</small>
                <h3>+966 56 625 7866</h3>
              </div>
            </a>

            {/* Phone */}
            <a
              className="contact-item"
              href="tel:+966566257866"
            >
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>

              <div>
                <small>CALL US</small>
                <h3>+966 56 625 7866</h3>
              </div>
            </a>

            {/* Email */}
            <a
              className="contact-item"
              href="mailto:info@example.com"
            >
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <div>
                <small>EMAIL</small>
                <h3>info@example.com</h3>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>

              <div>
                <small>LOCATION</small>
                <h3>Saudi Arabia</h3>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              className="linkedin-button"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />

              <span>Connect With Us on LinkedIn</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contactus;
