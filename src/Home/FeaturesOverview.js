import React from 'react';
import './FeaturesOverview.css';

const FeaturesOverview = () => {
  const features = [
    {
      img: '/images/interactive-learning.png',
      title: 'Interactive Learning',
      description: 'Engage with content that adapts to your learning style and keeps you motivated.',
      link: '/features/interactive-learning'
    },
    {
      img: '/images/ai-powered.jpeg',
      title: 'AI-Powered Personalization',
      description: 'Receive personalized course recommendations based on your goals and progress.',
      link: '/features/ai-personalization'
    },
    {
      img: '/images/hands-on.png',
      title: 'Hands-On Labs',
      description: 'Practice in real-world environments with our industry-standard labs.',
      link: '/features/hands-on-labs'
    },
    {
      img: '/images/career-support.jpg',
      title: 'Career Support',
      description: 'Get assistance with resume building, interview prep, and job placement.',
      link: '/features/career-support'
    },
    {
      img: '/images/multi-language.jpeg',
      title: 'Multi-language Support',
      description: 'Access courses in multiple languages to suit your preferences.',
      link: '/features/multi-language-support'
    },
    {
      img: '/images/certifications.jpg',
      title: 'Certifications',
      description: 'Earn industry-recognized certifications to validate your skills.',
      link: '/features/certifications'
    },
    {
      img: '/images/community-forum.jpeg',
      title: 'Community Forums',
      description: 'Join a community of learners to discuss and collaborate on topics.',
      link: '/features/community-forums'
    },
    {
      img: '/images/24*7.jpg',
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support team.',
      link: '/features/support'
    },
  ];

  return (
    <div className="features-overview">
      <h2>Why Choose Level Up?</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-card-inner">
              <div className="feature-card-front">
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-card-back">
                <a href={feature.link} className="view-more-button">View More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOverview;
