// Find the duplicate

// Search all elements of an array for the only value that occurs twice
// (all other values occur once), and return that value.


function findDup(array) {
  var testedValue;
  var i;
  var j;
  var matches;

  for (i = 0; i < array.length; i += 1) {
    testedValue = array[i];
    matches = 0;
    
    for (j = 0; j < array.length; j+= 1) {
      if (array[j] === testedValue) {
        matches += 1;
      }
    }

    if (matches > 1) {
      return testedValue;
    }
  }
  
  return 'No duplicate values found.';
}
