// Write a function that displays a four-pointed diamond in an nxn grid, 
// where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

// Input: an odd integer 
// Output: a row of strings logged to the console

// Given an odd integer, rows of strings. 
// The first row of strings should have a single star, and each successive row
// should have two more stars than the previous row, until the input integer is reached,
// and that row should have the number of stars indicated by the input integer. 
// Then the succeeding rows after that should count down by two stars each, until the final 
// row that is printed has only 1 star again. 
// Each row can be represented by a string containing X number of whitespaces, where X is 
// equal to the number of the current row in a sequence starting at 1 and incremented by 2 (so that the number of stars
// is always odd), subtracted from the input integer. Half this number of 
// white spaces should preceed the star or stars, and other half should follow it in the output string.
// So for an input of 7, the first row would be composed like this.
// The "counter" starts at 1, and indicates the number of stars in a current row. So we have:
// (7 - 1) / 2 = 3, so 3 white spaces, followed by 1 star because it's the first row, and then 3 more white spaces.
// Then the "counter" is incremented by 2, so we have:
// (7 - 3) / 2 = 2, so 2 white spaces, 3 stars 2 white spaces.
// (7 - 5) / 2 = 1, so 1 white space, 5 stars, 1 white space.
// At this point the counter is equal to the input, so we print the input number of stars, then start subtracting by two 
// from the counter to get the bottom of the diamnond: 
// (7 - 5) / 2 = 1, so 1 white space, 5 stars, 1 white space.
// (7 - 3) / 2 = 2, so 2 white spaces, 3 stars 2 white spaces.
// (7 - 1) / 2 = 3, so 3 white spaces, 1 star, and 3 white spaces.

// This description makes it clear that the number of white spaces is always the same on both sides, and it increases by 2 whenever
// the number of stars is decreasing by 2, and vice versa. Therefore we only need 1 variable for white space and 1 for stars and we 
// really only need to print the white space on the left side of the stars in each row. It's also notable
// that the number of rows will always be equal to the input integer

// Data structure: We could use an array to hold the resulting set of strings, and output each element as a row. 

// Algorithm:
// 1 - create an empty array to hold the result strings. Push in integerInput number of empty arrays to hold them.
// 2 - initialize a counter variable at the value 1
// 3 - initialize a whitespace variable at the value of inputInteger - 1
// 4 - create a while loop that will iterate while counter <= inputInteger, and for each iteration of the loop, 
//     push whitespace number of whitespace characters followed by counter number of stars into the array, 
//     and then increments counter by 2 and decrements whitespace by 2 until counter === inputArray.
// 4.a This may require a sub-loop that for whitespace number of times pushes a whitespace character into the sub-array at the current
//     index, then pushes counter number of stars in.
// 5 - Create a second while loop that iterates in the same way, but decrements counter by 2 and increments whitespace by 2 on each iteration,
//     stopping when counter === 1;
// 5 - iterate over the resulting array, join()ing each sub-array and logging it to the console

function diamond(rows) {
  var computedRows = [];
  var stars;
  var whitespace = (rows - 1) / 2;
  var i;
  var currentIndex = 0;

  for (i = 1; i <= rows; i += 1) {
    computedRows.push([]);
  }

  for (stars = 1; stars <= rows; stars += 2) {
    for (i = 1; i <= whitespace; i+= 1) {
      computedRows[currentIndex].push(' ');
    }
    
    for (i = 1; i <= stars; i += 1) {
      computedRows[currentIndex].push('*');
    }

    whitespace -= 1;
    currentIndex += 1;
  }

  whitespace = 1;

  for (stars = rows - 2; stars >= 1; stars -= 2) {

    for (i = 1; i <= whitespace; i+= 1) {
      computedRows[currentIndex].push(' ');
    }
    
    for (i = 1; i <= stars; i += 1) {
      computedRows[currentIndex].push('*');
    }

    whitespace += 1;
    currentIndex += 1;
  }

  computedRows.forEach(function(row) {
    console.log(row.join(''));
  });
}