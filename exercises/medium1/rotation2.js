// Write a function that rotates the last n digits of a number. 
// For the rotation, rotate by one digit to the left, moving the first digit to the end.

// Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

rotateRightmostDigits(735291, 7);     // 735291 ?
rotateRightmostDigits(735291, 0);     // 735291 ?

// input:  a number
// output: a number
// 
// Algorithm
// - convert the input number into a string, and split it into an array of number characters
// - initalize a var to hold the return value of the array.splice(array.length - n)
// - now concat the sliced value[0] (since splice returned an array) back onto the original array
// - join the array of chars back together, and convert it back into an integer
// - return the integer

function rotateRightmostDigits(number, n) {
  var numberChars = String(number).split('');
  var rotatedDigit = numberChars.splice(numberChars.length - n, 1)[0];
  
  return parseInt(numberChars.concat(rotatedDigit).join(''), 10);
}

