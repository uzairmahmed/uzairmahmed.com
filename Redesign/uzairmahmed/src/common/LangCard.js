import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import { baseStyles, skillsStyles, bootstrapClasses, theme } from '../styles'
import Col from 'react-bootstrap/Col';

export default class LangCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col>
        <img
          className={bootstrapClasses.images.rounded}
          style={skillsStyles.skillsIcon}
          alt={this.props.item.title + "Logo"}
          src={this.props.item.icon}
        />
        <h3
          className={bootstrapClasses.headings.headerHeading}
          style={skillsStyles.skillsHeader}
        >
          {this.props.item.title}
        </h3>
      </Col>

    );
  }
}
