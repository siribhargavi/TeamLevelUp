import React, { useState } from 'react';
import jsPDF from 'jspdf'; // For generating PDF
import './ResumeMaker.css';

function ResumeMaker() {
  const [resumeType, setResumeType] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails, [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(details.name, 20, 20);

    doc.setFontSize(16);
    doc.text(`Email: ${details.email}`, 20, 30);
    doc.text(`Phone: ${details.phone}`, 20, 40);

    doc.setFontSize(18);
    doc.text('Education', 20, 50);
    doc.setFontSize(14);
    doc.text(details.education, 20, 60);

    if (resumeType === 'experienced') {
      doc.setFontSize(18);
      doc.text('Experience', 20, 70);
      doc.setFontSize(14);
      doc.text(details.experience, 20, 80);
    }

    doc.setFontSize(18);
    doc.text('Skills', 20, 90);
    doc.setFontSize(14);
    doc.text(details.skills, 20, 100);

    doc.save(`${details.name}_Resume.pdf`);
  };

  const handleResumeTypeSelect = (type) => {
    setResumeType(type);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  return (
    <div className="resume-maker-container">
      <h1>Resume Maker</h1>
      <p>Choose your experience level to get started with creating your perfect resume.</p>
      <div className="resume-options">
        <button onClick={() => handleResumeTypeSelect('fresher')}>Fresher</button>
        <button onClick={() => handleResumeTypeSelect('experienced')}>Experienced</button>
      </div>

      {resumeType && (
        <form onSubmit={handleFormSubmit} className="resume-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={details.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={details.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <textarea
              id="education"
              name="education"
              value={details.education}
              onChange={handleInputChange}
              required
            />
          </div>

          {resumeType === 'experienced' && (
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={details.experience}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={details.skills}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn">Download Resume</button>
        </form>
      )}
    </div>
  );
}

export default ResumeMaker;
