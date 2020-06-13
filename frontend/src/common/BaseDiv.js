import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { baseStyles, bootstrapClasses } from '../styles';

class BaseDiv extends Component {
  renderMain(content) {
    return (
      content
    )
  }

  renderExtra(content) {
    return (
      content
    )
  }

  render() {
    return (
      <div
        className={bootstrapClasses.containers.baseDivContainer}
        style={baseStyles.block}
      >
        <Container style={baseStyles.container}>
          <Row>
            <Col className={bootstrapClasses.columns.baseDivTitleColumn}>
              <h2 style={baseStyles.header}>
                {this.props.header}
              </h2>
            </Col>
          </Row>
          <Row
            className={bootstrapClasses.rows.baseDivContentRow}
            style={baseStyles.row}
          >
            {this.renderMain(this.props.maincontent)}
          </Row>
          {this.renderExtra(this.props.extracontent)}
        </Container>
      </div>
    );
  }
}

export default BaseDiv;
