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

const map = function (arrayToMap, callbackFunc) {
  const results = [];

  for (const item of arrayToMap) {
    results.push(callbackFunc(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, (word) => word[0]);

const words2 = ["hello", "darkness", "my", "old", "friend"];

const result2 = map(words2, (word) => word[0]);

const words3 = [];

const result3 = map(words3, (word) => word[0]);

assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(result2, ["h", "d", "m", "o", "f"]);
assertArraysEqual(result3, []);
