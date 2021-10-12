import React from "react"
import Logo from '../../img/Logo.png'

export default function Header(){



    return(
  <>
<header>
<nav class="navbar  justify-content-between">
<img src={Logo}></img>
 <form class="form-inline">
   
  <button className="btn-entrar">entrar</button>
 </form>
</nav>
</header>
</>
    )
}