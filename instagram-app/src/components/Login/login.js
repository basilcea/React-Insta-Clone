import React from "react";
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
           username :t
        })
    }
    if (text === "password") {
        this.setState({
            password : t
         })
    }
  };
  login = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.login(e)}>
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.inputting(e.target.value, "inputText")}
            required
          />
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.inputting(e.target.value, "password")}
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Login;
