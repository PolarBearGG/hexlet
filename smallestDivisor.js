// @ts-check

const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (n, acc) => {
      if (n === 1) {
        return n;
      }
      if (n % acc === 0) {
        return acc;
      }
      if (n % acc !== 0) {
        return iter(n, acc + 1);
      }
      return acc;
    };
    return iter(num, 2);
    // END
  };
  
  export default smallestDivisor;
  