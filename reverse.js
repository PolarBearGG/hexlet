// BEGIN (write your solution here)
const reverse = (str) => {
    let reverseStr = '';
    const reverseStrLast = str[str.length - 1];
    const reverseStrRest = str.slice(0, str.length - 1);
    reverseStr += reverseStrLast;
    if (str === '') {
      return str;
    }
    if (reverseStrRest.length === 0) {
      return reverseStr;
    }
    return reverseStr + reverse(reverseStrRest);
  };
  export default reverse;
  // END
  