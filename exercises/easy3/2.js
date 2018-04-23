var numbers = [];
var i;
var doesOrDoesNot = 'does not';

numbers.push(prompt('Enter the 1st number:'))
numbers.push(prompt('Enter the 2nd number:'))
numbers.push(prompt('Enter the 3rd number:'))
numbers.push(prompt('Enter the 4th number:'))
numbers.push(prompt('Enter the 5th number:'))
numbers.push(prompt('Enter the last number:'))

for (var i = 0; i < 5; i++) {
  if (numbers[i] === numbers[5]) {
    doesOrDoesNot = 'does';
  }
}

console.log('The number', numbers[5], doesOrDoesNot, 'appear in', numbers, '.');