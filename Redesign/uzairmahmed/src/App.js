import React from 'react';
import './App.css';

import BaseComp from './components/BaseComponent'

import Navbar from './components/NavbarComponent'
import Header from './components/HeaderComponent'

function App() {
  return (
    <div className="App">

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>

      <body style={{ backgroundColor: "#000" }}>
        <Navbar />
        <Header />

      </body>
      
    </div>
  );
}

export default App;
