
import wsm from "../Assets/wasm.jpeg"
import sdi2 from "../Assets/ksa2.png"
import ariif  from "../Assets/bvc.jpg"
import hmza from "../Assets/mnb.jpeg"
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
//  this is testimonial page

const Clients = () => {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (
    <section id="Clients">
    <div className="bg-light py-5">
      <div className="container text-center " style={{padding:"100px"}}>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{color:"#005da7"}}>What Our Coustomer Say</h1>
          <p className="lead text-muted">
            Hear from some of our happy customers who trust us for their projects.
          </p>
        </div>
        <div className="row g-4">
          {/* Testimonial 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={ariif}
                    alt="John Doe"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">M.Arif</h5>
                    <small className="text-muted">CEO, GhalaIbrahim</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Getting Services from here  has been a fantastic experience!
                    Their attention to detail and dedication to delivering
                    results is unmatched.
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                </blockquote>
                <div className="d-flex text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                   src={wsm}
                    alt="Jane Smith"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">Engr Waseem </h5>
                    <small className="text-muted"> CEO,Makinati</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Absolutely love their work! The team went above and beyond
                    to meet our expectations. Highly recommend them!
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                </blockquote>
                <div className="d-flex text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={hmza}
                    alt="David Lee"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">M.Hamza</h5>
                    <small className="text-muted">Sales Manager, MosasaSona</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Their expertise and professionalism is outstanding.
                    They delivered exceptional results with in budget.
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                </blockquote>
                <div className="d-flex text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Clients;
