import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section'; // Section wrapper for clean structure
import variablesDiagram from '../../../../assets/images/codedobbies/unit1/variables-diagram.png';


const Lesson1_1 = () => {
  
  const [currentSection, setCurrentSection] = useState(0);
  const [showOptionalAnswer, setShowOptionalAnswer] = useState(false); // For optional toggle question

  const sections = [
    // SECTION 1: Introduction to Variables with images and text input
    {
      title: "What Are Variables?",
      content: (
        <>
          <p>Variables are like names of boxes, inside of which the computer finds information.</p>
          {/* Placeholder for the analogy image */}
          <img src={variablesDiagram} alt="Variables Diagram" />

          {/* Placeholder for labeled code diagram image */}
          <img src={variablesDiagram} alt="Variables Diagram" />

          <TextInput
            question="What do you think variables are?"
            placeholder="Minimum 3 words response..."
            validate={(input) => input.split(' ').length >= 3}
          />
        </>
      ),
    },
    // SECTION 2: Why We Use Variables - with images and toggle question
    {
      title: "Why Use Variables?",
      content: (
        <>
          <p>
            Variables simplify your code by letting you store values in a box and giving that box a label.
          </p>
          {/* Placeholder for "What's part?" image */}
          <img src={variablesDiagram} alt="Variables Diagram" />

          <p>You're making a box with a label and putting a value inside it every time you create a variable.</p>

          {/* Optional Toggle Question */}
          <div className="optional-question">
            <p style={{ color: "gray", cursor: "pointer" }} onClick={() => setShowOptionalAnswer(!showOptionalAnswer)}>
              Can't you just write script.Parent every time? (click to toggle)
            </p>
            {showOptionalAnswer && (
              <p>
                You could, but repeating `script.Parent` everywhere is hard to maintain and makes your code messy. Variables make it cleaner and easier to understand!
              </p>
            )}
          </div>
        </>
      ),
    },
    // SECTION 3: Quiz - Define a Variable
    {
      title: "Quiz: Defining a Variable",
      content: (
        <Quiz
          question="Which code correctly defines a variable in Lua?"
          options={[
            { text: 'local name = "Jessica"', correct: true },
            { text: 'name == "Jessica"', correct: false },
            { text: 'local name: "Jessica"', correct: false },
          ]}
          feedback={{
            correct: "Correct! Variables use the `local` keyword in Lua.",
            incorrect: "Not quite. Variables are defined with `local name = value`.",
          }}
        />
      ),
    },
    // SECTION 5: Conclusion
    {
      title: "Congratulations!",
      content: (
        <>
          <p>Great job! You’ve completed Lesson 1 on Variables.</p>
          <p>Ready to move on to the next lesson?</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 1: Variables</h1>
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

export default Lesson1_1;
