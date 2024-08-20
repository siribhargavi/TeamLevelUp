// src/components/Home/FeaturesOverview.js
import React from 'react';
import './FeaturesOverview.css';

const FeaturesOverview = () => {
  return (
    <div className="features-overview">
      <h2>Why Choose Level Up?</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src="/images/interactive-learning.png" alt="Interactive Learning" />
          <h3>Interactive Learning</h3>
          <p>Engage with content that adapts to your learning style and keeps you motivated.</p>
        </div>
        <div className="feature-item">
          <img src="/images/ai-powered.jpeg" alt="AI Personalization" />
          <h3>AI-Powered Personalization</h3>
          <p>Receive personalized course recommendations based on your goals and progress.</p>
        </div>
        <div className="feature-item">
          <img src="/images/hands-on.png" alt="Hands-On Labs" />
          <h3>Hands-On Labs</h3>
          <p>Practice in real-world environments with our industry-standard labs.</p>
        </div>
        <div className="feature-item">
          <img src="/images/career-support.jpg" alt="Career Support" />
          <h3>Career Support</h3>
          <p>Get assistance with resume building, interview prep, and job placement.</p>
        </div>
        <div className="feature-item">
          <img src="/images/multi-language.jpeg" alt="Multi-language Support" />
          <h3>Multi-language Support</h3>
          <p>Access courses in multiple languages to suit your preferences.</p>
        </div>
        <div className="feature-item">
          <img src="/images/certifications.jpg" alt="Certifications" />
          <h3>Certifications</h3>
          <p>Earn industry-recognized certifications to validate your skills.</p>
        </div>
        <div className="feature-item">
          <img src="/images/community-forum.jpeg" alt="Community Forums" />
          <h3>Community Forums</h3>
          <p>Join a community of learners to discuss and collaborate on topics.</p>
        </div>
        <div className="feature-item">
          <img src="/images/24*7.jpg" alt="24/7 Support" />
          <h3>24/7 Support</h3>
          <p>Get help whenever you need it with our round-the-clock support team.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverview;
