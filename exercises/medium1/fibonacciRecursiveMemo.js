var alreadyComputed = {};

function fibonacci(nth) {
  var fibNum;

  if (nth === 1 || nth === 2) {
    return 1;
  } else if (Object.keys(alreadyComputed).indexOf(String(nth)) !== -1) {
    return alreadyComputed[String(nth)];
  } else {
    fibNum = fibonacci(nth - 1) + fibonacci(nth - 2);
    alreadyComputed[String(nth)] = fibNum;
    return fibNum;
  }
}

// Examples

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765