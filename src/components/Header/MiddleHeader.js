// src/components/Header/MiddleHeader.js
import React from 'react';
import './MiddleHeader.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="logo">
      <a href="/">
          <img src="/images/levelup.png" alt="TeamLevelUp Logo" />
        </a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">
          <FaSearch />
        </button>
      </div>
      <div className="auth-links">
      <a href="/login-signup">Login/Register</a> {/* Adjusted to match your Start component route */}
       

      </div>
    </div>
  );
};

export default MiddleHeader;
