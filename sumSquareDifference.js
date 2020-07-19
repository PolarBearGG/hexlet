// @ts-check

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
    let sq = 0;
    let qs = 0;
    for (let i = 0; i <= n; i += 1) {
      sq += i;
    }
    for (let i = 0; i <= n; i += 1) {
      qs += i ** 2;
    }
    return sq ** 2 - qs;
  };
  // END
  
  export default sumSquareDifference;
  