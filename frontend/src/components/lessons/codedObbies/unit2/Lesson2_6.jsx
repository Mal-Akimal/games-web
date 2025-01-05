import React from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_6 = () => {
  return (
    <div>
      <h1>Unit 2 Study Guide</h1>

      <Section title="Lesson 2.1: Part Properties">
        <p>
          Every part has properties like **Size**, **Position**, **Transparency**, and **Color**.
          You can inspect these in the Properties window or modify them using scripts.
        </p>
        <CodeExample
          code={`local part = script.Parent
part.Size = Vector3.new(4, 1, 2)
part.BrickColor = BrickColor.new("Bright red")`}
        />
      </Section>

      <Section title="Lesson 2.2: Changing Properties Using Scripts">
        <p>
          Use scripts to change a part's properties dynamically. Example:
        </p>
        <CodeExample
          code={`local part = script.Parent
part.Transparency = 0.5
part.Anchored = true`}
        />
      </Section>

      <Section title="Lesson 2.3: TweenService">
        <p>
          **TweenService** animates properties like Position, Size, and Color smoothly.
        </p>
        <CodeExample
          code={`local TweenService = game:GetService("TweenService")
local part = script.Parent
local tweenInfo = TweenInfo.new(3, Enum.EasingStyle.Linear)
local tween = TweenService:Create(part, tweenInfo, {Position = Vector3.new(0, 10, 0)})
tween:Play()`}
        />
      </Section>

      <Section title="Lesson 2.4: Client vs Server">
        <p>
          - **Server Scripts**: Run for all players.<br />
          - **LocalScripts**: Run for one player only.
        </p>
        <p>
          Use **Scripts** for server-side logic and **LocalScripts** for client-side behavior.
        </p>
      </Section>

      <Section title="Lesson 2.5: Rainbow Tiles (Optional)">
        <p>
          Use **TweenService** to make tiles change colors smoothly. Example:
        </p>
        <CodeExample
          code={`local TweenService = game:GetService("TweenService")
local tile = script.Parent
local tweenInfo = TweenInfo.new(1, Enum.EasingStyle.Linear)
local tween = TweenService:Create(tile, tweenInfo, {BrickColor = BrickColor.new("Bright blue")})
tween:Play()`}
        />
      </Section>

      <Section title="Final Project: Moving Platform">
        <p>
          Combine everything you've learned to make a **moving platform** using TweenService:
        </p>
        <CodeExample
          code={`local TweenService = game:GetService("TweenService")
local platform = script.Parent
local start = workspace.StartPoint
local endPoint = workspace.EndPoint

local tweenInfo = TweenInfo.new(3, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1, true)
local tween = TweenService:Create(platform, tweenInfo, {Position = endPoint.Position})

platform.Position = start.Position
tween:Play()`}
        />
      </Section>

      <p>
        <strong>Great job completing Unit 2!</strong> You now know how to work with parts, properties, scripts, TweenService, and more!
      </p>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_6;
