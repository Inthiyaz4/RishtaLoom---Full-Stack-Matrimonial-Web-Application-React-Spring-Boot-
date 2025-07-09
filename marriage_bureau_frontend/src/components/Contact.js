import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = e => {
    e.preventDefault();
    emailjs.send("service_nj9ywfx", "template_2i0x3e8", form, "kZzwNQtnPYXDmYdpQ")
      .then(() => alert("Message sent!"))
      .catch(() => alert("Error sending message"));
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Admin</h2>
        <h5>📞 Phone: 7095700871</h5>
        <p>Or Send a Message to Admin</p>
        <form onSubmit={sendEmail}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
