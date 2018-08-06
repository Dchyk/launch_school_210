

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

// input: an integer
// output: an integer
// 
// algorithm
// - convert the input number to a string and save its length as a variable N
// - loop through the numbers N down to 2, decrementing N, and rotate the input number by 
//   N digits on each pass. Save the resulting number as the current number for the next rotation's input
// - return the resulting number

function maxRotation(number) {
  var maxRotations = String(number).length;

  if (maxRotations < 2) {
    return number;
  }

  var n;
  var rotatedNumber;

  for (n = maxRotations; n >= 2; n--) {
    rotatedNumber = rotateRightmostDigits(number, n);
    number = rotatedNumber;
  }

  return rotatedNumber;
}

function rotateRightmostDigits(number, n) {
  var numberChars = String(number).split('');
  var rotatedDigit = numberChars.splice(numberChars.length - n, 1)[0];
  
  return parseInt(numberChars.concat(rotatedDigit).join(''), 10);
}
