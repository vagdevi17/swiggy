import React from 'react';
import './Belowheader.css';
//import ReactDOM from "react-dom";
//import Carousel from 'react-elastic-carousel';
//import Item from "./Item";

const breakPoints=[
    {width: 1200,itemToShow: 4}
];
function Belowheader() {
     return (
         <div className='main_header container-fluid'>
             {<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                   <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://ik.imagekit.io/vagdevi17/biryani_eqitwWq_7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649399064013" class="cakes" alt="..."></img>
    </div>
    <div class="carousel-item">
              <img src="https://ik.imagekit.io/vagdevi17/pizza_K-qymAstX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649399459574" class="cakes" alt="..."></img>
    </div>
    <div class="carousel-item">
       <img src="https://ik.imagekit.io/vagdevi17/icecream_6y0pc7AlN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649400201393" class="cakes" alt="..."></img>
     </div>
  </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
 </button>
 </div> 
    }
        </div>
    )
}
export default Belowheader
