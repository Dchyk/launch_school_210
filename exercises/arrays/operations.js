function push(arr, newElement) {
  var newIndex = arr.length;

  arr[newIndex] = newElement;

  return arr.length;
}

function pop(arr) {
  var lastElement = arr[arr.length -1];
  var newArray = [];

  for (var i = 0; i < arr.length - 1; i++) {
    newArray[i] = arr[i];
  }

  arr.length = newArray.length;
  return lastElement;
}

function unshift(arr, newElement) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = newElement;

  return arr.length;
}

function shift(arr) {
  var firstValue = arr[0];

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return firstValue;
}


// More operations

function indexOf(arr, value) {
  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

function lastIndexOf(arr, value) {
  var i;

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  

  return index;
}

// Slice

function slice(array, start, end) {
  var sliced = [];

  for (i = start; i < end; i++) {
    sliced.push(array[i]);
  }

  return sliced;
}

// Splice

function splice(array, start, numberOfValues) {
  var removedValues = [];

  for (var i = start; i < array.length; i++) {
    if (i < start + numberOfValues) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removedValues;
}

// Concat

function concat(array1, array2) {
  var newArray = [];

  for (var i = 0; i < array1.length; i++) {
    push(newArray, array1[i]);
  }

  for (var i = 0; i < array2.length; i++) {
    push(newArray, array2[i]);
  }

  return newArray;
}

// Join

function join(array, str) {
  var joined = '';

  for (var i = 0; i < array.length; i++) {
    joined += String(array[i]);
    if (i < array.length - 1) {
      joined += str;
    }
  }

  return joined;
}

// Comparing arrays

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  
  return true;
}

// First element

function firstElementOf(arr) {
  return arr[0];
}

// Last element 

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// nth element

function nthElementOf(arr, index) {
  return arr[index];
}

// firstNof

function firstNOf(arr, count) {
  var subArray = []

  for (var i = 0; subArray.length < count; i++) {
    subArray.push(arr[i]);
  }

  return subArray;
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// lastNOf

function lastNOf(arr, count) {
  if (count > arr.length) {
    count = arr.length;
  }
  return arr.slice(arr.length - count)
}

// endsOf

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

//oddElementsOf

function oddElementsOf(arr) {
  var odds = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      odds.push(arr[i]);
    } 
  }

  return odds;
}

// combinedArray

function combinedArray(even, odd) {
  var combined = [];
  var len = even.length;

  for (var i = 0; i < len; i++) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}

// all reversed 

function combinedReversed(array) {
  var combined = [];

  for (var i = 0; i < array.length; i++) {
    combined.push(array[i]);
  }

  var reversed = array.reverse();

  for (var i = 0; i < reversed.length; i++) {
    combined.push(reversed[i]);
  }

  return combined;
}

// array sort

function compare(a, b) {
  if (a < b) {
    return -1;
  }
}

function sortDescending(arr) {
  var sortedArr = Array.from(arr);

  return sortedArr.sort(function(a, b) {
    return b - a;
  });
}

// matrixSums

function matrixSums(arr) {
  var sums = [];
  var thisSum = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      thisSum += arr[i][j];
    }
    sums.push(thisSum);
    thisSum = 0;
  }

  return sums;
}

// uniqueElements 

function uniqueElements(arr) {
  var uniques = [];

  for (var i = 0; i < arr.length; i++) {
    if (!uniques.includes(arr[i])) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

// Find Missing Numbers

