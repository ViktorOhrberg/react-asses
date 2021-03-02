import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App-functions'

// ---------------------------------
// CHECKPOINT
// ---------------------------------

// Choose one implementation model below by uncommenting row 12 or row 15

// Uncomment the row below to use COMPONENT CLASSES for this checkpoint. The file is located in /src/App-component-classes.js
// import App from './App-functions'

// Uncomment the row below to Use FUNCTION COMPONENTS Components for this checkpoint. The file is located in /src/App-functions.js
// import App from './App-component-classes';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
