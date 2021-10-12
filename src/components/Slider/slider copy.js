
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from '../../img/bitmap.png'
import card2 from '../../img/bitmap2.png'
import card3 from '../../img/bitmap3.png'
import icon from '../../img/icone-coopers.png'

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';



export default function App() {
  
  
  
  return (
   
    <div className="container">
    <Swiper 
    
    slidesPerView={3} spaceBetween={20} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} 
>

<div className="container col-md-3">
  <SwiperSlide>
<div className="card card-2 ">
  <img className="card-servico" src={card1} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Organize your daily job enhance your life performance</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>

<div className=" container col-md-3">
    <SwiperSlide>
      <div className="card card-2 ">
  <img className="card-servico" src={card2} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Mark one activity as done makes your brain understands the power of doing.</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>

<div className="col-md-3">
<SwiperSlide>
  <div className="card card-2 ">
  <img className="card-servico" src={card3} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Careful with missunderstanding the difference between a list of things and a list of desires.</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>
<div className="container col-md-3">
<SwiperSlide>
<div className="card card-2 ">
  <img className="card-servico" src={card1} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Organize your daily job enhance your life performance</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>

<div className=" container col-md-3">
    <SwiperSlide >
      <div className="card card-2 ">
  <img className="card-servico" src={card2} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Mark one activity as done makes your brain understands the power of doing.</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>
<div className="container col-md-3">
<SwiperSlide>
  <div className="card card-2">
  <img className="card-servico" src={card3} />
  <img className="sv-icon-green" src={icon} />
  <div></div>
  <div className="container sv">
  <a href="#" className="sv-icon-function ">function</a>
  <p>Careful with missunderstanding the difference between a list of things and a list of desires.</p>
  </div>
  <a href="#" className="read-more">read more</a>
</div>
</SwiperSlide>
</div>
  </Swiper>
  </div>
    
  )
}