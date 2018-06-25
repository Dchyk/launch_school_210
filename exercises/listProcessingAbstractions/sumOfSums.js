function sumOfSums(arr) {
  var sums = [];
  var i;

  for (i = 1; i <= arr.length; i += 1) {
    sums.push( arr.slice(0, i).reduce(sum));
  }

  if (sums.length === 1) {
    return sums[0];
  } else {
    return sums.reduce(sum);
  }
}

function sum(a, b) {
  return a + b;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35