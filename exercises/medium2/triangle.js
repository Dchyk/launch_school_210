// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater 
// than the length of the longest side, and every side must have a length greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, 
// and returns one of the following four strings representing the triangle's classification: 
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// input: 3 numbers
// output: a string 

// Rules
// - if the input includes a zero, return 'invalid'
// - if the sum of the two smallest numbers is less than or equal to the largest number, return 'invalid'
// - if all three numbers are the same, return 'equilateral'
// - if two of the numbers are the same, return 'isosceles'
// - if all three of the numbers are the same, return 'scalene'

// Algorithm
// - store the input numbers as an array of three numbers, and sort it by value lowest to highest
// - test for validity and retun with 'invalid' if invalid conditions are met
//  so return 'invalid'
// - - if the sum of elements 0 and 1 is >= the value of element 2, return invalid
// - Now we have a sorted array we know is valid, so we can test as follows:
// - - if every element of the array is equal in value to the first element, they're all the same - 'equilateral'
// - - if two elements in the array are the same, return 'isosceles'
// - - else, return 'scalene'

function triangle(...sides) {
  var sides = sides.sort(function(side1, side2) {
    return side2 < side1; 
  });

  if (sides[0] + sides[1] <= sides[2] || sides.indexOf(0) !== -1) {
    return 'invalid';
  } 

  if (sides.every(function(side) { return side === sides[0]; } )) {
    return 'equilateral';
  } else if (hasDuplicateSide(sides)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function hasDuplicateSide(sides) {
  var foundTwo = false;

  sides.forEach(function(side) {
    if (sides.indexOf(side) !== sides.lastIndexOf(side)) {
      foundTwo = true;
    }
  });

  return foundTwo;
}

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(301, 301, 301));  // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(4, 4, 1));        // "isosceles"
console.log(triangle(900, 900, 354));  // "isosceles"
console.log(triangle(18, 33, 39));     // "scalene"
console.log(triangle(13, 14, 15));     // "scalene"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(0, 0, 0));  // "invalid"

