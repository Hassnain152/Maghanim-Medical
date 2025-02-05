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
import aii from "../Assets/aii.jpg"
import fourhg from "../Assets/sprt.jpg"
import team from "../Assets/team.jpg"


function Services() {
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
  return (
    <>
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
  <img style={{ }} class="card-img-top" src={bone} alt="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Orthopedics</h2>
  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={dental} alst="Card image cap"/>
  <div class="card-body">
    <h2 class="card-text">Dental Implant</h2>
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

    <section id="updates">
      <div class="container " style={{paddingTop:"130px"}}>
        <h1 style={{color:"#005da7"}}> OUR UPDATES</h1>


        <div  class="row " >
    
    <div class="col-md-4" > 

    <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img
        className="card-img-top"
        src={team}
        alt="Card image cap"
        style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body" style={{ padding: '15px' }}>
        <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Our Skilled Professional Team</h2>
        <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
        Our team is skilled in utilizing
the most advanced AI tools,
ensuring top-notch results in every project.
        </p>
      </div>
    </div>


    </div>
    

    <div class="col-md-4">
    <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img
        className="card-img-top"
        src={fourhg}
        alt="Card image cap"
        style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body" style={{ padding: '15px' }}>
        <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>24/7 Reliable
        Support & Service</h2>
        <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
        We are committed to providing our
        customers with 24/7 seamless
        support and service.
                </p>
      </div>
    </div>
    </div>

    <div class="col-md-4 mt-5">
    <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img
        className="card-img-top"
        src={aii}
        alt="Card image cap"
        style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body" style={{ padding: '15px' }}>
        <h2 className="card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>An Ideal Work
        Environment</h2>
        <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>
        We foster an ideal work
environment that promotes
growth, collaboration, and
innovation.
        </p>
      </div>
    </div>
    </div>
</div>
         

         



      </div>
    </section>

    </>
    
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