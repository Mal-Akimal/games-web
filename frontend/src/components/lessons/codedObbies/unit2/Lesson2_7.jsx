import React from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_7 = () => {
  return (
    <div>
      <h1>Project: Script a Moving Platform</h1>

      <Section title="Combine What You've Learned">
        <p>
          Use TweenService to move a platform back and forth between two points. Here's the starting code:
        </p>
        <CodeExample
          code={`local TweenService = game:GetService("TweenService")
local platform = script.Parent
local startPoint = workspace.StartPoint
local endPoint = workspace.EndPoint

local tweenInfo = TweenInfo.new(3, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1, true)
local tween = TweenService:Create(platform, tweenInfo, {Position = endPoint.Position})

platform.Position = startPoint.Position
tween:Play()`}
        />
      </Section>

      <Section title="Your Task">
        <ul>
          <li>Set up the platform, StartPoint, and EndPoint in Roblox Studio.</li>
          <li>Make the platform move using TweenService.</li>
        </ul>
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_7;
