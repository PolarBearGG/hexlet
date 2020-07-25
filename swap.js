/* eslint-disable no-param-reassign, prefer-destructuring, import/prefer-default-export */

// BEGIN (write your solution here)
export const swap = (arr) => {
    const length = arr.length;
    if (length < 2) {
      return arr;
    }
    const newArr = arr.shift();
    arr.unshift(arr.pop());
    arr.push(newArr);
    return arr;
  };
  // END
  