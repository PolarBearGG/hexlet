import { length } from './strings';

// BEGIN (write your solution here)
const addDigits = (num) => {
  let n = 0;
  for (let i = 0; i <= length(num.toString()) - 1; i += 1) {
    n += +num.toString()[i];
  }
  if (n < 10) {
    return n;
  }
  return addDigits(n);
};
export default addDigits;
// END
