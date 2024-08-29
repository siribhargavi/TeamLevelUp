import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Level Up Institute offer?",
      answer: "Level Up Institute offers a variety of courses, mentorship programs, and hands-on labs to help aspiring software professionals develop the skills needed for a successful career in technology."
    },
    {
      question: "How can I enroll in a course?",
      answer: "You can enroll in a course by visiting our courses page, selecting the course you're interested in, and following the enrollment instructions. If you need assistance, our support team is available to help."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods including credit cards, PayPal, and bank transfers. Payment plans are also available for some courses."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a refund policy for most courses. If you're not satisfied with a course, you can request a refund within the first 14 days of enrollment."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team through the 'Contact Us' page, via email, or by using our live chat feature available on the website."
    }
  ];

  return (
    <div className="support-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
