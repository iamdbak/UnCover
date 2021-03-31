import React from 'react';
import Admin from './components/Admin/Admin'
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ContactUs from './ContactUs';
import User from './user';
import Navbar from './Navbar';
import Footer from './Footer';
import Log from './Log';
import "./Admin.css";
import {Switch, Route, Redirect} from 'react-router-dom';
//
import { PrivateRoute } from "./common/components/PrivateRoute";
import { AccountRoute } from "./common/components/AccountRoute";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loggin from './components/Account/loggin';
//
// import { Fragment } from "react";
// import LeftMenu from "../LeftMenu/LeftMenu";
// import TopMenu from "../TopMenu/TopMenu";
// //import { Switch, Route } from "react-router";
// import Users from "../Users/Users";
// import Products from "../Products/Products";
// import Orders from "../Orders/Orders";
// import Notifications from "../../common/components/Notification";



const App = () => {
   return ( 
          <>
              <Navbar />
              <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/User" component = {User} />
                <Route exact path = "/ContactUs" component = {ContactUs} />
                <Route exact path = "/Log" component = {Log} />
                <Route exact path = "/addmin" component ={Admin}/>
                <div className="Admin" id="wrapper">
                 {/* <Route exact path = "/Admin" component ={Admin}/>  */}
                    <Router>
                   
                      <Switch>
                        <PrivateRoute path="/admin">
                        <Admin />
                        </PrivateRoute>
                        <AccountRoute path="/loggin"><Loggin /></AccountRoute>
                      </Switch>
                      
                    </Router>

                </div>
                
                <Redirect  to = "/" />
              </Switch>
             
              <Footer />
              
            
          </>
      
   );
};
export default App;
