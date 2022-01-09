import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { baseStyles, contactStyles } from '../styles'

class ContactForm extends Component {
  render() {
    return (
      // <Form name="contact" method="POST" data-netlify="true" style={contactStyles.card} >
      //   <Form.Group controlId="formText">
      //     <Form.Control
      //       required
      //       name="name"
      //       type="text"
      //       placeholder="Name"
      //       style={contactStyles.formInput}
      //     />
      //   </Form.Group>
      //   <Form.Group controlId="formEmail">
      //     <Form.Control
      //       required
      //       name="email"
      //       type="email"
      //       placeholder="Email"
      //       style={contactStyles.formInput}
      //     />
      //   </Form.Group>
      //   <Form.Group controlId="formPhone">
      //     <Form.Control
      //       type="tel"
      //       name="telephone"
      //       placeholder="Phone"
      //       style={contactStyles.formInput}
      //     />
      //   </Form.Group>
      //   <Form.Group controlId="formSubject">
      //     <Form.Control
      //       type="text"
      //       name="subject"
      //       placeholder="Subject"
      //       style={contactStyles.formInput}
      //     />
      //   </Form.Group>
      //   <Form.Group controlId="formMessage">
      //     <Form.Control
      //       required
      //       as='textarea'
      //       name="text"
      //       type="text"
      //       placeholder="Message"
      //       style={contactStyles.formInput}
      //     />
      //   </Form.Group>

      //   <Button
      //     variant="light"
      //     type="submit"
      //     style={{
      //       ...baseStyles.button,
      //       ...contactStyles.formButton
      //     }}
      //   >
      //     Send
      //   </Button>
      // </Form>


      <Form name="contact" method="POST" data-netlify="true" style={contactStyles.card} >
        <Form.Control
          required
          name="name"
          type="text"
          placeholder="Name"
          style={contactStyles.formInput}
        />
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="Email"
          style={contactStyles.formInput}
        />
        <Form.Control
          type="tel"
          name="telephone"
          placeholder="Phone"
          style={contactStyles.formInput}
        />
        <Form.Control
          type="text"
          name="subject"
          placeholder="Subject"
          style={contactStyles.formInput}
        />
        <Form.Control
          required
          as='textarea'
          name="text"
          type="text"
          placeholder="Message"
          style={contactStyles.formInput}
        />

        <Button
          variant="light"
          type="submit"
          style={{...baseStyles.button,...contactStyles.formButton}}
        >
          Send
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
