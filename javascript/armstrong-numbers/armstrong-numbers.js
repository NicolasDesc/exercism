const reducer = (acc, cur, _idx, src) => acc + Math.pow(cur, src.length);

export const validate = (input) => {
  const array = [...input.toString()];
  const sum_digits = array.reduce(reducer, 0);
  return input === sum_digits;
};