
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
    
    slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} 
className="card-deck row "
breakpoints={{
  // when window width is >= 640px
  300: {
    width: 300,
    slidesPerView: 1,
  },
  640: {
    width: 640,
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    width: 850,
    slidesPerView: 2,
  },
}}
>

<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card">

    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

      <h4 class="card-title">1 Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>

<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card">

    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

      <h4 class="card-title">1 Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>
<div class="col-xs-12 col-sm-6 col-md-4">
  <SwiperSlide>
  <div class="card">

    <div class="view overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

      <h4 class="card-title">1 Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
 
</SwiperSlide>
</div>


  </Swiper>
  </div>
    
  )
}