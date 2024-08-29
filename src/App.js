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
import AboutUs from './components/Company/AboutUs';
import Blog from './components/Company/Blog';
import Partners from './components/Company/Partners';
import AffiliateProgram from './components/Company/Affiliate';
import Press from './components/Company/Press';
import Careers from './components/Company/Careers';
import ContactUs from './components/Support/ContactUs';
import FAQ from './components/Support/FAQ';
import HelpCenter from './components/Support/Help';
import LiveChat from './components/Support/Live';
import TechnicalSupport from './components/Support/Tech';
import CommunitySupport from './components/Support/Community';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show popup after 5 seconds

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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/affiliates" element={<AffiliateProgram />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/support/contact" element={<ContactUs />} />
        <Route path="/support/faq" element={<FAQ />} />
        <Route path="/support/help-center" element={<HelpCenter />} />
        <Route path="/support/live-chat" element={<LiveChat />} />
        <Route path="/support/technical-support" element={<TechnicalSupport />} />
        <Route path="/support/community-support" element={<CommunitySupport />} />
      </Routes>
      <Footer />

      {/* Show popup */}
      {showPopup && <PopupForm onClose={handleClosePopup} />}
    </Router>
  );
}

export default App;
