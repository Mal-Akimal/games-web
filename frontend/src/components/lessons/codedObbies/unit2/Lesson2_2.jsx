import React from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_2 = () => {
  return (
    <div>
      <h1>Lesson 2.2: Changing Properties Using Scripts</h1>

      <Section title="Modify Part Properties with Scripts">
        <p>
          Instead of changing properties manually, you can change them using Lua scripts. Here's an example:
        </p>
        <CodeExample
          code={`-- Change the part's color
local part = script.Parent
part.BrickColor = BrickColor.new("Bright red")

-- Change the part's transparency
part.Transparency = 0.5`}
        />
      </Section>

      <Section title="Practice">
        <p>Try this yourself:</p>
        <ul>
          <li>Insert a part and attach a Script to it.</li>
          <li>Change its size, transparency, and color using the script.</li>
        </ul>
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_2;
