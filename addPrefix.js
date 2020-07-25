// BEGIN (write your solution here)
const addPrefix = (arr, preff) => {
    const newArr = [];
    arr.forEach((x) => newArr.push(`${preff} ${x}`));
    return newArr;
  };
  export default addPrefix;
  // END
  