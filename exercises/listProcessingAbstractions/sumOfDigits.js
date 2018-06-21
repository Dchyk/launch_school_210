function sumOfDigits(num) {
  var arrayOfNums = String(num).split('');

  return arrayOfNums.reduce( function(num1, num2){
    return parseInt(num1, 10) + parseInt(num2, 10);
  });
}