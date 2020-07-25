// @ts-check
// BEGIN (write your solution here)
const reverse = str => {
    let i = 0;
    let word = '';
    while (i <= str.length - 1) {
      word = word + str[(str.length - 1) - i];
      i += 1;
    }
    return word;
  };
  // END
  
  export default reverse;
  