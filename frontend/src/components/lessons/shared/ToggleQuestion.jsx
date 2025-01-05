// src/components/lessons/shared/ToggleQuestion.jsx
import React, { useState } from 'react';

const ToggleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <p style={{ color: "gray", fontStyle: "italic" }}>{question}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default ToggleQuestion;
