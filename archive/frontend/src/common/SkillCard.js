import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

import { skillsStyles, bootstrapClasses } from '../styles'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class SkillCard extends Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Row
        className={bootstrapClasses.rows.skillsRow}>
          <Col
          className={bootstrapClasses.columns.skillsColumnIcon}>
            <Image
              className={bootstrapClasses.images.rounded}
              style={skillsStyles.skillsIcon}
              alt={this.props.item.title + "Logo"}
              src={this.props.item.icon}
            />
          </Col>
          <Col
            className={bootstrapClasses.columns.skillsColumnText}
          >
            <h3
              className={bootstrapClasses.headings.headerHeading}
              style={skillsStyles.skillsHeader}
            >
              {this.props.item.title}
            </h3>
            <p
            style={skillsStyles.skillsText}>
              {this.props.item.text}
            </p>
          </Col>
        </Row>
      </Col>

    );
  }
}

