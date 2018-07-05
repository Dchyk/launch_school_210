function wordCap(sentence) {
  return sentence.split(' ').map( function(word) {
    return (word[0].match(/[a-z]/)) ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word;
  }).join(' ');
}