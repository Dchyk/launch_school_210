function splitString(str, delimiter) {
  var delimitedString = '';
  var strings = [];

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== delimiter) {
      delimitedString += str[i];
      if (delimiter === '') {
        strings.push(str[i]);
      }
    } else {
      strings.push(delimitedString);
      delimitedString = '';
    }
  }

  // Add the last string
  strings.push(delimitedString);

  // Print out all the strings
  strings.forEach((el) => console.log(el));
}