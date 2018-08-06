// Write a function that takes a sentence string as an argument, 
// and returns that string with every occurrence of a 
// "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
// — converted to its corresponding digit character.

// input: a string
// output: a string with number words replaces with numbers

// algorithm
// - split the input string into an array of words
// - map the words into a new array - 
// - - if Object.keys(NUMBER_WORDS).indexOf(word) !== -1, then return NUMBER_WORDS[word]
// - - otherwise, just return the word
// account for punctuation? 
// - could extract the characters only, replace with the digit that matches, then join the word back together
// - since punctuation will always be at the end of a string, can just pop that off? 
var NUMBER_WORDS = {
  'zero': 0, 
  'one': 1, 
  'two': 2, 
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

function wordToDigit(sentence) {
  
  var words = sentence.split(' ');
  var testedWord;
  var punctuation;
  
  var digitized = words.map(function(word) {
    if (/[^a-z]/i.test(word[word.length - 1])) {
      punctuation = word[word.length - 1];
      testedWord  = word.substring(0, word.length - 1);
    } else {
      testedWord  = word;
    }

    if (Object.keys(NUMBER_WORDS).indexOf(testedWord) !== -1) {
      testedWord = NUMBER_WORDS[testedWord];
    } 

    if (punctuation) {
      return testedWord + punctuation;
    } else {
      return testedWord;
    }
  });

  return digitized.join(' ');
}

// Examples:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('No numbers here.'));
// "No numbers here."

console.log(wordToDigit('Zero and six and seven.'));
// "0 and 6 and 7."

console.log(wordToDigit('There are nine reasons why eight is the best number.'));
// "There are 9 reasons why 8 is the best number."

console.log(wordToDigit(''));
// "";

console.log(wordToDigit('What if the input includes 8, 9, or 0?'));
// "What if the input includes 8, 9, or 0?"