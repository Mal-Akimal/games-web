import React, { useState } from 'react';
import TextInput from '../../shared/TextInput';
import CodeExample from '../../shared/CodeExample';
import Quiz from '../../shared/Quiz';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_7 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showHint, setShowHint] = useState(false); // For optional toggle hints

  const sections = [
    // SECTION 1: Introduction to Instant Respawn
    {
      title: "What is Instant Respawn?",
      content: (
        <>
          <p>
            Instant respawn allows a player to immediately respawn when they die without waiting. This is useful for games where quick retries are important, like obstacle courses (obbies).
          </p>
          <p>
            You can use the <strong>Humanoid.Died</strong> event to detect when a player dies, and then teleport them back to a spawn location.
          </p>
          <CodeExample
            code={`local spawnPoint = game.Workspace.SpawnLocation\n\nlocal function onDied()\n    game.Players.LocalPlayer.Character:MoveTo(spawnPoint.Position)\nend\n\ngame.Players.LocalPlayer.Character.Humanoid.Died:Connect(onDied)`}
          />
        </>
      ),
    },
    // SECTION 2: Breaking Down the Code
    {
      title: "Understanding the Code",
      content: (
        <>
          <p>Let’s break down the code:</p>
          <ul>
            <li>
              <code>spawnPoint</code>: Refers to the spawn location where the player will be teleported.
            </li>
            <li>
              <code>Humanoid.Died</code>: An event that triggers when the player's humanoid dies.
            </li>
            <li>
              <code>MoveTo()</code>: A function that teleports the player to a specific position.
            </li>
          </ul>
          <p>
            When the player's character dies, the <code>onDied</code> function runs and teleports them to the spawn point.
          </p>
        </>
      ),
    },
    // SECTION 3: Optional Hint - LocalPlayer vs Server
    {
      title: "Hint: LocalPlayer vs Server-Side",
      content: (
        <>
          <p>
            In the above example, we used <code>game.Players.LocalPlayer</code>. This only works on the client-side (local scripts).
          </p>
          <p>
            If you want to handle respawning on the server for all players, you’ll need to use the <code>PlayerAdded</code> event and access the player's character.
          </p>
          <div className="optional-question">
            <p
              style={{ color: "gray", cursor: "pointer" }}
              onClick={() => setShowHint(!showHint)}
            >
              Curious about server-side? (click to toggle)
            </p>
            {showHint && (
              <CodeExample
                code={`game.Players.PlayerAdded:Connect(function(player)\n    player.CharacterAdded:Connect(function(character)\n        character.Humanoid.Died:Connect(function()\n            character:MoveTo(spawnPoint.Position)\n        end)\n    end)\nend)`}
              />
            )}
          </div>
        </>
      ),
    },
    // SECTION 4: Practice - Create an Instant Respawn
    {
      title: "Practice: Add Instant Respawn",
      content: (
        <>
          <p>
            Add instant respawn to your game. Use the code below as a starting point and test it on your killBlock.
          </p>
          <CodeExample
            code={`local spawnPoint = game.Workspace.SpawnLocation\n\nlocal function onDied()\n    game.Players.LocalPlayer.Character:MoveTo(spawnPoint.Position)\nend\n\ngame.Players.LocalPlayer.Character.Humanoid.Died:Connect(onDied)`}
          />
          <TextInput
            question="What would you change if you wanted all players to respawn instantly on the server?"
            placeholder="Hint: Use PlayerAdded and CharacterAdded events"
            validate={(input) => input.includes("PlayerAdded") && input.includes("CharacterAdded")}
          />
        </>
      ),
    },
    // SECTION 5: Quiz - Instant Respawn Logic
    {
      title: "Quiz: Instant Respawn",
      content: (
        <Quiz
          question="Which function is used to teleport a player to a specific location?"
          options={[
            { text: "MoveTo()", correct: true },
            { text: "Teleport()", correct: false },
            { text: "SetPosition()", correct: false },
          ]}
          feedback={{
            correct: "Correct! The MoveTo() function teleports the player to a position.",
            incorrect: "Not quite. Use MoveTo() to set the player's position.",
          }}
        />
      ),
    },
    // SECTION 6: Conclusion
    {
      title: "Congratulations!",
      content: (
        <>
          <p>You’ve learned how to add instant respawn to your game!</p>
          <p>
            This feature makes gameplay smoother and helps players retry quickly.
          </p>
        </>
      ),
    },
  ];

  const handlePrev = () => setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div>
      <h1>Lesson 7: Optional Instant Respawn</h1>
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

export default Lesson1_7;
