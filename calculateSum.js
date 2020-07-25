/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const calculateSum = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    for (const item of arr) {
      if (item % 3 === 0) {
        sum += item;
      }
    }
    return sum;
  };
  export default calculateSum;
  // END
  