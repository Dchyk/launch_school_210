function validLuhn(num) {
  var nums = num.replace(/\D/g, '').split('').reverse().map(Number);

  return nums.map(function(num, index) {
    if (index % 2 === 0) {
      return num;
    } else {
      return (num * 2 < 10) ? num * 2 : (num * 2) - 9;
    }
  }).reduce(function(a, b) {
    return a + b
  }) % 10 === 0;
}

// Given an invalid luhn number, write a function that can create a digit 
// that when added to the input number, will create a valid luhn number.

// Algorithm
// - loop through the numbers 0 through 9, adding each to the front of the 
//   input number and testing each for luhn validity.
//   - when a valid luhn is found, return the current value of the added number.

function makeValidLuhn(num) {
  var checkDigit;
  var testedLuhn;

  if (validLuhn(num)) {
    return num;
  } else {
    for (checkDigit = 0; checkDigit < 10; checkDigit += 1) {
      testedLuhn = num + String(checkDigit);
      if (validLuhn(testedLuhn)) {
        return testedLuhn;
      }
    }
  }
}