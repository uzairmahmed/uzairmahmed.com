import React, { Component } from 'react';

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Element } from 'react-scroll'

import { baseStyles, bootstrapClasses } from '../styles';
import BaseDiv from '../common/BaseDiv'
import Row from 'react-bootstrap/Row';

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg'),
      profilepic: require('../assets/pfp2.jpeg'),

      col1Text: "Hello, my name is Uzair Ahmed. I'm a 3rd year Computer + Software Engineering student at Ryerson University. \n\nI have a passion for software and hardware development.",
      col2Text: "My Interests in Software Development are geared towards Machine Learning, Game Development and App Development. \n\nAdditionally, my interests related to hardware development include IoT, Robotics and Circuit Design.",

    }
  }

  render() {
    return (
      <Element name="About" className="About">
        <BaseDiv
          header="About."
          bg={this.state.background}
          maincontent={
            <Row
              className={bootstrapClasses.rows.aboutRow}
              style={baseStyles.row}>
              <Col>
                <p style={{
                  ...baseStyles.paragraph,
                  padding: "25px",
                }}>
                  {this.state.col1Text}
                </p>
              </Col>

              <Col>
                <Image
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
            </Row>
          }

          extracontent={
            <Button
              href="https://drive.google.com/file/d/1WhyEgzCmjkq9yqoFKnR9GYY_HxLR4ZZn/view?usp=sharing"
              className={bootstrapClasses.buttons.button}
              style={baseStyles.button}
            >
              My Resume.
            </Button>
          }
        />
      </Element>
    );
  }
}

export default AboutComponent;