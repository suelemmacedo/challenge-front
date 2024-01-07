import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';  // Adicionada a extensão .js
import reportWebVitals from './reportWebVitals.js';  // Adicionada a extensão .js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

