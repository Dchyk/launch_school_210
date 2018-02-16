function trim(str) {
  var trimmed = '';
  var trimmedBoth = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    } else {
      var currentIndex = i;
      while (str[currentIndex] !== undefined) {
        trimmed += str[currentIndex];
        currentIndex++;
      }
      break;
    }
  }

  for (var i = (trimmed.length - 1); i >= 0; i-- ) {
    if (trimmed[i] === ' ') {
      continue;
    } else {
      var currentIndex = 0;

      while (currentIndex <= i) {
        trimmedBoth += trimmed[currentIndex];
        currentIndex++; 
      }
    break;
    }
  }

  return trimmedBoth;
}

// Input: a string

// Output : a string

// Algorithm
// 1. Initialize a new variable to hold the trimmed string, "trimmed"
// 2. Iterate through the input str starting with the element at index 0, and ending with
//    the element at str.length - 1
// 3. If the element is a space, skip this iteration. If it is a non-space character, then save
//    a substring - str[currentIndex] through str[length - 1] as "trimmed". This is result in a string
//    with the leading white space removed.
// 4. Now iterate through the "trimmed" string from the end and perform the same operation, starting with 
//    the element at index trimmed.length - 1, and decrementing the index at each iteration. If the 
//    element is a space, continue, if it is not a space, then save the trimmed[0] through
//    trimmed[currentIndex] as the trimmed string.
// 5. Return the trimmed string.