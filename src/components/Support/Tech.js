import React from 'react';
import './Tech.css';

const TechnicalSupport = () => {
  return (
    <div className="tech-support-container">
      <h1 className="tech-support-heading">Technical Support</h1>
      <p className="tech-support-intro">
        Our technical support team is dedicated to helping you resolve any technical issues you may encounter. 
        Whether you're facing problems with our platform, experiencing bugs, or need assistance with setup and installation, 
        we're here to assist you.
      </p>
      <h2 className="tech-support-subheading">Common Issues We Resolve</h2>
      <ul className="tech-support-list">
        <li>Platform bugs and errors</li>
        <li>Installation and setup assistance</li>
        <li>Troubleshooting connectivity issues</li>
        <li>Software updates and patches</li>
        <li>General technical inquiries</li>
      </ul>
      <p className="tech-support-conclusion">
        If you need immediate assistance, please reach out to us via our live chat, email, or phone. Our team is available 24/7 to ensure you have the support you need to succeed.
      </p>
    </div>
  );
};

export default TechnicalSupport;
