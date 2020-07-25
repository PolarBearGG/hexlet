/* eslint-disable no-restricted-syntax */

import _ from 'lodash';

// BEGIN (write your solution here)
const uniq = (arr) => {
  const newArr = [];
  for (const item of arr) {
    if (newArr.length === 0) {
      newArr.push(item);
    }
    if (newArr.includes(item) !== true) {
      newArr.push(item);
    }
  }
  return newArr;
};
const getSameCount = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return 0;
  }
  let count = 0;
  const newArr1 = uniq(arr1);
  const newArr2 = uniq(arr2);
  for (const item of newArr2) {
    if (newArr1.includes(item)) {
      count += 1;
    }
  }
  return count;
};
export default getSameCount;
// END
