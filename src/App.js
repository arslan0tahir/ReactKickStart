import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'  // all components names should be in uppercase


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi i am react app
        </h1>
        <p>
          Its really working
        </p>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
