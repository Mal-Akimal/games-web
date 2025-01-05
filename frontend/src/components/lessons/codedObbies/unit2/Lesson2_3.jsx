import React from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_3 = () => {
  return (
    <div>
      <h1>Lesson 2.3: TweenService</h1>

      <Section title="What Is TweenService?">
        <p>
          TweenService allows you to smoothly animate properties of parts, such as Position, Size, or Transparency.
        </p>
        <CodeExample
          code={`-- Example: Move a part smoothly
local TweenService = game:GetService("TweenService")
local part = script.Parent

local goal = {Position = Vector3.new(10, 5, 0)}
local tweenInfo = TweenInfo.new(2, Enum.EasingStyle.Linear)
local tween = TweenService:Create(part, tweenInfo, goal)

tween:Play()`}
        />
      </Section>

      <Section title="Practice">
        <p>Make a part move between two positions using TweenService!</p>
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_3;
