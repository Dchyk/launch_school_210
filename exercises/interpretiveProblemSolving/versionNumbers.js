// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and compares them, 
// with the result of this comparison showing whether the first is less than, equal to, 
// or greater than the second version:

//     If version1 > version2, we should return 1.
//     If version1 < version2, we should return -1.
//     If version1 === version2, we should return 0.
//     If either version number contains characters other than digits and the . character, we should return null.

// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// Test cases
// 1.0, 1.1 => -1
// 1.1, 1.0 => 1
// 1.1.1, 1.1 => 1
// 2.1.1, 2.1.2 => -1
// 1, 2 => -1
// 1, 1 => 0
// 2, 1 => 1
// 1.1.23.3, 1.2.23.3 => -1
// 1.2.23.3, 1.1.23.3 => 1
// 1.2.23.0, 1.2.23   => 0
// 1.2.z, 1.2         => null
// abc, edf           => null
// 1.2.3.4, 4.3.2.t   => null

// input  - string: two version numbers in the form of strings separated by points
// output - a number: 1, -1 or 0 (or null for invalid inputs)
//
// input validation: if either input contains a character other than digits or '.', return null 
// - Regex, guard clause
// 
// algorithm 
// - return null if either input is invalid, then
// - split the input string at the '.' 
// - map the resulting array to integers, and reduce it together to get the sum
// - if the sum ov v1 > v2, return 1
// - else if the sum of v1 < v2, return -1
// - else return 0;
//
// One way to put this into plain English is to say - start with the first number from each version to the left of 
// the first decimal point. Compare those two numbers. If one is greater, you can return a value right away. 
// If they are the same, move to the next number. Keep moving until you run out of numbers. If one version number
// includes zeros and the other does not, you can ignore it. 
// 
// Another way is to note that if we treat the numbers not as decimals, but as increasing version numbers in each 
// slot, then merely adding them all together will give us a "total" version number we can compare to another
// "total" version number to get the return value

function compareVersions(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) {
    return null;
  }

  var version1Total = total(version1);
  var version2Total = total(version2);

  if (version1Total > version2Total) {
    return 1;
  } else if (version1Total < version2Total) {
    return -1;
  } else {
    return 0;
  }
}

function invalidVersion(version) {
  return version.match(/[^0-9.]/);
}

function total(version) {
  return version.split('.').map(function(strNum) {
    return parseInt(strNum, 10);
  }).reduce(function(a, b) {
    return a + b
  });
}