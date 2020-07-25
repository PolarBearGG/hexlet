/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const calculateAverage = (arr) => {
    if (arr.length > 0) {
      let sum = 0;
      for (const temp of arr) {
        sum += temp;
      }
      return sum / arr.length;
    }
    return null;
  };
  export default calculateAverage;
  // END
  