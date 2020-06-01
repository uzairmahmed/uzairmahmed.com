import React from 'react';
import './App.css';

import BaseComp from './components/BaseComponent'

import Navbar from './components/NavbarComponent'
import Header from './components/HeaderComponent'

function App() {
  return (
    <div className="App">
      <head>
      </head>
      <body>
        <Navbar />
        <Header />
      </body>
    </div>
  );
}

export default App;
