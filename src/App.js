import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}
export default App;
