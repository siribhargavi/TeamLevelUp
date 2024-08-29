import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Tech Innovators Inc.",
      description: "A leading provider of software solutions, partnering with us to offer real-world experience through internships and project collaborations.",
      logo: "tech-innovators.png", // Placeholder for partner logo
    },
    {
      id: 2,
      name: "CodeMaster Academy",
      description: "An educational institution that collaborates with us to develop cutting-edge curriculum and training programs.",
      logo: "codemaster-academy-logo.png", // Placeholder for partner logo
    },
    {
      id: 3,
      name: "NextGen Developers",
      description: "A network of industry professionals providing mentorship and career guidance to our students.",
      logo: "nextgen-developers-logo.png", // Placeholder for partner logo
    },
  ];

  return (
    <div className="partners-container">
      <h1 className="partners-heading">Our Valued Partners</h1>
      <p className="partners-intro">
        At Level Up Institute, we are proud to collaborate with industry leaders who share our commitment to excellence in education and innovation. Our partners provide invaluable support and opportunities for our students, helping them to gain real-world experience and achieve their career goals.
      </p>
      <div className="partners-list">
        {partners.map(partner => (
          <div key={partner.id} className="partner-item">
            <img src="/images/tech-innovators.png" alt={`${partner.name} logo`} className="partner-logo" />
            <h2 className="partner-name">{partner.name}</h2>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
