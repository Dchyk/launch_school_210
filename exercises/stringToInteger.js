function stringToInteger(str) {
  var convertedInteger = 0;
  var tens = str.length - 1;
  var i;

  var numbers = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

  for (var i = 0; i < str.length; i++) {
    convertedInteger += numbers[str[i]] * (10**tens);
    tens -= 1;
  }

  return convertedInteger;
}

// Find the length of the string and subtract one - this will be the number of powers of 10
// involved in the number.  

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1));
    case '+':
      return stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
}