import React from 'react';
import CodeExample from '../../shared/CodeExample';
import TextInput from '../../shared/TextInput';

const Lesson3_5 = () => (
  <div>
    <h1>Lesson 3_5: Project</h1>
    <p>Now it's time to bring everything together and create a leaderstats system for your obby game!</p>
    <h2>Project Goal</h2>
    <p>Create a system that tracks player progress using leaderstats, updates respawn locations, and uses checkpoints.</p>
    <h3>Skeleton Code</h3>
    <CodeExample
      code={`game.Players.PlayerAdded:Connect(function(player)
    -- Create leaderstats and set default level
end)

checkpoint.Touched:Connect(function(hit)
    -- Update player level and respawn location
end)`}
    />
    <TextInput
      question="What are the key steps to implement the leaderstats system?"
      placeholder="Write your thoughts here..."
    />
  </div>
);

export default Lesson3_5;
