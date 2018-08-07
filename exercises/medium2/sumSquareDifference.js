// Write a function that computes the difference between the square of the sum of the first n positive integers 
// and the sum of the squares of the first n positive integers.

// The square of the sum of the first n integers is computed by adding together, 1, 2, 3... up to n, then squaring
// this number.

// The sum of the squares of the first n integers is computed by squaring 1, then squaring 2, 3...up to n, and summing
// these numbers together.

// input: a number, n
// output: a number, the difference between the sum of squares and square of sums

// Algorithm
// - Can use recursive functions for both: 
// - - 1) get the sum by adding n to (n - 1) until n == 1 (the return condition), then squaring
// - - 2) get the squares by squaring n and adding that to the squaring (n - 1), until n == 1
// - - get the difference by subtracting the second result from the first

function sumSquareDifference(n) {
  return Math.pow(sumPositiveIntegers(n), 2) - sumSquaresOfPositiveIntegers(n);
}

function sumPositiveIntegers(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumPositiveIntegers(n - 1);
  }
}

function sumSquaresOfPositiveIntegers(n) {
  if (n === 1) {
    return 1;
  } else {
    return Math.pow(n, 2) + sumSquaresOfPositiveIntegers(n - 1);
  }
}

// Examples:

console.log(sumSquareDifference(2)); 3
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(4)); 
console.log(sumSquareDifference(5));
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

