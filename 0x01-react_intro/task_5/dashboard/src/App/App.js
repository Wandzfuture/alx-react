import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/seahorse.svg" className="App-logo" alt="logo" />
        <p>
          Holberton
          <br />
          DEFINE YOUR FUTURE
        </p>
        <h1>School dashboard</h1>
      </header>
      <p>
        Login to access to the full dashboard
      </p>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

      <button>OK</button>

    </div>
  );
}

export default App;
