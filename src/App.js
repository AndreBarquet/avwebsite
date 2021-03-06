import React, { Component } from 'react';
import logo from './logo.svg';
import CircularNavbar from './Components/CircularNavbar/CircularNavbar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    
  }
  render() {
    /*
    const dev = {   
      imglink: 'https://scontent.fuba1-1.fna.fbcdn.net/v/t1.0-9/36423294_1820525594729700_7667887280568139776_n.jpg?_nc_cat=105&_nc_ht=scontent.fuba1-1.fna&oh=4176a5ffcdb940ca48ee3e5af4d3b27d&oe=5D5045F8',
      name: 'Victor Hugo',
      city: 'Uberaba',
      areadev: 'Full-Stack Developer' ,
      skills: ['NodeJS', 'ExpressJS', 'ReactJS', 'Angular 2+', 'HTML/CSS3']     
    }  */
    //<Card dev={dev}/>
    return (
      <div className="App">
        <CircularNavbar></CircularNavbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
