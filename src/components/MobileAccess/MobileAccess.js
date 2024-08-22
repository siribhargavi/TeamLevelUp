import React from 'react';
import './MobileAccess.css';

const MobileAccess = () => {
  return (
    <div className="mobile-access-page">
      <header className="page-header">
        <h1>Mobile Access</h1>
        <p>Access our platform anytime, anywhere with full mobile support.</p>
      </header>

      <div className="mobile-features-list">
        <div className="feature-card">
          <h2>Responsive Design</h2>
          <p>Our platform is optimized for any device, ensuring a seamless experience on smartphones and tablets.</p>
        </div>
        <div className="feature-card">
          <h2>Offline Mode</h2>
          <p>Download lessons and materials for offline use, so you can continue learning without an internet connection.</p>
        </div>
        <div className="feature-card">
          <h2>Push Notifications</h2>
          <p>Stay updated with real-time notifications for new lessons, live sessions, and more.</p>
        </div>
       
      </div>
    </div>
  );
};

export default MobileAccess;
