function swapcase(str) {
  return str.split('').map(function(char) {
    return (char.match(/[a-z]/)) ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}