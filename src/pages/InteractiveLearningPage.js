import React from 'react';
import './InteractiveLearning.css';


const InteractiveLearning = () => {
  const headingText = "Key Features of Interactive Learning";

  return (
    <div className="interactive-content-page1">
      <section className="key-features1">
        <h2>
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{ animationDelay: `${index * 0.2}s` }} // Adjusted delay
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <div className="features-grid1">
          <div className="feature-box1">
            <img src="/images/collaborative-activities.png" alt="Collaborative Activities" />
            <h3>Collaborative Activities</h3>
            <p>Engage with peers through group discussions, team projects, and interactive problem-solving sessions.</p>
          </div>
          <div className="feature-box1">
            <img src="/images/technology-integration.png" alt="Technology Integration" />
            <h3>Technology Integration</h3>
            <p>Utilize modern tools such as VR/AR, interactive whiteboards, and online simulations to enhance learning.</p>
          </div>
          <div className="feature-box1">
            <img src="/images/real-time-feedback.jpeg" alt="Real-Time Feedback" />
            <h3>Real-Time Feedback</h3>
            <p>Receive instant feedback through quizzes, polls, and interactive assessments to improve your understanding.</p>
          </div>
          <div className="feature-box1">
            <img src="/images/active-learning.webp" alt="Active Learning" />
            <h3>Active Learning Strategies</h3>
            <p>Participate in case studies, problem-based learning, and flipped classrooms to actively engage with content.</p>
          </div>
          <div className="feature-box1">
            <img src="/images/immersive-learning.webp" alt="Immersive Learning" />
            <h3>Immersive Learning Experiences</h3>
            <p>Dive into immersive learning through VR/AR, role-playing, and simulation-based learning.</p>
          </div>
          <div className="feature-box1">
            <img src="/images/personalized-learning.png" alt="Personalized Learning" />
            <h3>Personalized Learning Paths</h3>
            <p>Benefit from adaptive learning technologies and personalized content tailored to your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveLearning;
