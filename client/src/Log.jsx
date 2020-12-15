import React,{useState} from 'react';
import Axios from 'axios';

const Log = () => {
   
  const [usernameReg, setUsernameReg] = useState([]);
  const [passwordReg, setPasswordReg] = useState([]);

  const register=()=> {
     Axios.post("http://localhost:9000/register",
      { 
        username: usernameReg, password: passwordReg
      }).then((response)=>{
         console.log(response);
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
            <input type = "text" placeholder = "username"/>
            <input type = "password" placeholder = "password"/>
            <button>login</button>
         </div>
      </div>

   );
}

export default Log;