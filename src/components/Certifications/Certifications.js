import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'React Developer Certification',
      description: 'Earn your certification as a React Developer after successfully completing the course and passing the assessment.',
      image: '/images/react-certificate.png',
      date: 'Issued: September 30, 2024'
    },
    {
      id: 2,
      title: 'Advanced Java Certification',
      description: 'Demonstrate your advanced knowledge in React with this certification, focusing on state management, hooks, and performance optimization.',
      image: '/images/advanced-react-certificate.png',
      date: 'Issued: October 15, 2024'
    },
    {
      id: 3,
      title: 'Full Stack Developer Certification',
      description: 'Become a certified Full Stack Developer with expertise in React, Node.js, Express, and MongoDB.',
      image: '/images/fullstack-certificate.png',
      date: 'Issued: November 10, 2024'
    }
  ];

  return (
    <div className="certifications-page">
      <header className="page-header">
        <h1>Certifications</h1>
        <p>Explore the certifications you can earn by completing our courses.</p>
      </header>

      <div className="certifications-list">
        {certifications.map(cert => (
          <div key={cert.id} className="certification-card">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <p className="issue-date">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
