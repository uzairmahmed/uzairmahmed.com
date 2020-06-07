import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'

import { navbarStyles, theme } from '../styles/'

class NavLink extends Component {
    render() {
        return (
            <Nav.Link style={navbarStyles.item}>
                <Link
                    to={this.props.title}
                    spy={theme.scrolls.spy}
                    smooth={theme.scrolls.smooth}
                    offset={theme.scrolls.offset}
                    duration={theme.scrolls.duration}
                >
                  {this.props.title}
                </Link>
              </Nav.Link>
        );
    }
}

export default NavLink;
