var vowels = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(string) {
  return string.split('').map( function(character) {
    if (vowels.indexOf(character) === -1) {
      return character + character;
    } else {
      return character;
    }
  }).join('');
}

// Refactor to check for digits, punctuation, or whitespace