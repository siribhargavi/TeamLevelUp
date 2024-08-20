import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscussionForum.css';

const NewPost = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    onNewPost({ title, content, category: 'General' });
    navigate('/community/forums');
  };

  return (
    <div className="new-post animated-new-post">
      <h1 className="animated-title">Create New Post</h1>
      <input
        type="text"
        className="animated-input"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="animated-textarea"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="submit-btn animated-button" onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default NewPost;
