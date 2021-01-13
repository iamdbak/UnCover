import React from 'react';
import img from '../src/img/bg.png';
import { NavLink } from 'react-bootstrap';
import MediaCard from './card';

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
      <section id = "cards" className="d-flex align-items-center bg-dark">
      <div className = "container fluid nav_bg pt-5 pb-5">
         <div className = "text-center text-white font pb-5">
           <p className="h5">Nearly 1 Million Employees from these Organizations our LMS to Let Knowledge</p>
         </div>
         <div className = "row pb-5">
                  <MediaCard />    
                  <MediaCard />
                  <MediaCard />      
         </div>
      </div >
      </section>
       {/* <div id="dlsd" className="grid" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="grid__row  flex  flex--x-center">
             <div className="grid__col  flex__item  grid__col-md-8  grid__col-xl-6    ">
                <div className="mds-heading  mds-type--center  mds-margin--default  mds-padding-toggle">
                   <h2 className="has-text-align-center">Build engaging online quizzes in minutes with our top features</h2>
               </div>
            </div>
         </div>
       </div>
       <div className="grid__row  flex  flex--x-center" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="grid__col  flex__item  grid__col-md-8  wds-grid__col-xl-6    ">
             <p className="mds-paragraph  mds-type--size-5  mds-type--center">Uncover quizzes are easy—we provide everything you need to create high-quality, professional-looking quizzes and easy analysis tools for quiz scoring.</p>
          </div>
       </div>
       <div class="mds-tile-grid  mds-margin--default  mds-padding-toggle  mds-bg--white  mds-u-color--charcoal" data-hidechapternav="true">
          <div class="wds-grid">
             <div class="wds-grid__row  wds-flex--x  wds-flex--x-center">
                <div class="wds-grid__col-12  wds-grid__col-lg-10">
                   <div class="wds-grid">
                      <div class="wds-grid__row  mds-type--left">
                         <div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4">
                            <div class="mds-tile__icon">
                               <div class="mds-icon  " style={{ background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/pick-your-audience.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/pick-your-audience.svg')}}></div>
                               <div class="mds-icon--ie  " style={{ background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/pick-your-audience.svg')}}>
                            </div>
                            <h3 class="mds-tile__title  mds-type--size-4">Track who has taken your quiz—or who hasn’t</h3>
                            <p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">Email results to people that have taken your online quiz, or remind those that haven’t.</p>
                           </div>
                         </div>
                         <div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4">
                            <div class="mds-tile__icon"><div class="mds-icon  " style="background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/charts-graphs.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/charts-graphs.svg')"></div>
                            <div class="mds-icon--ie  " style="background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/charts-graphs.svg')"></div>
                            <h3 class="mds-tile__title  mds-type--size-4">See real-time stats and rankings</h3><p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">Get question-level data to see which were easy or difficult for quiz takers.</p>
                        </div>
                     </div>
                     <div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4"><div class="mds-tile__icon"><div class="mds-icon  " style="background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/analyze.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/analyze.svg')"></div><div class="mds-icon--ie  " style="background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/analyze.svg')"></div><h3 class="mds-tile__title  mds-type--size-4">Learn more about your quiz takers</h3><p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">Analyze quiz taker data on scores, ranking, percentiles, and completion times.</p></div></div><div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4"><div class="mds-tile__icon"><div class="mds-icon  " style="background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/phone.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/phone.svg')"></div><div class="mds-icon--ie  " style="background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/phone.svg')"></div><h3 class="mds-tile__title  mds-type--size-4">Take your quizzes on any device</h3><p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">Easily make an online quiz that can be taken on any device—anywhere.</p></div></div><div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4"><div class="mds-tile__icon"><div class="mds-icon  " style="background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/theme.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/theme.svg')"></div><div class="mds-icon--ie  " style="background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/theme.svg')"></div><h3 class="mds-tile__title  mds-type--size-4">Make your quizzes and tests really pop</h3><p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">Add your branding, display customized feedback on questions, and more.</p></div></div><div class="mds-tile  wds-grid__col-12  wds-grid__col-md-6  wds-grid__col-lg-4"><div class="mds-tile__icon"><div class="mds-icon  " style="background-color:#671E75;-webkit-mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/tests-quizzes.svg');mask:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/tests-quizzes.svg')"></div><div class="mds-icon--ie  " style="background:url('https://cdn.smassets.net/assets/cms/cc/app/2.99.0/images/tests-quizzes.svg')"></div><h3 class="mds-tile__title  mds-type--size-4">Use our quiz maker to test your questions</h3><p class="mds-tile__desc  wds-m-b-4  mds-type--size-6">SurveyMonkey Genius scores your questions, ensuring a perfect quiz every time.</p></div></div></div></div></div></div></div></div> */}
     
      </>

   );
};

export default Home;