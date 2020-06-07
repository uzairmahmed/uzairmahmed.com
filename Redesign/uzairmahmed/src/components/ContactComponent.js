import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';


import BaseDiv from '../common/BaseDiv'

import { baseStyles, bootstrapClasses, theme } from '../styles'

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg')
    }
  }

  render() {
    return (
      <Element name="Contact" className="Contact">
        <Parallax
          blur={theme.parallax.blur}
          bgImage={this.state.background}
          bgImageAlt={theme.parallax.alt}
          strength={theme.parallax.strength}
          style={theme.parallax.style}
        >
          <BaseDiv
            header="Contact."
            maincontent={
              <>
              </>
            }
          />
        </Parallax>
      </Element>
    );
  }
}

