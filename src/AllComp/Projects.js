
// this page is our branches
import hoss from "../Assets/hoss.png"
import "./Project.css"

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
function Projects() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (
    <section id='Projects'>
        <div class ="container text-center" style={{padding:"100px"}}>
        <h1  style={{color:"#005da7"}}>Our Branches</h1>
<div  class="row " >
    
    <div class="col-md-4 mt-5" >

    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">AL Taj Poly <br/>Clinic</h2>
  </div>
</div>


    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Dose Poly <br/> Clinic</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">AL Sarour  <br/>Pharmacy </h2>
  </div>
</div>
    </div>
</div>

<div class="row text-center" >
    <div class="col-md-4 mt-5">
    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Maghanim Marketing</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Daily Dose <br/> Cafe</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  border: '3px solid #000000', borderRadius: '15px'}}>
  <img class="card-img-top" src={hoss} alst="Card image cap"/>
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
