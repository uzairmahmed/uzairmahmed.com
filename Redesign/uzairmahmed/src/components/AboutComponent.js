import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Parallax } from 'react-parallax';

import { baseStyles, bootstrapClasses } from '../styles';
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
        <BaseDiv
          header="About."
          maincontent={
            <>
              <Col>
                <p style={{
                  ...baseStyles.paragraph,
                  padding:"25px",
                }}>
                  {this.state.col1Text}
                </p>
              </Col>

              <Col>
                <img
                  className={bootstrapClasses.images.profilePic}
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

    );
  }
}

export default AboutComponent;