import React from "react";
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        e.target.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='contact-page'>
      <br/>
      <h1 className='contact-title'>Contact Me!</h1>

      <div className='contact-container'>
        {/* <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}

        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formGroupName" className='contact-name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name='name'/>
          </Form.Group>
          <Form.Group controlId="formGroupEmail" className='contact-email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email'/>
          </Form.Group>
          <Form.Group controlId="formGroupSubject" className='contact-subject'>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" name='subject'/>
          </Form.Group>
          <Form.Group controlId="formGroupMessage" className='contact-message'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' name='message'/>
          </Form.Group>
          <Button type='submit' variant="dark" className='contact-btn'>Send</Button>
        </Form>
      </div>
    </div>
  )
}

export default Contact;
