var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

function doubleConsonants(string) {
  return string.split('').map( function(character) {
    if (consonants.indexOf(character.toLowerCase()) !== -1) {
      return character + character;
    } else {
      return character;
    }
  }).join('');
}
