import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import { baseStyles, projectStyles, bootstrapClasses } from '../styles'

export default class LangCard extends Component {

  render() {
    return (
      <Card
        style={projectStyles.card}
      >
        <Card.Img
          variant="top"
          style={projectStyles.cardImage}
          src={this.props.img}
        />
        <Card.Body>
          <Card.Title
            style={baseStyles.header}
          >
            {this.props.title}
          </Card.Title>
          <Card.Text
            style={baseStyles.paragraph}
          >
            {this.props.location} <br/>
            {this.props.date} <br/><br/>
            {this.props.headline} <br/>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            className={bootstrapClasses.buttons.button}
            style={baseStyles.button}
            href={this.props.link}
          >
            Devpost.
          </Button>
          </Card.Footer>
      </Card>

    );
  }
}

