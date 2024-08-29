import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactCourse from '../components/courses/ReactCourse';
import PythonCourse from '../components/courses/PythonCourse';
import CloudComputingCourse from '../components/courses/CloudComputingCourse';
import CyberSecurityCourse from '../components/courses/CyberSecurityCourse';
import DataEngineeringCourse from '../components/courses/DataEngineeringCourse';
import DataScienceCourse from '../components/courses/DataScienceCourse';
import JavaCourse from '../components/courses/JavaCourse';
import UIUXCourse from '../components/courses/UIUXCourse';
import AIMLCourse from '../components/courses/AIMLCourse';
import BlockChainCourse from '../components/courses/BlockChainCourse';
import AWSAdmin from '../components/courses/AWSAdmin';
import AWSDevops from '../components/courses/AWSDevops.js';
import AWSDataSpeciality from '../components/courses/AWSDataSpeciality.js';

const CoursePage = () => {
  const { courseName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseName]);

  const renderCourse = () => {
    console.log(courseName); // Debugging: log the course name to the console

    switch (courseName) {
      case 'react':
        return <ReactCourse />;
      case 'python':
        return <PythonCourse />;
      case 'cloud-computing':
        return <CloudComputingCourse />;
      case 'cyber-security':
        return <CyberSecurityCourse />;
      case 'ai-ml':
        return <AIMLCourse />;
      case 'blockchain':
        return <BlockChainCourse />;
      case 'data-science':
        return <DataScienceCourse />;
      case 'data-engineering':
        return <DataEngineeringCourse />;
      case 'java':
        return <JavaCourse />;
      case 'ui-ux':
        return <UIUXCourse />;
      case 'aws-admin':
        return <AWSAdmin />;
      case 'aws-devops':
        return <AWSDevops />;
      case 'aws-dataspeciality':
        return <AWSDataSpeciality />;
      // Add other courses as needed
      default:
        return <p>Course not found</p>;
    }
  };

  return (
    <div>
      {renderCourse()}
    </div>
  );
};

export default CoursePage;
