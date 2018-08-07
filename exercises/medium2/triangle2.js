// A triangle is classified as follows:

//     Right: One angle is a right angle (exactly 90 degrees).
//     Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
// and every angle must be greater than 0. If either of these conditions is not satisfied, 
// the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, 
// and returns one of the following four strings representing the triangle's classification: 
// 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about 
// floating point errors. You may also assume that the arguments are in degrees.

// Rules
// - return 'invalid' if the sum of the 3 angles !== 180
// - return 'invalid' if any input === 0
// - otherwise, if 1 angle is === 90, return 'right'
// - if 1 angle is > 90, return 'obtuse'
// - else, return 'acute'

// Algorithm
// - Check if zero is present in the input numbers and return 'invalid' if it is
// - Otherwise, reduce the input numbers together, and return 'invalid' if the result is > 180
// - If not, check if any number is === 90 and return 'right' if true
// - Then check if any number is > 90 and return 'obtuse' if true 
// - At this point, if nothing has returned true, the triangle must be 'acute' so return 'acute'

// Examples

function triangle(...angles) {
  if (angles.some(isZero) || angles.reduce(sum) !== 180) {
    return 'invalid';
  } else if (angles.some(isNinetyDegrees)) {
    return 'right';
  } else if (angles.some(isGreaterThanNinety)) {
    return 'obtuse'
  } else {
    return 'acute';
  }
}

function isZero(angle) {
  return angle === 0;
}

function sum(acc, angle) {
  return acc + angle;
}

function isNinetyDegrees(angle) {
  return angle === 90;
}

function isGreaterThanNinety(angle) {
  return angle > 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(55, 80, 45));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(90, 10, 80));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(150, 20, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(90, 87, 2));        // "invalid"
