const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

const letterPositions = function (sentence) {
  const result = {};
  //convert sentence to lowercase
  sentence = sentence.toLowerCase();

  for (const characters of sentence) {
    let index = [];
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === characters) {
        index.push(i);
      }
    }
    result[characters] = index;
  }
  // removes the key if the key is a space
  delete result[" "];
  return result;
};

const phrase = "Please count the characters in this phrase";

console.log(letterPositions(phrase));
