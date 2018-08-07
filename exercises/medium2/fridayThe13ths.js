// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. 
// You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
// You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

// input: a year number
// output: a number

// Algorithm
// - iterate over the months of the year from January to December, 
//   creating a new Date object for the 13th of each month
// - getDay() from each Date object, and if it is a Friday (a 5),
//   add it to the count of Friday the 13ths
//   Return the count

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  var count = 0;

  MONTHS.forEach(function(month) {
    var dateString = month + ' 13, ' + year + ' 00:00:00';
    var thirteenthDay = new Date(dateString);

    if (thirteenthDay.getDay() === 5) {
      count += 1;
    }
  });

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2