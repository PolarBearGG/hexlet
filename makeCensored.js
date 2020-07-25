/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const makeCensored = (str, stopWords) => {
    const result = [];
    const strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i += 1) {
      stopWords.includes(strArr[i]) ? result.push('$#%!') : result.push(strArr[i]);
    }
    const resultArr = result.join(' ');
    return resultArr;
  };
  export default makeCensored;
  // END
  