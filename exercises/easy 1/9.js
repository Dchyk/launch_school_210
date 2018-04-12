function multisum(number) {
  var result = 0;
  number = parseInt(number, 10);

  for (var i = 3; i <= number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      result += i;
    } 
  }

  return result;
}