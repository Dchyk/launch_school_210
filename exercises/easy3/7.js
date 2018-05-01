function letterSwap(string) {
  var letters = string.split('');
  var swapped = [];
  var lastIndex = string.length - 1;
  var middle = letters.slice(1, lastIndex);
  var i;

  swapped[0] = letters[lastIndex];
  swapped[lastIndex] = letters[0];

  if (middle.length > 0) {
    for (i = 0; i < middle.length; i += 1) {
      swapped[i + 1] = middle[i]; 
    }
  }

  return swapped.join('');
}

function swap(string) {
  var words = string.split(' ');
  var swappedWords = [];
  var i;
  
  for (i = 0; i < words.length; i += 1) {
    swappedWords.push(letterSwap(words[i]));
  }

  return swappedWords.join(' ');
}