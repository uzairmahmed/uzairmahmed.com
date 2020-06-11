import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { baseStyles, footerStyles, bootstrapClasses, theme } from '../styles/'
import { container } from '../styles/baseStyles';

class FooterComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container style={footerStyles.footer}>
        <Row style={footerStyles.row}>
          <p style={footerStyles.text}>
            Icons by <a
              href={"https://icons8.com/"}
              style={footerStyles.link}
            >icons8.</a>
            <br />
              Photos by <a
              href={"https://unsplash.com/@adrienolichon"}
              style={footerStyles.link}
            >Adrien Alichon</a> and <a
              href={"https://unsplash.com/@matreding"}
              style={footerStyles.link}
            >Mat Reding</a> on <a
              href={"https://unsplash.com/"}
              style={footerStyles.link}
            >Unsplash.</a>
          </p>
          <p style={footerStyles.link}>
            @uzairmahmed
          </p>
        </Row>

      </Container>
    );
  }
}

export default FooterComponent;