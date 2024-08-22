import React from 'react';
import './Mentorship.css';

function Mentorship() {
  const mentors = [
    {
      name: "John Doe",
      title: "Senior Data Scientist",
      company: "TechWave Inc.",
      description: "John has over 10 years of experience in data science, specializing in machine learning and big data technologies.",
      image: "/images/mentor1.jpg"
    },
    {
      name: "Jane Smith",
      title: "Lead Software Engineer",
      company: "Innovatech Solutions",
      description: "Jane is a passionate software engineer with a focus on cloud computing and microservices architecture.",
      image: "/images/mentor2.jpg"
    },
    {
      name: "Emily Brown",
      title: "UX/UI Designer",
      company: "Creative Minds",
      description: "Emily brings creativity and precision to the table, with a deep understanding of user-centered design.",
      image: "/images/mentor3.jpg"
    },
  ];

  return (
    <div className="mentorship-container">
      <h1>Mentorship Program</h1>
      <p>Our mentorship program connects you with industry experts who provide guidance and support to help you achieve your career goals.</p>
      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} className="mentor-image" />
            <h2>{mentor.name}</h2>
            <h3>{mentor.title}</h3>
            <p>{mentor.company}</p>
            <p>{mentor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentorship;
