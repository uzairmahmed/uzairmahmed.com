import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';


import BaseDiv from '../common/BaseDiv'
import SocialContact from '../common/SocialContact'
import OtherContact from '../common/OtherContact'

import { baseStyles, bootstrapClasses, theme } from '../styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg'),
      email: {
        value: "uzairmahmed@gmail.com",
        link: "mailto:uzairmahmed@gmail.com",
      },
      phone: {
        value: "(647)-879-3355",
        link: "tel:+16478793355",
      },
      github: {
        value: "uzairmahmed",
        link: "https://github.com/uzairmahmed",
        img: require('../assets/web-icons/003-github-image.png')
      },
      ig: {
        value: "@uzairmahmed",
        link: "https://www.instagram.com/uzairmahmed/",
        img: require('../assets/web-icons/001-instagram.png')
      },
      linkedin: {
        value: "in/uzairmahmed",
        link: "https://www.linkedin.com/in/uzairmahmed/",
        img: require('../assets/web-icons/002-linkedin.png')
      },
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
                <Row>
                  <Col>
                    <OtherContact
                      title="Email."
                      value={this.state.email.value}
                      link={this.state.email.link}
                    />
                    <OtherContact
                      title="Phone."
                      value={this.state.phone.value}
                      link={this.state.phone.link}
                    />
                    <Row>
                      <SocialContact
                        value={this.state.github.value}
                        link={this.state.github.link}
                        img={this.state.github.img}
                      />
                      <SocialContact
                        value={this.state.linkedin.value}
                        link={this.state.linkedin.link}
                        img={this.state.linkedin.img}
                      />
                      <SocialContact
                        value={this.state.ig.value}
                        link={this.state.ig.link}
                        img={this.state.ig.img}
                      />
                    </Row>
                  </Col>
                </Row>
              </>
            }
          />
        </Parallax>
      </Element>
    );
  }
}

