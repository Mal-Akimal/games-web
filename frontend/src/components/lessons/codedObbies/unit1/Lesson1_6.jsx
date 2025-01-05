import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_6 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    // SECTION 1: What Are Events?
    {
      title: "What Are Events?",
      content: (
        <>
          <p>
            <strong>Events</strong> are actions that trigger something in your game. For example, touching a block or clicking a button can trigger an event.
          </p>
          <CodeExample
            code={`killBlock.Touched:Connect(function(hit)\n    print("The block was touched!")\nend)`}
          />
          <p>
            Here, the <code>Touched</code> event fires when something touches the block, and the code inside the function runs.
          </p>
        </>
      ),
    },
    // SECTION 2: Using Events to Trigger Actions
    {
      title: "Connecting Events to Actions",
      content: (
        <>
          <p>
            Let’s combine <strong>events</strong> with <strong>if-then</strong> statements to make our killBlock work.
          </p>
          <CodeExample
            code={`local function onTouch(hit)\n    if hit.Parent:FindFirstChild("Humanoid") then\n        hit.Parent.Humanoid.Health = 0\n    end\nend\n\nkillBlock.Touched:Connect(onTouch)`}
          />
          <p>
            The <code>Touched</code> event calls the function <code>onTouch</code>. Inside, we check if the object that touched the block is a player, and if so, we set their health to 0.
          </p>
        </>
      ),
    },
    // SECTION 3: Practice - Adding an Event
    {
      title: "Practice: Using the Touched Event",
      content: (
        <>
          <p>Write an event that prints "Hello" when the killBlock is touched.</p>
          <CodeExample
            code={`killBlock.Touched:Connect(function(hit)\n    print("Hello")\nend)`}
          />
          <TextInput
            question="What message would you print when the block is touched?"
            placeholder="e.g., print('Block touched!')"
            validate={(input) => input.includes("print(")}
          />
        </>
      ),
    },
    // SECTION 4: Quiz - Events and Functions
    {
      title: "Quiz: Events",
      content: (
        <Quiz
          question="What does this code do?"
          options={[
            { text: 'Prints "Touched!" when the block is touched', correct: true },
            { text: 'Kills the player', correct: false },
            { text: 'Does nothing', correct: false },
          ]}
          feedback={{
            correct: "Correct! The Touched event runs the print statement.",
            incorrect: "Not quite. The code only prints a message when the block is touched.",
          }}
        />
      ),
    },
    // SECTION 5: Conclusion
    {
      title: "Congratulations!",
      content: (
        <>
          <p>
            You’ve learned how to use events to trigger actions like detecting when a block is touched.
          </p>
          <p>Next up: Combining everything to make a functional killBlock!</p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 6: Events</h1>
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

export default Lesson1_6;
