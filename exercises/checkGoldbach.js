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

function checkGoldbach(number) {
  if (number < 4 || number % 2 !== 0) {
    console.log(null);
  }

  for (var i = 2; i <= (number / 2); i++) {
    if (isPrime(i) && isPrime(number - i)) {
      console.log(i, (number - i));
    }
  }
}
// if number is odd or < 4, log null