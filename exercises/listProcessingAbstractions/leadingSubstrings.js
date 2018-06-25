// Iterate through the string and slice off substrings, 
// pushing them into a new array. 
// Start with 1 character, then add 1 character to the length
// of the slice each time 

function substringsAtStart(str) {
  return str.split('').map( function(char, index) {
    return str.slice(0, index + 1);
  });
}