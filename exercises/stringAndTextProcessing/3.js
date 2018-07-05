function letterCaseCount(str) {
  var caseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  str.split('').forEach( function(char) {
    if (isUpperCase(char)) {
      caseCount.uppercase += 1;
    } else if (isLowerCase(char)) {
      caseCount.lowercase += 1;
    } else {
      caseCount.neither += 1;
    }
  });

  return caseCount;
}

function isUpperCase(char) {
  var upperCase = RegExp(/[A-Z]/);
  
  return upperCase.test(char);
}

function isLowerCase(char) {
  var lowerCase = RegExp(/[a-z]/);

  return lowerCase.test(char);
}