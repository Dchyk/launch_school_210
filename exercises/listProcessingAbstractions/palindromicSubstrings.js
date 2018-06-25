function palindromes(str) {
  return substrings(str).filter( function(substring) {
    return substring.split('').reverse().join('') === substring && substring.length > 1;
  });
}

// Use the last two solutions: 
function substringsAtStart(str) {
  return str.split('').map( function(char, index) {
    return str.slice(0, index + 1);
  });
}

// LS Solution:
function substrings(string) {
  return string.split('').map(function (char, idx) {
    return substringsAtStart(string.substring(idx));
  }).reduce(function (result, array) {
    return result.concat(array);
  });
}