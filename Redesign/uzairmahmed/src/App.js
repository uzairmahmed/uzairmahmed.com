import React from 'react';
import './App.css';

import BaseComp from './components/BaseComponent'
import Nav from './components/NavBar'

function App() {
  return (
    <div className="App">
      <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

      </head>
      <header className="App-header">
        <BaseComp />
      </header>
      <body>
        <Nav />
      </body>
    </div>
  );
}

export default App;
