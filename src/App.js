import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
