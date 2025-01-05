import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_5 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    // SECTION 1: Introduction to If-Then Statements
    {
      title: "What Are If-Then Statements?",
      content: (
        <>
          <p>
            <strong>If-Then</strong> statements are used to check if something is true. If it is, the computer runs the code inside.
          </p>
          <CodeExample
            code={`if condition then\n    -- Do something\nend`}
          />
          <p>
            For example, if you want to check whether a player touches the killBlock, you can use an <strong>if</strong> statement.
          </p>
          <CodeExample
            code={`if hit.Parent:FindFirstChild("Humanoid") then\n    hit.Parent.Humanoid.Health = 0\nend`}
          />
        </>
      ),
    },
    // SECTION 2: Understanding the Condition
    {
      title: "Breaking Down the Condition",
      content: (
        <>
          <p>Let’s break it down:</p>
          <ul>
            <li>
              <code>hit.Parent</code>: Refers to the parent object of whatever touched the killBlock.
            </li>
            <li>
              <code>FindFirstChild("Humanoid")</code>: Checks if the parent object has a Humanoid (a player).
            </li>
            <li>
              <code>hit.Parent.Humanoid.Health = 0</code>: Sets the player’s health to 0 (kills them).
            </li>
          </ul>
          <p>We only run the code if the condition is true.</p>
        </>
      ),
    },
    // SECTION 3: Practice - Writing Your Own Condition
    {
      title: "Practice: If-Then Statement",
      content: (
        <>
          <p>Write an if-then statement that checks if a variable <code>score</code> is greater than 10.</p>
          <CodeExample
            code={`local score = 12\n\nif score > 10 then\n    print("You passed!")\nend`}
          />
          <TextInput
            question="What condition would you write to check if score is greater than 20?"
            placeholder="e.g., if score > 20 then ..."
            validate={(input) => input.includes("score") && input.includes(">")}
          />
        </>
      ),
    },
    // SECTION 4: Quiz - If-Then Logic
    {
      title: "Quiz: If-Then Statements",
      content: (
        <Quiz
          question="What will this code do?"
          options={[
            { text: 'if score > 10 then print("You passed!")', correct: true },
            { text: 'if score = 10 then print("You passed!")', correct: false },
            { text: 'if score < 10 then print("You passed!")', correct: false },
          ]}
          feedback={{
            correct: "Correct! The condition checks if score is greater than 10.",
            incorrect: "Not quite. Remember to use `>` for greater than checks.",
          }}
        />
      ),
    },
    // SECTION 5: Conclusion
    {
      title: "Great Job!",
      content: (
        <>
          <p>You’ve learned how to use if-then statements to make decisions in your code.</p>
          <p>Next up: Learning about events to trigger actions like touching the killBlock.</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 5: If-Then Statements</h1>
      <Section title={sections[currentSection].title}>
        {sections[currentSection].content}
      </Section>
      <NavigationButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={currentSection === 0}
        isLast={currentSection === sections.length - 1}
      />
    </div>
  );
};

export default Lesson1_5;
