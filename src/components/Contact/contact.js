import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import LinkedIn from '../../assets/linkedin-logo.png'; // Corrected import
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5as1cd3', 'template_tb46nm8', form.current, {
            publicKey: 'KyAK•••••••••••••••••',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

      return (
        <section id="contactPage">
            <div id="clients">
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with include:
                </p>
                <div className='clientImgs'>
                    <img src={walmart} alt="walmart" className='clientImg' />
                    <img src={Adobe} alt="adobe" className='clientImg' />
                    <img src={Microsoft} alt="microsoft" className='clientImg' />
                    <img src={Facebook} alt="facebook" className='clientImg' />
                </div>
            </div>
    
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                  <textarea className="msg" name="message" rows="5" placeholder='Your Message' />
                  <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={LinkedIn} alt="LinkedIn" className='link'/> {/* Corrected alt attribute */}
                    <img src={Twitter} alt="Twitter" className='link'/>
                    <img src={Youtube} alt="Youtube" className='link'/>
                    <img src={Instagram} alt="Instagram" className='link'/>
                </div>
                </form>
            </div>
        </section>
      )
    }
    
    export default Contact;