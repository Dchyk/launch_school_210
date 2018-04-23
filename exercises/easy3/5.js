function isPalindromicNumber(number) {
  var stringNum = String(number);

  return (stringNum.split('').reverse().join('') === stringNum);
}