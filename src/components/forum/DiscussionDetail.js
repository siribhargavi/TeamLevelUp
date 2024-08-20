import React from 'react';
import { useParams } from 'react-router-dom';
import './DiscussionForum.css';

const DiscussionDetail = () => {
  const { categoryId, postId } = useParams();
  const discussions = [
    // Define all discussions here or retrieve them via props or context
  ];

  const discussion = discussions.find(discussion => discussion.id === parseInt(postId));

  if (!discussion) {
    return <p>Discussion not found!</p>;
  }

  return (
    <div className="discussion-detail">
      <h1 className="animated-title">{discussion.title}</h1>
      <p className="animated-content">{discussion.content}</p>
      <h3 className="animated-replies-heading">Replies</h3>
      <ul className="replies-list">
        {discussion.replies.map(reply => (
          <li key={reply.id} className="reply-item animated-reply">
            <strong>{reply.author}:</strong> {reply.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionDetail;
