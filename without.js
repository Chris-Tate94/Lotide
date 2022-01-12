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

const without = function (a, b) {
  let result = [];
  //loop through the first array
  for (let i = 0; i < a.length; i++) {
    //push placeholder default is true
    let shouldPush = true;
    //loop through the second array
    for (let j = 0; j < b.length; j++) {
      // if an element at i in the first array is === to an element at j in the second array, push is false
      if (a[i] === b[j]) {
        shouldPush = false;
      }
    }
    // if pusj is true. update our result placeholder with elements of the first array
    if (shouldPush === true) {
      result.push(a[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

console.log(without(["Hello", "World", "Lighthouse"], ["Lighthouse"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
