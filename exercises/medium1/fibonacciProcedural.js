// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. 
// The first two Fibonacci numbers are 1 and 1. 
// The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. 
// In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

function fibonacci(nth) {
  var fibNum = 1;
  var currentNum = 1;
  var previousNum = 1;

  if (nth <= 2) {
    return fibNum;
  }

  // For nth = 3 or more
  for (counter = 3; counter <= nth; counter++) {
    fibNum = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = fibNum;
  }

  return fibNum;
}

// Examples

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765