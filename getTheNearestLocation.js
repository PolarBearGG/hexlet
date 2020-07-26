//Name: getTheNearestLocation
//Author: Vitaliy Korolyk
//Date: 26.07.2020

/*******************************************************************************************
Реализуйте и экспортируйте функцию getTheNearestLocation(),
которая находит место ближайшее к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место это массив из двух элементов,
где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
*******************************************************************************************/

/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };
  // BEGIN (write your solution here)
  export const getTheNearestLocation = (locations, currentPoint) => {
    let lowestDistance;
    let answer;
    if (locations.length === 0) {
      return null;
    }
    for (const item of locations) {
      const [, [x, y]] = item;
      if (lowestDistance === undefined) {
        lowestDistance = getDistance([x, y], currentPoint);
        answer = item;
      }
      if (getDistance([x, y], currentPoint) < lowestDistance) {
        lowestDistance = getDistance([x, y], currentPoint);
        answer = item;
      }
    }
    return answer;
  };
  // END
  