import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

function Contactus() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (
    
    <section id="Contactus">
        <div class ="container">
        <h1  style={{color:"red"}}>ContactUs</h1>
      <h1>We’d love to hear from you! At [Your Company Name], we are committed to providing excellent service and support to all our clients and partners. Whether you have a question, need assistance, or want to discuss a potential project, don’t hesitate to reach out to us. Our team is here to help!</h1>
    </div>
    </section>
    
  )
}

export default Contactus
