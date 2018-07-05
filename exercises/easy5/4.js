// If str has an odd length, return 1 character from the center.
// Since the length property is always 1 more than the highest index,
// subtract 1 to get the index, and then divide this number by 2 to get th "center"

function centerOf(str) {
  var length = str.length;
  var center;

  if (isEven(length)) {
    center = str.slice(-(length / 2 + 1), -(length / 2 - 1));
  } else {
    center = str[(length - 1) / 2];
  }

  return center;
}

function isEven(num) {
  return num % 2 === 0;
}

// Tests
centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"