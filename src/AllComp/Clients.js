
import React from "react";
import icon from "../Assets/icon.png";
import "./clnt.css";

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

