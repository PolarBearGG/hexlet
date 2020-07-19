// BEGIN (write your solution here)
const invertCase = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === str[i].toUpperCase()) {
        newStr += str[i].toLowerCase();
      } else if (str[i] === str[i].toLowerCase()) {
        newStr += str[i].toUpperCase();
      }
    }
    return newStr;
  };
  export default invertCase;
  // END
  