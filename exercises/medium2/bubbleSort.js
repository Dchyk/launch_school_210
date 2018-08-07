// A bubble sort works by making multiple passes (iterations) through an array. 
// On each pass, the two values of each pair of consecutive elements are compared. 
// If the first value is greater than the second, the two elements are swapped. 
// This process is repeated until a complete pass is made without performing 
// any swaps — at which point the array is completely sorted.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
// The sorting should be done "in-place" — that is, the function should mutate the array. 
// You may assume that the array contains at least two elements.

// input: an array
// output: the same array, mutated

// 


// Examples:



var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
