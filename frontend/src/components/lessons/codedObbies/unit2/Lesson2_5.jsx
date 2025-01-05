import React, { useState } from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_5 = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <h1>Lesson 2.5: Optional - Rainbow Tiles</h1>

      <Section title="What Are Rainbow Tiles?">
        <p>
          You can use **TweenService** to create tiles that smoothly change colors in a loop.
          This is a fun optional project to practice what you've learned so far!
        </p>
        <CodeExample
          code={`-- Example: Create Rainbow Tiles
local TweenService = game:GetService("TweenService")
local tile = script.Parent

local rainbowColors = {
    BrickColor.new("Bright red"),
    BrickColor.new("Bright orange"),
    BrickColor.new("Bright yellow"),
    BrickColor.new("Bright green"),
    BrickColor.new("Bright blue"),
    BrickColor.new("Bright violet")
}

local tweenInfo = TweenInfo.new(1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1, true)

-- Change colors in a loop
for _, color in pairs(rainbowColors) do
    local tween = TweenService:Create(tile, tweenInfo, {BrickColor = color})
    tween:Play()
    wait(1) -- Wait before changing to the next color
end`}
        />
      </Section>

      <Section title="How It Works">
        <p>
          This code uses a **for loop** to go through a list of colors and tween the `BrickColor` property of a part.
        </p>
        <p>
          <strong>Tip:</strong> Experiment with different colors and speeds to make it your own!
        </p>
      </Section>

      <Section title="Practice">
        <p>
          Create a **tile** in Roblox Studio and attach a Script to it. Copy the code above and customize:
        </p>
        <ul>
          <li>Change the colors.</li>
          <li>Adjust the time for each tween.</li>
          <li>Try creating multiple rainbow tiles!</li>
        </ul>

        <p
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setShowHint(!showHint)}
        >
          Need a hint? Click here!
        </p>
        {showHint && (
          <p>
            Make sure the tile's **Anchored** property is set to `true` so it doesn't fall!
          </p>
        )}
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_5;
