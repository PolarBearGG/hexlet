import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const aper = (x) => {
  const word = [];
  for (let i = 0; i <= length(x) - 1; i += 1) {
    if (i === 0) {
      word.push(toUpperCase(x[i]));
    }
    if (i > 0) {
      word.push(x[i]);
    }
  }
  return word.join('');
};
const solution = (str) => {
  const arr = str.split(' ');
  const arr2 = [];
  for (let i = 0; i <= length(arr) - 1; i += 1) {
    arr2.push(aper(arr[i]));
  }
  return arr2.join(' ');
};
export default solution;
// END
