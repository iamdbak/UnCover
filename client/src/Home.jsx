import React from 'react';
import img from '../src/img/bg.png';
import { NavLink } from 'react-bootstrap';

const Home = () => 
{
   return ( 
      <>
         <section id = "header" className="d-flex align-items-center">
         <div className = "container fluid nav_bg">
             <div className = "row">
                 <div className = "col-10 mx auto">
                  <div className="row">
                   <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                     
                     <h1> <strong className="brand-name">Uncover</strong> Your Quiz and Browse ! </h1>
                     <h2 className = "my-3">
                        We are Changing the Game...
                     </h2>
                     <div className="mt-3">
                         <NavLink to="/" className=" btn btn-get-started">Build Your Quiz</NavLink> 
                     </div> 
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                     <img src={img} className="img-fluid animated" alt="homeimg"/>
                  </div>
               </div>
                  
                  
                  

                 
              </div>
         </div> 
        </div>
       </section>
      </>

   );
};

export default Home;