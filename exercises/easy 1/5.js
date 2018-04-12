var userInteger = parseInt(prompt('Please enter an integer greater than 0:'));
var command = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

var result;

if (command === 's') {
  result = 0;
} else if (command === 'p') {
  result = 1;
}


for (var i = 1; i <= userInteger; i++) {
  if (command === 's') {
    result += i;
  } else if (command === 'p') {
    result *= i;
  }
}

console.log('The sum of the integers between 1 and ' + userInteger + ' is ' + result);