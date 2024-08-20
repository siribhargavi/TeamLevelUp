import React, { useState } from 'react';
import './CareerCoaching.css';

function CareerCoaching() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "What is career coaching?",
      answer: "Career coaching helps you clarify your career goals, improve your job search strategies, and develop skills to advance your career."
    },
    {
      question: "How can career coaching help me?",
      answer: "Career coaching provides personalized guidance and support to help you achieve your career aspirations, whether you're changing careers, seeking advancement, or starting out."
    },
    {
      question: "What is the process of career coaching?",
      answer: "Our process includes one-on-one sessions, assessments, action planning, and ongoing support to help you reach your career goals."
    },
    {
      question: "How long does career coaching take?",
      answer: "The length of coaching depends on your goals and needs, but most clients see significant progress within a few months."
    },
    {
      question: "How do I start career coaching?",
      answer: "You can start by signing up on our website, and one of our coaches will reach out to schedule your first session."
    }
  ];

  return (
    <div className="career-coaching-container">
      <div className="career-coaching-header">
        <h1>Unlock Your Career Potential</h1>
        <p>Our career coaching services provide you with the guidance and tools you need to achieve your career goals. From goal setting to skill development, we’re here to help you every step of the way.</p>
      </div>

      <div className="career-coaching-content">
        <div className="career-coaching-text">
          <h2>What We Offer</h2>
          <ul>
            <li>One-on-One Coaching Sessions</li>
            <li>Career Assessments and Planning</li>
            <li>Skill Development Workshops</li>
            <li>Ongoing Support and Guidance</li>
          </ul>
          <p>Our coaches are dedicated to helping you identify and achieve your career goals through personalized coaching and actionable strategies.</p>
          <a href="/career/career-coaching" className="btn">Start Your Journey</a>
        </div>
        <div className="career-coaching-image">
          <img src='/images/career-coaching.jpeg' alt="Career Coaching" />
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

export default CareerCoaching;