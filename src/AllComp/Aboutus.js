
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

function Aboutus() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section id="Aboutus" className="about-section">
      <div
        className="container"
        style={{ paddingTop: "120px" }}
      >

        {/* Heading */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h1
              style={{
                color: "#005da7",
              }}
              className="biodata"
            >
              ABOUT US
            </h1>
          </div>
        </div>

        {/* About Text */}
        <div className="row mt-4">
          <div className="col-md-12 text-start">
            <h3>
              Welcome to Maghanim Medical Co. LLC, where innovation
              meets excellence. We are a passionate team dedicated
              to providing top-notch solutions to our clients and
              customers. Our company was founded on the principles
              of quality, integrity, and commitment to delivering
              results that matter.
            </h3>

            <h3>
              At Maghanim Medical Co. LLC, we believe in creating
              lasting relationships with our clients, based on trust
              and mutual respect. Our expertise spans across various
              services, including Skin Care, Dental Solution,
              Ostomology and Laser Treatment, and we take pride in
              offering services tailored to the unique needs of each
              client.
            </h3>
          </div>
        </div>

        {/* Values */}
        <div className="row mt-4">

          {/* Integrity */}
          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="value-card h-100">
              <div className="value-top">
                <span>02</span>

                <div className="value-icon">
                  ◆
                </div>
              </div>

              <h3>Integrity</h3>

              <p>
                We build lasting relationships through honesty,
                transparency, trust and mutual respect.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="value-card h-100">
              <div className="value-top">
                <span>03</span>

                <div className="value-icon">
                  ★
                </div>
              </div>

              <h3>Excellence</h3>

              <p>
                We continuously strive to exceed expectations
                through dedication, expertise and innovation.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Statement */}
        <div
          className="about-bottom"
          data-aos="zoom-in"
        >
          <div className="about-bottom-line"></div>

          <div className="about-bottom-content">
            <span>OUR PROMISE</span>

            <h2>
              Creating lasting value through
              <strong> exceptional service.</strong>
            </h2>
          </div>

          <div className="about-bottom-number">
            <span>MAGHANIM</span>
            <strong>01</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Aboutus;

