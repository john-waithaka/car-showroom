//This index.js file ensures a proper setup for your React application, imports necessary libraries, 
//and renders your App component to the DOM, effectively setting up the entry point for your project.

import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; // Import your custom styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
