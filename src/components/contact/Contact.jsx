import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail,MdPhone } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rajsrimannwork@gmail.com</h5>
            <a href="mailto:rajsrimannwork@gmail.com">Send a message</a>
          </article>
        </div>
        <div className="contact__options">
        <article className="contact__option">
        <MdPhone className="contact__option-icon" />  
          <h4>Phone</h4>
          <h5>+91 90259 75950</h5>
          <a href="tel:+919025975950">Call Now</a>
        </article>
      </div>
      </div>
    </section>
  );
};

export default Contact;
