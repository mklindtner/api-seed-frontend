import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Routing from './routes/Routing';
import NavBar from './routes/Navbar';
import GenericObject from './entities/AnyObject';
import ModalEditItem from './components/ModalEditItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <header className="App-header">          
          <Routing
            home={home}   
            singleItem={singleItem}  
            editItem={editItem}       
          />
        </header>
      </div>
    );
  }
}

const home = () => {
  return "hi from home";
}

const singleItem = ( {match} ) => {
  return ( <GenericObject id={match.params.id}/>);
}

const editItem = ( {match} ) => {
  return ( <ModalEditItem id={match.params.id}/>)
}

export default App;
