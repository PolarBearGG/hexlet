// BEGIN (write your solution here)
const isPowerOfThree = (n) => {
    if (n / 3 === 1 || n === 1) {
      return true;
    }
    if (n > 1 && n < 3) {
      return false;
    }
    if (n < 1) { return false; }
    return isPowerOfThree(n / 3);
  };
  export default isPowerOfThree;
  // END
  