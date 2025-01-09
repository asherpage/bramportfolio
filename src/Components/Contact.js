import React, { useRef } from 'react';
import "../Assets/Styles/testimonial.css";
import emailjs from '@emailjs/browser';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o7wczsg', 'template_mmb0tzx', form.current, 'HAzGnEfG61Cf4zDiR')
      .then(
        () => {
          console.log('SUCCESS!');
        alert('Your message has been successfully sent. Thank you for reaching out! Our team will get back to you as soon as possible.');
        form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <>
      <div className="contact-titles">
        <h2 className="contact-head">Contact Us</h2>
        <p className="contact-filler">
          Contact Us for Inquiries, Support, or Just to Say Hi!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form-section">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="user_firstName" type="text" placeholder="First Name" required />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="user_lastName" type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="user_email" type="email" placeholder="Email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="user_phone" type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" value="Send">Submit</button>
          </form>
        </div>
        <div className="contact-info-section">
          <div className="contact-info">
            <div className="info-item">
              <h3>Contact Us <IoCall /></h3>
              <p>Speak to our helpful team</p>
              <p>
                <span>+1 (123) 456-7890</span>
              </p>
              <p>
                <span>sales@bramflooring.com</span>
              </p>
            </div>
            <div className="info-item">
              <h3>Visit Us <FaLocationDot /></h3>
              <p>We&#39;re open 8-3 Monday - Friday And 8-2 Saturday</p>
              <p>
                <span>18700 N 107th Ave, Sun City, AZ 85373</span>
              </p>
            </div>
            <div className="info-item">
              <h3>License</h3>
              <p>
                <span>ROC 325008, CR-48</span>
              </p>
              <p><span>ROC 316404, CR-8</span></p>
            </div>
            <div className="info-item">
              <h3>Socials</h3>
              <p>
                <span>Facebook | Twitter | Instagram</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          className="map"
          title="Work Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1403507742593!2d-112.29308432450134!3d33.65352507330969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b432be04e03cf%3A0x3b84b25de826e40!2sBram%20Flooring!5e0!3m2!1sen!2sus!4v1736439162110!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
