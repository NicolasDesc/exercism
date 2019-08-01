//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (data) => {
  return data.replace(/(.)\1+/g, NumReplacer);
};

const NumReplacer = (match, char) => match.length + char;

export const decode = (data) => {
  return data.replace(/(\d+)(.)/g, CharReplacer);
};

const CharReplacer = (match, num, char) => char.repeat(num);