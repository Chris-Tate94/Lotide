// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function (object, callback) {
  for (const entry in object) {
    if (callback(object[entry])) {
      return entry;
    }
  }
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 0
  )
); // => "noma"
