// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

// input: an array
// output: a new array

// algorithm
// - if the input array.isArray() returns false, return undefined
// - if the the input array.length === 0, return []
// Else, proceed
// - declare a new array variable, and assign it the value of array.slice(1) + array
// - push in the value of array[0]
// - return the new array

function rotateArray(array) {
  var rotated; 

  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  rotated = array.slice(1);
  rotated.push(array[0]);

  return rotated;
}