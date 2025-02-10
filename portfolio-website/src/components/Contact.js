import React from 'react';
import '../assets/styles/Contact.css'; // Commented out for now

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;