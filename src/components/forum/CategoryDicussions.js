import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DiscussionForum.css';

const CategoryDiscussions = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const categories = [
      { id: 1, name: 'Interview Experiences', posts: [{ id: 1, title: "Google Software Engineer Interview", replies: 20 }, { id: 2, title: "Amazon Interview Experience 2023", replies: 15 }] },
      { id: 2, name: 'Interview Questions', posts: [{ id: 3, title: "Most Common Array Questions", replies: 30 }, { id: 4, title: "DP Problems for FAANG Interviews", replies: 25 }] },
      { id: 3, name: 'System Design', posts: [{ id: 5, title: "Design a URL Shortener", replies: 18 }, { id: 6, title: "Scaling a Real-Time Chat Application", replies: 10 }] },
      { id: 4, name: 'Company-Specific Discussions', posts: [{ id: 7, title: "Working at Microsoft: The Good and the Bad", replies: 40 }, { id: 8, title: "Interview Process at Tesla", replies: 22 }] },
      { id: 5, name: 'Career Advice', posts: [{ id: 9, title: "Switching Careers to Tech", replies: 35 }, { id: 10, title: "Negotiating Your Salary", replies: 12 }] },
      { id: 6, name: 'Resume and Portfolio Review', posts: [{ id: 11, title: "Resume Review for Senior Developer Role", replies: 18 }, { id: 12, title: "Improving My GitHub Portfolio", replies: 9 }] },
      { id: 7, name: 'Coding Competitions', posts: [{ id: 13, title: "Tips for Codeforces Competitions", replies: 20 }, { id: 14, title: "LeetCode Contest Strategies", replies: 17 }] },
      { id: 8, name: 'General Discussion', posts: [{ id: 15, title: "Latest Trends in Web Development", replies: 24 }, { id: 16, title: "Best Online Courses for Data Science", replies: 14 }] },
    ];

    const selectedCategory = categories.find(cat => cat.id === parseInt(categoryId));
    if (selectedCategory) {
      setCategory(selectedCategory);
      setDiscussions(selectedCategory.posts);
    }
  }, [categoryId]);

  return (
    <div className="category-discussions">
      <div className="category-header">
        <h1>{category.name}</h1>
      </div>
      <ul className="post-list">
        {discussions.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/community/forums/${categoryId}/${post.id}`}>
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-replies">{post.replies} replies</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDiscussions;
