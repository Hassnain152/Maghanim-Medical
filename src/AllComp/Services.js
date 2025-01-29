import React, { useEffect, useState } from "react";
import "./Services.css"
import Aos from "aos";
import "aos/dist/aos.css";
import dental from "../Assets/dntal.jpg"
import drm from "../Assets/drm.jpg"
import lsr from "../Assets/lsr.jpg"
import radio from  "../Assets/radio.jpg" 
import lab from  "../Assets/lab.jpg"
import emr from  "../Assets/emer.jpg"
import pedd from "../Assets/ped.jpg"
import eye from "../Assets/eye.jpg"
import bone from "../Assets/bone.jpg"



function Services() {
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
  return (
    <section  id='Services'>


        < div  class ="container  text-center" style={{paddingTop:"120px"}} >
        <div class="row text-center">
            <h1 class="col-md-12 "    style={{color:"#005da7"}}>OUR SERVICES</h1>
            </div>

        <div  class="row " >
    
    <div class="col-md-4 mt-5" > 

    <div  class="card" >
  <img style={{ }} class="card-img-top" src={eye} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Ophthalmology</h2>
  </div>
</div>


    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={bone} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Orthopedics</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={dental} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Dental Plant </h2>
  </div>
</div>
    </div>
</div>



<div  class="row " >
    
    <div class="col-md-4 mt-5" > 

    <div  class="card" >
  <img style={{ }} class="card-img-top" src={drm} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Dermatology</h2>
  </div>
</div>


    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={radio} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Radiology</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={lsr} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Laser Treatment </h2>
  </div>
</div>
    </div>
</div>
        


<div  class="row " >
    
    <div class="col-md-4 mt-5" > 

    <div  class="card" >
  <img style={{ }} class="card-img-top" src={lab} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Laboratory</h2>
  </div>
</div>


    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={emr} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Emergency</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={pedd} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Pediatric</h2>
  </div>
</div>
    </div>
</div>
        
       
       
       
            </div>
    </section>
    
  )
}

export default Services













{/* < div  class ="container  text-center" style={{paddingTop:"120px"}} >
       
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




</div> */}