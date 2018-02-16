// Repeating strings

function repeat(str, timesToRepeat) {
  newString = '';

  if (typeof timesToRepeat !== 'number' || timesToRepeat < 0) {
    return undefined;
  } else if (timesToRepeat === 0) {
    return '';
  }

  for (var i = 1; i <= timesToRepeat; i++) {
    newString += str;
  }

  return newString;
}