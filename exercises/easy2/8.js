function getAverage(a, b, c) {
  return (a + b + c) / 3;
}

function getGrade(a, b, c) {
  var average = getAverage(a, b, c);

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}