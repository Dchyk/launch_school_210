// Takes a string arg of 1 or more words, and returns a new
// string with any 5+ letter words reversed

function reverseWords(sentence) {
  return sentence.split(' ').map( function(word) {
    return (word.length >= 5) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"