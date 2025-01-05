// src/components/LessonList.js

import Lesson from './Lesson';  // Import the Lesson component

const LessonList = ({ lessons }) => {
  return (
    <div className="lesson-list">
      {lessons.map((lesson) => (
        <Lesson key={lesson.id} lesson={lesson} />  // Pass each lesson to the Lesson component
      ))}
    </div>
  );
};

export default LessonList;
