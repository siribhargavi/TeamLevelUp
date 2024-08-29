import React from 'react';
import './Live.css';

const LiveChat = () => {
  return (
    <div className="live-chat-container">
      <h1 className="live-chat-heading">Live Chat</h1>
      <p className="live-chat-intro">
        Need help right away? Our live chat service connects you directly with our support team for instant assistance.
        Whether you have a question about our services, need technical support, or just want to learn more about what we offer, 
        we're here to help. Our team is available 24/7 to answer your questions and guide you through any issues you may encounter.
      </p>
      <h2 className="live-chat-subheading">How It Works</h2>
      <p className="live-chat-details">
        To start a chat, simply click on the chat icon at the bottom right of the screen. You'll be connected with a representative 
        in just a few seconds. You can ask your questions, share your concerns, and get real-time answers from our knowledgeable support team.
      </p>
      <h2 className="live-chat-subheading">Why Use Live Chat?</h2>
      <ul className="live-chat-benefits">
        <li>Instant answers to your questions.</li>
        <li>24/7 availability, no matter where you are.</li>
        <li>Connect with real people, not bots.</li>
        <li>Quick resolution of issues and concerns.</li>
      </ul>
      <p className="live-chat-conclusion">
        Don't hesitate to reach out! Our team is here to assist you with any inquiries or problems you may have.
      </p>
    </div>
  );
};

export default LiveChat;
