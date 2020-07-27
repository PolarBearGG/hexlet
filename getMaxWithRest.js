//Name: getMaxWithRest
//Author: Vitaliy Korolyk
//Date: 27.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте функцию getMax(),
которая ищет в массиве максимальное значение и возвращает его.

// Для пустого массив возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10
*******************************************************************************************/

/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// @ts-check

// BEGIN (write your solution here)
export const getMax = (str) => {
    let [maxValue, ...rest] = str;
    if (str.length === 0) {
      return null;
    }
    for (const item of rest) {
      if (item > maxValue) {
        maxValue = item;
      }
    }
    return maxValue;
  };
  // END
  