// Use the transpose function, and simply use Array.prototype.unshift() instead of push(),
// so that elements are added to the beginning of the output subarrays instead of the end




function rotate90(matrix) {
  var rowsToCalculate    = matrix.length;
  var columnsToCalculate = matrix[0].length; // How many columns? However many elements there are
  var transposed = generateEmptyMatrix(columnsToCalculate);
  var row;
  var column;

  for (row = 0; row < rowsToCalculate; row++) {
    for (column = 0; column < columnsToCalculate; column++) {
      transposed[column].unshift(matrix[row][column]);
    }
  }
  return transposed;
}

function generateEmptyMatrix(n) {
  var empty = [];
  var i; 

  for (i = 1; i <= n; i++) {
    empty.push([]);
  }

  return empty;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]