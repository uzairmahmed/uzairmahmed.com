import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import { navbarStyles } from '../styles/'

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar className="navbar-dark fixed-top" expand="md" style={navbarStyles.bar}>
        <Navbar.Brand href="#home" style={navbarStyles.brand}>     Uzair Ahmed   </Navbar.Brand>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={navbarStyles.item}>Home</Nav.Link>
              <Nav.Link href="#about" style={navbarStyles.item}>About</Nav.Link>
              <Nav.Link href="#skills" style={navbarStyles.item}>Skills</Nav.Link>
              <Nav.Link href="#projects" style={navbarStyles.item}>Projects</Nav.Link>
              <Nav.Link href="#contact" style={navbarStyles.item}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}