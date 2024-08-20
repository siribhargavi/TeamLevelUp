import React, { useState } from 'react';
import './InterviewPreparation.css';

function InterviewPreparation() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "How should I prepare for a technical interview?",
      answer: "Review fundamental concepts, practice coding problems, and be ready to explain your thought process during the interview."
    },
    {
      question: "What are common behavioral interview questions?",
      answer: "Common questions include discussing challenges you've faced, how you handle conflict, and examples of teamwork or leadership."
    },
    {
      question: "How can mock interviews help me?",
      answer: "Mock interviews provide practice with real-time feedback, helping you improve your answers and confidence."
    },
    {
      question: "What should I wear to an interview?",
      answer: "Dress appropriately for the company culture, typically business casual or professional attire."
    },
    {
      question: "How can I follow up after an interview?",
      answer: "Send a thank-you email within 24 hours, reiterating your interest in the position and reflecting on key points from the interview."
    }
  ];

  return (
    <div className="interview-preparation-container">
      <div className="interview-preparation-header">
        <h1>Ace Your Next Interview</h1>
        <p>Our interview preparation services help you feel confident and ready to tackle any interview. From mock interviews to personalized feedback, we’re here to support your success.</p>
      </div>

      <div className="interview-preparation-content">
        <div className="interview-preparation-text">
          <h2>What We Offer</h2>
          <ul>
            <li>Mock Interviews with Industry Experts</li>
            <li>Behavioral Interview Coaching</li>
            <li>Technical Interview Preparation</li>
            <li>Personalized Feedback and Tips</li>
          </ul>
          <p>Our comprehensive interview preparation services are designed to help you present your best self in any interview scenario.</p>
          <a href="/career/interview-preparation" className="btn">Start Preparing</a>
        </div>
        <div className="interview-preparation-image">
          <img src='/images/interview-preparation.jpg' alt="Interview Preparation" />
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

export default InterviewPreparation;
