import { useState } from "react";
import Swal from "sweetalert2";
import "./Form.css"

export default function Form() {

  return (

    <>
    <div class="container">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1STnRBaD6AeFikr8hm4Nwi2dQdSfRVa1_08znxfoH51HM1Q/viewform?usp=sharing" target="_blank">
    <div class="buttons">
        <button class="blob-btn">
            Drop Your Resume Here
            <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                </span>
            </span>
        </button>
        <br/>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
</a>

    </div>


    
    </>
    
  );
}
