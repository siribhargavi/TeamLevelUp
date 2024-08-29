import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Mentorship in Software Development",
      date: "August 10, 2024",
      excerpt: "Mentorship plays a crucial role in shaping a successful career in software development. Learn how it can make a difference in your journey...",
    },
    {
      id: 2,
      title: "Top 5 Programming Languages to Learn in 2024",
      date: "July 25, 2024",
      excerpt: "With technology evolving rapidly, keeping up with the latest programming languages is essential. Here are the top 5 languages you should consider mastering...",
    },
    {
      id: 3,
      title: "How to Build a Strong Portfolio as a Software Student",
      date: "July 15, 2024",
      excerpt: "Your portfolio is your gateway to job opportunities in the tech industry. Discover the key elements that can help you create a standout portfolio...",
    },
    {
      id: 4,
      title: "The Future of AI in Software Development",
      date: "June 30, 2024",
      excerpt: "AI is transforming the software development landscape. Explore how AI tools and techniques are being integrated into modern software engineering practices...",
    },
    {
      id: 5,
      title: "Mastering Remote Work: Tips for Software Developers",
      date: "June 20, 2024",
      excerpt: "Remote work is becoming the norm in the tech industry. Learn how to stay productive, maintain work-life balance, and thrive as a remote software developer...",
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Developers",
      date: "June 10, 2024",
      excerpt: "In an era of increasing cyber threats, developers must prioritize security in their workflows. Here are essential cybersecurity practices every developer should know...",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blog</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
