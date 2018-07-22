// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
// You can also only use each block once.

// Write a function that takes a word string as an argument, 
// and returns true if the word can be spelled using the set of blocks, 
// or false otherwise. 

// You can consider the letters to be case-insensitive when you apply the rules.

// input: a string of two letters
// output: true or false (boolean)
// 

// Best data structure for this?
// An object with key: value pairs?
// algorithm:
// - first validate input string. if the string contains non-letter characters, or has length === 0, return false
// - convert to lowercase 
// iterate over the chars in the input string, and look up the "key: value" push both the key and the value into an array of "used" chars, 
// and test against that on further iterations through the input chars. If an input char exists in the "used"
// chars array, return false; otherwise continue. If the end of the input string is reached, return "true."
// 

var BLOCKS = {
  "B": "O",
  "O": "B",
  "X": "K",
  "K": "X",
  "D": "Q",
  "Q": "D",
  "C": "P",
  "P": "C",
  "N": "A",
  "A": "N",
  "G": "T",
  "T": "G",
  "R": "E",
  "E": "R",
  "F": "S",
  "S": "F",
  "J": "W",
  "W": "J",
  "H": "U",
  "U": "H",
  "V": "I",
  "I": "V",
  "L": "Y",
  "Y": "L",
  "Z": "M",
  "M": "Z",
}

// var BLOCKS = {
//   "B": "O",
//   "X": "K",
//   "D": "Q",
//   "C": "P",
//   "N": "A",
//   "G": "T",
//   "R": "E",
//   "F": "S",
//   "J": "W",
//   "H": "U",
//   "V": "I",
//   "L": "Y",
//   "Z": "M",
// }

function isinValid(str) {
  return str.match(/[^a-z]/i) !== null;
}

function isBlockWord(letters) {
  var testedLetters;
  var usedLetters = [];
  var letter;

  if (isinValid(letters)) {
    return false;
  }

  testedLetters = letters.toUpperCase();

  for (var i = 0; i < testedLetters.length; i++) {
    letter = testedLetters[i];

    if (usedLetters.indexOf(letter) === -1 && usedLetters.indexOf(BLOCKS[letter]) === -1) {
      usedLetters.push(letter);
      usedLetters.push(BLOCKS[letter]);
    } else {
      return false;
    }
  }

  return true;
}








console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('00'));  // false
console.log(isBlockWord('AA'));  // false
console.log(isBlockWord('.'));    // false
console.log(isBlockWord('BOG'));  // false
console.log(isBlockWord('JAW')); // false
console.log(isBlockWord('jaw')); // false

console.log(isBlockWord('jet')); // true
console.log(isBlockWord('A'));   // true
console.log(isBlockWord('BEST')); // true
console.log(isBlockWord('BAG'));  // true
console.log(isBlockWord('JET')); // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('jest'));       // true


