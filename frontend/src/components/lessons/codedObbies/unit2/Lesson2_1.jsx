import React from 'react';
import CodeExample from '../../shared/CodeExample';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';
import { useState } from 'react';

const Lesson2_1 = () => {
  const [showTip, setShowTip] = useState(false);

  return (
    <div>
      <h1>Lesson 2.1: Part Properties</h1>

      <Section title="What Are Properties?">
        <p>
          Every part in Roblox has **properties** like position, size, color, and transparency. You can inspect and modify these properties manually in the **Properties** window.
        </p>
        <CodeExample
          code={`-- Example: Properties of a part
Size: 4, 1, 2
Position: X = 0, Y = 5, Z = 0
Transparency: 0.5
Anchored: true`}
        />

        <p>
          <strong>Tip:</strong> Click on a part in Roblox Studio and check its properties in the **Explorer** window.
        </p>
      </Section>

      <Section title="Practice">
        <p>Manually insert a part in Roblox Studio. Try changing its:</p>
        <ul>
          <li>Size</li>
          <li>Position</li>
          <li>Transparency</li>
          <li>Color</li>
        </ul>

        <p
          onClick={() => setShowTip(!showTip)}
          style={{ cursor: 'pointer', color: 'blue' }}
        >
          Need help? Click here for a tip!
        </p>
        {showTip && <p>Use the Properties window to make changes. Look for values like X, Y, and Z under Position!</p>}
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_1;
