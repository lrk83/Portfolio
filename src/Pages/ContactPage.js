import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helpers';
import {Form, Button, Header, Container} from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  useEffect(()=>{
    AOS.init({
      duration: 2000
    });
  });

  return (
      <Container className="big-container" id="projects-container">
          <Container className="shadow-container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
          <div data-aos="fade-in" data-aos-delay="200">
            <Header as="h1" id="contact-header">Reach Out!</Header>
                <ul>
                <li>Email: <a href="mailto: lrk83@cornell.edu">lrk83@cornell.edu</a></li>
                <li>Github: <a href="https://github.com/lrk83">github.com/lrk83</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/lukas-keel/">linkedin.com/in/lukas-keel/</a></li>
                </ul>
          </div>
          <div data-aos="fade-in" data-aos-delay="200">
            <Form id="contact-form" onSubmit={handleSubmit}>
            
            </Form>
          </div>
          </Container>
      </Container>
  );
}

export default ContactForm;