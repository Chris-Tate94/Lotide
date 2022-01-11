const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Tail function to return all elements of an array excluding the first

const tail = function (array) {
  let result = [];
  let tailArray = array.slice(1);
  if (array.length <= 1) {
    return result.concat(array);
  }
  return result.concat(tailArray);
};

//Test case: check if the array matches the paramaters below as we cannot directly compare 2 arrays
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test an empty array

const noWords = [];
tail(noWords);
assertEqual(noWords.length, 0);
