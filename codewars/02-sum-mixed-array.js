/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// (sumMix([9, 3, "7", "3"]), 22);
// (sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
// (sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);

console.clear();

function sumMix(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}


// let numArr = [9, 3, "3", 5, 10, "15"];

// function sumMix (numArr) {
//     let sum = 0;
//     for (i = 0; i < numArr.length; i++) {
//         sum += Number(numArr[i]);
//     }

//     console.log(sum);
// }


// sumMix(numArr);
