const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = [
  [0, 2, 5],
  [7, 0, 4],
  [9, 1, 0]
];
var expected = [
  [0, 2, 4],
  [5, 0, 4],
  [7, 1, 0]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));

var graph = [
  [0, 10, 3],
  [2, 0, 15],
  [7, 4, 0]
];
var expected = [
  [0, 10, 3],
  [2, 0, 5],
  [7, 4, 0]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));

var graph = [
  [0, 5, 1],
  [2, 0, 7],
  [6, 4, 0]
];
var expected = [
  [0, 5, 1],
  [2, 0, 3],
  [6, 4, 0]
];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(expected));
