// ContactForm.js

import React, { useState, useEffect } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container" style={{margin:'100px 0'}}>
      <h2 className='contact-title'>If you have any questions, don't hesitate to contact us </h2>
      <div style={{color:'white',display:"flex", alignItems:"center", justifyContent:"center" ,margin:'15px 0'}}>
        <h3 className=''>
        support@YourGameHub.com
        </h3>

      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="flexcontact">        <div className="form-group">
       
          <input
            type="text"
            placeholder='name'
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='email'
          />
        </div></div>

        <div className="form-group">
         
          <input
            type="text"
            id="subject"
            placeholder='subject'
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='message'
            rows={8}
          ></textarea>
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
