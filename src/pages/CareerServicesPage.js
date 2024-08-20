import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ResumeBuilding from '../components/Career/ResumeBuilding';
import InterviewPreparation from '../components/Career/InterviewPreparation';
import JobPlacement from '../components/Career/JobPlacement';
import CareerCoaching from '../components/Career/CareerCoaching';

function CareerServicesPage() {
  return (
    
      <div className="career-services-content">
        <Routes>
          <Route path="resume-building" element={<ResumeBuilding />} />
          <Route path="interview-preparation" element={<InterviewPreparation />} />
          <Route path="job-placement" element={<JobPlacement />} />
          <Route path="career-coaching" element={<CareerCoaching />} />
        </Routes>
      </div>
  
  );
}

export default CareerServicesPage;
