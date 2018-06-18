function sortLetters(word) {
  return word.split('').sort().join('');
}

function anagram(word, list) {
  var sortedWord = sortLetters(word);

  return list.filter( function(listItem) {
    return sortLetters(listItem) === sortedWord;
  })
}