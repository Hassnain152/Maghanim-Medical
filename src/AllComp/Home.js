import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
 import crn1 from "../Assets/crnN1.png"
 import crn2 from "../Assets/crnN2.png"
 import crn3 from "../Assets/crnN3.png"
 import crn4 from "../Assets/crnN4.png"
 import "./Home.css"
 import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";




import { } from "@fortawesome/free-brands-svg-icons/fa42Group";


function Home() {
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
  return (
    <>
    <div className="homii">

    <Carousel  >
                <div>
                    <img src= {crn4}/>
                    
                </div>
                <div>
                    <img src={crn2} />
                   
                </div>
                <div>
                    <img src={crn3} />
                  
                </div>

                <div>
                    <img src={crn1} />
                  
                </div>
            </Carousel>
            
    </div>
    
    </>

  );
}

export default Home;




// import React from 'react'
// import carsl from "../Assets/mnb.jpg"
// import cars2 from "../Assets/mnb2.jpg"

// function Home() {
//   return (
//     <div>
//       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src={carsl} alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src={cars2} alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src={carsl} alt="Third slide"/>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
//     </div>
//   )
// }

// export default Home
