import React from 'react';
import './Community.css';

const CommunitySupport = () => {
  return (
    <div className="community-support-container">
      <h1 className="community-support-heading">Community Support</h1>
      <p className="community-support-intro">
        Join our vibrant community forums where you can connect with fellow users, exchange ideas, and get support from both peers and experts. 
        Whether you're troubleshooting an issue, seeking advice on best practices, or just looking to engage with others in the industry, 
        our community is here to help.
      </p>
      <h2 className="community-support-subheading">Why Join Our Community?</h2>
      <ul className="community-support-benefits">
        <li>Access to a wealth of knowledge from experienced users.</li>
        <li>Collaborate and network with professionals and enthusiasts.</li>
        <li>Share your expertise and help others on their journey.</li>
        <li>Stay updated with the latest discussions and trends.</li>
      </ul>
      <p className="community-support-conclusion">
        Become a part of our community today and start contributing to discussions, sharing your insights, and learning from others. Your participation makes our community stronger!
      </p>
    </div>
  );
};

export default CommunitySupport;
