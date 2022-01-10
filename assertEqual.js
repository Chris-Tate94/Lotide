// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `🟢🟢🟢 Assertion Passed: [actual output] === [expected output]`
    );
  }
  if (actual !== expected) {
    console.log(
      `🔴🔴🔴 Assertion Failed: [actual output] !== [expected output]`
    );
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
