function logInBox(string) {
  var topBottom = '+-';
  var secondFourth = '| ';
  var stringOutput = '| ' + string + ' |';

  for (var i= 0; i < string.length; i++) {
    topBottom += '-';
    secondFourth += ' ';
  }

  topBottom += '-+';
  secondFourth += ' |';

  console.log(topBottom);
  console.log(secondFourth);
  console.log(stringOutput);
  console.log(secondFourth);
  console.log(topBottom);
}