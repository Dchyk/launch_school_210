function findMatches(word, text) {
  var reg = '\\b' + word + '\\b'
  var regex = new RegExp(reg, 'gi');
  
  return text.match(regex);
}

function searchWord(word, text) {
  var matches = findMatches(word, text);

  return text.split(' ').map(function(testedWord){
    return (matches.indexOf(testedWord) < 0) ? testedWord : highlight(testedWord);
  }).join(' ');
}

function highlight(word) {
  return '**' + word.toUpperCase() + '**';
}

