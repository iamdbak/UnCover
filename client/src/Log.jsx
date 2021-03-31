import React,{useState} from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';


const Log = () => {
   //For Registering user 
  const [usernameReg, setUsernameReg] = useState([]);
  const [passwordReg, setPasswordReg] = useState([]);

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);


  var [LoginStatus, setLoginStatus] = useState([]);

  const register=()=> {
     Axios.post("http://localhost:9000/index/register",
      { 
        username: usernameReg, password: passwordReg
      }).then((response)=>{
         console.log(response);
      });
  };

  const login = () => {
     Axios.post("http://localhost:9000/index/login",
     {
        username: username, password: password
     }).then((response) => {
        if(response.data.message){  
         setLoginStatus(response.data.message)
        } else {
           setLoginStatus(response.data[0].username);
           LoginStatus = response.data[0].username;
           
        }
        
     });
  };



   return(
      <div className = "log">
         <div className = "registration">
            <h1>Registration</h1>
            <label>username</label>
            <input type= "text" onChange={(e) => { setUsernameReg (e.target.value);}} />
            <label>Password</label>
            <input type= "password" onChange={(e) => { setPasswordReg (e.target.value);}} />
            <button onClick = { register }>Register</button>
         </div>
         <div className = "login">
            <h1>Login</h1>
            <input type = "text" onChange={(e) => { setUsername (e.target.value);}} placeholder = "username"/>
            <input type = "password" onChange={(e) => { setPassword (e.target.value);}} placeholder = "password"/>
            <button onClick = {login}  >login</button>
         </div>

         <h1>{LoginStatus} has logged In!</h1>
      </div>

   );
}

export default Log;