// BEGIN (write your solution here)
const isHappyTicket = (str) => {
    let balance = 0;
    for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
      balance += Number(str[i]) - Number(str[j]);
    }
    return balance === 0;
  };
  export default isHappyTicket;
  // END
  