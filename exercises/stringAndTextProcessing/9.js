function searchWord(word, text) {
  return text.split(' ').filter( function(testedWord) {
    return testedWord.toLowerCase() === word.toLowerCase();
  }).length;
}

// Further exploration

function searchWord(word, text) {
  var reg = '\\b' + word + '\b'
  var regex = new RegExp(reg, 'gi');
  var matches = text.match(regex);

  return matches ? matches.length : 0;
}