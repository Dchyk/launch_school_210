function rot13(str) {
  var encodedString = '';
  var currentCharCode;
  
  for (var i = 0; i < str.length; i++) {
    currentCharCode = str.charCodeAt(i);

    if (isEnglishChar(currentCharCode)) {
      // rotate and encode the character
      encodedString += rotatedChar(currentCharCode);
    } else {
      // Simply add the current non-letter character
      encodedString += str[i];
    }
  }

  return encodedString;
}

function isEnglishChar(charCode) {
  // Return true if the unicode value of charCode is an English character
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

function isLowerCase(charCode) {
  // Return true if the unicode value is a lowercase character
  return (charCode >= 97 && charCode <= 122);
}

function rotatedChar(charCode) {
  if (isLowerCase(charCode)) {
    if (charCode <= 109) {
      return String.fromCharCode(charCode + 13);
    } else {
      // Since the character is 13 or fewer characters from the end of the range of lower case 
      // letters (ie, its unicode value is greater than 109), we need to loop back around to 
      // the beginning as we count off 13 places.
      // Subtract the difference between the charCode and the first number out of range of the 
      // lower case letters (123), and subtract that difference from 13. Then add the resulting 
      // number to the first number in the range of lower case letters (97) to get the rotated 
      // unicode value.
      return String.fromCharCode(97 + (13 - (123 - charCode)));
    }
  } else {
    if (charCode <= 77) {
      return String.fromCharCode(charCode + 13);
    } else {
      // Follows the above logic to loop around to the beginning of the uppercase letters,
      // since they're at unicode values 65 through 90
      return String.fromCharCode(65 + (13 - (91 - charCode)));
    }
  }
}




// Iterate through the input string starting with the first character. 
// If the character's charCode is <65, >90 && <97, or >122, concat that character
// unchanged onto the encodedString.
// If the character's charcode is between 65 and 90, then if the unicode value is 
// less than 87, return fromCharCode(unicodeValueOfCurrentChar + 13);
// Else, set the current unicode value to 65 + (13 - (90 - unicodeValueOfCurrentChar));


// String. prototype.charCodeAt(index);
// String.fromCharCode(unicodeValue);

// Capital letters    65-90
// Lower case letters 97-122


