function stringy(int) {
  var newString = '';

  for (var i = 1; i <= int; i++) {
    if (i % 2 === 0) {
      newString += '0';
    } else {
      newString += '1';
    }
  }

  return newString;
}