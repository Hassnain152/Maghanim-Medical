
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

    <section className="about-section" id="Aboutus">
      <div className="about-container">
        
<h1
  className="text-center"
  style={{
    color: "#005da7",
    fontWeight: "700",
  }}
>
  About-Us
</h1>



        {/* Decorative background */}
        <div className="about-bg-circle about-circle-one"></div>
        <div className="about-bg-circle about-circle-two"></div>

        {/* =========================
            HEADER
        ========================= */}

        <div
          className="about-header"
          data-aos="fade-up"
        >
          <span className="about-eyebrow">
            WHO WE ARE
          </span>

          <h1>
            Excellence That
            <span> Makes a Difference</span>
          </h1>

          <p>
            Discover who we are, what drives us, and why our
            commitment to excellence sets us apart.
          </p>
        </div>


        {/* =========================
            MAIN ABOUT CARD
        ========================= */}

        <div className="about-main-card">

          {/* Left */}
          <div
            className="about-intro"
            data-aos="fade-right"
          >
            <div className="about-number">
              01
            </div>

            <div>
              <span className="about-small-title">
                ABOUT OUR COMPANY
              </span>

              <h2>
                Innovation meets
                <strong> excellence.</strong>
              </h2>
            </div>
          </div>


          {/* Right */}
          <div
            className="about-description"
            data-aos="fade-left"
          >
            <p>
              Welcome to{" "}
              <strong>Maghanim Medical Co. LLC</strong>,
              where innovation meets excellence. We are a passionate
              team dedicated to providing top-notch solutions to our
              clients and customers.
            </p>

            <p>
              Our company was founded on the principles of{" "}
              <strong>quality, integrity, and commitment</strong>{" "}
              to delivering results that matter.
            </p>

            <p>
              At <strong>Maghanim Medical Co. LLC</strong>, we believe
              in creating lasting relationships with our clients,
              based on trust and mutual respect.
            </p>

            <p>
              Our expertise spans across various services, including{" "}
              <strong>
                Skin Care, Dental Solution, Ostomology and Laser
                Treatment
              </strong>
              . We take pride in offering services tailored to the
              unique needs of every client.
            </p>
          </div>

        </div>


        {/* =========================
            VALUES
        ========================= */}

        <div className="about-values">

          <div
            className="value-card"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="value-top">
              <span>01</span>

              <div className="value-icon">
                ✓
              </div>
            </div>

            <h3>Quality</h3>

            <p>
              We are committed to delivering high-quality
              solutions that meet and exceed expectations.
            </p>
          </div>


          <div
            className="value-card"
            data-aos="fade-up"
            data-aos-delay="150"
          >
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


          <div
            className="value-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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


        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

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

