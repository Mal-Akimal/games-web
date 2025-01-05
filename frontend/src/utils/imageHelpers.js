export const getImagePath = (path, unit, fileName) =>
    require(`../assets/images/${path}/unit${unit}/${fileName}`).default;
  