// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
//   }
//   if (actual !== expected) {
//     console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

const assertEqual = require("./assertEqual");

//Tail function to return all elements of an array excluding the first

const tail = function (array) {
  let result = [];
  let tailArray = array.slice(1);
  if (array.length <= 1) {
    return result.concat(array);
  }
  return result.concat(tailArray);
};

//Test an empty array

const noWords = [];
tail(noWords);
assertEqual(noWords.length, 0);

module.exports = tail;
