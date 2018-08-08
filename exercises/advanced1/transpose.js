// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays 
// that each contain three elements. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. 
// For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. 
// You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

// input: an array that contains 3 arrays
// output: a new array 

// data structure: since we'll be returning a new array, it makes sense to iterate over the input arry
// and use it to build up a new array, which we ultimately return

// Algorithm
// - There are the same number of elements in each array as there are nested sub-arrays in the input array
// - Create an empty array with the same number of nested elements as the input array, themselves being empty arrays (3)
// - - this will give us var transposed = [[], [], []]
// - Therefore, we need to iterate n (n = 3) times over the input array, and starting with 0, push the element at the current index 
//   of the subarray into the subarray at transposed[i]



function transpose(matrix) {
  var n = matrix.length;
  var transposed = generateEmptyMatrix(n);
  var i;
  var j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      transposed[j].push(matrix[i][j]);
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

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

var matrix2 = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I']
];

var newMatrix2 = transpose(matrix2);

console.log(newMatrix2);   // [['A', 'D, 'G'], ['B', 'E', 'H'], ['C', 'F', 'I']];
console.log(matrix2);      // [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];

var matrix3 = [
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 2]
];

var newMatrix3 = transpose(matrix3);

console.log(newMatrix3);      // [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
console.log(matrix3);         // [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
