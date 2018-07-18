function validLuhn(num) {
  var nums = num.replace(/\D/g, '').split('').reverse().map(Number);

  return nums.map(function(num, index) {
    if (index % 2 === 0) {
      return num;
    } else {
      return (num * 2 < 10) ? num * 2 : (num * 2) - 9;
    }
  }).reduce(function(a, b) {
    return a + b
  }) % 10 === 0;
}