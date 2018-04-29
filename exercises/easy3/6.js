function runningTotal(arr) {
  var totals = [];
  var i;
  
  if (arr.length < 2) {
    return arr;
  } else {
    // start with the first element in the input array
    totals[0] = arr[0];
  }

  // then start with the second element in the input array
  // and calculate them
  for (i = 1; i < arr.length; i += 1) {
    totals[i] = arr[i] + totals[i-1];
  }

  return totals;
}





