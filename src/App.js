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
import CompanyPage from './pages/CompanyPage'; // Import the CompanyPage
import Start from './components/Login/Start';


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
        <Route path="/company/*" element={<CompanyPage />} /> {/* CompanyPage route */}
        <Route path="/features/hands-on-labs" element={<HandsOnLabsPage />} />
        <Route path="/login-signup" element={<Start />} /> {/* Add this line */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
