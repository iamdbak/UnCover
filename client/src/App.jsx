import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ContactUs from './ContactUs';
import User from './user';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';


const App = () => {
   return ( 
          <>
            
              <Navbar />
              <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/User" component = {User} />
                <Route exact path = "/ContactUs" component = {ContactUs} />
                <Redirect  to = "/" />
              </Switch>
              <Footer />
            
          </>
   );
};
export default App;
