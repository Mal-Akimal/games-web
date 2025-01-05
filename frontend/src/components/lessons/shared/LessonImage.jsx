import React from 'react';

const LessonImage = ({ path, unit, fileName, alt }) => {
  const src = require(`../../../assets/images/${path}/unit${unit}/${fileName}`).default;
  return (
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}
    />
  );
};

export default LessonImage;
