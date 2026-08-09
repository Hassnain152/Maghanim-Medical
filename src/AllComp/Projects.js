import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Project.css";
import alsor from "../Assets/alsaror.png";
import comp2 from "../Assets/comp2.png";
import cafe from "../Assets/dailydose.png";
import majma from "../Assets/majma.png";
import clinic from "../Assets/doseCli.png";
import compp from "../Assets/copm1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <section id='Projects'>
      <div className='container text-center brnch' style={{ paddingTop: "120px" }}>
        <h2 style={{ color: "#005da7" }}>Our Branches</h2>

        <div id='projts' className="row">
          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={majma} alt="AL Taj poly Clinic building" />
              <div className="card-body">
                <a href="https://altajclinic.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">AL Taj poly <br /> Clinic</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={clinic} alt="Dose Poly Clinic building" />
              <div className="card-body">
                <a href="https://doseclinic.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">Dose Poly <br /> Clinic</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={alsor} alt="AL Sarour Pharmacy building" />
              <div className="card-body">
                <a href="https://alsorourpharmacy.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">AL Sarour <br /> Pharmacy</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={comp2} alt="Maghanim Marketing building" />
              <div className="card-body">
                <a href="https://www.maghanimco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">Maghanim Marketing</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={cafe} alt="Daily Dose Cafe" />
              <div className="card-body">
                <a href="https://maps.app.goo.gl/D6EmBSTHXuprowsdA?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">Daily Dose Cafe</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="card">
              <img className="card-img-top" src={compp} alt="Maghanim Marketing office" />
              <div className="card-body">
                <a href="https://www.maghanimco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  <h2 className="card-text">Maghanim Marketing</h2>
                  <small style={{ color: 'blue', textDecoration: 'underline' }}>
                    Explore more <FontAwesomeIcon icon={faArrowRight} />
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
