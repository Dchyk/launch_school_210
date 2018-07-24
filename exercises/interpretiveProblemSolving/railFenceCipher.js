// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .


// Encoding version -
// input: a string, and an integer (number of rails)
// output: a string

// data structure: an array of arrays
// 
// algorithm:
// - strip spaces from input string, and convert to uppercase
// - create an array containing integer (number of rails) of subarrays
// - initialize a counter "c" at 0 to track the current character 
// - initialize a counter "r" at 0 to track the current rail
// - at each step in a loop, 
//   - push the current character from the input string at position "c"
//     into the subarray at "r" (rail)
//   - push "." into position "c" in the other (integer - 1) subarrays
//   - - this step is technically unnecessary since 1) JavaScript allows empty slots in arrays,
//   - - and 2, since the last step is to remove all non-character values to concat the string in that array
//   - - back together, we could simply push the letters into each array in turn and not have to complete this step
//  - add 1 to "c"
//  - - if "r" is currently less than number of rails - 1, 
//  - -  then if "direction" is "down", add 1 to "r"
//  - -  else, "direction" must be "up", so subtract 1 from "r"
// - -  after this addtion, if "r" is equal to the number of rails - 1, set "direction" to "up"
// - -  else if "r" is equal to "0" (ie, the first rail), set direction to "down"

// Test cases
// "Hello World", 2 // HLOOLELWRD
// "Hello World", 3
// "Hello World", 4
// "Hello World", 5

// 2
// H.L.O.O.L.
// .E.L.W.R.D  // HLOOLELWRD

// 3
// H...O...L.
// .E.L.W.R.D
// ..L...O...  // HOLELWRDLO

// 4
// H.....O...
// .E...W.R..
// ..L.O...L.
// ...L.....D // HOEWRLOLLD

console.log(encodeMessage('Hello world'), 1) // HELLOWORLD
console.log(encodeMessage('Hello world'), 2) // HLOOLELWRD
console.log(encodeMessage('Hello world'), 3) // HELLOWORLD
console.log(encodeMessage('Hello world'), 4) // HOEWRLOLLD
console.log(encodeMessage('Hello world'), 10) // HELLOWORLD
console.log(encodeMessage('Hello world'), 11) // HELLOWORLD

// HELLOWORLD
// var c;
// var rails = [];

function encodeMessage(message, numberOfRails) {
  var message = message.replace(/[^A-Za-z]/g, '').split('').map(function(char) {
    return char.toUpperCase();
  }).join('');

  if (numberOfRails <= 1 || numberOfRails >= message.length) {
    return message; 
  }

  var rails = fence(numberOfRails);
  var direction = 'down'; // start with down (meaning, travel from 0, to 1, to 2 index of subarrays etc)
  var char = 0;
  var rail = 0;
  var highestRail = numberOfRails - 1; // The maximum index of a subarray
  var encodedMessage;

  while (char < message.length) {
    rails[rail].push(message[char]);

    char += 1;

    console.log('direction:', direction);
    console.log('char:', char);
    console.log('rail:', rail);
    console.log('rails:', rails)

    if (rail < highestRail && rail > 0) {
      if (direction === 'down') {
        rail += 1;
      } else {
        rail -=1;
      }
    } else if (rail === 0) {
      direction = 'down';
      rail += 1;
    } else if (rail === highestRail) {
      direction = 'up'
      rail -= 1;
    }

    
  }

  encodedMessage = rails.join('').replace(/,/g, '');

  return encodedMessage;
}


function fence(numberOfRails) {
  var fence = [];

  for (var i = 0; i < numberOfRails; i+= 1) {
    fence.push([]);
  }

  return fence;
}