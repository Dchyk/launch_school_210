function integerToString(number) {
  var numbers = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  }

  if (number <= 9) {
    return numbers[number];
  }

  var tensInNumber = 0;
  var reducedNumber = number;
  var power;
  var base = 10;
  var stringNumbers = [];
  var multiplier;

  while (reducedNumber > 1) {
    reducedNumber = reducedNumber / 10;
    tensInNumber += 1;
  }

  for (power = tensInNumber - 1; power >= 0; power--) {
    multiplier = Math.floor(number / base**power);
    stringNumbers.push(numbers[multiplier]);
    number = number % base**power;

  }

  return stringNumbers.join('');
}