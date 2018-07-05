function staggeredCase(sentence) {
  return sentence.split('').map(function(char, idx) {
    return (idx % 2 === 0) ? char.toUpperCase() : char.toLowerCase()
  }).join('');
}