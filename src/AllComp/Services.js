import React, { useEffect, useState } from "react";
import "./Services.css"
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";



function Services() {
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
  return (
    <section  id='Services'>

        < div className='contt' class ="container  text-center" >
       
            <div class="row text-center">
            <h1 class="col-md-12 "    style={{color:"#005da7"}}>OUR SERVICES</h1>
 
           
 
 
 
            </div>
            <div class="row ">
                <div class="col-md-4">
                

                    <h1>Cosmetology</h1>
                </div>
                <div class="col-md-4">
                    <h1 >Hdrafacial</h1>
                </div>
                <div class="col-md-4">
                    <h1 >Dental Plant</h1>
                </div>

            </div>

            <div class="row mt-5">
                <div class="col-md-4">
                    <h1 >Dermatology</h1>
                </div>
                <div class="col-md-4">
                    <h1 >Carcodatic</h1>
                </div>
                <div class="col-md-4">
                    <h1 >Laser Treatment</h1>
                </div>

            </div>
        
       
       
       
            </div>
    </section>
    
  )
}

export default Services
