import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // This matches the App.js you created
import './index.js';     // Optional, if you want styling from index.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
