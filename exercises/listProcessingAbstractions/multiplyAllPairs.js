// Multiply each element in arr1 by each element in arr2
// Store the result of each operation in a new array
// Return the resulting array, sorted ascending in numerical order

// Use nested for or forEach loops 

function multiplyAllPairs(arr1, arr2) {
  var results = [];

  arr1.forEach(function(el1) {
    arr2.forEach(function(el2) {
      results.push(el1 * el2);
    });
  });

  return results.sort( function(a, b) {
    return a > b;
  });
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]