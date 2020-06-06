import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

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
        blur={0.1}
        bgImage={this.state.background}
        bgImageAlt="Background"
        strength={500}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>

        </div>
      </Parallax>
    );
  }
}

