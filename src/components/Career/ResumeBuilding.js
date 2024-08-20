import React, { useState } from 'react';
import './ResumeBuilding.css';

function ResumeBuilding() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "What is a professionally written resume?",
      answer: "A professionally written resume is crafted by experts who know how to highlight your skills and experiences to make you stand out to employers."
    },
    {
      question: "How does ATS optimization work?",
      answer: "ATS optimization ensures that your resume includes the right keywords and format to pass through Applicant Tracking Systems used by employers."
    },
    {
      question: "Can you tailor my resume for a specific job?",
      answer: "Yes, we customize your resume to align with the requirements of the specific job you're applying for, making you a strong candidate."
    },
    {
      question: "How long does it take to get my resume?",
      answer: "Typically, our resume writing service takes 3-5 business days. We also offer expedited options."
    },
    {
      question: "Do you offer cover letter writing services?",
      answer: "Yes, we can create a compelling cover letter that complements your resume and highlights your strengths."
    }
  ];

  return (
    <div className="resume-building-container">
      <div className="resume-building-header">
        <h1>Craft Your Perfect Resume</h1>
        <p>Your resume is the first impression you make on potential employers. Our expert team helps you craft a resume that showcases your strengths, skills, and experiences effectively.</p>
      </div>

      <div className="resume-building-content">
        <div className="resume-building-text">
          <h2>Our Services</h2>
          <ul>
            <li>Professional Resume Writing</li>
            <li>Resume Review & Feedback</li>
            <li>Tailoring Resumes for Specific Job Roles</li>
            <li>ATS Optimization</li>
          </ul>
          <p>We understand what employers are looking for. Whether you're a recent graduate or a seasoned professional, our services are tailored to meet your needs.</p>
          <a href="/career/resume-building" className="btn">Get Started</a>
        </div>
        <div className="resume-building-image">
          <img src='/images/resume.png' alt="Resume Building" />
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="faq-questions">
            {questions.map((item, index) => (
              <div
                className="faq-question"
                onMouseEnter={() => setActiveQuestion(index)}
                onMouseLeave={() => setActiveQuestion(null)}
                key={index}
              >
                <h3>{item.question}</h3>
              </div>
            ))}
          </div>
          {activeQuestion !== null && (
            <div className="faq-answer-box">
              <p>{questions[activeQuestion].answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilding;
