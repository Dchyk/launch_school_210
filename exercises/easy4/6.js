function showMultiplicativeAverage(array) {
  var total;
  var average;
  var multiplicativeAverage;

  total = array.reduce( function(a, b) {
    return a * b;
  });

  average = total / array.length;

  multiplicativeAverage = String(round(average, 3));

  // Pad with zeros if necessary
  while (numberOfDecimals(multiplicativeAverage) < 3) {
    multiplicativeAverage += '0';
  }

  return multiplicativeAverage;
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function numberOfDecimals(stringNum) {
  var decimals = stringNum.split('.')[1];

  return decimals.length;
}