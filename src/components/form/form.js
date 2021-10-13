import React,{ useRef,useState } from "react"
import InputMask from "react-input-mask";
import emailjs from 'emailjs-com';

import './style.css';
import iconMail from '../../img/icon-mail.png';
import avatar from '../../img/avatar.png';
import grafismo from '../../img/grafismo.png';
import Alert  from "../alert/alert";
export default function Form(){
    const InputTel = (props) => (
        <InputMask mask="(99) 99999-9999" value={props.value} onChange={props.onChange}  className="form-control" placeholder="(    )____-____"  id="tel"  name="tel"/>
      );

      const form = useRef();
      const [send,setSend] = useState(0);
      const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_r1zhp89', 'template_6u2qapa', form.current, 'user_kX4o7mhDrtoRb31CY2c5l')
          .then(() => {
              setSend(1)
              form.current.reset()
          }, (error) => {
              console.log(error.text);
              setSend(0);
          });
      };

return(
  
<div className="container ">
    <div>
    <form className="card-form col-md-12 col-lg-6 col-xs-12" ref={form} onSubmit={sendEmail}>
        
     <div className="top-form text-center"> 
     <img class="img-fluid grafismo"src={grafismo} />
     <img class=" avatar img-fluid" src={avatar} />

      
     </div>

    <div className="title-form">
      <img src={iconMail}/><h3>GET IN <strong> TOUCH</strong></h3> 
    </div>

    <div className="col-lg-12">
   <label for="nome" class="form-label"> Your name</label>
      <input  type="text" className="form-control" id="nome" name="nome" placeholder="Type your name here..."   /> 
      </div>
     <div className="row">
   <div className="col-md-6">
     <label for="email" class="form-label"> Email* </label> 
         <input type="email" className="form-control"  id="email" name="email" placeholder="exemple@exemple.com"   /> 
   </div>
   <div className="col-md-6">
     <label for="tel" class="form-label"> Telephone* </label>  
     {<InputTel />} 
    </div>
    
    </div>
    
    <label for="msg"> Message*</label>
    <textarea   type="text" id="msg" className="form-control" placeholder="Type what you want to say to us"  name="message" ></textarea> 
   
{send == 1 ? <Alert /> : '' }
<div className="col-lg-12">
    <button type="submit" className="bt btn btn-success"> SEND NOW </button>
</div>

</form>

    </div>
</div>

)
}