/* eslint-disable no-param-reassign, import/prefer-default-export */

// BEGIN (write your solution here)
export const reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i += 1, j -= 1) {
      const item = arr[i];
      arr[i] = arr[j];
      arr[j] = item;
    }
    return arr;
  };
  // END
  