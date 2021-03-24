import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-page'>
        <h1>Contact Me!</h1>

        <div className='contact-container'>
          <form className='contact-form'>
            Name*
            <input type='text' name='Name'/>
            Email*
            <input type='email' name='Email'/>
            Subject*
            <input type='text' name='Subject'/>
            Message*
            <input type='textbox' name='Message'/>
            <button type='submit' name='Send'>Send Message</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
