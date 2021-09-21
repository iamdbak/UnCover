import React, { Component } from "react";
import loginImg from "../../login.svg";
import Axios from "axios"
export class Register extends Component {

  // const Register = props => {
  //  { onChange={(e) => { setUsernameReg (e.target.value);}}

  //Trying to pass registration parameters
  // const [usernameReg, setUsernameReg] = useState([]);
  // const [passwordReg, setPasswordReg] = useState([]); 
  state = { username: "", password: "" }
  setUserName = event => {
    this.setState({ username: event.target.value })
  }
  setPassword = event => {
    this.setState({ password: event.target.value })
  }
  onSubmit = event => {
    const { username, password } = this.state
    Axios.post("http://localhost:9000/index/register",
      { username: username, password: password }
    ).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt=" " />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.setUserName} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.setPassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.onSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
