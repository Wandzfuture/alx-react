import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Dashboard() {
  return (
    <div className="container">
      <header>
        <img src="./Holberton-logo.png" alt="Holberton logo" />
        <h1>Holberton School Dashboard</h1>
      </header>
      <main>
        <p>Login to access to the full dashboard</p>
      </main>
      <footer>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
