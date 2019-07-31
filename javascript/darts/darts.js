//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (x = 0, y = 0) => {
  // Check for NaN
  if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) return null;

  const hypothenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (hypothenuse > 10) return 0;
  if (hypothenuse > 5) return 1;
  if (hypothenuse > 1) return 5;
  return 10;
};
