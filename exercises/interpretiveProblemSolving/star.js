// Write a function that displays an 8-pointed star in an n x n grid, where n is an odd integer 
// that is supplied as an argument to the function. 
// The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// input - an odd integer >= 7
// output - n lines of text 

// Rules & Mental model
// - There will always be n lines of stars.
// - All lines will have 3 stars, except the "middle line". 
//    If the lines are an array of rows with n rows,
//    we can find the middle index using rows[Math.floor(n / 2)]. 
// - Only the first, middle, and last row strings begin with a star. 
//   All other row strings begin with a space. 
// - As the rows get farther from the center row, the space between 
//   the stars increases by 1. 
//   - The first row before and after the center have 0 spaces between stars. 
//   - The second row before and after the center have 1 space.
//   - The third has 2 spaces, etc.
// - Looking at the row strings, the element at index Math.floor(n / 2) 
//   is always filled with a star
//   in every row (this "middle" value is always the same).
// - The top row and bottom row's distance from the center row will also always 
//   equal to Math.floor(n / 2)

// Algorithm
// - create an array with n number of spaces to hold the "rows"
// - determine the middle row using the result of Math.floor(n / 2), and initialize 
//  a variable distanceFromMiddle
//   set to this same value, since we'll start at the maximum distance from the middle row
// - initialize a variable reachedMiddle to false, to keep track of what row we're on
// - loop n number of times, checking the value of distanceFromMiddle on each iteration
// - - If distanceFromMiddle = 0, we are at the middle, so push a string of n '*'s into 
//     the rows array, and then
// - - set reachedMiddle = true
// - - Otherwise, create a new 'row' array with n number of elements, with elements 
//     initialized to an empty space ' ',
// - - and in each row array, insert 3 stars at these indices:
// - - the [middle], [middle - distanceFromMiddle], [middle + distanceFromMiddle]
// - finally, join the current row, and push it into the "rows" array
// - Check if reachedMiddle is true; if it is then increment distanceFromMiddle by 1; 
//   if not, decrement it by 1
// - After we've looped n times, return the rows array joined by newline delimiters

function star(n) {
  var rows = [...Array(n)].fill([]);
  var middle = Math.floor(n / 2);
  var distanceFromMiddle = middle;
  var reachedMiddle = false; 

  for (var i = 0; i < n; i++) {
    var row = [...Array(n)].fill(' ');

    if (distanceFromMiddle === 0) {
      rows.push(starsString(n));
      reachedMiddle = true;
    } else {
      row[middle] = '*';
      row[middle  - distanceFromMiddle] = '*';
      row[middle + distanceFromMiddle] = '*';
      rows.push(row.join(''));
    }

    if (reachedMiddle) {
      distanceFromMiddle += 1;
    } else {
      distanceFromMiddle -= 1;
    }
  }

  return rows.join(\n);
}

function starsString(n) {
  var stars = '';

  for (var i = 0; i < n; i++) {
    stars += '*';
  }

  return stars;
}


Examples:

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11);
// logs
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *