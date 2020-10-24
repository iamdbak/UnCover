import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
      
       <div className = "container-fluid nav_bg">
         <div className = "row">
            <div className = "col-12 mx auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className = "container-fluid">
                  <NavLink className="navbar-brand" to="/"></NavLink>
                     <img src={require('/Users/divyaraj/Desktop/Web Development/uncovergems/src/img/UncoverGemlogo230x61.png')} alt=""/>
                  <button 
                     className="navbar-toggler" 
                     type="button" 
                     data-toggle="collapse" 
                     data-target="#navbarSupportedContent" 
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false" 
                     aria-label="Toggle navigation"
                  >

                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact activeClassName='menu_active' className="nav-link" to="/Login">Contact Us</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Browse
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a className="dropdown-item" href="#">Action</a></li>
                           <li><a className="dropdown-item" href="#">Another action</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </div>
                        </li> */}
                     </ul>
                  </div>
                </div>
               </nav>

            </div>
         </div>
      </div>
      </>
   );
};

// {/* <div className = "container fluid nav_bg">
//   <div className = "row">
//    <div className = "col-10 mx auto">

//    </div>
//  </div> 
// </div>  */}

export default Navbar;