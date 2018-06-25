function alphabeticNumberSort(numbers) {
  var stringNums = [];

  numbers.forEach( function(number) {
    stringNums.push(NUMBERS_AS_STRINGS[number]);
  });

  return stringNums.sort();
}

NUMBERS_AS_STRINGS = [
  'zero', 
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine', 
  'ten', 
  'eleven', 
  'twelve', 
  'thirteen', 
  'fourteen', 
  'fifteen', 
  'sixteen', 
  'seventeen', 
  'eighteen', 
  'nineteen'
];