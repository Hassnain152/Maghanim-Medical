
import React, { useEffect } from "react";
import "./Services.css";

import AOS from "aos";
import "aos/dist/aos.css";

import dental from "../Assets/dntal.jpg";
import drm from "../Assets/drm.jpg";
import lsr from "../Assets/lsr.jpg";
import radio from "../Assets/radio.jpg";
import lab from "../Assets/lab.jpg";
import emr from "../Assets/emer.jpg";
import pedd from "../Assets/ped.jpg";
import eye from "../Assets/eye.jpg";
import bone from "../Assets/bone.jpg";

import aii from "../Assets/aii.jpg";
import fourhg from "../Assets/sprt.jpg";
import team from "../Assets/team.jpg";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  const services = [
    {
      image: eye,
      title: "Ophthalmology",
    },
    {
      image: bone,
      title: "Orthopedics",
    },
    {
      image: dental,
      title: "Dental Implant",
    },
    {
      image: drm,
      title: "Dermatology",
    },
    {
      image: radio,
      title: "Radiology",
    },
    {
      image: lsr,
      title: "Laser Treatment",
    },
    {
      image: lab,
      title: "Laboratory",
    },
    {
      image: emr,
      title: "Emergency",
    },
    {
      image: pedd,
      title: "Pediatric",
    },
  ];

  const updates = [
    {
      image: team,
      title: "Our Skilled Professional Team",
      description:
        "Our team is skilled in utilizing advanced AI tools, ensuring top-notch results in projects.",
    },
    {
      image: fourhg,
      title: "24/7 Reliable Support & Service",
      description:
        "We are committed to providing our customers with 24/7 seamless support and service.",
    },
    {
      image: aii,
      title: "An Ideal Work Environment",
      description:
        "We foster an ideal work environment that promotes growth, collaboration, and innovation.",
    },
  ];

  return (
    <>
      {/* =========================================
          SERVICES
      ========================================= */}

      <section className="services-section" id="Services">
        <div className="services-container">

          {/* Heading */}
          <div
            className="services-heading"
            data-aos="fade-up"
          >
            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h1>
              Our <span>Services</span>
            </h1>

            <p>
              Professional healthcare services delivered with
              modern technology, expertise and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-card"
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />

                  <div className="service-overlay">
                    <span>Explore Service</span>
                  </div>
                </div>

                <div className="service-content">
                  <h2>{service.title}</h2>

                  <span className="service-arrow">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          UPDATES
      ========================================= */}

      <section className="updates-section" id="updates">
        <div className="updates-container">

          {/* Heading */}
          <div
            className="updates-heading"
            data-aos="fade-up"
          >
            <span className="section-label">
              STAY INFORMED
            </span>

            <h2>
              Our <span>Updates</span>
            </h2>

            <p>
              Stay connected with the latest news, services
              and developments from our team.
            </p>
          </div>

          {/* Updates Grid */}
          <div className="updates-grid">
            {updates.map((update, index) => (
              <article
                className="update-card"
                key={update.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="update-image-wrapper">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="update-image"
                    loading="lazy"
                  />
                </div>

                <div className="update-content">
                  <h3>{update.title}</h3>

                  <p>{update.description}</p>

                  <div className="update-link">
                    Learn More
                    <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;





// old code  import React, { useEffect, useState } from "react"; 
// import "./Services.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import dental from "../Assets/dntal.jpg";
// import drm from "../Assets/drm.jpg";
// import lsr from "../Assets/lsr.jpg";
// import radio from  "../Assets/radio.jpg"; 
// import lab from  "../Assets/lab.jpg";
// import emr from  "../Assets/emer.jpg";
// import pedd from "../Assets/ped.jpg";
// import eye from "../Assets/eye.jpg";
// import bone from "../Assets/bone.jpg";
// import aii from "../Assets/aii.jpg";
// import fourhg from "../Assets/sprt.jpg";
// import team from "../Assets/team.jpg";

// function Services() {
//     useEffect(() => {
//         Aos.init({ duration: 5000 });
//     }, []);

//     return (
//         <>
//             <section id="Services">
//                 <div className="container text-center" style={{ paddingTop: "120px" }}>
//                     <div className="row text-center">
//                         <h1 className="col-12" style={{ color: "#005da7" }}>OUR SERVICES</h1>
//                     </div>

//                     <div className="row justify-content-center">
//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={eye} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Ophthalmology</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={bone} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Orthopedics</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={dental} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Dental Implant</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row justify-content-center">
//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={drm} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Dermatology</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={radio} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Radiology</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={lsr} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Laser Treatment</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row justify-content-center">
//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={lab} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Laboratory</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={emr} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Emergency</h2>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-4 mt-5">
//                             <div className="card">
//                                 <img className="card-img-top" src={pedd} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Pediatric</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="updates">
//                 <div className="container text-center" style={{ paddingTop: "130px" }}>
//                     <h1 style={{ color: "#005da7" }}>OUR UPDATES</h1>

//                     <div className="row justify-content-center">
//                         {/* <div className="col-md-4">
//                             <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                                 <img className="card-img-top" src={team} alt="Card image cap" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
//                                 <div className="card-body" style={{ padding: '15px' }}>
//                                     <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Our Skilled Professional Team</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                         Our team is skilled in utilizing the most advanced AI tools, ensuring top-notch results in every project.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div> */}

//                          <div className="col-md-4 mt-3 ">
//                             <div className="card">
//                                 <img className="card-img-top" src={team} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">Our Skilled Professional Team</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                     Our team is skilled in utilizing advanced AI tools, ensuring top-notch results in projects.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>





//                         {/* <div className="col-md-4">
//                             <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                                 <img className="card-img-top" src={fourhg} alt="Card image cap" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
//                                 <div className="card-body" style={{ padding: '15px' }}>
//                                     <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>24/7 Reliable Support & Service</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                         We are committed to providing our customers with 24/7 seamless support and service.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div> */}

//                          <div className="col-md-4 mt-3 ">
//                             <div className="card">
//                                 <img className="card-img-top" src={fourhg} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">24/7 Reliable Support & Service</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                         We are committed to providing our customers with 24/7 seamless support and service.
//                                     </p>

//                                 </div>
//                             </div>
//                         </div>




// {/* 
//                         <div className="col-md-4">
//                             <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                                 <img className="card-img-top" src={aii} alt="Card image cap" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
//                                 <div className="card-body" style={{ padding: '15px' }}>
//                                     <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>An Ideal Work Environment</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                         We foster an ideal work environment that promotes growth, collaboration, and innovation.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div> */}

                             
//                          <div className="col-md-4 mt-3 ">
//                             <div className="card">
//                                 <img className="card-img-top" src={aii} alt="Card image cap" />
//                                 <div className="card-body">
//                                     <h2 className="card-text">24/7 Reliable Support & Service</h2>
//                                     <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
//                                         We are committed to providing our customers with 24/7 seamless support and service.
//                                     </p>

//                                 </div>
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Services;
