import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <a href="/">{'<-'} Go back</a>
        <button className="btn-signup">Sign up</button>
      </div>
    );
  }
}

export default Header;
