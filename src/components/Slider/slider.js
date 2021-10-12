
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from '../../img/bitmap.png'
import card2 from '../../img/bitmap2.png'
import card3 from '../../img/bitmap3.png'
import icon from '../../img/icone-coopers.png'



export default function App() {
  
  
  
  return (
   
    <div className="container">
    <Swiper 
     
     spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} 

breakpoints={{
   
      // when window width is <= 320px     
      320: {       
        slidesPerView: 1,
        spaceBetween: 10     
     },     
     // when window width is <= 480px     
     480: {       
        slidesPerView: 2,       
        spaceBetween: 20     
     },   
 
     // when window width is <= 640px     
     640: {       
        slidesPerView: 3,   
        
    
     } 
}}
>

<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card card-2">
  
    <div class="view overlay">
      <img class="card-img-top" src={card1} alt="Card image cap" />
      <img className="sv-icon-green" src={icon} />

      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

    <a href="#" className="sv-icon-function ">function</a>
  <p>Organize your daily job enhance your life performance</p>
      <button type="button" class="btn btn-light-blue btn-md read-more">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>
<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card card-2">
  
    <div class="view overlay">
      <img class="card-img-top" src={card1} alt="Card image cap" />
      <img className="sv-icon-green" src={icon} />

      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

    <a href="#" className="sv-icon-function ">function</a>
  <p>Organize your daily job enhance your life performance</p>
      <button type="button" class="btn btn-light-blue btn-md read-more">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>
<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card card-2">
  
    <div class="view overlay">
      <img class="card-img-top" src={card1} alt="Card image cap" />
      <img className="sv-icon-green" src={icon} />

      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

    <a href="#" className="sv-icon-function ">function</a>
  <p>Organize your daily job enhance your life performance</p>
      <button type="button" class="btn btn-light-blue btn-md read-more">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>


  </Swiper>
  </div>
    
  )
}