// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../Home/HeroSection';
import FeaturesOverview from '../Home/FeaturesOverview';
import CourseCatalogPreview from '../Home/CourseCatalogpreview';
import Testimonials from '../Home/Testimonials';
import CallToAction from '../Home/CallToAction';
import BannerSection from '../Home/BannerSection';

import KeyAchievements from '../Home/KeyAchievements'; 
import './HomePage.css';


const courses = {
    BootCamps: [
      {
        id: 1,
        title: 'Full Stack Web Development',
        description: 'Become a full-stack developer in 12 weeks.',
        image: '/images/fullstack-developer.jpg',
        price: '$999',
        discount: '$1299',
      },
      {
        id: 2,
        title: 'Data Science',
        description: 'Master data science in an intensive program.',
        image: '/images/datascience.jpg',
        price: '$1199',
        discount: '$1499',
      },
      {
        id: 3,
        title: 'Machine Learning',
        description: 'Learn machine learning algorithms and applications.',
        image: '/images/machine-learning.jpeg',
        price: '$1099',
        discount: '$1399',
      },
      {
        id: 4,
        title: 'DevOps',
        description: 'Integrate development and operations in this hands-on bootcamp.',
        image: 'images/devops-bootcamp.jpeg',
        price: '$999',
        discount: '$1299',
      },
    ],
    'Hybrid Learning': [
      {
        id: 5,
        title: 'Coding Camp',
        description: 'Learn coding skills during the winter break.',
        image: 'images/winter-coding.png',
        price: '$499',
        discount: '$699',
      },
      {
        id: 6,
        title: 'AI School',
        description: 'Understand the fundamentals of AI in this winter program.',
        image: 'images/ai-coding.jpeg',
        price: '$599',
        discount: '$799',
      },
      {
        id: 7,
        title: 'Blockchains Workshop',
        description: 'Explore blockchain technology and its applications.',
        image: 'images/blockchain-camp.png',
        price: '$799',
        discount: '$999',
      },
      {
        id: 8,
        title: 'Cybersecurity Intensive',
        description: 'Learn cybersecurity basics in this focused winter program.',
        image: 'images/cybersecurity.jpeg',
        price: '$599',
        discount: '$799',
      },
    ],
    'Bundled Courses': [
      {
        id: 9,
        title: 'Discounted Python Course',
        description: 'Get 50% off our Python Programming course.',
        image: 'images/python.jpg',
        price: '$199',
        discount: '$399',
      },
      {
        id: 10,
        title: 'Cybersecurity Special Offer',
        description: 'Learn cybersecurity at a discounted rate.',
        image: 'images/cyber-security.jpg',
        price: '$299',
        discount: '$499',
      },
      {
        id: 11,
        title: 'AI & Machine Learning Combo',
        description: 'Learn AI and machine learning together at a reduced price.',
        image: 'images/ai-ml.jpeg',
        price: '$899',
        discount: '$1299',
      },
      {
        id: 12,
        title: 'Web Development Starter Pack',
        description: 'Get started with web development at an affordable price.',
        image: 'images/web-development.jpg',
        price: '$299',
        discount: '$499',
      },
    ],
  };
  

const HomePage = () => {
  return (
    <div>
      <div className="geometric-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <HeroSection />
      <BannerSection/>
      <CourseCatalogPreview courses={courses} />
      <FeaturesOverview />
      <KeyAchievements />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
