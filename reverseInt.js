// BEGIN (write your solution here)
const reverseInt = (n) => {
    const str = Math.abs(n).toString();
    const length = str.length - 1;
    let newNumb = '';
    for (let i = 0; i <= length; i += 1) {
      newNumb += str[length - i];
    }
    if (n < 0) {
      return newNumb * -1;
    }
    return newNumb * 1;
  };
  export default reverseInt;
  // END
  