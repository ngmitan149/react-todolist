import React, { Component } from 'react';
import './login.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: ''
    };
    this.handleChangeUserNamePrototype = this.handleChangeUserName.bind(this);
    this.handleChangePasswordPrototype = this.handleChangePassword.bind(this);
  }

  handleChangeUserName(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="login-wrapper">
        <h1>Sign in</h1>
        <form className="form-login">
          <div className="text-field">
            <input type="text" value={this.state.username} onChange={this.handleChangeUserNamePrototype}>
            </input>
            <span className="label">Username:</span>
          </div>
          <div className="text-field">
            <input type="password" value={this.state.password} onChange={this.handleChangePasswordPrototype}>
            </input>
            <span className="label">Password:</span>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Header;
