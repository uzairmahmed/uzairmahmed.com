import React from 'react';

import './styles/scrollbar.css'

//import BaseComp from './components/BaseComponent'
import Navbar from './components/NavbarComponent'
import Header from './components/HeaderComponent'
import About from './components/AboutComponent'
import Skills from './components/SkillsComponent'
import Projects from './components/ProjectsComponent'
import Contact from './components/ContactComponent'
import Footer from './components/FooterComponent'


function App() {
  return (
    <div>

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />

      </head>

      <body style={{ backgroundColor: "#000", overflowX:"hidden"}}>
        <Navbar   />
        <Header   />
        <About    />
        <Skills   />
        <Projects />
        <Contact  />
        <Footer   />
      </body>
    </div>
  );
}

export default App;
