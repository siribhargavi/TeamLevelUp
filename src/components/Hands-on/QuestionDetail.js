import React, { useState } from 'react';
import './QuestionDetail.css';
import MonacoEditor from 'react-monaco-editor';

function QuestionDetail({ question, category, goBack }) {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [discussion, setDiscussion] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleSubmit = () => {
    try {
      // Execute the JavaScript code and capture the result
      let output = eval(code); // WARNING: 'eval' is dangerous, used here for simplicity
      if (output.toString() === question.expectedOutput.toString()) {
        setResult('Correct! Output: ' + output);
      } else {
        setResult('Incorrect. Expected: ' + question.expectedOutput + ', but got: ' + output);
      }
    } catch (error) {
      setResult('Error in execution: ' + error.message);
    }
  };

  const handleDiscussionChange = (e) => {
    setDiscussion(e.target.value);
  };

  const handleDiscussionSubmit = () => {
    alert('Discussion posted successfully!');
  };

  return (
    <div className="question-detail-container">
      <button className="back-btn" onClick={goBack}>Back to Questions</button>
      <h2>{question.title}</h2>
      <p className="question-prompt">{question.question}</p>
      <p className="question-example"><strong>Example:</strong> {question.example}</p>
      
      {/* Code Editor */}
      <div className="code-editor">
        <MonacoEditor
          language={category === 'frontend' ? 'javascript' : category}
          value={code}
          onChange={handleCodeChange}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 16,
          }}
          height="400px"  // Ensure the editor has enough space
        />
      </div>
      
      <button className="submit-btn" onClick={handleSubmit}>Submit Code</button>

      {/* Result Display */}
      <div className="result-display">
        <h3>Result:</h3>
        <p>{result}</p>
      </div>

      {/* Discussion Section */}
      <div className="discussion-section">
        <h3>Discussion</h3>
        <textarea
          placeholder="Discuss this problem..."
          value={discussion}
          onChange={handleDiscussionChange}
        />
        <button className="discussion-submit-btn" onClick={handleDiscussionSubmit}>Post Discussion</button>
      </div>
    </div>
  );
}

export default QuestionDetail;
