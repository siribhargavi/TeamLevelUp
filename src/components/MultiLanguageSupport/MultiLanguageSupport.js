import React from 'react';
import './MultiLanguageSupport.css';

const MultiLanguageSupport = () => {
  return (
    <div className="multi-language-page">
      <header className="page-header">
        <h1>Multi-language Support</h1>
        <p>Our platform supports multiple languages, making learning accessible to everyone, regardless of language preference.</p>
      </header>

      <div className="languages-list">
        <div className="language-card">
          <h2>English</h2>
          <p>The default language with full support for all features and content.</p>
        </div>
        <div className="language-card">
          <h2>Spanish</h2>
          <p>Yet to be available.</p>
        </div>
        <div className="language-card">
          <h2>French</h2>
          <p>Yet to be available.</p>
        </div>
        <div className="language-card">
          <h2>German</h2>
          <p>Yet to be available.</p>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageSupport;
