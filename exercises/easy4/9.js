var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

function countOccurrences(array) {
  var countOfWords = {};
  var i;
  var testedWord;

  for (i = 0; i < array.length; i += 1) {
    testedWord = array[i];

    if (countOfWords[testedWord]) {
      countOfWords[testedWord] += 1;
    } else {
      countOfWords[testedWord] = 1;
    }
  }

  for (word in countOfWords) {
    console.log(word, '=>', countOfWords[word]);
  }
}