import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BaseDiv from '../common/BaseDiv'
import ContactCard from '../common/ContactCard'
import ContactForm from '../common/ContactForm'

import { baseStyles, contactStyles, bootstrapClasses, theme } from '../styles'


export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg'),
      email: {
        value: "uzairmahmed@gmail.com",
        link: "mailto:uzairmahmed@gmail.com",
        img: require('../assets/web-icons/mail.png')
      },
      phone: {
        value: "(647)-879-3355",
        link: "tel:+16478793355",
        img: require('../assets/web-icons/phone.png')
      },
      github: {
        value: "uzairmahmed",
        link: "https://github.com/uzairmahmed",
        img: require('../assets/web-icons/github.png')
      },
      ig: {
        value: "@uzairmahmed",
        link: "https://www.instagram.com/uzairmahmed/",
        img: require('../assets/web-icons/insta.png')
      },
      linkedin: {
        value: "in/uzairmahmed",
        link: "https://www.linkedin.com/in/uzairmahmed/",
        img: require('../assets/web-icons/linkedin.png')
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
                    <ContactCard
                      value={this.state.email.value}
                      link={this.state.email.link}
                      img={this.state.email.img}
                    />
                    <ContactCard
                      value={this.state.phone.value}
                      link={this.state.phone.link}
                      img={this.state.phone.img}
                    />
                      <Row>
                        <ContactCard
                          value={this.state.github.value}
                          link={this.state.github.link}
                          img={this.state.github.img}
                        />
                        <ContactCard
                          value={this.state.linkedin.value}
                          link={this.state.linkedin.link}
                          img={this.state.linkedin.img}
                        />
                        <ContactCard
                          value={this.state.ig.value}
                          link={this.state.ig.link}
                          img={this.state.ig.img}
                        />
                      </Row>
                  </Col>
                  <Col>
                    <ContactForm />
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

