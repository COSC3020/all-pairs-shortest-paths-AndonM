// TESTING SUITE FROM ziyuWang6666

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// case one
var graph = [
    [0, 5, Infinity, 10],
    [Infinity, 0, 3, Infinity],
    [Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, 0],
];
var result = [
    [ 0, 5, 8, 9 ],
    [ Infinity, 0, 3, 4 ],
    [ Infinity, Infinity, 0, 1 ],
    [ Infinity, Infinity, Infinity, 0 ]
]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(result));

// case two
var graph = [
    [1, 4, Infinity, 3],
    [5, 0, Infinity, Infinity],
    [6, Infinity, Infinity, Infinity],
    [3, Infinity, 2, Infinity],
];
var result = [
    [ 1, 4, 5, 3 ],
    [ 5, 0, 10, 8 ],
    [ 6, 10, 11, 9 ],
    [ 3, 7, 2, 6 ]
]

assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(result));

// case three
var graph = [
    [Infinity, 5, Infinity, 10],
    [3, Infinity, 3, Infinity],
    [Infinity, 4, 0, 1],
    [7, Infinity, Infinity, 0],
];
var result = [
    [ 8, 5, 8, 9 ],
    [ 3, 7, 3, 4 ],
    [ 7, 4, 0, 1 ],
    [ 7, 12, 15, 0 ]
]
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(result));
