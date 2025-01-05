import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section'; // Section wrapper for clean structure
import variablesDiagram from '../../../../assets/images/codedobbies/unit1/variables-diagram.png';


const Lesson1_2 = () => {
  
  const [currentSection, setCurrentSection] = useState(0);
  const [showOptionalAnswer, setShowOptionalAnswer] = useState(false); // For optional toggle question

  const sections = [
   
    // SECTION 1: Printing Variables
    {
      title: "Printing Variables",
      content: (
        <>
          <p>Printing is when you ask the computer to show you the value of something.</p>
          <CodeExample code={`local part = script.Parent\nprint(part)`} />
          <TextInput
            question="What do you think is the purpose of printing?"
            placeholder="Minimum 3 words response..."
            validate={(input) => input.split(' ').length >= 3}
          />
        </>
      ),
    },
    // SECTION 2: Practice - Simulated Print Function
    {
      title: "Practice: Print Something",
      content: (
        <>
          <p>Type something to simulate a print function:</p>
          <CodeExample code={`print("<input placeholder='Type here...' />")`} />
          <button
            onClick={() =>
              alert("Simulated print: The console would display your input.")
            }
          >
            Submit
          </button>
        </>
      ),
    },
    // SECTION 3: Quiz - Print Function
    {
      title: "Quiz: Printing",
      content: (
        <Quiz
          question="Which code will correctly print a value in Lua?"
          options={[
            { text: "print(part)", correct: true },
            { text: "local part", correct: false },
            { text: "print part", correct: false },
          ]}
          feedback={{
            correct: "Correct! The `print` function uses parentheses.",
            incorrect: "Incorrect. Remember to use `print(variable)` to print values.",
          }}
        />
      ),
    },
    // SECTION 4: Summary and Final Quiz
    {
      title: "Final Quiz",
      content: (
        <Quiz
          question="Which code will define a variable for 'killBlock'?"
          options={[
            { text: "local killBlock = script.Parent", correct: true },
            { text: "killBlock = location", correct: false },
            { text: "local block", correct: false },
          ]}
          feedback={{
            correct: "Correct! 'local killBlock = script.Parent' defines the variable correctly.",
            incorrect: "Not quite. Use the `local` keyword and assign a value.",
          }}
        />
      ),
    },
    // SECTION 5: Conclusion
    {
      title: "Congratulations!",
      content: (
        <>
          <p>Great job! You’ve completed Lesson 2 on Printing.</p>
          <p>Ready to move on to the next lesson?</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 2: Printing</h1>
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

export default Lesson1_2;
