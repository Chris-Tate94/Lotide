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

assertArraysEqual([1, 2, 3], [3, 2, 1]); //FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); //PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //FAIL
assertArraysEqual(["Hello", "World"], ["World", "Hello"]); //FAIL
