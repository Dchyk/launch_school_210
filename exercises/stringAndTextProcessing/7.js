function staggeredCase(str) {
  var counter = 0;
  var outputString = '';

  for (var i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-z]/i)) {
      if (counter % 2 === 0) {
        outputString += str[i].toUpperCase();
        counter += 1;
      } else {
        outputString += str[i].toLowerCase();
        counter += 1;
      }
    } else {
      outputString += str[i];
    }
  }

  return outputString;
}