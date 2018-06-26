function acronym(str) {
  return str.replace('-', ' ').split(' ').map( function(word) {
    return word[0].toUpperCase();
  }).join('');
}