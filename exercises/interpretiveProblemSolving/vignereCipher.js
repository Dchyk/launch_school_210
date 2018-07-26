// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 
// It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. 
// For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. 
// In other words, the shift value used for a letter is equal to its index value in the alphabet. 
// This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. 
// To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. 
// Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. 
// The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// More test cases
// Hello World
// plain : Hel low orl d  
// shift : Bye Bye Bye B  2, 25, 5
// cipher: Jdq nnb qqq f 

// 'Bye', 'Bye'  // Dxj

// 'Testing', 'Hi'
// Te st in g
// Hi Hi Hi H    8, 9
// Bn ar qw o // Bnarqwo

console.log(vignereCipher('Hello World', 'Bye')); // Jdqnn bqqqf
console.log(vignereCipher('Bye', 'Bye'));         // Dxj
console.log(vignereCipher('Testing', 'Hi'));      // Bnarqwo


// alphabet
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// To find a given letter
function value(letter) {
  return alphabet.indexOf(letter.toLowerCase() + 1;
}

// Add the code from caesarEncrypt

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

