// @ts-check

// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
    let numb = 0;
    if (num === 0) {
      return false;
    }
    for (let i = 0; i < num; i += 1) {
      if (num % i === 0) {
        numb += i;
      }
    }
    return numb === num;
  };
  // END
  
  export default isPerfect;
  