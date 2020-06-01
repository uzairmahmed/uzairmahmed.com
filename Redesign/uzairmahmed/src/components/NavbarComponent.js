import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">     Uzair Ahmed   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">     Home      </Nav.Link>
            <Nav.Link href="#about">    About     </Nav.Link>
            <Nav.Link href="#skills">   Skills    </Nav.Link>
            <Nav.Link href="#projects"> Projects  </Nav.Link>
            <Nav.Link href="#contact">  Contact   </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}