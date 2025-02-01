import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSnapchat, faTiktok,faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import telee from "../Assets/knt.jpg"
import "./Contactus.css"



function Contactus() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (<section id="Contactus">
        <div class ="container"  className="cont">

        <div class="row mt-5">
          <div class="col-md-12">
            <h1  style={{color:"#005da7"}}>CONTACT US</h1> 
          </div>
        </div>
        <div class="row " >
          <div class="col-md-6 text-center mt-3">
          <img  className="resp" style={{width:"250px", height:"250px"}}  src={telee}/>
          </div>

          <div class="col-md-6 mt-5 text-center">
            <div class="row">
              <div class="col-md-12"> <h2>فارس  بن سرور القثامى العتيبى</h2></div>
              <div class="col-md-12"> <h3>رئيس مجلس الادارة </h3></div>
              <div class="col-md-12"> <h4>0555556790</h4></div>
            </div>

            
          </div>
        </div>

        <div class ="row text-center ">
      <h1  style={{color:"#005da7"}} data-aos="zoom-in-right">LOCATE US
        <a  style={{color:"#005da7"}}> <FontAwesomeIcon className="custom-icon" icon={faMapLocation}  bounce/></a>
      </h1>
        </div>
      <iframe class="mt-4"style={{ width:"100%" ,height:"450" , allowfullscreen:"1" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.7552694658966!2d40.47360949999999!3d21.4388623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ea2f7d34d78f7d%3A0xa6d814be696ba44a!2z2YXYrNmF2Lkg2KfZhNiq2KfYrCDYp9mE2LfYqNmK!5e0!3m2!1sen!2ssa!4v1738000804549!5m2!1sen!2ssa" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    </section>
    
  )
}

export default Contactus
