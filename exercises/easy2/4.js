function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 2;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second;
    index += 1; 
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}



function nthFibonacci(n) {
  if (n === 1 || n === 2) {
    return n;
  } else {
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }
}