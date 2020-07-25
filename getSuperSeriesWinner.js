// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getSuperSeriesWinner = (arr) => {
    let canada = 0;
    let ussr = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][0] > arr[i][1]) {
        canada += 1;
      }
      if (arr[i][0] < arr[i][1]) {
        ussr += 1;
      }
    }
    if (canada > ussr) {
      return 'canada';
    }
    if (ussr > canada) {
      return 'ussr';
    }
    return null;
  };
  export default getSuperSeriesWinner;
  // END
  