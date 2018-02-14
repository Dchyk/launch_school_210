// Write a function that takes a number argument, and returns true
// if the number is prime, or false if it is not

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (var i = number - 1; i >= 2; i--) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  
  return true;
}