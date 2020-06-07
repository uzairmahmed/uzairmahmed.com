import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import { baseStyles, headerStyles, bootstrapClasses, theme } from '../styles/'

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
        blur={theme.parallax.blur}
        bgImage={this.state.background}
        bgImageAlt={theme.parallax.alt}
        strength={theme.parallax.strength}
        style={theme.parallax.style}
      >
        <div
          className={bootstrapClasses.divs.headerDiv1}
          style={baseStyles.block}
        >
          <div className={bootstrapClasses.divs.headerDiv2}>
            <h1 className={bootstrapClasses.headings.headerHeading} style={headerStyles.title}>
              {this.state.title}
            </h1>
            <h4 className={bootstrapClasses.headings.headerHeading} style={headerStyles.subtitle}>
              {this.state.subtitle}
            </h4>
          </div>
        </div>
      </Parallax>

    );
  }
}

export default HeaderComponent;