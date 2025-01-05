import React, { useState } from 'react';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson3_3 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Using Checkpoints with Levels",
      content: (
        <>
          <p>
            When a player touches a checkpoint, we use an <code>if...then...else</code> statement to check
            if their current level is lower than the checkpoint's level. If it is, we update their level.
          </p>
          <CodeExample
            code={`checkpoint.Touched:Connect(function(hit)
    local player = game.Players:GetPlayerFromCharacter(hit.Parent)
    if player then
        local level = player.leaderstats.Level
        if level.Value < checkpointNum then
            level.Value = checkpointNum
            player.RespawnLocation = checkpoint
            print(player.Name .. " reached checkpoint " .. checkpointNum)
        else
            print("Checkpoint already obtained.")
        end
    end
end)`}
          />
        </>
      ),
    },
    {
      title: "Quiz: Checkpoint Logic",
      content: (
        <Quiz
          question="What does the if...then statement check for in the checkpoint script?"
          options={[
            { text: "If the player's level is less than the checkpoint number.", correct: true },
            { text: "If the player's health is greater than 0.", correct: false },
            { text: "If the checkpoint is touched twice.", correct: false },
          ]}
          feedback={{
            correct: "Correct! The script ensures the player's level increases only when needed.",
            incorrect: "Not quite. It checks if the player's level is lower than the checkpoint number.",
          }}
        />
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 3_3: Checkpoint Changer</h1>
      <h2>{sections[currentSection].title}</h2>
      <div>{sections[currentSection].content}</div>
      <NavigationButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={currentSection === 0}
        isLast={currentSection === sections.length - 1}
      />
    </div>
  );
};

export default Lesson3_3;
