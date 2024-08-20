import React, { useState } from 'react';
import HandsOnLabs from '../components/Hands-on/HandsOnLabs';
import QuestionDetail from '../components/Hands-on/QuestionDetail';

const randomQuestions = {
  java: [
    { id: 1, question: "Write a function to reverse a string in Java." },
    { id: 2, question: "Implement a stack using arrays in Java." },
    // Add more Java questions here
  ],
  frontend: [
    { id: 1, question: "Create a responsive navigation bar using HTML and CSS." },
    { id: 2, question: "Create a simple calculator using JavaScript." },
    // Add more Front-end questions here
  ],
  database: [
    { id: 1, question: "Write a SQL query to find the second highest salary." },
    { id: 2, question: "Fetch all employees who joined in the last year." },
    // Add more Database questions here
  ]
};

function HandsOnLabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('java');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedQuestion(null); // Reset selected question when category changes
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  const goBack = () => {
    setSelectedQuestion(null); // Go back to question list
  };

  return (
    <div>
      {selectedQuestion ? (
        <QuestionDetail
          question={selectedQuestion}
          category={selectedCategory}
          goBack={goBack}
        />
      ) : (
        <HandsOnLabs
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          handleQuestionSelect={handleQuestionSelect}
          questions={randomQuestions}
        />
      )}
    </div>
  );
}

export default HandsOnLabsPage;
