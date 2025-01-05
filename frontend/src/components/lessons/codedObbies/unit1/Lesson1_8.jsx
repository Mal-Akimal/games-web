import React from 'react';
import CodeExample from '../../shared/CodeExample';
import NavigationButtons from '../../shared/NavigationButtons';
import Section from '../../shared/Section';

const Lesson1_8 = () => {
  return (
    <div>
      <h1>Lesson 8: Study Guide</h1>
      <Section title="Summary of Lessons 1-7">
        {/* Variables */}
        <h2>Variables</h2>
        <p>
          Variables are like labeled boxes that store information for the computer. You use variables to make your code cleaner and reusable.
        </p>
        <CodeExample
          code={`local name = "Jessica"\nlocal nickname = "Jessie"\nlocal part = script.Parent`}
        />

        {/* Functions */}
        <h2>Functions</h2>
        <p>
          Functions are instructions that tell the computer what to do. You need to define a function before you can use it.
        </p>
        <CodeExample
          code={`local function greet()\n    print("Hello, how are you doing?")\nend\n\ngreet() -- Calls the function`}
        />
        <p>
          <strong>Practice:</strong> Write a function that prints a goodbye message of your choice.
        </p>

        {/* Functions with Parameters */}
        <h2>Functions with Parameters</h2>
        <p>
          Parameters allow you to pass different values into a function, making it flexible. For example:
        </p>
        <CodeExample
          code={`local function sayHello(friendName)\n    print("Hello " .. friendName)\nend\n\nsayHello("Emma")\nsayHello("Luigi")`}
        />

        {/* If Then */}
        <h2>If-Then Statements</h2>
        <p>
          Conditional statements let you add logic to your code. For example:
        </p>
        <CodeExample
          code={`local function onTouch(hit)\n    if hit.Parent:FindFirstChild("Humanoid") then\n        hit.Parent.Humanoid.Health = 0\n    end\nend`}
        />
        <p>
          This checks if a player touches the killBlock and reduces their health to zero.
        </p>

        {/* Events */}
        <h2>Events</h2>
        <p>
          Events trigger functions when certain actions occur. For example:
        </p>
        <CodeExample
          code={`local part = script.Parent\n\nlocal function onTouch(hit)\n    print("Touched by:", hit.Name)\nend\n\npart.Touched:Connect(onTouch)`}
        />
        <p>
          Here, the <code>Touched</code> event calls the <code>onTouch</code> function whenever the part is touched.
        </p>

        {/* Instant Respawn */}
        <h2>Optional: Instant Respawn</h2>
        <p>
          Instant respawn teleports players to a spawn location immediately when they die.
        </p>
        <CodeExample
          code={`local spawnPoint = game.Workspace.SpawnLocation\n\nlocal function onDied()\n    game.Players.LocalPlayer.Character:MoveTo(spawnPoint.Position)\nend\n\ngame.Players.LocalPlayer.Character.Humanoid.Died:Connect(onDied)`}
        />
        <p>
          This makes games smoother by allowing quick retries.
        </p>
      </Section>

      {/* Navigation Buttons */}
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => alert("Great job! You've completed the unit.")}
        isFirst={false}
        isLast={true}
      />
    </div>
  );
};

export default Lesson1_8;
