import React, { useState } from 'react';

const Quiz = ({ question, options, feedback }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const correctOption = options.find((option) => option.correct);
    if (selectedOption === correctOption.text) {
      setResult(feedback.correct);
    } else {
      setResult(feedback.incorrect);
    }
  };

  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <label key={index} style={{ display: 'block', margin: '5px 0' }}>
          <input
            type="radio"
            value={option.text}
            checked={selectedOption === option.text}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          {option.text}
        </label>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Quiz;
