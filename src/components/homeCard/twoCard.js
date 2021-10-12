import React from "react";


export default function Card(){

    return(

        <div>

<div className="container">
<div className="row d-flex justify-content-center ">

  <div className="col-md-4">
   <div className="card ">
     <div className="orange"></div>
     <div className="meio">
     <h1 className="text-center title-card">To-do</h1>
     <p className="text-center subtitle-card">Take a breath.<br/>Start doing.</p>
     <div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  Develop the To-do list page
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  Create the drag-and-drop function
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  Add new tasks
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  Delete itens
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  Checked item goes to Done list  
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  This item label may be edited
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-orange" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label " for="flexCheckChecked">
  Editing an item... 
  </label>
</div>

   </div>

   <div className="text-center">
   <button className="btn-card">erase all</button>

   </div>


  </div>
  </div>
  <div className=" col-md-4">
   <div className="card ">
     <div className="green"></div>
     <div className="meio">
     <h1 className="text-center title-card">Done</h1>
     <p className="text-center subtitle-card-1">Congratulions!</p>
     <p className="text-center subtitle-card-2">You have done 5 tasks</p>
     <div class="form-check">
  <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckDefault" checked/>
  <label class="form-check-label" for="flexCheckDefault">
  Get FTP credentials
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
  <label class="form-check-label " for="flexCheckChecked">
  Home Page Design 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
  <label class="form-check-label "git  for="flexCheckChecked">
  E-mail John about the deadline
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
  <label class="form-check-label " for="flexCheckChecked">
  Create a Google Drive folder
  </label>
</div>
<div class="form-check">
  <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
  <label class="form-check-label " for="flexCheckChecked">
  Send a gift to the client 
  </label>
</div>
   </div>

   <div className="text-center">
   <button className="btn-card">erase all</button>

   </div>


  </div>
  </div>



</div>
</div>
</div>
 )
}



