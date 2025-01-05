import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section'; // Wrapper for sections

const Lesson1_3 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    // SECTION 1: Introduction to Functions
    {
      title: "What Are Functions?",
      content: (
        <>
          <p>Functions are instructions. You use them to tell the computer what to do.</p>
          <p>
            For example, you might want the computer to <strong>greet</strong> you when you call
            the function <code>greet()</code>. But first, you must define what <code>greet()</code>{" "}
            means.
          </p>
          <CodeExample
            code={`local function greet()\n    print("Hello, how are you doing?")\nend`}
          />
          <p>Now, whenever you write <code>greet()</code>, the computer will print the sentence.</p>
        </>
      ),
    },
    // SECTION 2: Practice - Writing Your Own Function
    {
      title: "Write Your Own Function",
      content: (
        <>
          <p>Try creating a function called <code>sayGoodbye()</code> that prints a goodbye message.</p>
          <TextInput
            question="What goodbye message would you like to print?"
            placeholder="Example: Bye bye friend!"
            validate={(input) => input.trim().length > 0}
          />
          <p>
            Once you’ve written your message, define the function like this:
          </p>
          <CodeExample
            code={`local function sayGoodbye()\n    print("YOUR MESSAGE HERE")\nend`}
          />
        </>
      ),
    },
    // SECTION 3: Quiz - Understanding Functions
    {
      title: "Quiz: Functions",
      content: (
        <Quiz
          question="Which code correctly defines a function in Lua?"
          options={[
            { text: 'local function greet() print("Hello") end', correct: true },
            { text: 'function = greet("Hello")', correct: false },
            { text: 'local greet == "Hello"', correct: false },
          ]}
          feedback={{
            correct: "Correct! Functions are defined using the `local function` syntax.",
            incorrect: "Not quite. Remember to use `local function name()` to define functions.",
          }}
        />
      ),
    },
    // SECTION 4: Conclusion
    {
      title: "Great Job!",
      content: (
        <>
          <p>You’ve learned how to define and call functions. Functions let you group instructions together for reuse.</p>
          <p>Ready to explore how functions can accept parameters?</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 3: Functions</h1>
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

export default Lesson1_3;
