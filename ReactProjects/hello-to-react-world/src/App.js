import React, { Component } from 'react';
import './App.css';


import Tutorial9 from './components/Tutorial9/Tutorial9';
import Tutorial10 from './components/Tutorial10/Tutorial10';
import Tutorial11 from './components/Tutorial11/Tutorial11';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tutorial9 />
        <Tutorial10 />
        <Tutorial11 />
      </div>
    );
  }
}

export default App