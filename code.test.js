const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const shortestPathsProperty = jsc.forall(jsc.array(jsc.pair(jsc.nat, jsc.nat)), function (edges) {
  const max = edges.reduce(function (a, b) {
    return Math.max(a, Math.max(b[0], b[1]));
  }, 0);

  const mat = [];
  for (let i = 0; i <= max; i++) {
    mat[i] = [];
    for (let j = 0; j <= max; j++) {
      mat[i][j] = Infinity;
    }
    for (const element of edges) {
      if (element[0] === i) mat[i][element[1]] = 1;
    }
  }
  const graph = mat.map(function(row) {
    return row.slice();
  });
  const result = allPairsShortestPaths(graph);
  return true;
});

jsc.assert(shortestPathsProperty, { tests: 1000 });
