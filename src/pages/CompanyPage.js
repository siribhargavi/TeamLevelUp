import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/Company/AboutUs';
import Blog from '../components/Company/Blog';
import Partners from '../components/Company/Partners';
import AffiliateProgram from '../components/Company/Affiliate';
import Press from '../components/Company/Press';
import Careers from '../components/Company/Careers';

function CompanyPage() {
  return (
    <Routes>
      <Route path="about-us" element={<AboutUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="partners" element={<Partners />} />
      <Route path="affiliates" element={<AffiliateProgram />} />
      <Route path="press" element={<Press />} />
      <Route path="careers" element={<Careers />} />
    </Routes>
  );
}

export default CompanyPage;
