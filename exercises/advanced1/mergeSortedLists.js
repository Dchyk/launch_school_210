// Write a function that takes two sorted arrays as arguments, 
// and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. 
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

//  input: two sorted arrays
//  output: a new array with all elements from the input arrays

// rules: the output array must be built up 1 element at a time
// - the input arrays can be different lengths
// - if one of the input arrays is empty, we can simply return the other array as it is already sorted
// - in order to sort merge the two input arrays together, at each step, we need to identify
//   the lowest value in either array that has not already been added to the output array, and 
//   add it, and mark it as having been added so we don't add it again. Since the same value can occurr
//   at different array indexes, we will need to keep track of which indexes have been added rather than 
//   which values from each array.

// algorithm:
// - if either input array is empty, return the other array
// - initialize an object to keep track of which array indexes have been added to the output array.
//   the object's key's will be the index numbers, and the value will be "true" if they've been added
// - filter both input arrays for indexes which are false in the "added" object, and compare the first
//   element in each (at index 0) - whichever is less, add that number to the output merged array, and mark
//   it as "True" in the added object
// - if one of the arrays is empty when filtered for indexes which haven't been added to the merged output yet,
//   then we can safely concat the remaining elements from the ther array onto the merged output array, 
//   since they all must be larger.

// - changed the algorithm while writing the code:
// - copy each input array by calling "slice" on them
// - while they both have at least 1 element, test the first element in each
//   and shift whichever is less off of that array, adding it to the merged array
// - this mutates the copied arrays, ensuring that we don't see the same elements 
//   again on the next pass
// - once one array is empty, we know all the remaining elements in the other are larger, so we can just 
//   concat that array onto the merged array and output the result

function merge(array1, array2) {
  if (array1.length < 1) {
    return array2;
  } else if (array2.length < 1) {
    return array1;
  }

  var merged       = [];
  var array1copy   = array1.slice(); 
  var array2copy   = array2.slice();
  
  while (array1copy.length > 0 && array2copy.length > 0) {
    if (array1copy[0] < array2copy[0] || array1copy[0] === array2copy[0]) {
      merged.push(array1copy.shift());
    } else {
      merged.push(array2copy.shift());
    }
  }

  if (array1copy.length === 0) {
    merged = merged.concat(array2copy); 
  } else {
    merged = merged.concat(array1copy);
  }

  return merged;
}


// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));         // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));            // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));                // [1, 4, 5]
console.log(merge([1, 4, 5], []));                // [1, 4, 5]
console.log(merge([1, 1, 2, 5], [1, 2, 5, 6]))    // [1, 1, 1, 2, 2, 5, 5, 6]
console.log(merge([1, 2, 3, 4, 5], [2, 3, 5, 6])) // [1, 2, 2, 3, 3, 4, 5, 5, 6]

