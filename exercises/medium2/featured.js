// A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, 
// with all of its digits occuring exactly once each.

// For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), 
// and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. 
// Issue an error message if there is no next featured number.

// input: a number
// output: a number

// Algorithm
// - take the input number, and start adding by 1
// - after each addition, check if the number is divisible by 7 and is odd
// - if it is not, continue
// - if it is divisible by 7, check if the digits are unique.
// - - convert the number to a String, split it into characters, and check if they are all unique
// - if not, continue
// - if they are unique, return that number

function featured(number) {
  while (true) {
    number += 1;

    if (number % 7 === 0 && number % 2 !== 0 && digitsAreUnique(number)) {
      return number;
    }
  }
}

function digitsAreUnique(number) {
  var numbers = String(number).split('');

  var duplicates = numbers.reduce(function(acc, num) {
    return numbers.indexOf(num) !== numbers.lastIndexOf(num) ? acc += 1 : acc;
  }, 0);

  return duplicates === 0;
}

// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987

