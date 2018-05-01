function stripString(string) {
  var words = string.split(' ');
  var stripped = [];
  var strippedWord = '';
  var i;
  var j;
  var currentChar;

  for (var i = 0; i < words.length; i += 1) {
    for (var j = 0; j < words[i].length; j += 1) {
      currentChar = words[i][j].toLowerCase();
      if ( currentChar < 'a' || currentChar > 'z') {
        continue;
      } else {
        strippedWord += currentChar;
      }
    }
    stripped.push(strippedWord);
    strippedWord = '';
  }

  return stripped.join(' ');
}