function substrings(str) {
  var chars = str.split('');
  var i;
  var subStrings = [];
  var subs;

  for (i = 0; i <= chars.length; i += 1) {
    var subs = substringsAtStart(str.slice(i));

    subs.forEach( function(sub) {
      subStrings.push(sub);
    });
  }

  return subStrings;
}

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