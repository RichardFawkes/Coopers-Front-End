import React,{ useState } from 'react'
import {Banner, Item2, Item1, Image} from './Styles';



import './App.css'
import logoLateral from './img/BG.png'
import Slide01 from './img/Slides/02.jpg'

export default function App(){


  return(

 <>

<Banner>

 <Item2 >
 <img src={logoLateral} />
 <img src={Slide01}/>
</Item2>

</Banner>


<div className="container">
<div className="diagonal">
  <h1 className="title-diagonal">To-do list</h1>
</div>
<h1 className="subititulo-dagonal">To-do listSSSS</h1>
</div>


 </>


   )
}