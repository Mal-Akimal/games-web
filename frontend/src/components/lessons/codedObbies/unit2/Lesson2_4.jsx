import React from 'react';
import Section from '../../shared/Section';
import NavigationButtons from '../../shared/NavigationButtons';

const Lesson2_4 = () => {
  return (
    <div>
      <h1>Lesson 2.4: Client vs Server</h1>

      <Section title="What's the Difference?">
        <p>
          - **Server**: Runs for all players. Use **Script** objects for server-side logic.<br />
          - **Client**: Runs for a single player. Use **LocalScript** for local logic.
        </p>
      </Section>

      <Section title="Practice">
        <p>Attach a Script and LocalScript to a part and observe their behaviors.</p>
      </Section>

      <NavigationButtons onPrev={() => {}} onNext={() => {}} />
    </div>
  );
};

export default Lesson2_4;
