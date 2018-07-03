function longestSentence(text) {
  var sentences = text.match(/\b[^.!?]+[!?.]/gi);

  var sentenceData = sentences.map(function(sentence) { 
    return {
      sentence: sentence,
      length: sentence.split(' ').length,
    }
  }).sort( function(sentence1, sentence2) {
    return sentence1.length < sentence2.length;
  });

  var longestSentence = sentenceData[0];

  console.log(longestSentence.sentence);
  console.log('The longest sentence has ', longestSentence.length, ' words.');
}


// console output:

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.
