const assertEqual = require("./assertEqual");
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

module.exports = eqArrays;
