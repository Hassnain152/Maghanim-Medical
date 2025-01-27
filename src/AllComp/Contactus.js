import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import telee from "../Assets/knt.jpg"
import "./Contactus.css"



function Contactus() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (<section id="Contactus">
        <div class ="container">

        <div class="row mt-5">
          <div class="col-md-12">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <div class="row " >
          <div class="col-md-6 mb-5 text-center">
          <img  className="resp" style={{width:"350px", height:"400px"}}  src={telee}/>
          </div>

          <div class="col-md-6 mt-5">
            <div class="row mt-5">
              <div class="col-md-12"> <h6>person1Name</h6></div>
              <div class="col-md-12"> <h6>position</h6></div>
              <div class="col-md-12"> <h6>Contact No</h6></div>
            </div>

            <div class="row">
              <div class="col-md-12"> <h6>perso2Name</h6></div>
              <div class="col-md-12"> <h6>position</h6></div>
              <div class="col-md-12"> <h6>Contact No</h6></div>
            </div>

            <div class="row">
              <div class="col-md-12"> <h6>person3Name</h6></div>
              <div class="col-md-12"> <h6>position</h6></div>
              <div class="col-md-12"> <h6>Contact No</h6></div>
            </div>
          </div>
        </div>
    </div>
    </section>
    
  )
}

export default Contactus
