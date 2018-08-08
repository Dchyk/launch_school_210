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

// Algorithm
// - 1) Outer loop - do while? - initialize a variable to keep track of whether sorting occurred on the current pass, 
//   and set it to "false"
// - 2) inner loop = iterate through the array, from the first element to the second-to-last element (array.length - 2)
// - - check if the value of array[i] > array[i + 1]
// - - if true, set array[i] = array[i + 1], array[i + 1] = array[i]
// - - set "sortingOccured" to true
// - - continue until the second to last element is reached.
// - - if sortingOccurred = true, start over at 1)

function bubbleSort(arr) {
  var sortingOccurred;
  var currentElement;
  var nextElement;

  do {
    sortingOccurred = false;

    for (i = 0; i < arr.length - 1; i++) {
      currentElement = arr[i];
      nextElement    = arr[i + 1];

      if (currentElement > nextElement) {
        arr[i] = nextElement;
        arr[i + 1] = currentElement;
        sortingOccurred = true;
      } 
    }

  } while (sortingOccurred);

  return arr;
}

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

var array = [1231, 2993, 89, 111, 547, 39173, 10]
bubbleSort(array);
console.log(array); // [10, 89, 111, 547, 1231, 2993, 39173]