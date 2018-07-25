Write a function that implements the Caesar Cipher. 
The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. 
It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions 
away in the alphabet. 
For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. 
This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. 
The substituted letters are in the same letter case as the original letter. 
If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Examples:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// input - a string
// output - an encrypted string. letters are substituted, with upper or lower case preserved as in the input, all other characters left as-s. 
// 
// Algorithm
// - initialize an array to hold the characters in the input string. split the input into chars.
// - iterate over the array element by element/map the results into a new array
// - - if the element is not a letter, return the element
// - - if the element is a letter, return the character n positions to the right in the alphabet - meaning, current char number + n
// - - if the element's position + n is > the highest char code in that range, count toward the highest, 
//     char code until you reach it, then keep counting from the lowest charcode. Wherever you wind up is the shifted position.
//
// - - 'a'.charCodeAt(0) === 97, 'z'.charCodeAt(0) === 122
// - - 'A'.charCodeAt(0) === 65, 'Z'.charCodeAt(0) === 90
// 25 + (positions - (122 - currentPosition))

// helper functions 
// - isLetter(element) - returns true if something is a letter
// - shiftedChar(char, positions) - returns the char at char.charCodeAt(0) + positions
// - isUpperCase(letter), isLowerCase(letter)

function isLetter(element) {
  return /[a-z]/i.test(element);
}

function shiftedChar(char, positionsToShift) {
  var charPosition = char.charCodeAt(0);

  if (isUpperCase(char)) {

  }
  

  return String.fromCharCode(char.charCodeAt(0) + positionsToShift);
}

function isUpperCase(letter) {
  return (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90);
}

function isLowerCase(letter) {
  return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122);
}