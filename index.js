const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKeys = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPosition = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKeys: findKeys,
  letterPosition: letterPosition,
  map: map,
  takeUntil: takeUntil,
  without: without,
};
