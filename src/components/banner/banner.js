import React from "react";
import logoLateral from '../../img/BG.png'
import Slide01 from '../../img/Slides/02.jpg'


export default function Banner(){

    return(

    <div className="banner">
    <div className="titles-banner">
  <h1 className="title">Organize</h1>
  <h1 className="subtitle">your daily jobs</h1>
  <p className="subtitle-2">The only way to get things done</p>
  </div> 
  <div className="item-2">
  <img  className="logoLateral " src={logoLateral} />
 <img  class="slide01 "src={Slide01} />
 </div>
 </div>

 )
}