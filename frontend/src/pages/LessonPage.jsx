import React, { Suspense } from 'react';
import { useParams } from 'react-router';

const LessonPage = () => {
  const { path, id } = useParams(); // Get path (codedObbies) and lesson ID (1_1)

  console.log('Path:', path); // Should log "codedObbies"
  console.log('Lesson ID:', id); // Should log "1_1"

  // Dynamically load the JSX component for the lesson
  const LessonComponent = React.lazy(() =>
    import(`../components/lessons/${path}/unit${id.split('_')[0]}/Lesson${id}`)
  );

  return (
    <div>
      <Suspense fallback={<p>Loading Lesson...</p>}>
        <LessonComponent />
      </Suspense>
    </div>
  );
};

export default LessonPage;
