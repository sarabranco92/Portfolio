import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure AOS styles are imported
import './_contact.scss'; // Your custom styles

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      // AOS initialization options
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');
    try {
      const response = await fetch('https://formspree.io/f/xdoqgbov', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      
        setTimeout(() => {
          setSubmitStatus('');
        }, 2000); // Clear the success message after 2 seconds
      } else {
        console.error('Server responded with non-OK status');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id='contact' className="contact">
      <h2 className="contact__title" data-aos="fade-up">Contact Me</h2>
      <div className="contact__underline" data-aos="fade-up"></div>
      {submitStatus === 'success' && (
        <div className="contact__response-message contact__response-message--success" data-aos="fade-in">
          Message sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="contact__response-message contact__response-message--error" data-aos="fade-in">
          Something went wrong. Please try again later.
        </div>
      )}
      <form className="contact__form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact__input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact__textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact__submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
