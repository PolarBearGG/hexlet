// @ts-check

// BEGIN (write your solution here) (write your solution here)
const diff = (a, b) => {
    if (Math.abs(a - b) > 180) {
      return 360 - Math.abs(a - b);
    }
    return Math.abs(a - b);
  };
  // END
  export default diff;
  