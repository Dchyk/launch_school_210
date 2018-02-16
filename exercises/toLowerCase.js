function toLowerCase(str) {
  var downcasedString = '';

  for (var i = 0; i < str.length; i++) {
    currentCharCode = str.charCodeAt(i);

    if (currentCharCode <= 90 && currentCharCode >= 65)
      downcasedString += String.fromCharCode(str.charCodeAt(i) + 32);
    else {
      downcasedString += str[i];
    }
  }

  return downcasedString;
}