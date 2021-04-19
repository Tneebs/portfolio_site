import React from "react";
import { Form, Button } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-page'>
        <h1>Contact Me!</h1>

        <div className='contact-container'>
          <Form>
            <Form.Group controlId="formGroupName" className='contact-name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail" className='contact-email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="formGroupSubject" className='contact-subject'>
              <Form.Label>Subject</Form.Label>
              <Form.Control type="subject" />
            </Form.Group>
            <Form.Group controlId="formGroupMessage" className='contact-message'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' />
            </Form.Group>
            <Button variant="dark" className='contact-btn'>Send</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Contact;
