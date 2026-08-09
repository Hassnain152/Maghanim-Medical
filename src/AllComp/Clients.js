
<<<<<<< HEAD
import React from "react";
import icon from "../Assets/icon.png";
import "./clnt.css";
=======
import icon from "../Assets/icon.png"
import "./clnt.css"
//  this is testimonial page
>>>>>>> ff7dc5162fc447bfb6e9b1593c89ad43c114b02b

const Clients = () => {
  return (
    <section className="clients-section" id="testimonials">
      <div className="clients-container">

        {/* Section Heading */}
        <div className="clients-heading">
          <span className="clients-subtitle">TESTIMONIALS</span>

          <h2>
            What Our <span>Customers Say</span>
          </h2>

          <p>
            Hear from our happy customers who trust us and value
            the work we deliver.
          </p>
        </div>
<<<<<<< HEAD
=======
        <div className="row g-4">
          {/* Testimonial 1 */}
          {/* <div class="shapdow" className="col-12 col-md-6 col-lg-4">
          
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
          </div> */}
>>>>>>> ff7dc5162fc447bfb6e9b1593c89ad43c114b02b

        {/* Testimonial */}
        <div className="testimonial-wrapper">
          <article className="testimonial-card">

            {/* Customer */}
            <div className="customer-info">
              <div className="customer-image">
                <img
                  src={icon}
                  alt="Engr Waseem"
                  loading="lazy"
                />
              </div>

              <div className="customer-details">
                <h3>Engr Waseem</h3>
                <p>CEO, Makinati</p>
              </div>
            </div>

            {/* Quote */}
            <div className="quote-icon">“</div>

            <blockquote>
              Absolutely love their work! The team went above and beyond
              to meet our expectations. Highly recommend them. Their
              expertise and professionalism is outstanding.
            </blockquote>

            {/* Rating */}
            <div
              className="testimonial-rating"
              aria-label="5 out of 5 stars"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="testimonial-line"></div>

            <p className="verified-customer">
              ✓ Trusted Customer
            </p>

          </article>
        </div>

      </div>
    </section>
  );
};

export default Clients;

