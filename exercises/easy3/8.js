function wordSizes(string) {
  string = stripString(string);

  if (string.length === 0) {
    return {};
  }

  var words = string.split(' ');
  var sizeCounts = {};
  var i;
  var key;

  for (i = 0; i < words.length; i += 1) {
    key = String(words[i].length);
    if (sizeCounts[key] === undefined) {
      sizeCounts[key] = 1;
    } else {
      sizeCounts[key] += 1;
    }
  }

  return sizeCounts;
}

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