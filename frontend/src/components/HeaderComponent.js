import React, { Component } from 'react';
import { Element } from 'react-scroll';

import { baseStyles, headerStyles, bootstrapClasses, theme } from '../styles/'
import Container from 'react-bootstrap/Container';

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
      <Element name="Home" className="Home">
          <div
            className={bootstrapClasses.divs.headerDiv1}
          style={{
            ...baseStyles.block,
            backgroundImage: "url(" + this.state.background + ")",
            backgroundSize:"cover"
          }}
          >
            <Container
              className={bootstrapClasses.divs.headerDiv2}
              style={baseStyles.hero}
            >
              <h1 className={bootstrapClasses.headings.headerHeading} style={headerStyles.title}>
                {this.state.title}
              </h1>
              <h4 className={bootstrapClasses.headings.headerHeading} style={headerStyles.subtitle}>
                {this.state.subtitle}
              </h4>
            </Container>
          </div>
      </Element>
    );
  }
}

export default HeaderComponent;