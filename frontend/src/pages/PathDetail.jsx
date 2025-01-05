import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { get_paths } from '../api/endpoints'; // Assuming you have an API for fetching paths

const PathDetail = () => {
  const { pathSlug } = useParams(); // Get the slug from the URL
  const [path, setPath] = useState(null);

  useEffect(() => {
    const fetchPath = async () => {
      const paths = await get_paths(); // Fetch all paths
      const selectedPath = paths.find((p) => p.slug === pathSlug); // Find the path by its slug
      setPath(selectedPath);
    };
    fetchPath();
  }, [pathSlug]);

  if (!path) {
    return <p>Loading path...</p>;
  }

  return (
    <div>
      <h1>{path.name}</h1>
      <p>{path.description}</p>

      {/* Render the path's units or other related information */}
      {path.units && path.units.length > 0 ? (
        <ul>
          {path.units.map((unit) => (
            <li key={unit.id}>{unit.name}</li>
          ))}
        </ul>
      ) : (
        <p>No units available for this path.</p>
      )}
    </div>
  );
};

export default PathDetail;
