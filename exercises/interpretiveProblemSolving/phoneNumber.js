console.log(phoneNumber('1234567891'));
console.log(phoneNumber('123456789'));
console.log(phoneNumber('1'));
console.log(phoneNumber('1'));
console.log(phoneNumber('11234567891'));
console.log(phoneNumber('1-123-456-7891'));
console.log(phoneNumber('1 123 456 7891'));
console.log(phoneNumber('1 123 456  7891'));
console.log(phoneNumber('1 123 456 7891 43'));
console.log(phoneNumber('1 (123) 456 7891-43'));
console.log(phoneNumber('1.123.456.7891.43'));
console.log(phoneNumber('1 123.456.7891'));

'1234567891' // '1234567891'
'123456789'  // '0000000000'
'1'          // '0000000000'
''           // '0000000000'
'11234567891' // '1234567891'
'1-123-456-7891' // '1234567891'
'1 (123) 456-7891' // '1234567891'
'1 123 456 7891' // '1234567891'
'1 123 456 7891' // '1234567891'
'1 123 456 7891 43' // '0000000000'
'1 (123) 456 7891-43' // '0000000000'
'1.123.456.7891.43' // '0000000000'
'1 123.456.7891' // '1234567891'

// input - a string
// output - a string
// 
// rules - input string can contain only numbers, spaces,
// dashes, dots and parentheses, or it will be rejected as invalid
// If input is valid, then remove non-numbers.
// If remaining string of numbers has 10 numbers, it is valid.
// If the remaining string has 11 numbers and the first number
// is a 1, it is valid, otherwise it is invalid
// If the remaining string has more than 11 numbers it is invalid.
// If the string is valid return it, trimming the first 1 if it has
// 11 characters.

// check input string agains /[^0-9\s-().]/
// Question - is it valid input if there are multiple spaces, dashes,
// dots or parentheses in a row?
// If match returns null, replace all non-numbers
// in the input string with '' so they are removed.
// If the string's length is greater than 11, or less than 10, return '0000000000'
// If the string's length is equal to 11 and string[0] is === 1, 
// return string.slice(1, string.length)
// Otherwise the string must return the string itself sinceit must have 
// a length of 10.

function invalidChars(phoneNumber) {
  phoneNumber.match(/[^0-9()-.\s]/);
}

function phoneNumber(number) {
  var cleanedNumber;

  if (invalidChars(number)) {
    return '0000000000';
  } else {
    cleanedNumber = number.replace(/[^0-9]/g, '');
  }

  if (cleanedNumber.length > 11 || cleanedNumber.length < 10) {
    return '0000000000';
  } else if (cleanedNumber.length === 11 && cleanedNumber[0] === 1) {
    return cleanderNumber.slice(1);
  } else if (cleanedNumber.length === 11 && cleanedNumber[0] !== 1){
    return '0000000000';
  } else {
    return cleanedNumber;
  }
}