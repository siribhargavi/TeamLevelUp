import React, { useState } from 'react';
import './JobPlacement.css';

function JobPlacement() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "How do you assist with job placement?",
      answer: "We provide personalized job placement services, helping you connect with employers and secure job interviews."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in tech, finance, healthcare, and other high-demand industries."
    },
    {
      question: "How long does it take to get a job?",
      answer: "The time frame varies, but our services are designed to help you secure a job as quickly as possible, typically within a few months."
    },
    {
      question: "Do you offer resume and interview preparation?",
      answer: "Yes, we offer comprehensive resume building and interview preparation to ensure you present your best self to employers."
    },
    {
      question: "How do I get started with job placement?",
      answer: "Simply sign up for our services, and our team will begin working with you to identify job opportunities that match your skills and goals."
    }
  ];

  return (
    <div className="job-placement-container">
      <div className="job-placement-header">
        <h1>Secure Your Dream Job</h1>
        <p>Our job placement services are designed to connect you with the right opportunities. We provide support every step of the way, from resume building to interview preparation.</p>
      </div>

      <div className="job-placement-content">
        <div className="job-placement-text">
          <h2>What We Offer</h2>
          <ul>
            <li>Personalized Job Matching</li>
            <li>Resume and Cover Letter Assistance</li>
            <li>Interview Preparation and Coaching</li>
            <li>Networking Opportunities</li>
          </ul>
          <p>We work closely with you to understand your career goals and match you with job opportunities that fit your skills and aspirations.</p>
          <a href="/career/job-placement" className="btn">Get Started</a>
        </div>
        <div className="job-placement-image">
          <img src='/images/job-placement.jpg' alt="Job Placement" />
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="faq-questions">
            {questions.map((item, index) => (
              <div
                className={`faq-question ${activeQuestion === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveQuestion(index)}
                onMouseLeave={() => setActiveQuestion(null)}
                key={index}
              >
                <h3>{item.question}</h3>
              </div>
            ))}
          </div>
          <div className="faq-answer-box">
            {activeQuestion !== null && (
              <p>{questions[activeQuestion].answer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPlacement;
