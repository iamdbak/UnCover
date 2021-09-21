import React from "react";
import loginImg from "../../login.svg";
import Axios from "axios"
export class Login extends React.Component {
  state = { username: "", password: "" }

  setUserName = (event) => {
    this.setState({ username: event.target.value })
  }
  setPassword = (event) => {
    this.setState({ password: event.target.value })
  }
  onSubmit = (event) => {
    const { username, password } = this.state
    Axios.post("http://localhost:9000/index/login",
      {
        username: username, password: password
      }).then((response) => {
        if (response.data.message) {
          console.log(response.data.message)
        } else {
          console.log(response.data.username);
        }

      });
  }


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.setPassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.onSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}