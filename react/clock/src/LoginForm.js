import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onButtonClick = () => {
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button onClick={this.onButtonClick}>Log in</button>
      </div>
    );
  }
}

export default LoginForm;
