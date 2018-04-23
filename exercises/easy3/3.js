var today = new Date('4/23/17 12:00:00');
var year = today.getFullYear();
var age;
var retirementAge;
var retirementYear;
var yearsLeft;

age = prompt('What is your age?');
retirementAge = prompt('What age would you like to retire?');

yearsLeft = retirementAge - age
retirementYear = year + yearsLeft;

console.log("It's", year, ". You'll retire in", retirementYear);
console.log('Only', yearsLeft, 'years of work to go!');