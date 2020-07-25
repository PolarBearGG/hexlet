//Name: countUniqChars
//Author: Vitaliy Korolyk
//Date: 25.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку
и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке.
Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется
четыре символа: 1, y, a и !.

const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3
*******************************************************************************************/

/* eslint-disable no-restricted-syntax */

// BEGIN (write your solution here)
const countUniqChars = (str) => {
    const arr = str.split('');
    const newArr = [];
    for (const item of arr) {
      if (newArr.includes(item) !== true) {
        newArr.push(item);
      }
    }
    return newArr.length;
  };
  export default countUniqChars;
  // END
  