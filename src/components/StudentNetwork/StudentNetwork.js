import React from 'react';
import './StudentNetwork.css';

function StudentNetwork() {
  const students = [
    {
      name: "Nikhil Gupta",
      course: "Data Science",
      university: "Delhi University",
      year: "2023",
      image: "/images/student1.jpg",
      description: "Nikhil is a top-performing student with a passion for data analytics and machine learning."
    },
    {
      name: "Anjali Verma",
      course: "Software Engineering",
      university: "IIT Bombay",
      year: "2024",
      image: "/images/student2.jpg",
      description: "Anjali excels in full-stack development and is an active member of the coding club."
    },
    {
      name: "Rahul Singh",
      course: "Cybersecurity",
      university: "BITS Pilani",
      year: "2025",
      image: "/images/student3.jpg",
      description: "Rahul is focused on cybersecurity and has completed several internships in the field."
    },
  ];

  return (
    <div className="student-network-container">
      <h1>Student Network</h1>
      <p>Our student network connects you with peers across various disciplines, fostering collaboration and knowledge sharing.</p>
      <div className="student-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <img src={student.image} alt={student.name} className="student-image" />
            <h2>{student.name}</h2>
            <h3>{student.course}</h3>
            <p>{student.university} - Class of {student.year}</p>
            <p>{student.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentNetwork;
