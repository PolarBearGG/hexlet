// @ts-check

/* eslint-disable no-console */

// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
    const iter = end - begin;
    for (let i = 0; i <= iter; i += 1) {
      if ((begin + i) % 5 === 0 && (begin + i) % 3 === 0) {
        console.log('FizzBuzz');
      } else if ((begin + i) % 3 === 0) {
        console.log('Fizz');
      } else if ((begin + i) % 5 === 0) {
        console.log('Buzz');
      } else if ((begin + i) % 5 !== 0 && (begin + i) % 3 !== 0) {
        console.log(begin + i);
      }
    }
  };
  export default fizzBuzz;
  // END
  