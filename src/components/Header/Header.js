// src/components/Header/Header.js
import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';
import './Header.css'; // For styling

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
