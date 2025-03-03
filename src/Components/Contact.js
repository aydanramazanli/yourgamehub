// ContactForm.js

import React, { useState } from 'react';
import '../Styles/Contact.css';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
    <div className="contact-form-container">
      <h2 className='contact-title' >          {t("contact.title")}</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="flex">        <div className="form-group">
       
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
        <button type="submit" className='btn'>          {t("contact.button")}</button>
      </form>
    </div>
  );
};

export default Contact;
