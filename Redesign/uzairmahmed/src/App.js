import React from 'react';

//import BaseComp from './components/BaseComponent'
import Navbar from './components/NavbarComponent'
import Header from './components/HeaderComponent'
import About from './components/AboutComponent'
import Skills from './components/SkillsComponent'

function App() {
  return (
    <div>

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />

      </head>

      <body style={{ backgroundColor: "#000" }}>
        <Navbar />
        <Header />
        <About />
        <Skills />

      </body>
      
    </div>
  );
}

export default App;
