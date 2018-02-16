function startsWith(str, searchString) {
  var startsWith;

  if (searchString === '') {
    return true;
  }

  for (var i = 0; i < searchString.length; i++) {
    if (str[i] === searchString[i]) {
      startsWith = true;
    } else {
      startsWith = false;
    }
  }

  return startsWith;
}