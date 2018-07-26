// Write a function that implements the Caesar Cipher. 
// The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. 
// It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions 
// away in the alphabet. 
// For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. 
// This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. 
// The substituted letters are in the same letter case as the original letter. 
// If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// Examples:

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

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
                          
// // If the number of positions to move takes you over the limit, then wrap back around
// // caesarEncrypt('y', 5); // d
// // y's charCode is 121. 121 + 5 = 126. Since 122 is the highest, we need to loop around. So we subtract 122 from 126, and
// // are left with 4. So we then add 4 to the lowest letter code, 97, and get 101

// 121 + 5 = 126
// 126 - 122 = 4

// caesarEncrypt('a', 47) // 'v'

// 97 + 47 = 144
// 144 - 122 = 22
// 96 + 22 = 118 // 'v'

// caesarEncrypt('a', 987)
// 97 + 987 = 1084
// 1084 - 122 = 108 // "l"

// while (code >= 122) {
//   code -= 122;  
// } // Or just use code % 122
// This is important for mental models... if what I want to do is loop through some number, subtracting
// the same amount on each iteration until the number N is less than or equal to some other number M,
// applying N % M will return the right value in much more direct way

function caesarEncrypt(message, shift) {
  return message.split('').map(function(char) {
    return (isLetter(char)) ? shiftedChar(char, shift) : char;
  }).join('');
}

function isLetter(element) {
  return /[a-z]/i.test(element);
}

function shiftedChar(char, positionsToShift) {
  var lowest;
  var highest;
  var shiftedPosition = char.charCodeAt(0) + positionsToShift;

  if (isUpperCase(char)) {
    lowest = 65;
    highest = 90;
  } else if (isLowerCase(char)) {
    lowest = 97;
    highest = 122;
  }

  if (shiftedPosition > highest) {
    shiftedPosition = (lowest - 1) + (shiftedPosition % highest);
  }

  return String.fromCharCode(shiftedPosition);
}

function isUpperCase(letter) {
  return (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90);
}

function isLowerCase(letter) {
  return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122);
}
