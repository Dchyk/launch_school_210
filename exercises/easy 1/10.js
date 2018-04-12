function asciiValue(string) {
  var value = 0;

  for (var i = 0; i < string.length; i++) {
    value += string.charCodeAt(i);
  }

  return value;
}