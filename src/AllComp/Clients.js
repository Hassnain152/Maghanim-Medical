//  this is testimonial page
import sdi1 from "../Assets/ksa1.png"
import sdi2 from "../Assets/ksa2.png"
import sdi3 from "../Assets/ksa3.png"
import React from "react";


const Clients = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
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
                    src={sdi1}
                    alt="John Doe"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">Abu Abdul Aziz</h5>
                    <small className="text-muted">CEO, TechCorp</small>
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
                   src={sdi2}
                    alt="Jane Smith"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">Abdul Bin Oof</h5>
                    <small className="text-muted">Marketing Director, CreativeCo</small>
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
                    src={sdi3}
                    alt="David Lee"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">Abu Khalid</h5>
                    <small className="text-muted">Founder, Startup Inc.</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Their expertise and professionalism are truly outstanding.
                    They delivered exceptional results on time and within
                    budget.
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
  );
};

export default Clients;
