// 1 // Identify the bug

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; 
myObject[a]; // This will return a reference error because a is not a valid string. In order for 
// bracket notation to access the value of a property, the property name (key) must be a string value.
// If it's a variable, JavaScript looks up the value, converting it to a string if necessary.
myObject.a;



// 2

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);
// Will it log fn fun since the functions are not called? (parentheses are not appended)

// Yes: function () {
  //   return 'Victor';
  // } function () {
  //   return 'Reyes';
  // }

// Referencing a method name without parentheses returns a string representation of the method 
// definition instead of calling the method.


// 3- What will the following code log and why?

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// logs array2


// 4 - what will be logged and why?

var myObject = {
  prop1: '123',
  prop2: '456',
  'prop 3': '345',
  '456': '678',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // 678 - prop2 resolves to the string '456' which is a key in the object
console.log(myObject.prop2); // 456


// 5 Array Object Part 1 - what will be logged and why?

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);  // 'a'
console.log(myArray[-1]); // 'undefined'

myArray[-1] = 'd';        
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);  // 'd'
console.log(myArray['e']); // '5'
console.log(myArray);      // ['a', 'b', 'c', empty, 'f', -1: 'd', e: 5]


// 6 Array Object Part 2 - 

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length; // Won't work - an array property with a key of anything
}                            // other than a non-negative integer is not counted as 
                             // part of the array's length

average(myArray);


// 7 - What's my bonus

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// the arguments object is an array-like object available inside of all functions that 
// can be accessed like an array and contains all arguments passed to the function when
// the function is called.


// 8 - The End is Near But Not Here

function penultimate(string) {
  return string.split(' ')[-2];
}

// This won't work because -2 is not a valid array index in JavaScript
// It can be amended to work like this, since we can assume that the input string will always
// contain at least two words:

function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

// 9 - After Midnight Part 1
// Re-implement this using JavaScript's Date object

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// Solution


var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// 10 - After Midnight Part 2

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0], 10);
  var minutes = parseInt(timeComponents[1], 10);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// Mine

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var MIDNIGHT = new Date('1/1/2000 00:00');

function getMinutesInTimeStr(timeStr) {
  var time = new Date('1/1/2000 ' + timeStr);
  var minutes = time.getMinutes();
  var hours = time.getHours();

  return minutes + (hours * MINUTES_PER_HOUR);
}

function beforeMidnight(timeStr) {
  var minutes = MINUTES_PER_DAY - getMinutesInTimeStr(timeStr);

  if (minutes === MINUTES_PER_DAY) {
    return 0;
  } else {
    return minutes;
  }
}

function afterMidnight(timeStr) {
  return getMinutesInTimeStr(timeStr);
}