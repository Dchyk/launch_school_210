var POWER = 10;

function reverseNumber(num) {
  var numbers = String(num).split('').map( function(strNum) {
    return parseInt(strNum, 10);
  });

  return numbers.reduce( function(prev, current, index) {
    return prev + (current * POWER**index); 
  });
}

// Tests
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1