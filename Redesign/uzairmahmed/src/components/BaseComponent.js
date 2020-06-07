import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import { baseStyles, bootstrapClasses, theme } from '../styles/'

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg')
    }
  }

  render() {
    return (
      <Parallax
        blur={theme.parallax.blur}
        bgImage={this.state.background}
        bgImageAlt={theme.parallax.alt}
        strength={theme.parallax.strength}
        style={theme.parallax.style}
      >
        <div>

        </div>
      </Parallax>
    );
  }
}

