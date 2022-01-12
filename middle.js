const eqArrays = function (arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }
  //edge case
  if (arr1 == null || arr2 == null) {
    return false;
  }
  //check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the first array and check that value against the same value in the second array
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (!eqArrays(array1, array2)) {
    return console.log(`🔴🔴🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
  return console.log(`🟢🟢🟢 Assertion Passed: [${array1}] === [${array2}]`);
};

const middle = function (array) {
  //return an empty array if array is empty or has less than 2 elements
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  //if array is an odd length
  if (array.length % 2 !== 0) {
    result = Math.ceil(array.length / 2);
  }
  // if array is even length,
  if (array.length % 2 === 0) {
    let n = array.length;
    //get the value at the second middle index
    let a2 = array[n / 2];
    //get the value at the first middle index
    let a1 = array[n / 2 - 1];
    result = [a1, a2];
  }
  return result;
};
//console.log(middle([]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
