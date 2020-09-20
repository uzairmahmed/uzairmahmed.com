import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { baseStyles, experienceStyles } from '../styles'

export default class ExperienceCard extends Component {
  render() {
    console.log(window.matchMedia("(max-width: 768px)"))
    let midContents;

    if (window.matchMedia("(max-width: 768px)").matches) {
      //mobile view
      midContents = (
        <Row xl={2} lg={2} md={1} sm={1} xs={1}
          style={experienceStyles.cardHeader}>
          <Col style={experienceStyles.iconHolder}>
            <Image src={this.props.img} style={experienceStyles.icon} />
          </Col>
          <Col>
            <h2 style={{ ...baseStyles.emphasis, ...experienceStyles.headers }} >
              {this.props.position}
            </h2>
            <h2 style={{ ...baseStyles.paragraph, ...experienceStyles.headers }} >
              {this.props.location}
            </h2>
            <h2 style={{ ...baseStyles.emphasis, ...experienceStyles.headers }} >
              {this.props.duration}
            </h2>
          </Col>
        </Row>
      )
    } else {
      //desktop view
      midContents = (
        <Row xl={2} lg={2} md={1} sm={1} xs={1}
          style={experienceStyles.cardHeader}>
          <Col>
            <h2 style={{ ...baseStyles.emphasis, ...experienceStyles.headers2 }} >
              {this.props.position}
            </h2>
            <h2 style={{ ...baseStyles.paragraph, ...experienceStyles.headers2 }} >
              {this.props.location}
            </h2>
            <h2 style={{ ...baseStyles.emphasis, ...experienceStyles.headers2 }} >
              {this.props.duration}
            </h2>
          </Col>
          <Col style={experienceStyles.iconHolder2}>
            <Image src={this.props.img} style={experienceStyles.icon} />
          </Col>
        </Row>
      )
    }

    return (
      <Card style={experienceStyles.card}>
        <h2 style={{ ...baseStyles.header, ...experienceStyles.title2 }} >
          {this.props.title}
        </h2>
        {midContents}
        <Row style={experienceStyles.cardBody}>
          <Col>
            <p style={{...baseStyles.paragraph, textAlign:"left"}} >
              {this.props.text.split("\n").map(function (item, key) {
                return (
                  <span key={key} style={{display:'block', margin:'15px 0'}}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </p>
          </Col>
        </Row>
      </Card>
    );
  }
}

