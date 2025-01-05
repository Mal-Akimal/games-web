import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import UnitList from '../components/UnitList';
import { get_single_path } from '../api/endpoints';
import './CodedObbies.css'; // Importing the sidebar CSS
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

function CodedObbies() {
  const { slug } = useParams(); // Get the slug from the URL
  const [path, setPath] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Fetch the specific path by slug
  useEffect(() => {
    const fetchPath = async () => {
      const fetchedPath = await get_single_path(slug);
      setPath(fetchedPath);
    };
    fetchPath();
  }, [slug]);

  const handleUnitClick = (unitId) => {
    const unit = path.units.find((u) => u.id === unitId); // Find the unit by ID
    console.log("Selected Unit:", unit); // Debug log to verify
    setSelectedUnit(unit); // Set the selected unit
  };

  return (
    <div className="coded-obbies-container">
      {!path ? (
        <p className="loading">Loading path...</p>
      ) : (
        <div className="coded-obbies-content">
          {/* Sidebar */}
          <div className="sidebar-container">
            <p className="path-name">{path.name}</p>
            {path.units && (
              <UnitList
                units={path.units}
                onUnitClick={handleUnitClick}
                selectedUnitId={selectedUnit?.id || null}
              />
            )}
          </div>

          {/* Main Content */}
          <div className="main-content-container">
            {selectedUnit ? (
              <div className="unit-details">
                <h2 className="unit-name">{selectedUnit.name}</h2>
                <h3 className="lessons-title">Lessons:</h3>
                {console.log("Selected Unit Data:", selectedUnit)} {/* Debug log */}
                <ul className="lessons-list">
                {selectedUnit.lessons && selectedUnit.lessons.length > 0 ? (
  <ul className="lessons-list">
   {selectedUnit.lessons && selectedUnit.lessons.length > 0 ? (
  <ul className="lessons-list">
    {selectedUnit.lessons.map((lesson, index) => (
      <li key={lesson.id} className="lesson-item">
        <NavLink
          to={`/codedObbies/lesson/${selectedUnit.id - 1}_${index + 1}`}
          className="lesson-link"
        >
          {lesson.title}
        </NavLink>
      </li>
    ))}
  </ul>
) : (
  <p className="no-lessons">No lessons available for this unit.</p>
)}

  </ul>
) : (
  <p className="no-lessons">No lessons available for this unit.</p>
)}

</ul>


              </div>
            ) : (
              <p className="select-unit">Select a unit to see its lessons.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CodedObbies;
