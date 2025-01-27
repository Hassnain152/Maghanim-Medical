
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "./Contactus.css"



function Aboutus() {
 
  
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <>
    <section id='Aboutus'>



      
      <div class ="container"  style={{padding:"100px"}}>
        <h1 style={{color:"#005da7"}}  className="biodata" >ABOUT US </h1>
        <h3 >Welcome to Maghanim Medical Co.LLC, where innovation meets excellence. We are a passionate team dedicated to providing top-notch solutions to our clients and customers. Our company was founded on the principles of quality, integrity, and commitment to delivering results that matter.
         At Maghanim Medical Co.LLC, we believe in creating lasting relationships with our clients, based on trust and mutual respect. Our expertise spans across various Services, including Skin Care,Dental Solution, Ostomology and Laser Trearment and we take pride in offering services tailored to the unique needs of each client.

</h3>
        

    </div>
    </section>
    </>
    
  );
}

export default Aboutus;
