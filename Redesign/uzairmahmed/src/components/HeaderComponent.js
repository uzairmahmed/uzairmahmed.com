import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import { headerdiv, headertitle, headersubtitle } from '../styles/styles.js'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "uzair ahmed.",
      subtitle: "3rd Year Computer Engineering Student at Ryerson University",
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
          style={{
            ...headerdiv,
          }}
        >
          <div className="text-center container-fluid">
            <h1 className="text-capitalize text-center text-white" style={headertitle}>
              {this.state.title}
            </h1>
            <h4 className="text-center text-white" style={headersubtitle}>
              {this.state.subtitle}
            </h4>
          </div>
        </div>
      </Parallax>

    );
  }
}