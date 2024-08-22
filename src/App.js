import React from 'react';
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
import LoginSignupPage from './components/Login/LoginSignupPage'; // Import the LoginSignupPage
import BookingForm from './pages/BookingForm';
import LiveSessions from './components/LiveSessions/LiveSessions'; // Import the LiveSessions component
import Certifications from './components/Certifications/Certifications';// Import the Certifications component
import MultiLanguageSupport from './components/MultiLanguageSupport/MultiLanguageSupport';
import MobileAccess from './components/MobileAccess/MobileAccess';
import ResumeMaker from './components/ResumeMaker/ResumeMaker'; // Import the ResumeMaker component
import Mentorship from './components/Mentorship/Mentorship'; // Import the Mentorship component
import StudentNetwork from './components/StudentNetwork/StudentNetwork'; // Import the StudentNetwork component
import ProfilePage from './components/Profile/Profile'; // Import the ProfilePage





function App() {
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
        <Route path="/features/certifications" element={<Certifications />} /> {/* Certifications page */}
        <Route path="/features/hands-on-labs" element={<HandsOnLabsPage />} />
        <Route path="/features/live-sessions" element={<LiveSessions />} /> {/* Live Sessions page */}
        <Route path="/login-signup" element={<LoginSignupPage />} /> {/* Use the new page */}
        <Route path="/book-demo" element={<BookingForm />} /> {/* Updated route */}
        <Route path="/features/multi-language-support" element={<MultiLanguageSupport />} /> {/* Multi-language Support page */}
        <Route path="/features/mobile-access" element={<MobileAccess />} /> {/* Mobile Access page */}
        <Route path="/resume-maker" element={<ResumeMaker />} /> {/* Resume Maker page */}
        <Route path="/community/mentorship" element={<Mentorship />} /> {/* Mentorship page */}
        <Route path="/community/student-network" element={<StudentNetwork />} /> {/* Student Network page */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Add this route */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
