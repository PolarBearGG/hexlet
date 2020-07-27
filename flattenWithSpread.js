//Name: flattenWithSpread
//Author: Vitaliy Korolyk
//Date: 27.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте функцию flatten(). 
Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы,
то flatten сводит всё к одному массиву, раскрывая каждый вложенный.

js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

// Для пустого массив возвращается []
flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
*******************************************************************************************/

/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const flatten = (arr) => {
    const flatArr = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatArr.push(...item);
      } else {
        flatArr.push(item);
      }
    }
    return flatArr;
  };
  // END
  