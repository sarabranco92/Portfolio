import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './_contact.scss';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

  const contactRef = useRef(null);

useEffect(() => {
    if (contactRef.current) {
      contactRef.current.style.zIndex = null; 
    }
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//identifiants EmailJS
    const serviceID = '21712';
    const templateID = 'temp1';
    const userID = 'P9QJKctqmf7zHXkq8';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitStatus({ status: 'success', message: 'Message envoyé avec succès!' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setSubmitStatus({ status: 'error', message: 'Échec de l\'envoi du message.' });
      });
  };

  return (
<section id="contact" ref={contactRef} className="contact">
      <h2 className="contact__title">Collaborez avec moi</h2>
      <div className="contact__underline text-animate"></div>
      {submitStatus.message && (
        <div className={`contact__alert ${submitStatus.status === 'success' ? 'contact__alert--success' : 'contact__alert--error'}`}>
          {submitStatus.message}
        </div>
      )}
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Nom"
          className="contact__input"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Adresse e-mail"
          className="contact__input"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="contact__textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact__submit">ME CONTACTER</button>
      </form>
    </section>
  );
}

export default Contact;