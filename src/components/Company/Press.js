import React from 'react';
import './Press.css';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Level Up Institute Launches New Mentorship Program for Aspiring Developers",
      date: "June 15, 2024",
      excerpt: "Level Up Institute is excited to announce the launch of its new mentorship program designed to connect aspiring software developers with industry experts...",
      link: "/press/mentorship-program-launch", // Placeholder link
    },
    {
      id: 2,
      title: "Partnership with Tech Innovators Inc. to Expand Training Opportunities",
      date: "May 20, 2024",
      excerpt: "We are thrilled to partner with Tech Innovators Inc. to provide enhanced training opportunities for our students, offering them real-world experience...",
      link: "/press/partnership-tech-innovators", // Placeholder link
    },
    {
      id: 3,
      title: "Level Up Institute Wins Award for Excellence in Software Education",
      date: "April 5, 2024",
      excerpt: "We are honored to receive the Excellence in Software Education Award, recognizing our commitment to delivering high-quality training programs...",
      link: "/press/excellence-award", // Placeholder link
    },
  ];

  return (
    <div className="press-container">
      <h1 className="press-heading">Press Releases</h1>
      <p className="press-intro">
        Stay updated with the latest news and announcements from Level Up Institute. Explore our recent press releases to learn more about our initiatives, partnerships, and achievements.
      </p>
      <div className="press-list">
        {pressReleases.map(release => (
          <div key={release.id} className="press-item">
            <h2 className="press-title">{release.title}</h2>
            <p className="press-date">{release.date}</p>
            <p className="press-excerpt">{release.excerpt}</p>
            <a href={release.link} className="press-read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;
