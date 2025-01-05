const UnitList = ({ units, onUnitClick, selectedUnitId }) => {
  return (
    <div className="unit-list">
      {units.map((unit) => (
        <div key={unit.id} className="unit">
          <div onClick={() => onUnitClick(unit.id)} className="unit-header">
            <h4>{unit.name}</h4>
          </div>
          
          {/* If this unit is the selected one, show the lessons */}
          {selectedUnitId === unit.id && unit.lessons && unit.lessons.length > 0 && (
            <div className="lessons-list">
              <ul>
                {unit.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <h6>{lesson.title}</h6>

                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UnitList;
