import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';

import { baseStyles, contactStyles } from '../styles'
import Row from 'react-bootstrap/Row';

export default class LangCard extends Component {
  render() {
    return (
      <Card style={contactStyles.card}>
        <Row style={baseStyles.row}>
          <a href={this.props.GHlink}>
            <Col style={contactStyles.socialCard}>
              <Image src={this.props.GHimg} style={contactStyles.icon} />
              <h2 style={baseStyles.paragraph} >
                {this.props.GHvalue}
              </h2>
            </Col>
          </a>
          <a href={this.props.INlink}>
            <Col style={contactStyles.socialCard}>
              <Image src={this.props.INimg} style={contactStyles.icon} />
              <h2 style={baseStyles.paragraph} >
                {this.props.INvalue}
              </h2>
            </Col>
          </a>
          {/* <a href={this.props.IGlink}>
            <Col style={contactStyles.socialCard}>
              <Image src={this.props.IGimg} style={contactStyles.icon} />
              <h2 style={baseStyles.paragraph} >
                {this.props.IGvalue}
              </h2>
            </Col>
          </a> */}
        </Row>

      </Card>
    );
  }
}

