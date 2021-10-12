import React from "react";
import './style.css'

import bg from '../../img/bg-footer.png'

export default function Footer(){

    return(
    <>
    <footer className="diagonal-footer">
    <h1>Need help?</h1>
    <h1>coopers@coopers.pro</h1>
    <p>© 2021 Coopers. All rights reserved.</p>
<img class="bg text-center" src={bg} />
    </footer>
    </>)
}