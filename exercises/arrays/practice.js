function lastInArray(arr) {
  return arr[arr.length - 1];
}

function rollCall(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

function reverseArray(arr) {
  var reversed = [];

  for (var i = (arr.length - 1); i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

function returnIndex(value, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

function arrayToString(arr) {
  var concatenated = '';

  for (var i = 0; i < arr.length; i++) {
    concatenated += String(arr[i]);
  }

  return concatenated;
}