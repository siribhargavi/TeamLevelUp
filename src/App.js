import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursePage from './pages/CoursePage';
import InteractiveLearning from './pages/InteractiveLearningPage';
import DiscussionPage from './pages/DiscussionPage';
import EventsPage from './components/Events/EventsPage'; 
import CareerServicesPage from './pages/CareerServicesPage';
import HandsOnLabsPage from './pages/HandsOnLabsPage';
import CompanyPage from './pages/CompanyPage';
import LoginSignupPage from './components/Login/LoginSignupPage';
import BookingForm from './pages/BookingForm';
import LiveSessions from './components/LiveSessions/LiveSessions';
import Certifications from './components/Certifications/Certifications';
import MultiLanguageSupport from './components/MultiLanguageSupport/MultiLanguageSupport';
import MobileAccess from './components/MobileAccess/MobileAccess';
import ResumeMaker from './components/ResumeMaker/ResumeMaker';
import Mentorship from './components/Mentorship/Mentorship';
import StudentNetwork from './components/StudentNetwork/StudentNetwork';
import ProfilePage from './components/Profile/Profile';
import PopupForm from './components/Popup/PopupForm';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseName" element={<CoursePage />} />
        <Route path="/features/interactive-learning" element={<InteractiveLearning />} />
        <Route path="/community/forums/*" element={<DiscussionPage />} />
        <Route path="/community/events/*" element={<EventsPage />} />
        <Route path="/career/*" element={<CareerServicesPage />} />
        <Route path="/company/*" element={<CompanyPage />} />
        <Route path="/features/certifications" element={<Certifications />} />
        <Route path="/features/hands-on-labs" element={<HandsOnLabsPage />} />
        <Route path="/features/live-sessions" element={<LiveSessions />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/book-demo" element={<BookingForm />} />
        <Route path="/features/multi-language-support" element={<MultiLanguageSupport />} />
        <Route path="/features/mobile-access" element={<MobileAccess />} />
        <Route path="/resume-maker" element={<ResumeMaker />} />
        <Route path="/community/mentorship" element={<Mentorship />} />
        <Route path="/community/student-network" element={<StudentNetwork />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />

      {/* Show popup */}
      {showPopup && <PopupForm onClose={handleClosePopup} />}
    </Router>
  );
}

export default App;
