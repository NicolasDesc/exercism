//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (seq, a, b) => {
  validateBase(a, 'input');
  validateBase(b, 'output');
  validateSequence(seq, a);

  const num_base10 = seq.reduce((acc, cur, idx, src) => acc + cur * Math.pow(a, src.length - idx - 1), 0);

  return getArrayBaseN(num_base10, b);
};

const getArrayBaseN = (num, base) => {
  let array = [];
  do {
    array.unshift(num % base);
    num = Math.floor(num / base);
  } while (num > 0)

  return array;
}

const validateSequence = (seq, base) => {
  if (seq.length === 0 || seq.filter(n => n < 0 || n >= base).length)
    throw new Error('Input has wrong format');

  if (seq.length > 1 && seq[0] === 0)
    throw new Error('Input has wrong format');
}

const validateBase = (base, type) => {
  if (base < 2 || !Number.isInteger(base))
    throw new Error('Wrong ' + type + ' base');
}

// Alternative solution
// export const convert = (digits, fromBase = 0, toBase = 0) => {
//   if (fromBase < 2 || (fromBase + '').match(/[^\d]/g))
//     throw new Error('Wrong input base');
//   if (toBase < 2 || (toBase + '').match(/[^\d]/g))
//     throw new Error('Wrong output base');
//   if (digits.length === 0 || digits.filter(n => n < 0 || n >= fromBase).length)
//     throw new Error('Input has wrong format');
//   if (digits.length > 1 && digits[0] === 0)
//     throw new Error('Input has wrong format');
//   let n = digits.reduce((p, c) => p * fromBase + c, 0);
//   let r = [];
//   do {
//     r.push(n % toBase);
//     n = Math.floor(n / toBase);
//   } while (n > 0);
//   return r.reverse();
// }
