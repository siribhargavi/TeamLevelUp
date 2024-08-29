import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Software Development Instructor",
      location: "Remote",
      type: "Full-Time",
      description: "We are looking for a passionate Software Development Instructor to join our team. You will be responsible for teaching and mentoring students in various software development disciplines. This role requires a deep understanding of coding principles and the ability to convey complex concepts in an accessible manner. You'll collaborate with a dynamic team of educators and developers to create a learning experience that fosters student success and professional growth.",
      requirements: [
        "3+ years of experience in software development",
        "Strong knowledge of React, JavaScript, and other front-end technologies",
        "Excellent communication and teaching skills",
        "Experience with online education platforms is a plus"
      ],
      link: "/careers/software-development-instructor", // Placeholder link
    },
    {
      id: 2,
      title: "Student Success Coach",
      location: "Remote",
      type: "Part-Time",
      description: "As a Student Success Coach, you will guide and support students through their learning journey, helping them stay motivated and achieve their goals. You'll be the main point of contact for students, ensuring they have the resources and encouragement they need to succeed. This role is perfect for someone who enjoys mentoring and has a strong understanding of educational best practices.",
      requirements: [
        "Experience in student mentoring or coaching",
        "Strong interpersonal and communication skills",
        "Ability to work independently and remotely",
        "Familiarity with online learning environments"
      ],
      link: "/careers/student-success-coach", // Placeholder link
    },
    {
      id: 3,
      title: "Curriculum Developer",
      location: "Remote",
      type: "Contract",
      description: "We are seeking a Curriculum Developer to design and develop course materials for our software development programs. You'll work closely with subject matter experts to create engaging, effective, and up-to-date content. This role requires creativity, attention to detail, and a strong understanding of pedagogical strategies in the tech education space.",
      requirements: [
        "Proven experience in curriculum design and development",
        "Strong understanding of current software development practices",
        "Ability to create engaging and effective learning materials",
        "Experience in online education is preferred"
      ],
      link: "/careers/curriculum-developer", // Placeholder link
    },
  ];

  return (
    <div className="careers-container">
      <h1 className="careers-heading">Join Our Team</h1>
      <p className="careers-intro">
        At Level Up Institute, we're dedicated to empowering the next generation of software professionals. If you're passionate about education and technology, we'd love to have you on our team. Explore our current job openings below and take the next step in your career with us.
      </p>
      
      <div className="job-openings">
        {jobOpenings.map(job => (
          <div key={job.id} className="job-opening">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-location"><strong>Location:</strong> {job.location}</p>
            <p className="job-type"><strong>Type:</strong> {job.type}</p>
            <p className="job-description">{job.description}</p>
            <ul className="job-requirements">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <a href={job.link} className="job-apply-link">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
