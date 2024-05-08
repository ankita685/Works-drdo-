import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './main.css';
const rootElement = document.getElementById('root');
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Add a style object with the background image property
const rootStyle = {
  backgroundImage: 'url("/images/bg.jpg")', // Replace with the actual path to your image
  backgroundSize: 'cover', // You can adjust the background size based on your needs
  // Add more styling properties if needed
};
ReactDOM.render(
  <React.StrictMode>
     <div style={rootStyle}>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
