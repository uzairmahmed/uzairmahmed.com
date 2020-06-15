import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BaseDiv from '../common/BaseDiv'
import ContactCard from '../common/ContactCard'
import SocialsCard from '../common/SocialsCard'
import ContactForm from '../common/ContactForm'

import { bootstrapClasses, theme } from '../styles'


export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/3.jpg'),
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
          <BaseDiv
            header="Contact."
            bg={this.state.background}
            maincontent={
              <Row style={{width:"100%"}} className={bootstrapClasses.rows.contactRow}>
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
                  <SocialsCard
                    GHvalue={this.state.github.value}
                    GHlink={this.state.github.link}
                    GHimg={this.state.github.img}
                    INvalue={this.state.linkedin.value}
                    INlink={this.state.linkedin.link}
                    INimg={this.state.linkedin.img}
                    IGvalue={this.state.ig.value}
                    IGlink={this.state.ig.link}
                    IGimg={this.state.ig.img}
                  />
                </Col>
                <Col>
                  <ContactForm />
                </Col>
              </Row>
            }
          />
      </Element>
    );
  }
}

