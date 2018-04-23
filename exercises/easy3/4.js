function isPalindrome(string) {
  if (reverse(string) === string) {
    return true;
  }

  return false;
}

function reverse(string) {
  var reversed = '';
  var i;

  for (i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }

  return reversed;
}

function isRealPalindrome(string) {
  var reversed = reverse(string).toLowerCase();
  string = string.toLowerCase();
  
  if (stripNonAlphas(string) === stripNonAlphas(reversed)) {
    return true;
  }

  return false;
}

function isAlphaNumeric(char) {
  var code = (char.charCodeAt(0));

  return ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
}

function stripNonAlphas(string) {
  var stripped = '';
  var i;

  for (var i = 0; i < string.length; i++) {
    if (isAlphaNumeric(string[i])) {
      stripped += string[i];
    }
  }

  return stripped;
}