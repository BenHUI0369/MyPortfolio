import React, { useRef } from 'react';
import './contact.css';
import clientImg1 from '../../assets/clients/oxclub_logo.png';
import clientImg2 from '../../assets/adobe.png';
import clientImg3 from '../../assets/microsoft.png';
import clientImg4 from '../../assets/facebook.png';
import LinkedInIcon from '../../assets/logo-linkedin.png';
import GitHubIcon from '../../assets/logo-github.png';
import FBIcon from '../../assets/facebook-icon.png';
import TWIcon from '../../assets/twitter.png';
import YTIcon from '../../assets/youtube.png';
import IGIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fxzee9y', 'template_vqonckk', form.current, {
            publicKey: 'uUlPg70d9LVB7S0zea7Ok',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with different group of companies and individual. Some of them I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={clientImg1} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                  <a href="https://www.linkedin.com/in/benhui-ca/" target="_blank"><img src={LinkedInIcon} alt="LinkedIn" className="link" /></a>
                  <a href="https://github.com/BenHUI0369" target="_blank"><img src={GitHubIcon} alt="GitHub" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}
