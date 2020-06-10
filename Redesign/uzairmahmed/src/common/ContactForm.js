import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { baseStyles, bootstrapClasses, contactStyles, theme } from '../styles'

class ContactForm extends Component {
  render() {
    return (
      <Form style={contactStyles.card} >
        <Form.Group controlId="formText">
          <Form.Control
            required
            type="text"
            placeholder="Name"
            style={contactStyles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            style={contactStyles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Control
            type="tel"
            placeholder="Phone"
            style={contactStyles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Control
            type="text"
            placeholder="Subject"
            style={contactStyles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Control
            required
            as='textarea'
            type="text"
            placeholder="Message"
            style={contactStyles.formInput}
          />
        </Form.Group>

        <Button
          variant="light"
          type="submit"
          style={{
            ...baseStyles.button,
            ...contactStyles.formButton
          }}
        >
          Send
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
