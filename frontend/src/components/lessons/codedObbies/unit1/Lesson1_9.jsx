import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_9 = () => {
  const [answers, setAnswers] = useState({
    variable: "",
    functionName: "",
    condition: "",
    event: "",
  });

  const handleInputChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const checkAnswers = () => {
    const correctAnswers = {
      variable: "killBlock",
      functionName: "onTouch",
      condition: "hit.Parent:FindFirstChild('Humanoid')",
      event: "killBlock.Touched:Connect(onTouch)",
    };

    const feedback = Object.keys(correctAnswers).map((key) => {
      return answers[key] === correctAnswers[key]
        ? `✅ Correct: ${key}`
        : `❌ Incorrect: ${key}`;
    });

    alert(feedback.join("\n"));
  };

  return (
    <div>
      <h1>Project: Script a KillBlock</h1>

      <Section title="Complete the KillBlock Script">
        <p>
          Let's apply everything you've learned! Below is a skeleton script to
          create a <strong>KillBlock</strong> that will eliminate a player when they touch it. Fill in the missing parts.
        </p>
        <CodeExample
          code={`-- Step 1: Define the variable for the kill block\nlocal _____ = script.Parent\n\n-- Step 2: Define the function\nlocal function ______(hit)\n    -- Step 3: Add the condition to check if the player touched the block\n    if ______ then\n        hit.Parent.Humanoid.Health = 0\n    end\nend\n\n-- Step 4: Connect the function to the Touched event\n______.Touched:Connect(______)`}
        />

        {/* Input fields for user to fill in */}
        <div style={{ marginTop: "20px" }}>
          <h3>Fill in the missing parts:</h3>
          <TextInput
            question="1. What variable name will you use to represent the block?"
            placeholder="e.g., killBlock"
            validate={() => true}
            onChange={(e) => handleInputChange("variable", e.target.value)}
          />
          <TextInput
            question="2. What is the function name to handle the touch event?"
            placeholder="e.g., onTouch"
            validate={() => true}
            onChange={(e) => handleInputChange("functionName", e.target.value)}
          />
          <TextInput
            question="3. What is the condition to check if a player touched the block?"
            placeholder="e.g., hit.Parent:FindFirstChild('Humanoid')"
            validate={() => true}
            onChange={(e) => handleInputChange("condition", e.target.value)}
          />
          <TextInput
            question="4. How do you connect the function to the Touched event?"
            placeholder="e.g., killBlock.Touched:Connect(onTouch)"
            validate={() => true}
            onChange={(e) => handleInputChange("event", e.target.value)}
          />
        </div>

        <button
          onClick={checkAnswers}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Check My Answers
        </button>
      </Section>

      <Section title="Expected Final Script">
        <p>If you filled it in correctly, your script should look like this:</p>
        <CodeExample
          code={`-- Step 1: Define the variable for the kill block\nlocal killBlock = script.Parent\n\n-- Step 2: Define the function\nlocal function onTouch(hit)\n    -- Step 3: Add the condition to check if the player touched the block\n    if hit.Parent:FindFirstChild('Humanoid') then\n        hit.Parent.Humanoid.Health = 0\n    end\nend\n\n-- Step 4: Connect the function to the Touched event\nkillBlock.Touched:Connect(onTouch)`}
        />
      </Section>

      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => alert("Congratulations! You've completed the project.")}
        isFirst={false}
        isLast={true}
      />
    </div>
  );
};

export default Lesson1_9;
