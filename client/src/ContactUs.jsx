import React, { useState } from 'react';


const ContactUs = () => {

   //using state for accessing the client input data 
   // can't look up the value of the parse data in hooks of react dev tools... solve the problem later :p
   const [data,setData] = useState({
      FirstName: "",
      LastName: "",
      phone: "",
      email: "",
      msg: ""

   });

   const InputEvent = (event) => {
      const {name,value} = event.target;
      setData((preVal) =>{
         return {
            ...preVal,
            [name]:value,
         }
      }) 
   };

   const formSubmit = (e) => {
      e.preventDefault();
      alert(`Apun ka naam ${data.FirstName}`);
   };

   return (<>
         <div className="my-5">
            <h1 className="text-center">Contact US</h1>
         </div>
         <div className="container contact-div">
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="FirstName" value={data.FirstName} onChange={InputEvent} placeholder="Shah"/>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Last Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="LastName" value={data.LastName} onChange={InputEvent} placeholder="Rukh"/>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Phone</label>
                        <input type="numbers" class="form-control" id="exampleFormControlInput1" name="Phone" value={data.Phone} onChange={InputEvent} placeholder="415-619-6969"/>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="ShahRukh@mannat.com"/>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Hum ek bar jeete hai ek bar marte hai or code,haha code bhi ek hi bar likhenge or pap caaaarn nahi denge !"></textarea>
                     </div>
                     <div class="form-group">
                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                           <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                           <div class="invalid-feedback"> 
                              You must agree before submitting.
                           </div>
                        </div>
                      </div>
                     <button class="btn btn-outline-primary" type="submit">Submit form</button>
                  </form>
               </div>
            </div>
         </div>

      </>);
};

export default ContactUs;