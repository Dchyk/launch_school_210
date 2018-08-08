// In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.




function transpose(matrix) {
  var rowsToCalculate    = matrix.length;
  var columnsToCalculate = matrix[0].length; // How many columns? However many elements there are
  var transposed = generateEmptyMatrix(columnsToCalculate);
  var row;
  var column;

  for (row = 0; row < rowsToCalculate; row++) {
    for (column = 0; column < columnsToCalculate; column++) {
      transposed[column].push(matrix[row][column]);
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


// Examples:


transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
