function wordLengths(str) {
  if (!str) {
    return [];
  }
  
  return str.split(' ').map(function(word) {
    return word + ' ' + String(word.length);
  })
}