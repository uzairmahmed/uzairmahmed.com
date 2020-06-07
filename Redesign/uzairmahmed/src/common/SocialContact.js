import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

import { baseStyles, skillsStyles, bootstrapClasses, theme } from '../styles'
import Col from 'react-bootstrap/Col';

export default class LangCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Col>
        <a href={this.props.link}>
          <Image src={this.props.img}/>
            <h2>
              {this.props.value}
          </h2>
        </a>
      </Col>
    );
  }
}

