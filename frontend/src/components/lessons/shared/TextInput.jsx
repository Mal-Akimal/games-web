import React, { useState } from 'react';

const TextInput = ({ question, placeholder, validate }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setError(!validate(value));
  };

  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
        style={{ border: error ? '1px solid red' : '1px solid gray' }}
      />
      {error && <p style={{ color: 'red' }}>Please enter a valid response.</p>}
    </div>
  );
};

export default TextInput;
