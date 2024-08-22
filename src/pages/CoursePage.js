import React from 'react';
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

const CoursePage = () => {
  const { courseName } = useParams();

  const renderCourse = () => {
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
