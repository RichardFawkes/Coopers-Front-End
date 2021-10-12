import React,{ useState } from 'react'
import ReactDOM from "react-dom";

// eslint-disable-next-line
import 'swiper/swiper.min.css'
import "./index.css";

//Components
import Header from './components/header/header'
import Banner from './components/banner/banner'
import TwoCard from './components/homeCard/twoCard'
import Servicos from './components/servicos/servicos'
import Form from './components/form/form'
import Footer from './components/footer/footer'

export default function App(){



  return(

<>
 <Header />
 <Banner />
<div className="diagonal">
<h1 className="title-diagonal">To-do List</h1>
<h1 className="subititulo-diagonal">Drag and drop to set your main priorities, check when done and create what´s new.</h1>
</div>
<TwoCard/>
<Servicos/>
<Form />
<Footer />
 </>


   )
}