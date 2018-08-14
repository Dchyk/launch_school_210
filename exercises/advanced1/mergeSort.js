// Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, 
// then combining those nested subarrays back together in sorted order. 
// It is best explained with an example. 
// Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. 

// We'll start off by breaking the array down into nested subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. 

// The function should sort the array using the merge sort algorithm as described above. 

// You may assume that every element of the array will be of the same data type—either all numbers or all strings.

// input: an array
// output: a new array sorted

// Decompose the input array into nested subarrays. Keep doing this until each nested subarray contains only one element.
// Take the resulting array of arrays and run each smallest subarray through the "merge" function, passing the result upward
// Once the top level is reached, return the sorted array.

// We know the function will use recursion
// - For the breaking down, at each step, it looks like we will divide the array into equal parts and make them sub arrays. 
// - What do we do if the array has an odd number of elements? Just divide in half and add one more to one half?

// var arr = [9, 5, 7, 1];
// var firstHalf = arr.slice(0, (arr.length/2));
// var lastHalf  = arr.slice((arr.length/2), 0);

// Now that we're able to decompose the array, the next step is to rebuild it by merging together each sub array at the 
// lowest level. 
// [[[9], [5]], [[7], [1]]]

// [0][0][0], [1]
// We need to drill down recursively through the nested arrays until we have 2 arrays, each with 1 element. IF we do, then
// return these two arrays merged. If we don't, then divide them and pass them into this function again. 
// One possible approach is testing if an element in either array is itself an array. If it is, then we need to subdivide it again.
// If each array contains only numbers or strings, then we can merge them

// input: two arrays
// 

var test = [9, 5, 7, 1];

function subdivide(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return [subdivide(arr.slice(0, arr.length/2)), subdivide(arr.slice(arr.length/2))];
  }
}

var divided = subdivide(test);

// [[[9], [5]], [[7], [1]]]

function recursiveMerge(arr) {
  if (Array.isArray(arr[0]) && !Array.isArray(arr[0][0])) {
    return merge(arr[0], arr[1]);
  } else {
    return [recursiveMerge(arr[0]), recursiveMerge(arr[1])];
  }
}

var merged = merge(recursiveMerge(divided)[0], recursiveMerge(divided)[1]); // For now, this works.

console.log(merged);

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


function mergeSort(arr) {
  var divided = subdivide(arr);

  return merge(recursiveMerge(divided)[0], recursiveMerge(divided)[1]);
}

