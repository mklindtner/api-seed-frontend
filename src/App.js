import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Routing from './Routing';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routing
            home={home}            
          />
        </header>
      </div>
    );
  }
}

const home = () => {
  return "hi from home";
}

const table = () => {
  return "table from he";
}

export default App;
