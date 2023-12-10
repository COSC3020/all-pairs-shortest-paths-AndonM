const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());

function testAllPairsShortestPaths(graph, expected) {
  const result = allPairsShortestPaths(graph);
  assert.equal(result, expected, 'Test Failed');
}

var graph1 = [
  [0, 2, 5],
  [7, 0, 4],
  [9, 1, 0]
];
var expected1 = [
  [0, 2, 4],
  [5, 0, 4],
  [6, 1, 0]
];
testAllPairsShortestPaths(graph1, expected1);

var graph2 = [
  [0, 10, 3],
  [2, 0, 15],
  [7, 4, 0]
];
var expected2 = [
  [0, 8, 3],
  [2, 0, 5],
  [6, 4, 0]
];
testAllPairsShortestPaths(graph2, expected2);

var graph3 = [
  [0, 5, 1],
  [2, 0, 7],
  [6, 4, 0]
];
var expected3 = [
  [0, 5, 1],
  [2, 0, 4],
  [3, 1, 0]
];
testAllPairsShortestPaths(graph3, expected3);
