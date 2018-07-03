var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|d)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(nobler?)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or('s)?)?)/gi;

function sentiment(text) {
  var positiveWords = text.match(positiveRegex);
  var negativeWords = text.match(negativeRegex);

  console.log('There are', positiveWords.length, 'positive words in the text.')
  console.log('Positive sentiments: ', positiveWords.join(', '));

  console.log('There are', negativeWords.length, 'negative words in the text.')
  console.log('Negative sentiments: ', negativeWords.join(', '));

  var score = positiveWords.length - negativeWords.length;

  if (score > 0) {
    console.log('The sentiment of the text is Positive.');
  } else if (score < 0) {
    console.log('The sentiment of the text is Negative.');
  } else {
    console.log('The sentiment of the text is Neutral.')
  }
}
