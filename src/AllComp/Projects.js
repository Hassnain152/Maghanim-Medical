


import "./Project.css"
import alsor from "../Assets/alsaror.png"
import comp2 from "../Assets/comp2.png"
import cafe from "../Assets/dailydose.png"
import majma from "../Assets/majma.png"
import clinic from "../Assets/doseCli.png"
import compp from "../Assets/copm1.png"
// this page is our branches 
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
function Projects() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (
    <section id='Projects'>
        <div class ="container text-center" style={{paddingTop:"120px"}}>
        <h1  style={{color:"#005da7"}}>Our Branches</h1>


        
<div  class="row " >
    
<div class="col-md-4 mt-5" >
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={majma} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Al taj Poly <br/> Clinic</h2>
  </div>
</div>
    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={clinic} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Dose Poly <br/> Clinic</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={alsor} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">AL Sarour  <br/>Pharmacy </h2>
  </div>
</div>
    </div>
</div>

<div class="row text-center" >
    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={comp2} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Maghanim Marketing</h2>
  </div>
</div>
    </div>
    {/* border: '3px solid #000000', borderRadius: '15px' img border
    border: '3px solid #000000', borderRadius: '15px' card border */}

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  }}>
  <img style={{ }} class="card-img-top" src={cafe} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Daily Dose Cafe</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={compp} alst="Card image cap"/>
  {/* style={{width:"20px", height:"20px"}} */}
  <div class="card-body">
    <h2 class="card-text">Maghanim Marketing</h2>
  </div>
</div>
    </div>

    
</div>
    </div>
    </section>
    
  )
}

export default Projects
