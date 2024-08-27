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
  AWS: [
    {
      id: 1,
      title: 'AWS DevOps',
      img: '/images/aws-devops.webp',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Master AWS DevOps and automate cloud operations.',
      link: '/courses/aws-devops',
    },
    {
      id: 2,
      title: 'AWS Admin',
      img: '/images/aws-admin.webp',
      description: 'Become an expert in AWS administration.',
      link: '/courses/aws-admin',
    },
    {
      id: 3,
      title: 'AWS Data Specialty',
      img: '/images/aws-data-speciality.webp',
      description: 'Specialize in AWS data services and analytics.',
      link: '/courses/aws-data-specialty',
    },
    {
      id: 4,
      title: 'ECS MasterClass',
      img: '/images/ecs-masterclass.webp',
      description: 'Deep dive into AWS ECS and container orchestration.',
      link: '/courses/ecs-masterclass',
    },
  ],
  Azure: [
    {
      id: 5,
      title: 'Azure Data Engineering (DP-203)',
      img: '/images/azure-data-engineering.webp',
      description: 'Get certified in Azure Data Engineering.',
      link: '/courses/azure-data-engineering',
    },
    {
      id: 6,
      title: 'Azure DevOps',
      img: '/images/azure-devops.webp',
      description: 'Learn to implement DevOps using Azure.',
      link: '/courses/azure-devops',
    },
    {
      id: 7,
      title: 'Azure Administrator Training',
      img: '/images/azure-admin.webp',
      description: 'Become an Azure Administrator.',
      link: '/courses/azure-admin',
    },
  ],
  GCP: [
    {
      id: 8,
      title: 'GCP Data Engineering',
      img: '/images/gcp-data-engineering.webp',
      description: 'Master data engineering on Google Cloud Platform.',
      link: '/courses/gcp-data-engineering',
    },
    {
      id: 9,
      title: 'GCP Admin',
      img: '/images/gcp-admin.webp',
      description: 'Become an expert in GCP administration.',
      link: '/courses/gcp-admin',
    },
  ],
  Development: [
    {
      id: 10,
      title: 'Java Full Stack Bootcamp',
      img: '/images/java-fullstack.webp',
      description: 'Become a Full Stack Java Developer.',
      link: '/courses/java-fullstack',
    },
    {
      id: 11,
      title: 'Data Structures and Algorithms',
      img: '/images/data-structures-algorithms.webp',
      description: 'Master the fundamentals of data structures and algorithms.',
      link: '/courses/data-structures-algorithms',
    },
    {
      id: 12,
      title: 'Certified Kubernetes Administration (CKA) Course',
      img: '/images/kubernetes-cka.webp',
      description: 'Get certified in Kubernetes administration.',
      link: '/courses/kubernetes-cka',
    },
    {
      id: 13,
      title: 'Digital Marketing',
      img: '/images/digital-marketing.webp',
      description: 'Learn the essentials of digital marketing.',
      link: '/courses/digital-marketing',
    },
  ],
  Tools: [
    {
      id: 14,
      title: 'Terraform Course',
      img: '/images/terraform-course.webp',
      description: 'Master infrastructure as code with Terraform.',
      link: '/courses/terraform-course',
    },
    {
      id: 15,
      title: 'Docker MasterClass',
      img: '/images/docker-masterclass.webp',
      description: 'Learn containerization with Docker.',
      link: '/courses/docker-masterclass',
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
