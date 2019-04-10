import React, { Component } from 'react';
import CircularNavbar from './Components/CircularNavbar/CircularNavbar';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CircularNavbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button>Entrar</button>
      </div>
    );
  }
}

export default App;
