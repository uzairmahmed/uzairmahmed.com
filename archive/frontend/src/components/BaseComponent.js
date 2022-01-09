import React, { Component } from 'react';
import { Element } from 'react-scroll';


import { theme } from '../styles/'

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg')
    }
  }

  render() {
    return (
      <Element name="BASE" className="BASE">
          <div>

          </div>
      </Element>
    );
  }
}

