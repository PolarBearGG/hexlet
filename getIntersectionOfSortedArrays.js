//Name: getIntersectionOfSortedArrays
//Author: Vitaliy Korolyk
//Date: 26.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход два отсортированных массива и находит их пересечение.

getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
*******************************************************************************************/


// BEGIN (write your solution here)
const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const intersection = [];
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr2.includes(arr1[i])) {
        intersection.push(arr1[i]);
      }
    }
    return intersection;
  };
  export default getIntersectionOfSortedArrays;
  // END
  