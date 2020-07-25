/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getSameParity = (arr) => {
    if (arr.length < 1) {
      return arr;
    }
    const a = [];
    const b = [];
    for (const item of arr) {
      if (item % 2 === 0) {
        a.push(item);
      }
      if (item % 2 !== 0) {
        b.push(item);
      }
    }
    if (arr[0] % 2 === 0) {
      return a;
    }
    return b;
  };
  export default getSameParity;
  // END
  