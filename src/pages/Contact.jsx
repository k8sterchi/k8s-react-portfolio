import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [requiredFields, setRequiredFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset the "required" state when the user starts typing
    setRequiredFields((prevRequired) => ({
      ...prevRequired,
      [name]: false,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    // Check if the field is empty when blurred
    if (formData[name].trim() === '') {
      setRequiredFields((prevRequired) => ({
        ...prevRequired,
        [name]: true,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields that haven't been touched
    const notTouchedAndEmpty = Object.keys(requiredFields).filter(
      (field) => requiredFields[field] && !touchedFields[field]
    );

    if (notTouchedAndEmpty.length > 0) {
      alert(`The following fields are required: ${notTouchedAndEmpty.join(', ')}`);
      return;
    }

    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {requiredFields.name && <span className="required-text">Required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {requiredFields.email && <span className="required-text">Required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {requiredFields.message && <span className="required-text">Required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;


