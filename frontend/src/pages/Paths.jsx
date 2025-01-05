import { useState, useEffect } from 'react';
import { get_paths } from '../api/endpoints';

import { Link } from 'react-router';

const Paths = () => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const fetchPaths = async () => {
      const paths = await get_paths();
      setPaths(paths);
    };
    fetchPaths();
  }, []);

  return (
    <div>
      <h1>Paths</h1>
      {paths.length === 0 ? (
        <p>Loading paths...</p>
      ) : (
        paths.map((path) => (
          <div key={path.id}>
            <h2>
              <Link to={`/path/${path.slug}`}>{path.name}</Link>
            </h2>
            <p>{path.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Paths;
