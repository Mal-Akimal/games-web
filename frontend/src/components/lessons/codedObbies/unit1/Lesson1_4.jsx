import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_4 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    // SECTION 1: Functions with Parameters
    {
      title: "Functions with Parameters",
      content: (
        <>
          <p>
            What if you want the function to say hello to a specific friend? Instead of creating a
            new function for each friend, you can use <strong>parameters</strong>.
          </p>
          <CodeExample
            code={`local function sayHello(friendName)\n    print("Hello " .. friendName)\nend`}
          />
          <p>
            Now, when you call <code>sayHello("Emma")</code>, the computer replaces{" "}
            <code>friendName</code> with "Emma".
          </p>
        </>
      ),
    },
    // SECTION 2: Practice - Adding Two Numbers
    {
      title: "Practice: Add Two Numbers",
      content: (
        <>
          <p>
            Write a function <code>addTwoNumbers</code> that takes two placeholders (numbers) and
            adds them together.
          </p>
          <CodeExample
            code={`local function addTwoNumbers(number1, number2)\n    return number1 + number2\nend`}
          />
          <TextInput
            question="What two numbers would you like to add?"
            placeholder="Example: 2 and 3"
            validate={(input) => input.includes("and")}
          />
        </>
      ),
    },
    // SECTION 3: Real Example - KillBlock Function
    {
      title: "Making a KillBlock Function",
      content: (
        <>
          <p>
            Let’s apply what we’ve learned. We want the block to kill <strong>any player</strong>{" "}
            who touches it. Just like placeholders, we can use <code>hit</code> as a parameter.
          </p>
          <CodeExample
            code={`local function killPlayer(hit)\n    -- Kill player logic here\nend`}
          />
          <p>
            This function can now be used to kill any player that touches the block!
          </p>
        </>
      ),
    },
    // SECTION 4: Quiz - Functions with Parameters
    {
      title: "Quiz: Using Parameters",
      content: (
        <Quiz
          question="Which code will allow a function to add two numbers?"
          options={[
            { text: 'local function add(a, b) return a + b end', correct: true },
            { text: 'function add = a + b', correct: false },
            { text: 'local add == "a, b"', correct: false },
          ]}
          feedback={{
            correct: "Correct! Parameters allow functions to accept inputs.",
            incorrect: "Not quite. Remember to use `function name(param1, param2)` syntax.",
          }}
        />
      ),
    },
    // SECTION 5: Conclusion
    {
      title: "Congratulations!",
      content: (
        <>
          <p>Great work! You’ve learned how to use parameters in functions.</p>
          <p>Ready to move on to making your killBlock fully functional?</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 4: Functions with Parameters</h1>
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

export default Lesson1_4;
