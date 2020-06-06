import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import { baseStyles, headerStyles } from '../styles/'

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Uzair Ahmed.",
      subtitle: "3rd Year Computer + Software Engineering Student at Ryerson University",
      background: require('../assets/backgrounds/1.jpg')
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
        <div
          className="text-center d-flex align-items-center"
          style={baseStyles.block}
        >
          <div className="text-center container-fluid">
            <h1 className="text-center text-white" style={headerStyles.title}>
              {this.state.title}
            </h1>
            <h4 className="text-center text-white" style={headerStyles.subtitle}>
              {this.state.subtitle}
            </h4>
          </div>
        </div>
      </Parallax>

    );
  }
}

export default HeaderComponent;