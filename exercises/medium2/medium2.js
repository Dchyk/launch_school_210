var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// refactored

var person = { name: 'Victor' };
var otherPerson = person;


// 3 - Amount payable

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // logs 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // logs 45

// the return value changes because the value of startingBalance changes - it's 
// part of the closure created when the totalPayable function is defined

// demonstratr

var scopeTest = function(string1) {
  return string2 + ' ' + string1; // Creates a new global variable string2 and sets it to undefined
}

scopeTest("world");


// 4 - Caller

function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

doubler(5, 'Victor');  

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}