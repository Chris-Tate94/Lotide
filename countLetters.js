const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  for (const letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else result[letters] = 1;
  }
  return result;
};

const words = "Please count the letters in this sentence";

console.log(countLetters(words));
