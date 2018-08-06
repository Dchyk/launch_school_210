// Write a function that takes a string, and returns an object containing the following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// input: a string
// output: an object

// Algorithm
// - capture the length of the string
// - match lower case letters and divide the length of the resulting array by the length of the input string, then
//   multiply by 100 to get the percentage
// - do the same for upper case letters
// - subtract the sum of the lowercase and uppercase percentages from 100?
// or just do the same for the neither category

var lowercase = new RegExp(/[a-z]/g);
var uppercase = new RegExp(/[A-Z]/g);
var neither   = new RegExp(/[^a-z]/gi);

function letterPercentages(letters) {
  var percentages = {};
  var lettersLength = letters.length;

  percentages.lowercase = percentOfLetters(lowercase);
  percentages.uppercase = percentOfLetters(uppercase);
  percentages.neither   = percentOfLetters(neither);

  function percentOfLetters(pattern) {
    var matches = letters.match(pattern);

    if (matches) {
      return String( ((matches.length / lettersLength) * 100).toFixed(2) );
    } else {
      return '0.00';
    }
  }

  return percentages;
} 

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// 10
// lowercase: 5, so 5/10 * 100 = 50%
// uppercase: 1, so 1/10 * 100 = 10%
// neither: 4, so 4/10 * 100   = 40%
// or

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('AAaa'));
// { lowercase: "50.00", uppercase: "50.00", neither: "0.00" }

console.log(letterPercentages('AAFDADV'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages('aaweoindzasdlghj'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('E.q>'));
// { lowercase: "25.00", uppercase: "25.00", neither: "50.00" }