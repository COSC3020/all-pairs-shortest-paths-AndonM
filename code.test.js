const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());

function testAllPairsShortestPaths(graph, expected) {
  const result = allPairsShortestPaths(graph);
  assert.deepStrictEqual(result, expected, 'Test Failed');
}

var graph1 = [
    [0, 2, 5, 8],
    [7, 0, 4, 6],
    [9, 1, 0, 3],
    [7, 9, 8, 0]
];
var expected1 = [
    [0, 2, 5, 3],
    [1, 0, 4, 2],
    [3, 1, 0, 3],
    [1, 3, 2, 0]
];
testAllPairsShortestPaths(graph1, expected1);

var graph2 = [
    [0, 10, 3, 7],
    [2, 0, 15, 4],
    [7, 4, 0, 1],
    [5, 2, 8, 0]
];
var expected2 = [
    [0, 8, 3, 3],
    [2, 0, 5, 4],
    [6, 4, 0, 1],
    [5, 2, 7, 0]
];
testAllPairsShortestPaths(graph2, expected2);

var graph3 = [
    [0, 5, 1, 9],
    [2, 0, 7, 3],
    [6, 4, 0, 1],
    [8, 2, 4, 0]
];
var expected3 = [
    [0, 5, 1, 3],
    [2, 0, 4, 3],
    [3, 1, 0, 1],
    [5, 2, 4, 0]
];
testAllPairsShortestPaths(graph3, expected3);

var graph4 = [
    [0, 1, 3, 5],
    [2, 0, Infinity, 4],
    [Infinity, 4, Infinity, 2],
    [6, 4, 7, 0]
];
var expected4 = [
    [0, 1, 3, 5],
    [2, 0, 6, 4],
    [6, 4, 0, 2],
    [6, 4, 5, 0]
];
testAllPairsShortestPaths(graph4, expected4);

var graph5 = [
    [0, 8, 1, 9],
    [2, 0, 7, 3],
    [6, 4, 0, 1],
    [8, 2, 4, 0]
];
var expected5 = [
    [0, 6, 1, 3],
    [2, 0, 4, 3],
    [3, 1, 0, 1],
    [5, 2, 4, 0]
];
testAllPairsShortestPaths(graph5, expected5);
