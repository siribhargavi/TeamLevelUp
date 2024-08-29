import React from 'react';
import './Help.css';

const HelpCenter = () => {
  const helpTopics = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn how to create an account, navigate our platform, and start your first course with our beginner's guide.",
      link: "/help/getting-started",
    },
    {
      id: 2,
      title: "Account Management",
      description: "Find out how to manage your account settings, update your profile, and control your privacy settings.",
      link: "/help/account-management",
    },
    {
      id: 3,
      title: "Billing & Payments",
      description: "Get answers to your questions about billing, payment methods, and managing your subscriptions.",
      link: "/help/billing-payments",
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Troubleshoot common issues, report bugs, and learn how to get the most out of our platform's features.",
      link: "/help/technical-support",
    },
    {
      id: 5,
      title: "Course Completion & Certification",
      description: "Understand the process of completing courses and earning certifications recognized in the industry.",
      link: "/help/course-completion-certification",
    },
  ];

  return (
    <div className="support-page">
      <h1>Help Center</h1>
      <p>Explore our Help Center for guides, tutorials, and resources to help you navigate our platform and make the most of our offerings. Below you'll find links to detailed articles on various topics to assist you.</p>
      <div className="help-list">
        {helpTopics.map((topic) => (
          <div key={topic.id} className="help-item">
            <h2 className="help-title">{topic.title}</h2>
            <p className="help-description">{topic.description}</p>
            <a href={topic.link} className="help-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
