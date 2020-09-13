import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div activeClassName="App">
      <header activeClassName="App-header">
        <img src={logo} activeClassName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          activeClassName="App-link"
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

export default App;
