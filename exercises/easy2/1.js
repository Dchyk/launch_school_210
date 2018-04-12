function crunch(string) {
  var crunched = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      continue;
    } else {
      crunched += string[i];
    }
  }

  return crunched;
}