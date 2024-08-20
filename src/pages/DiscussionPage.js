// src/pages/DiscussionPage.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DiscussionForum from '../components/forum/DiscussionForum';
import DiscussionDetail from '../components/forum/DiscussionDetail';
import NewPost from '../components/forum/NewPost';
import CategoryDiscussions from '../components/forum/CategoryDicussions';

const DiscussionPage = () => {
  return (
    <Routes>
      <Route path="/" element={<DiscussionForum />} />
      <Route path="/category/:categoryId" element={<CategoryDiscussions />} />
      <Route path="/category/:categoryId/:postId" element={<DiscussionDetail />} />
      <Route path="/new" element={<NewPost />} />
    </Routes>
  );
};

export default DiscussionPage;
