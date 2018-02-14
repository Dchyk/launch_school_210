function gcd(number1, number2) {
  var largerNumber;
  var greatestCommonDivisor;

  if (number1 > number2) {
    largerNumber = number1;
  } else {
    largerNumber = number2;
  }

  for (var i = 1; i <= largerNumber; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      greatestCommonDivisor = i;
    }
  }

  return greatestCommonDivisor;
}