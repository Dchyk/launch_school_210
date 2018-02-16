function indexOf(firstString, secondString) {
  var firstLength = firstString.length;
  var secondLength = secondString.length;  
  var currentIndex = 0;
  var matched = false;

  while (currentIndex <= (firstLength - secondLength)) {
    var matches = 0;
    for (i = 0; i < secondLength; i++) {
      console.log(firstString[currentIndex + i], secondString[i])
      if (firstString[currentIndex + i] === secondString[i]) {
        matches += 1;
      } 
      console.log(matches);
    }

    if (matches === secondLength) {
      matched = true;
      return currentIndex;
    } 

    currentIndex += 1;
  }
  
  if (matched) {
    return currentIndex;
  } else {
    return -1;
  }
}

function lastIndexOf(firstString, secondString) {
  var firstLength = firstString.length;
  var secondLength = secondString.length;  
  var currentIndex = firstLength - secondLength;
  var matched = false;

  while (currentIndex >= 0) {
    var matches = 0;
    for (i = 0; i < secondLength; i++) {
      console.log(firstString[currentIndex + i], secondString[i])
      if (firstString[currentIndex + i] === secondString[i]) {
        matches += 1;
      } 
      console.log(matches);
    }

    if (matches === secondLength) {
      matched = true;
      return currentIndex;
    } 

    currentIndex -= 1;
  }
  
  if (matched) {
    return currentIndex;
  } else {
    return -1;
  }
}