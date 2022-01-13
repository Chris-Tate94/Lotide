const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  }
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function (object, value) {
  //list of keys
  let keys = Object.keys(object);

  // the value key is going to be checked agains the list of keys
  for (const key of keys) {
    //if value of the key in the object paramater matches the value paramater, return that key
    if (object[key] === value) {
      return key;
    }
  }
  return "No Genre Found";
  //if they match, i want to return that key
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

console.log(findKeyByValue(bestTVShowsByGenre, "whasd"));
