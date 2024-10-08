import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MiddleHeader.css';

const MiddleHeader = () => {
  const navigate = useNavigate();


  const handleProfileClick = () => {
    navigate('/profile');
  };
  const calculateTimeLeft = () => {
    const offerDate = new Date("2024-09-01T00:00:00"); // Set your offer date here
    const currentTime = new Date();
    const difference = offerDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="middle-header">
      <div className="logo">
        <a href="/">
          <img src="/images/levelup-logo.png" alt="TeamLevelUp Logo" />
        </a>
      </div>
      <div className="timer">
        <div className="timer-text">
          {timeLeft.days !== undefined ? (
            <span>
              Next Offer on Java with AI Course In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          ) : (
            <span>Offer on Java with AI Course is Live Now!</span>
          )}
        </div>
        <button type="button" onClick={() => navigate('/book-demo')}>
          Get Offer
        </button>
      </div>
      <div className="auth-links">
        <button type="button" onClick={() => window.location.href = '/login-signup'}>
          Login/Register
        </button>
        <button type="button" className="profile-button" onClick={handleProfileClick}>
      Profile
    </button>
      </div>
    </div>
  );
};

export default MiddleHeader;
