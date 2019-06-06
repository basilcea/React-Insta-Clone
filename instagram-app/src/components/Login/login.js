/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputting = (t, text) => {
    if (text === "inputText") {
      this.setState({
        username: t
      });
    }
    if (text === "password") {
      this.setState({
        password: t
      });
    }
  };
  login = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <div className="login-card">
        <div className="login-area">
          <h1> Instagram</h1>
          <form onSubmit={e => this.login(e)}>
            <input
              type="text"
              value={this.state.username}
              onChange={e => this.inputting(e.target.value, "inputText")}
              placeholder="Phone number, username, or email"
              required
            />
            <input
              type="password"
              value={this.state.password}
              onChange={e => this.inputting(e.target.value, "password")}
              placeholder="Password"
              required
            />
            <input type="submit" value="Log in" />
            <div className="login-area-hr">
            <div className="login-area-line" />
            <p>OR</p>
            <div className="login-area-line" />
          </div>
          <div className='login-with-facebook'>
          <p id='thick'><span id='facebook'>{<FontAwesomeIcon icon={["fab", "facebook-square"]} />}</span>Log in with Facebook</p>
          <p id='styled'>Forget Password?</p>
          </div>
          </form>
        </div>
        <div className ='login-lower-section'>
        <p>Dont have an account?<span>Sign Up</span></p>
        <p>Get the App</p>
      </div>
      <div className='login-download-store'>
        <div className='store'><a href='#'><img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'/></a></div>
        <div className='store'><a href='#'><img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png'/></a></div>
      </div>
      <div className='footer'>
        &copy; 2019 INSTAGRAM
      </div>
      </div>
    );
  }
}
export default Login;
