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
      id:1,
      img: '/images/react-banner.png',
      title: 'React Bootcamp',
      description: 'Master React.js and build dynamic web applications with hands-on projects.',
      link: '/courses/react',
    },
    {
      id:2,
      img: '/images/java-banner.jpg',
      title: 'Java Bootcamp',
      description: 'Become a Java expert with comprehensive training and real-world projects.',
      link: '/courses/java',
    },
    {
      id:3,
      img: '/images/python.jpg',
      title: 'Python Bootcamp',
      description: 'Learn Python from the ground up and develop versatile coding skills.',
      link: '/courses/python',
    },
    {
      id:4,
      img: '/images/data-science-bootcamp.jpg',
      title: 'Data Science Bootcamp',
      description: 'Dive into data analysis, machine learning, and statistical modeling.',
      link: '/courses/data-science',
    },
    {
      id:5,
      img: '/images/cloud-computing-bootcamp.jpg',
      title: 'Cloud Computing Bootcamp',
      description: 'Gain expertise in cloud services and deployment strategies.',
      link: '/courses/cloud-computing',
    },
    {
      id:6,
      img: '/images/ai-ml-bootcamp.jpg',
      title: 'AI & ML Bootcamp',
      description: 'Explore the world of artificial intelligence and machine learning.',
      link: '/courses/ai-ml',
    },
    {
      id:7,
      img: '/images/data-engineering-bootcamp.jpg',
      title: 'Data Engineering Bootcamp',
      description: 'Develop the skills to manage and process large-scale data systems.',
      link: '/courses/data-engineering',
    },
    {
      id:8,
      img: '/images/cyber-security-bootcamp.jpg',
      title: 'Cyber Security Bootcamp',
      description: 'Protect networks, systems, and data from cyber threats.',
      link: '/courses/cyber-security',
    },
    {
      id:9,
      img: '/public/images/web-development.jpg',
      title: 'UI/UX Design Bootcamp',
      description: 'Learn the principles of user interface and user experience design.',
      link: '/courses/ui-ux',
    },
    {
      id:10,
      img: '/images/blockchain-bootcamp.jpg',
      title: 'Blockchain Bootcamp',
      description: 'Understand blockchain technology and its applications.',
      link: '/courses/blockchain',
    },
    {
      id:11,
      img: '/images/docker-kubernetes-bootcamp.jpg',
      title: 'Docker & Kubernetes Bootcamp',
      description: 'Master containerization and orchestration with Docker and Kubernetes.',
      link: '/courses/docker-kubernetes',
    },
    {
      id:12,
      img: '/images/ethical-hacking-bootcamp.jpg',
      title: 'Ethical Hacking Bootcamp',
      description: 'Learn the techniques to secure systems and perform penetration testing.',
      link: '/courses/ethical-hacking',
    },
    {
      id:13,
      img: '/images/microservices-bootcamp.jpg',
      title: 'Microservices Architecture Bootcamp',
      description: 'Build scalable and resilient applications with microservices architecture.',
      link: '/courses/microservices',
    },
    {
      id:14,
      img: '/images/agile-methodologies-bootcamp.jpg',
      title: 'Agile Methodologies Bootcamp',
      description: 'Adopt agile practices to enhance project management and delivery.',
      link: '/courses/agile-methodologies',
    },
    {
      id:15,
      img: '/images/sql-databases-bootcamp.jpg',
      title: 'SQL Databases Bootcamp',
      description: 'Master SQL and database management for efficient data handling.',
      link: '/courses/sql-databases',
    },
    {
      id:16,
      img: '/images/angular-bootcamp.jpg',
      title: 'Angular Bootcamp',
      description: 'Develop robust web applications using Angular framework.',
      link: '/courses/angular',
    },
  ],
  'Hybrid Learning': [
    {
      id: 1,
      title: 'Coding Camp',
      description: 'Learn coding skills during the winter break.',
      image: '/images/winter-coding.png',
      price: '$499',
      discount: '$699',
    },
    {
      id: 2,
      title: 'AI School',
      description: 'Understand the fundamentals of AI in this winter program.',
      image: '/images/ai-coding.jpeg',
      price: '$599',
      discount: '$799',
    },
    {
      id: 3,
      title: 'Blockchains Workshop',
      description: 'Explore blockchain technology and its applications.',
      image: '/images/blockchain-camp.png',
      price: '$799',
      discount: '$999',
    },
    {
      id: 4,
      title: 'Cybersecurity Intensive',
      description: 'Learn cybersecurity basics in this focused winter program.',
      image: '/images/cybersecurity.jpeg',
      price: '$599',
      discount: '$799',
    },
  ],
  'Bundled Courses': [
    {
      id: 1,
      title: 'Java Fullstack Development',
      description: 'Become a Fullstack Java Developer with this comprehensive course.',
      image: '/images/java-fullstack.jpg',
      price: '$799',
      discount: '$999',
      link: '/courses/java-fullstack',
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Master the skills required for modern frontend development.',
      image: '/images/frontend-development.jpg',
      price: '$699',
      discount: '$899',
      link: '/courses/frontend-development',
    },
    {
      id: 3,
      title: 'Python Fullstack Development',
      description: 'Learn Python and Fullstack Development in one go.',
      image: '/images/python-fullstack.jpg',
      price: '$799',
      discount: '$999',
      link: '/courses/python-fullstack',
    },
    {
      id: 4,
      title: 'Data Science',
      description: 'Dive deep into Data Science with this bundled course.',
      image: '/images/data-science.jpg',
      price: '$899',
      discount: '$1199',
      link: '/courses/data-science',
    },
    {
      id: 5,
      title: 'Cloud Computing Bundle',
      description: 'Learn cloud computing with this essential bundle.',
      image: '/images/cloud-computing.jpg',
      price: '$999',
      discount: '$1299',
      link: '/courses/cloud-computing',
    },
    {
      id: 6,
      title: 'DevOps Essentials',
      description: 'Master DevOps practices with this comprehensive course.',
      image: '/images/devops.jpg',
      price: '$799',
      discount: '$999',
      link: '/courses/devops',
    },
    {
      id: 7,
      title: 'Fullstack JavaScript',
      description: 'Learn Fullstack development with JavaScript and Node.js.',
      image: '/images/fullstack-js.jpg',
      price: '$899',
      discount: '$1199',
      link: '/courses/fullstack-js',
    },
    {
      id: 8,
      title: 'Cyber Security Professional',
      description: 'Become a Cyber Security Professional with this in-depth course.',
      image: '/images/cyber-security.jpg',
      price: '$999',
      discount: '$1299',
      link: '/courses/cyber-security-bundle',
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
      <BannerSection />
      <CourseCatalogPreview courses={courses} />
      <FeaturesOverview />
      <KeyAchievements />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
