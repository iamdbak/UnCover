import React from 'react';
import img from '../src/img/bg.jpeg';
const Home = () => 
{
   return ( 
      <>
        <div className = "Background">
         <img src = {img} className = "img-fluid" alt=""></img>
         <section id = "header" className="">
         <div className = "container fluid nav_bg">
             <div className = "row">
                 <div className = "col-10 mx auto">
                  
                   <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-1">
                     
                     <h1> <strong className = "brand-name">Uncover</strong> Your Quiz and Browse ! </h1>
                     <h2 className = "mv-3">
                        We are Changing the Game...
                     </h2>
                     <div className = "mt-3">
                         <a href="/#" className = "btn btn-get-started">
                         
                          Build Your Quiz
                          </a> 
                        

                     </div>

                   </div>
                  
                  
                  

                 
              </div>
         </div> 
        </div>
       </section>
       </div>
      </>

   );
};

export default Home;