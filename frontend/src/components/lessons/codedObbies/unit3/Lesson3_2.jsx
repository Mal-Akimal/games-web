import React, { useState } from 'react';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson3_2 = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Introduction to PlayerAdded Event",
      content: (
        <>
          <p>
            When a player joins your game, the <code>game.Players.PlayerAdded</code> event is triggered. 
            This event is used to set up properties for players, like leaderstats and default spawn points.
          </p>
          <CodeExample
            code={`game.Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " has joined the game!")
end)`}
          />
        </>
      ),
    },
    {
      title: "Setting Default Spawn Point",
      content: (
        <>
          <p>
            You can use the <code>RespawnLocation</code> property to set where players spawn by default.
          </p>
          <CodeExample
            code={`game.Players.PlayerAdded:Connect(function(player)
    local defaultSpawn = game.Workspace.Checkpoints["1"]
    player.RespawnLocation = defaultSpawn
end)`}
          />
        </>
      ),
    },
    {
      title: "Quiz: PlayerAdded Event",
      content: (
        <Quiz
          question="Which code correctly sets a player's default spawn location?"
          options={[
            { text: 'player.RespawnLocation = game.Workspace.Checkpoints["1"]', correct: true },
            { text: 'player.SpawnPoint = game.Workspace.Checkpoints["1"]', correct: false },
            { text: 'game.Players:SetSpawn(game.Workspace.Checkpoints["1"])', correct: false },
          ]}
          feedback={{
            correct: "Correct! Use player.RespawnLocation to set the spawn location.",
            incorrect: "Not quite. The correct property is RespawnLocation.",
          }}
        />
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 3_2: Setting Level 1 as Default</h1>
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

export default Lesson3_2;
