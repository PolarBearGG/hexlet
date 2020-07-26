//Name: countUniqChars
//Author: Vitaliy Korolyk
//Date: 26.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте по умолчанию функцию,
которая сортирует массив используя пузырьковую сортировку. 
Постарайтесь не подглядывать в текст теории и попробуйте воспроизвести алгоритм по памяти.

bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10]
*******************************************************************************************/

/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len; j += 1) {
        if (arr[j] > arr[j + 1]) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  };
  export default bubbleSort;
  // END
  