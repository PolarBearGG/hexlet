/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)
const getTotalAmount = (arr, type) => {
    let arrQty = 0;
    for (const item of arr) {
      if (item.slice(0, 3) === type) {
        arrQty += +item.slice(4, item.length);
      }
    }
    return arrQty;
  };
  export default getTotalAmount;
  // END
  