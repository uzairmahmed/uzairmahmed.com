import React, { Component } from 'react';

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll'

import { baseStyles, bootstrapClasses, theme } from '../styles';
import BaseDiv from '../common/BaseDiv'

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/1.jpg'),
      profilepic: require('../assets/pfp2.jpeg'),

      col1Text: "Hello, my name is Uzair Ahmed. I'm a \
3rd year Computer + Software Engineering student at \
Ryerson University. \n\nI have a passion for software and \
hardware development.",

      col2Text: "My Interests in Software Development are \
geared towards Machine Learning, Game Development and App \
Development. \n\nAdditionally, my interests related to \
hardware development include IoT, Robotics and Circuit Design.",

    }
  }

  render() {
    return (
      <Element name="About" className="About">
        <Parallax
          blur={theme.parallax.blur}
          bgImage={this.state.background}
          bgImageAlt={theme.parallax.alt}
          strength={theme.parallax.strength}
          style={theme.parallax.style}
        >
          <BaseDiv
            header="About."
            maincontent={
              <>
                <Col>
                  <p style={{
                    ...baseStyles.paragraph,
                    padding: "25px",
                  }}>
                    {this.state.col1Text}
                  </p>
                </Col>

                <Col>
                  <img
                    className={bootstrapClasses.images.rounded}
                    style={baseStyles.profilepicture}
                    src={this.state.profilepic}
                  />
                </Col>

                <Col>
                  <p style={baseStyles.paragraph}>
                    {this.state.col2Text}
                  </p>
                </Col>
              </>
            }

            extracontent={
              <Button
                href="https://drive.google.com/drive/folders/1F6-c_xKXOuM0xrg8GAHExlLHkD293d-r?usp=sharing"
                className={bootstrapClasses.buttons.button}
                style={baseStyles.button}
              >
                Uzair Ahmed - Resume
            </Button>
            }
          />

        </Parallax>
      </Element>
    );
  }
}

export default AboutComponent;