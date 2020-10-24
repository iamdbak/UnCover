import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import category from './Category';
import Login from './Login';
import Navbar from './Navbar';

import {Switch, Route, Redirect} from 'react-router-dom';


const App = () => {
   return ( 
          <>
            
              <Navbar />
              <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/category" component = {category} />
                <Route exact path = "/Login" component = {Login} />
                <Redirect  to = "/" />
              </Switch>
            
          </>
   );
};
export default App;
