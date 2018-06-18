function octalToDecimal(numString) {
  var numbers = numString.split('').reverse().map( function(number, index) {
    return parseInt(number, 10) * (8 ** index);
  });
  
  return numbers.reduce( function(a, b) {
    return a + b;
  })
}