import React, { useState } from 'react';
import './EnrollmentForm.css'; // Import your CSS file
import '@fontsource/open-sans'; 

function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    course: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      course: '',
      comments: ''
    });
    submitted(); // Call the submitted function here
  };

  const submitted = () => {
    alert("Successfully Enrolled!");
  }

  return (
    <div className="page">
      <div className="enrollment-form-container">
        <h2>College Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Contact:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select id="course" name="course" value={formData.course} onChange={handleChange} required>
              <option value="">Select a course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows="4"></textarea>
          </div> */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentForm;
