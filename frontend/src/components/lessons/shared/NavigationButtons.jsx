// src/components/lessons/codedObbies/shared/NavigationButtons.jsx
import React from 'react';

const NavigationButtons = ({ onPrev, onNext, isFirst, isLast }) => (
  <div>
    <button onClick={onPrev} disabled={isFirst}>Previous</button>
    <button onClick={onNext} disabled={isLast}>Next</button>
  </div>
);

export default NavigationButtons;
