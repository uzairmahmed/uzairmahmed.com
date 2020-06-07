import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import NavLink from '../common/NavLink'
import { navbarStyles, theme } from '../styles/'

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barColor: 'rgba(0,0,0,0)'
    }
  }



  render() {
    return (
      <Navbar className="navbar-dark fixed-top" expand="md" style={navbarStyles.bar}>
        <Navbar.Brand href="#home" style={navbarStyles.brand}>Uzair Ahmed</Navbar.Brand>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink title="Home" />
              <NavLink title="About" />
              <NavLink title="Skills" />
              {/* <NavLink title="Projects"/> */}
              {/* <NavLink title="Contact"/> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarComponent;