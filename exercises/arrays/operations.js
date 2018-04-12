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