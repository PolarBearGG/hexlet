// @ts-check
// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
    let pointer = 0;
    for (let i = 0; i < str.length; i += 1) {
      pointer = str[i] === '(' ? pointer + 1 : pointer - 1;
      if (pointer < 0) {
        return false;
      }
    }
    return pointer === 0;
  };
  export default areBracketsBalanced;
  // END
  