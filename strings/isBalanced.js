// input: a string 
// output: a boolean
// algorithim
// - traverse each character in the string. 
// - return true if the string contains 'balanced' pairs of 
//   parentheses - that all match like ( ), starting with ( and endint with ),
//   or false otherwise.

function isBalanced(string) {
  var parentheses = 0;
  var chars = string.split('');
  var i;

  for (i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') {
      parentheses += 1;
    } else if (chars[i] === ')') {
      parentheses -= 1;
    }

    if (parentheses < 0) {
      return false;
    }
  }

  return parentheses === 0;
}