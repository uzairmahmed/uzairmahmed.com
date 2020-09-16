import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import NavLink from '../common/NavLink'
import { navbarStyles } from '../styles/'

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScrollHeight: 0
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight })
      }
    }
  }



  render() {
    const opacity = Math.min(this.state.currentScrollHeight / 1000, )
    return (
      <Navbar className="navbar-dark fixed-top" expand="md"
        style={{
          ...navbarStyles.bar,
          backgroundColor:'rgb(0,0,0,' + opacity + ')',
        }}
      >
        <Navbar.Brand href="#home" style={navbarStyles.brand}>Uzair Ahmed</Navbar.Brand>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink title="Home" />
              <NavLink title="About" />
              <NavLink title="Skills" />
              <NavLink title="Experience" />
              <NavLink title="Projects"/>
              <NavLink title="Contact"/>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarComponent;