const Unit = ({ unit }) => {
    return (
      <div className='unit'>
        <div className='unit-container'>
          <h3>{unit.name}</h3>  {/* Display the unit name */}
          <ul>
            {/* Display lessons for this unit */}
            {unit.lessons.map((lesson) => (
              <li key={lesson.id}>{lesson.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Unit;
  